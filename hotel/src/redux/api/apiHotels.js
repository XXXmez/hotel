import axios from "axios";

const URL_API = "https://engine.hotellook.com/api/v2/cache.json";

export const fetchHotelsAPI = async (city, start, end) => {
  try {
    const data = await axios.get(
      `${URL_API}?location=${city}&currency=rub&checkIn=${start}&checkOut=${end}&limit=10`
    );
    return { data: data.data, isError: false, error: "" };
  } catch (error) {
    console.log("error: ", error);
    return { isError: true };
  }
};
