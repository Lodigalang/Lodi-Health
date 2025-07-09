import axios from "axios";
const axiosNews = axios.create({
  baseURL: import.meta.env.DEV ? "https://newsapi.org/v2" : "/api", // ✅ saat production, gunakan backend sendiri
  headers: {
    "Content-Type": "application/json",
  },
});
const axiosMock = axios.create({
  baseURL: "https://686d38e4c9090c495385a8ac.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosNews, axiosMock };
