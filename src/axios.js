// axios
import axios from "axios";

var baseURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000/api"
    : "https://yourself-first.herokuapp.com/api";

export default axios.create({
  baseURL: baseURL
  // You can add your headers here
});
