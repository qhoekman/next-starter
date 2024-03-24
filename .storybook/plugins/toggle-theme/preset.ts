import { generateThemeJSON } from './tailwind-theme';

export function managerEntries(entry = []) {
  generateThemeJSON();
  return [...entry, require.resolve('./register')];
}
