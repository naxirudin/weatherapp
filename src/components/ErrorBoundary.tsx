import React, { ErrorInfo } from 'react';
import { Box, Text } from '../theme/restyleComponents';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            return (
                <Box flex={1} justifyContent="center" alignItems="center" padding="m">
                    <Text variant="title" color="error">Something went wrong.</Text>
                    {this.state.error && (
                        <Text variant="body" color="error">{this.state.error.message}</Text>
                    )}
                </Box>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
