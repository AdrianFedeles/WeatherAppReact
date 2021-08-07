import { put, call } from 'redux-saga/effects';
import { takeLatest } from '@redux-saga/core/effects';
import { generateForecastUrl } from '../../utils/Constants';

const fetchData = city => fetch(generateForecastUrl(city));

export function* loadWeatherData(action) {
    console.log('ACTION DATA', action.data);
    const response = yield call(fetchData, action.data);
    console.log(response);
    let res = null;
    yield response.json().then(val => (res = val));
    console.log(res);
    const forecastInfo = res.forecast.forecastday.map(item => {
        return {
            info: {
                date: item.date,
                icon: item.day.condition.icon,
                maxC: item.day.maxtemp_c,
                minC: item.day.mintemp_c,
                status: item.day.condition.text,
            },
        };
    });

    const generalInfo = {
        generalCity: res.location.name,
        generalCountry: res.location.country,
        generalIcon: res.current.condition.icon,
        generalTemperature: res.current.temp_c,
        generalStatus: res.current.condition.text,
        generalDataUpdate: res.current.last_updated,
        generalFeelsLike: res.current.feelslike_c,
        generalWind: res.current.wind_kph,
        generalVisibility: res.current.vis_km,
        generalBarometer: res.current.pressure_mb,
        generalHumidity: res.current.humidity,
        generalDewPoint: 4,
    };

    yield put({ type: 'REDUX_GENERAL_INFO_SET', data: generalInfo });
    yield put({ type: 'REDUX_FORECAST_INFO_SET', data: forecastInfo });
    yield put({ type: 'REDUX_WEATHER_SET', data: res });
}

export function* watchLoadWeatherData() {
    yield takeLatest('SAGA_WEATHER_LOAD', loadWeatherData);
}
