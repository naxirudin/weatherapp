
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherData {
  id: number;
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
  };
  weather: [{
    description: string;
  }];
}

interface WeatherState {
  favoriteCity: WeatherData | null;
  cityWeather: WeatherData | null;
}

const initialState: WeatherState = {
  favoriteCity: null,
  cityWeather: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setFavoriteCity: (state, action: PayloadAction<WeatherData>) => {
      state.favoriteCity = action.payload;
    },
    setCityWeather: (state, action: PayloadAction<WeatherData | null>) => {
      state.cityWeather = action.payload;
    },
    clearCityWeather: (state) => {
      state.cityWeather = null;
    },
  },
});

export const { setFavoriteCity, setCityWeather, clearCityWeather } = weatherSlice.actions;

export default weatherSlice.reducer;

