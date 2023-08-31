import type { WeatherResponseType } from "./types";
import axios from "axios";
export const getWeatherData = async (
  latitude: number,
  longitude: number
): Promise<WeatherResponseType> => {
  const data = (
    await axios.get("https://api.openweathermap.org/data/2.5/onecall", {
    params: {
        lon: longitude,
        lat: latitude,
        appid: "59eb64ab7d871fd4a6966b69582ef323",
        units: "metric",
      },
    })
  ).data;

  const geoLocation = await getLocationName(latitude, longitude);
  return { ...data, name: geoLocation };
};

const getLocationName = async (latitude: number, longitude: number) => {
  const data = (
    await axios.get("https://api.openweathermap.org/geo/1.0/reverse", {
    params: {
        lon: longitude,
        lat: latitude,
        limit: 1,
        appid: "59eb64ab7d871fd4a6966b69582ef323",
      },
    })
  ).data;

  return data[0]?.name || "";
};
