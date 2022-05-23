import axios from "axios";

const api = axios.create({
  baseURL: "",
  headers: {
    "Content-type": "application/json",
    accept: "*/*",
  },
});

const getToken = () => {
  const serializedState = localStorage.getItem("store");
  if (serializedState === null) {
    return "";
  } else {
    const stateData = JSON.parse(serializedState);
    if (stateData.user !== undefined) {
      return stateData.user.token;
    } else {
      return "";
    }
  }
};

const token = getToken();

api.interceptors.request.use(
  async (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
