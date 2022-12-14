import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobster-production.up.railway.app",
  headers: {
    "Access-Control-Allow-Origin": "https://jobster-production.up.railway.app/",
    "Content-Type": "application/json",
  },
});

export default customFetch;
