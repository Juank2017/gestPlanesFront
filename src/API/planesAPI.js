import axios from "axios";


export const planesAPI = axios.create({
  baseURL: "http://localhost:9092",
});

// Add a request interceptor
planesAPI.interceptors.request.use(
  (config) => {

    if (config.url === "/refreshtoken") {

      config.headers.Authorization = undefined;
      config.headers["Content-Type"] = "application/json";
    } else {

      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);



// Add a response interceptor
planesAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;


    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {

        const refreshToken = window.localStorage.getItem("refreshToken");


        const response = await planesAPI.post("/refreshtoken", { refreshToken },
          {
            headers: { Authorization: '' },
          },
        );
        const { token } = response.data;

        localStorage.setItem("token", token);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${token}`;


        return axios(originalRequest);
      } catch (error) {




        localStorage.clear();
        window.location.replace("http://localhost:5173/login");
      }
    }

    return Promise.reject(error);
  }
);
