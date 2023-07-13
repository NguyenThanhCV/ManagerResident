import axios from "axios";

const URL = "https://quanlycudan.azurewebsites.net/api";
const loginService = (user) => axios.post(`${URL}/Users/authenticate`, user);

export { loginService };
