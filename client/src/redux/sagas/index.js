import { all } from "redux-saga/effects";
import SlackSaga from "./slack";
import AuthSaga from "./auth";
export default function* rootSaga() {
    yield all([SlackSaga(),AuthSaga()]);
}