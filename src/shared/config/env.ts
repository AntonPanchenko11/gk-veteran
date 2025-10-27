/**
 * Единая точка доступа к переменным окружения.
 */
export const env = {
  appName: import.meta.env.VITE_APP_NAME ?? 'Экосистема «Ветеран»',
}
