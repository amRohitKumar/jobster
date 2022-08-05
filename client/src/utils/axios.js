import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://rocky-oasis-62410.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "https://rocky-oasis-62410.herokuapp.com",
    "Content-Type": "application/json",
  },
});

export default customFetch;
