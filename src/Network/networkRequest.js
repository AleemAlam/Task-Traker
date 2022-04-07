import axios from "axios";

const baseURL = "https://my-json-server.typicode.com/karthick03/json-db-data";
// const baseURL = "http://localhost:5000";

export const getTask = async () => {
  return await axios.get(`${baseURL}/tasks`);
};
export const addTask = async (data) => {
  return await axios.post(`${baseURL}/tasks`, { data });
};
export const deleteTask = async (id) => {
  return await axios.delete(`${baseURL}/tasks/${id}`);
};
