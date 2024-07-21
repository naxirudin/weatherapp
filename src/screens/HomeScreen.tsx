import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text } from '../theme/restyleComponents';
import { useGetCityWeatherQuery } from '../services/weatherApi';
import SearchBar from '../components/SearchBar';
import ErrorMessage from '../components/ErrorMessage';
import useDebounce from '../hooks/useDebounce';
import PrimaryButton from '../components/PrimaryButton';
import FavoriteCity from '../components/FavoriteCity';
import { SCREEN_NAMES } from '../utils/constant';
import { setCityWeather } from '../store/weatherSlice';
import { selectFavoriteCity, selectCityWeather } from '../store/selectors';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [city, setCity] = useState('');
  const debouncedCity = useDebounce(city.trim(), 500);
  const dispatch = useDispatch();
  const favoriteCity = useSelector(selectFavoriteCity);
  const cityWeather = useSelector(selectCityWeather);
  const { data, error } = useGetCityWeatherQuery(debouncedCity, { skip: !debouncedCity });
  useEffect(() => {
    if (data) {
      dispatch(setCityWeather(data));
    }
  }, [data]);

  const handleInputChange = (text: string) => {
    setCity(text.trim());
  };

  const handleClearInput = () => {
    setCity('');
  };

  const handleShowDetails = () => {
    if (cityWeather) {
      navigation.navigate(SCREEN_NAMES.WEATHER_DETAILS);
    }
  };

  return (
    <Box flex={1} padding="m">
      <Box>
        <Text variant="title" marginBottom="s">Enter City Name:</Text>
        <SearchBar value={city} onChangeText={handleInputChange} onClear={handleClearInput} />
        {error && <ErrorMessage message="City Not Found" />}
        {cityWeather && cityWeather.name.toLowerCase() === city.toLowerCase() && (
          <PrimaryButton
            title={`Show weather details for ${cityWeather.name}`}
            onPress={handleShowDetails}
          />
        )}
      </Box>

      <FavoriteCity favoriteCity={favoriteCity} />
    </Box>
  );
};

export default HomeScreen;
