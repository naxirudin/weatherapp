import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import HomeScreen from '../src/screens/HomeScreen';
import configureStore from 'redux-mock-store';
import theme from '../src/theme/themeConfig';
import { ThemeProvider } from '@shopify/restyle';

jest.mock('../src/services/weatherApi', () => ({
    useGetCityWeatherQuery: jest.fn(() => ({ data: null, error: null })),
}));

const mockStore = configureStore([]);

describe('HomeScreen', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            weather: {
                favoriteCity: 'SampleCity',
                cityWeather: null,
            },
        });
    });

    it('renders correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <HomeScreen navigation={{ navigate: jest.fn() }} />
                </ThemeProvider>
            </Provider>
        );
    });
});
