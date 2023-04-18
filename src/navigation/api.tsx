import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 30000,
  headers: {
		accept: "application/json",
		"Content-Type": "application/json",
	},
});

// api.interceptors.request.use(async config => {
//   const token = localStorage.getItem('authToken');

//   if (token) {
//     api.defaults.headers.authorization = `Bearer ${token}`;
//   } else {

//   }

//   return config;
// });

export default api;