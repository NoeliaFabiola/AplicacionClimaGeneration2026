export function saveSearch(city) {
    let searches = JSON.parse(localStorage.getItem("searches")) || [];

    if (!searches.includes(city)) {
        searches.unshift(city);
    }

    searches = searches.slice(0, 5);

    localStorage.setItem("searches", JSON.stringify(searches));
}

export function getSearches() {
    return JSON.parse(localStorage.getItem("searches")) || [];
}