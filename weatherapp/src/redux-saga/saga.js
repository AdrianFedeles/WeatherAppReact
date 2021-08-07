import { all } from 'redux-saga/effects';
import { watchLoadWeatherData } from './sagas/loadWeatherData';

function* saga() {
    yield all([watchLoadWeatherData()]);
}

export default saga;
