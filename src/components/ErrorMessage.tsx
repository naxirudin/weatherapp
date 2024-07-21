import React from 'react';
import { Box, Text } from '../theme/restyleComponents';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Box padding="m" borderRadius="m">
      <Text variant="errorText">{message}</Text>
    </Box>
  );
};

export default ErrorMessage;
