import type { WeatherResponseType } from "../utils/types";
import { getWeatherData } from "../utils/api";
import { writable } from "svelte/store";

const SHENZHEN_LOCATION = {
  latitude: 22.5429,
  longitude: 114.0630,
};

export const location = writable({
  latitude: Number(localStorage.getItem("latitude")) || SHENZHEN_LOCATION.latitude,
  longitude:
    Number(localStorage.getItem("longitude")) || SHENZHEN_LOCATION.longitude,
});

export const data = writable<WeatherResponseType>();

export const useFahrenheit = writable(
  Boolean(localStorage.getItem("useFahrenheit"))
);

export const isError = writable(false);

location.subscribe(async (newLocation) => {
  localStorage.setItem("latitude", String(newLocation.latitude));
  localStorage.setItem("longitude", String(newLocation.longitude));

  try {
    const weatherData = await getWeatherData(
      newLocation.latitude,
      newLocation.longitude
    );

    data.set(weatherData);
  } catch (error) {
    console.log(error);

    isError.set(true);
  }
});

useFahrenheit.subscribe((newValue) => {
  localStorage.setItem("useFahrenheit", newValue ? "1" : "");
});
