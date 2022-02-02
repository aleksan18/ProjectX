import { takeLatest,take, call, put } from "redux-saga/effects";
//import history from "../../history";
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/organisation";

import { setOrg } from "../actions/organisation";
import { ORG_UNSET } from "../constants/organisation";

import {
  loginApi,
  getLocalAuthToken,
  setAuthToken,
  removeAuthToken,
  refreshUser
} from "../../services/auth.service";

const expirationTime = 60 * 60 * 1000;

function logout() {
  removeAuthToken();
}

function* loginFlow(credentials) {
  let payload;
  try {
    payload = yield call(loginApi, credentials.email, credentials.password);
    const exp = new Date().valueOf() + expirationTime;
    console.log(payload);
    yield put(setOrg(payload.token,exp, payload.id,payload.organisationName,payload.userList,payload.email,payload.username,payload.totalPayment,payload.totalUsers,payload.Google,payload.Slack));
    yield put({
      type: LOGIN_SUCCESS,
    });

    setAuthToken({
      id: payload.id,
      token: payload.token,
      exp: exp,
    });

    // history.push("/projects");
  } catch (error) {
    console.log(error);
    yield put({
      type: LOGIN_FAILURE,
      message: {
        text: error.message,
        severity: "error",
      },
      errors: error.errors,
    });
  }
  return payload;
}

function* loginWatcher() {
  let token = yield call(getLocalAuthToken);
  while (true) {
    if (!token) {
      while (!token) {
        const { payload } = yield take(LOGIN_REQUESTING);
        yield call(loginFlow, payload);
        token = yield call(getLocalAuthToken);
      }
    } else if (token.exp < Date.now().valueOf()) {
      removeAuthToken();
      yield put({
        type: LOGIN_FAILURE,
        message: {
          text: "Session expired. Please login again",
          severity: "error",
        },
      });
      const { payload } = yield take(LOGIN_REQUESTING);
      yield call(loginFlow, payload);
    } else {
      const { payload } = yield take(LOGIN_REQUESTING);
      yield call(loginFlow, payload);
      //yield put(setOrg(token.token,token.exp,token.id));
      //yield put(setOrg(payload.token,payload.exp, payload.id,payload.organisationName,payload.userList,payload.email,payload.username));
      yield put({ type: LOGIN_SUCCESS });
    }
    yield take(ORG_UNSET);
    token = null;
    yield call(logout);
  }
}

export default loginWatcher;
