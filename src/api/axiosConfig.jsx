import axios from "axios";

export default axios.create({
  // use localhost:8080 instead of ngrok link.
  baseURL: "http://localhost:8080/",
});
