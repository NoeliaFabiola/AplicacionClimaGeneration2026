import { getWeatherByCity, searchCities } from "./api/weatherService.js";
import { renderWeather, renderAutocomplete, clearAutocomplete, renderError } from "./ui/render.js";

const input = document.getElementById("cityInput");
const button = document.getElementById("searchBtn");

async function search(city) {
    try {
        const data = await getWeatherByCity(city);
        renderWeather(data);
    } catch (e) {
        renderError(e.message);
    }
}

button.addEventListener("click", () => search(input.value));

input.addEventListener("input", async () => {
    const query = input.value;

    if (query.length < 2) {
        clearAutocomplete();
        return;
    }

    const results = await searchCities(query);
    renderAutocomplete(results, (city) => {
        input.value = city;
        clearAutocomplete();
        search(city);
    });
});