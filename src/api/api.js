import * as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "acb61c3d-96a4-4175-96f8-762ea93278b4",
  },
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};
