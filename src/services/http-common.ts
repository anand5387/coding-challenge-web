import axios from "axios";

export default axios.create({
  //External URL
  baseURL: "https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2",
  headers: {
    "Content-type": "application/json"
  }
});