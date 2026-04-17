const container = document.getElementById("weatherResult");
const autocompleteContainer = document.getElementById("autocomplete");

let map;
let marker;

/* 🎨 UI helpers */
function getBg(temp) {
    if (temp < 10) return "cold";
    if (temp < 25) return "mild";
    return "hot";
}

function getIcon(temp) {
    if (temp < 10) return "❄️";
    if (temp < 25) return "🌤️";
    return "🔥";
}

/* 🌤️ Render principal */
export function renderWeather(data) {
    document.body.className = getBg(data.temperature);

    container.innerHTML = `
        <div class="weather-card">
            <h2>${data.city}</h2>
            <div class="temp">${getIcon(data.temperature)} ${data.temperature}°C</div>
            <div class="details">💨 ${data.windspeed} km/h</div>
            ${data.fromCache ? '<div class="cache">⚡ Datos guardados</div>' : ''}
        </div>
    `;

    // 🗺️ IMPORTANTE: vuelve a llamar el mapa
    renderMap(data.latitude, data.longitude);
}

/* 🗺️ Mapa */
function renderMap(lat, lon) {
    if (!map) {
        map = L.map("map").setView([lat, lon], 10);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap"
        }).addTo(map);
    }

    if (marker) {
        marker.setLatLng([lat, lon]);
    } else {
        marker = L.marker([lat, lon]).addTo(map);
    }

    map.setView([lat, lon], 10);
}

/* 🔍 Autocomplete */
export function renderAutocomplete(results, onSelect) {
    autocompleteContainer.innerHTML = results.map(r =>
        `<div class="autocomplete-item">${r.name}, ${r.country}</div>`
    ).join("");

    document.querySelectorAll(".autocomplete-item").forEach(el => {
        el.addEventListener("click", () => onSelect(el.textContent));
    });
}

export function clearAutocomplete() {
    autocompleteContainer.innerHTML = "";
}

/* ❌ Error */
export function renderError(msg) {
    container.innerHTML = `<p class="error">${msg}</p>`;
}