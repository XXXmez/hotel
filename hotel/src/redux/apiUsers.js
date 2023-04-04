import axios from "axios";

const URL_API = "https://642a8bc0b11efeb7599bd58a.mockapi.io/users";

const instance = axios.create({
  baseURL: URL_API,
  timeout: 10000,
});

export const fetchTodosApi = async (login) => {
  const data = await instance.get(`/${login}`);
  return data.data;
};
