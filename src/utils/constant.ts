export const SCREEN_NAMES = {
  HOME: 'Home',
  WEATHER_DETAILS: 'WeatherDetails',
} as const;

export type ScreenNames = typeof SCREEN_NAMES[keyof typeof SCREEN_NAMES];
