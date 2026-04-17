const PREFIX = "weather_";

export function setCache(key, data, ttl) {
    const item = {
        data,
        expiry: Date.now() + ttl
    };
    localStorage.setItem(PREFIX + key, JSON.stringify(item));
}

export function getCache(key) {
    const itemStr = localStorage.getItem(PREFIX + key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);

    if (Date.now() > item.expiry) {
        localStorage.removeItem(PREFIX + key);
        return null;
    }

    return item.data;
}