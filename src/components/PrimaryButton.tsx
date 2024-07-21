import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Box, Text } from '../theme/restyleComponents';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, style, ...props }) => {
  return (
    <TouchableOpacity style={style} {...props}>
      <Box
        backgroundColor="primary"
        paddingVertical="m"
        paddingHorizontal="l"
        borderRadius="m"
        alignItems="center"
        justifyContent="center"
        marginVertical="s"
      >
        <Text variant="buttonText">{title}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
