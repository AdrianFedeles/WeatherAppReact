export function loadWeatherData(data) {
    return {
        type: 'SAGA_WEATHER_LOAD',
        data,
    };
}
