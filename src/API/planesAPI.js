import axios from "axios";

export const planesAPI = axios.create({
  baseURL: "http://localhost:9092",
});
function storageAvailable(type) {
  try {
    var storage = window[type],
      x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
    );
  }
}
// Add a request interceptor
planesAPI.interceptors.request.use(
  (config) => {
    console.log(config.url);
    if (config.url === "/refreshtoken") {
      console.log('if')
      console.log(config.headers)
      config.headers.Authorization = undefined;
      config.headers["Content-Type"]= "application/json";
    } else {
      console.log('else')
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

console.log(sessionStorage.getItem("refreshToken"));

// Add a response interceptor
planesAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest);
    //console.log(error)

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        console.log("try")
        const refreshToken = window.localStorage.getItem("refreshToken");
        // "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5OTM5NzI4NywiZXhwIjoxNjk5Mzk4NzI3fQ.hVZ8IucJCmNmat6tRgsfTv-a5j5i3muEewssdxhcx4EIgllf5zFaPk8vUGn4dmVT4VhlLKP7Tau18VlxiMAiGw1"

        const response = await planesAPI.post("/refreshtoken", {refreshToken}       ,
           { headers: { Authorization: '' },
          },
        );
        const { token } = response.data;
        console.log(token);
        localStorage.setItem("token", token);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        console.log(originalRequest);

        // return axios(originalRequest);
      } catch (error) {
        console.log('catch')
        // Handle refresh token error or redirect to login
        console.log(error);
      }
    }

    return Promise.reject(error);
  }
);
