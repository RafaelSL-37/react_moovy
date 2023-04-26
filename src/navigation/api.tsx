import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 30000,
  headers: {
		accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default api;