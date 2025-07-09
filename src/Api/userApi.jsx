import { axiosMock } from "./axiosInstance";

function getUsers() {
  return axiosMock.get("/user").then((res) => res.data);
}

function getUserByEmail(email) {
  return axiosMock.get(`/user?email=${email}`).then((res) => res.data[0]);
}

function getUserByName(nama) {
  return axiosMock.get(`/user?nama=${nama}`).then((res) => res.data);
}

function createUser(user) {
  return axiosMock.post("/user", user).then((res) => res.data);
}

function updateUser(id, updatedData) {
  return axiosMock.put(`/user/${id}`, updatedData).then((res) => res.data);
}

export { getUsers, getUserByEmail, getUserByName, createUser, updateUser };
