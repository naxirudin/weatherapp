import React from 'react';
import { Box, Text } from '../theme/restyleComponents';

interface FavoriteCityProps {
    favoriteCity: { name: string } | null;
}

const FavoriteCity: React.FC<FavoriteCityProps> = React.memo(({ favoriteCity }) => {
    if (!favoriteCity) return null;

    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Text variant="title">{`Favorite City is ${favoriteCity.name}`}</Text>
        </Box>
    );
});

export default FavoriteCity;
