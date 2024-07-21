import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Text } from '../theme/restyleComponents';

interface WeatherCardProps {
  city: string;
  country: string;
  temperature: number;
  description: string;
  onPress: () => void;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, country, temperature, description, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        padding="m"
        marginVertical="s"
        backgroundColor="background"
        borderRadius="s"
        elevation={3}
        shadowColor="text"
        shadowOpacity={0.1}
        shadowRadius={5}
        shadowOffset={{ width: 0, height: 2 }}
      >
        <Text variant="title">{city}, {country}</Text>
        <Text variant="body">{temperature}°C</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default WeatherCard;
