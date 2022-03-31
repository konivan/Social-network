import * as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "9b7b30ac-4180-4167-9175-88c831e30e93",
  },
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};
