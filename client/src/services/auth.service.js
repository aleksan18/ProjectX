import axios from "axios";

const storageName = "userData";
const loginUrl = "/api/organisation/login";
const refreshUrl = "/api/auth/refreshUser";
const registerUrl = "/api/auth/register";
const updateUserUrl = "/api/auth/updateUser";
const confirmationUrl = "/api/auth/confirmation";
export const loginApi = (email, password) => {
    console.log(email);
    console.log(password);
  return axios
    .post(loginUrl, { email, password })
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const registerApi = (email,username,password,confirmPassword,firstName,lastName,phone,address) =>{
  return axios.post(registerUrl,{email,username,password,confirmPassword,firstName,lastName,phone,address}).then((response)=>response.data).catch((error)=>{
    throw error.response.data;
  })
};
export const getEmailConfirmation = (hash)=>{
  return axios.post(confirmationUrl,{hash}).then(response=>response.data).catch((error)=>{
    throw error.response.data;
  });
}
export const getLocalAuthToken = () =>
  JSON.parse(localStorage.getItem(storageName));

export const setAuthToken = (token) => {
  localStorage.setItem(storageName, JSON.stringify(token));
};

export const removeAuthToken = () => {
  localStorage.removeItem(storageName);
};