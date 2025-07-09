import axios from "axios";

const axiosNews = axios.create({
  baseURL: "https://newsapi.org/v2/",
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
