import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@shopify/restyle';
import store, { persistor } from './src/store/store';
import { SCREEN_NAMES } from './src/utils/constant';
import theme from './src/theme/themeConfig';
import { RootStackParamList } from './src/navigation/navigationTypes';
import BootSplash from 'react-native-bootsplash';
import {
  ErrorBoundary,
} from './src/components';
import HomeScreen from './src/screens/HomeScreen';
import WeatherDetailsScreen from './src/screens/WeatherDetailsScreen';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
            <Stack.Navigator initialRouteName={SCREEN_NAMES.HOME}>
              <Stack.Screen
                name={SCREEN_NAMES.HOME}
                component={HomeScreen}
                options={{
                  title: 'Weather App',
                  headerStyle: { backgroundColor: theme.colors.primary },
                  headerTintColor: theme.colors.white,
                  headerTitleStyle: { fontWeight: 'bold' },
                }}
              />
              <Stack.Screen
                name={SCREEN_NAMES.WEATHER_DETAILS}
                component={WeatherDetailsScreen}
                options={({ route }) => ({
                  title: 'Weather Details',
                  headerStyle: { backgroundColor: theme.colors.primary },
                  headerTintColor: theme.colors.white,
                  headerTitleStyle: { fontWeight: 'bold' },
                })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ErrorBoundary>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
