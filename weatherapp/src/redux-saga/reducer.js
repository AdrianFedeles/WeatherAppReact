const initial_state = {
    weather_data: null,
    general_info: null,
    forecast_info: null,
};

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'REDUX_WEATHER_SET':
            return { ...state, weather_data: action.data };
        case 'REDUX_GENERAL_INFO_SET':
            return { ...state, general_info: action.data };
        case 'REDUX_FORECAST_INFO_SET':
            return { ...state, forecast_info: action.data };

        default:
            return state;
    }
};

export default reducer;
