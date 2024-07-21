import { SCREEN_NAMES } from '../utils/constant';

export type RootStackParamList = {
  [SCREEN_NAMES.HOME]: undefined;
  [SCREEN_NAMES.WEATHER_DETAILS]: {
    city: string;
    country: string;
    temperature: number;
    description: string;
  };
};
