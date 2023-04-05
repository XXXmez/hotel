import axios from "axios";

const URL_API = "https://engine.hotellook.com/api/v2/cache.json?";

const instance = axios.create({
  baseURL: URL_API,
  timeout: 10000,
});

export const fetchHotelsAPI = async (city, start, end) => {
  const data = await instance.get(
    `location=${city}&currency=rub&checkIn=${start}&checkOut=${end}&limit=10`
  );
  return data.data;
};
