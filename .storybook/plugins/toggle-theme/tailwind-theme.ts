import fs from 'fs';
import path from 'path';
import resolveConfig from 'tailwindcss/resolveConfig';

// Generate theme.json from tailwind.config.js
export const generateThemeJSON = () => {
  const basePath = path.resolve(__dirname, '../../../');
  const tailwindConfig = require(path.resolve(basePath, 'tailwind.config.js'));
  const twTheme = resolveConfig(tailwindConfig).theme;
  const theme = {};
  const themeKeys = [
    'colors',
    'spacing',
    'fontSize',
    'fontWeight',
    'lineHeight',
    'letterSpacing',
    'borderWidth',
    'borderRadius',
    'boxShadow',
    'zIndex',
    'opacity',
    'screens',
  ];

  themeKeys.forEach((key) => {
    theme[key] = twTheme[key];
  });
  console.log('Generated theme.json');
  fs.writeFileSync(
    path.resolve(basePath, './src/system/theme.json'),
    JSON.stringify(theme, null, 2)
  );
};
