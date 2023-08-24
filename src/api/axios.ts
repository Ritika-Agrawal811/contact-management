import axios from "axios";

const client = axios.create({
  baseURL: "https://disease.sh/v3/covid-19/",
});

export default client;
