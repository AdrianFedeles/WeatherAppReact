export const API_KEY: string = "b8898a054cae411ba5e70315213001";
export const generateForecastUrl = (city: string) => {
    return `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
}
