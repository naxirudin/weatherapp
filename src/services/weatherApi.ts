import { API_BASE_URL } from '@env';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getSecretValue from './fetchApiKey';

let apiKey: string;

const fetchApiKey = async () => {
  try {
    apiKey = await getSecretValue();
  } catch (error) {
    console.error('Error fetching API key:', error);
  }
};

fetchApiKey();

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      if (apiKey) {
        headers.set('Authorization', `Bearer ${apiKey}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCityWeather: builder.query<any, string>({
      query: (city) => `weather?q=${city}&appid=${apiKey}&units=metric`,
    }),
  }),
});

export const { useGetCityWeatherQuery } = weatherApi;
