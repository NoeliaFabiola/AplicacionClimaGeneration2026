import { getCache, setCache } from "../utils/cache.js";

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

const TTL = 10 * 60 * 1000;

export async function searchCities(query) {
    const res = await fetch(`${GEO_URL}?name=${query}&count=5`);
    const data = await res.json();
    return data.results || [];
}

export async function getWeatherByCity(city) {
    const key = city.toLowerCase();

    const cached = getCache(key);
    if (cached) return cached;

    const geo = await fetch(`${GEO_URL}?name=${city}&count=1`);
    const geoData = await geo.json();

    if (!geoData.results) throw new Error("Ciudad no encontrada");

    const loc = geoData.results[0];

    const res = await fetch(
        `${WEATHER_URL}?latitude=${loc.latitude}&longitude=${loc.longitude}&current_weather=true`
    );

    const data = await res.json();

    const result = {
        city: `${loc.name}, ${loc.country}`,
        latitude: loc.latitude,
        longitude: loc.longitude,
        temperature: data.current_weather.temperature,
        windspeed: data.current_weather.windspeed
    };

    setCache(key, result, TTL);

    return result;
}