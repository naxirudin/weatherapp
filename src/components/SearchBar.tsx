import React from 'react';
import { Image, TextInput as RNTextInput, TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { Box, useTheme } from '../theme/restyleComponents';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText, onClear }) => {
  const theme = useTheme();

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      backgroundColor="background"
      borderRadius="m"
      borderWidth={1}
      borderColor="border"
      paddingHorizontal="m"
      height={40}
      marginBottom="m"
      width="100%"
    >
      <RNTextInput
        style={{
          flex: 1,
          fontSize: theme.textVariants.body.fontSize,
          color: theme.colors.text,
        }}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search..."
        placeholderTextColor={theme.colors.placeholder}
        maxLength={25}
      />
      {value.length > 0 && (
        <RNTouchableOpacity onPress={onClear}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/delete-sign.png' }}
            style={{ width: 20, height: 20, tintColor: theme.colors.primary }}
          />
        </RNTouchableOpacity>
      )}
    </Box>
  );
};

export default SearchBar;
