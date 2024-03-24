export const AppConfig = {
  metadata: {
    title: 'My App',
    description: 'My App Description',
    keywords: 'my, app, keywords',
    author: 'My App Author',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  },
};
