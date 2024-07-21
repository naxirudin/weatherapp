import { RootState } from './store';

export const selectFavoriteCity = (state: RootState) => state.weather.favoriteCity;
export const selectCityWeather = (state: RootState) => state.weather.cityWeather;
