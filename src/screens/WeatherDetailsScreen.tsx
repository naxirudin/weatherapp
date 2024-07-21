import React, { useCallback } from 'react';
import { Button, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text } from '../theme/restyleComponents';
import { setFavoriteCity } from '../store/weatherSlice';
import { selectCityWeather } from '../store/selectors';

const WeatherDetailsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const cityWeather = useSelector(selectCityWeather);

  if (!cityWeather) {
    return (
      <Box flex={1} padding="m" justifyContent="center" alignItems="center">
        <Text variant="body">No weather data available.</Text>
      </Box>
    );
  }

  const { id, name: city, sys: { country }, main: { temp: temperature }, weather } = cityWeather;
  const description = weather[0].description;

  const saveFavoriteCity = useCallback(async () => {
    try {
      const cityData = { id, name: city, sys: { country }, main: { temp: temperature }, weather: [{ description }] as [{ description: string }] };
      dispatch(setFavoriteCity(cityData));
      Alert.alert('Success', 'Favorite city saved!');
    } catch (error) {
      Alert.alert('Error', 'There was an error saving the favorite city.');
    }
  }, [cityWeather]);

  return (
    <Box flex={1} padding="m" justifyContent="center" alignItems="center">
      <Text variant="title">{city}, {country}</Text>
      <Text variant="body" marginVertical="s">Temperature: {temperature}°C</Text>
      <Text variant="body" marginVertical="s">Description: {description}</Text>
      <Button title="Save as Favorite" onPress={saveFavoriteCity} />
    </Box>
  );
};

export default WeatherDetailsScreen;
