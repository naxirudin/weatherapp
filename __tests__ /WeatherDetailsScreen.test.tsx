import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import WeatherDetailsScreen from '../src/screens/WeatherDetailsScreen';
import { ThemeProvider } from '@shopify/restyle';
import theme from '../src/theme/themeConfig';

const mockStore = configureStore([]);

describe('WeatherDetailsScreen', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      weather: {
        cityWeather: {
          id: 1,
          name: 'Test City',
          sys: { country: 'TC' },
          main: { temp: 25 },
          weather: [{ description: 'clear sky' }],
        },
      },
    });
    store.dispatch = jest.fn();
  });

  it('should display weather information correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <WeatherDetailsScreen />
        </ThemeProvider>

      </Provider>
    );

    expect(getByText('Test City, TC')).toBeTruthy();
    expect(getByText('Temperature: 25°C')).toBeTruthy();
    expect(getByText('Description: clear sky')).toBeTruthy();
  });

  it('should show no weather data message when cityWeather is null', () => {
    store = mockStore({
      weather: {
        cityWeather: null,
      },
    });

    const { getByText } = render(

      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <WeatherDetailsScreen />
        </ThemeProvider>
      </Provider>
    );

    expect(getByText('No weather data available.')).toBeTruthy();
  });
});
