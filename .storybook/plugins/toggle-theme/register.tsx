import React, { useEffect, useState } from 'react';
import { addons, types } from '@storybook/addons';
import { IconButton } from '@storybook/components';

import { MoonIcon } from '../../icons/moon';
import { SunIcon } from '../../icons/sun';

const ToggleTheme = () => {
  const [isDark, setDark] = useState(false);

  const updateMode = () => {
    setDark(!isDark);
  };

  useEffect(() => {
    const iframe = document.getElementById('storybook-preview-iframe') as HTMLIFrameElement;
    const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;

    iframeDocument?.documentElement.setAttribute('class', isDark ? 'dark' : 'light');
    iframeDocument?.documentElement.setAttribute(
      'style',
      isDark ? 'color-scheme: dark;' : 'color-scheme: light;'
    );
  }, [isDark]);

  return (
    <IconButton
      key="theme-toggle"
      active={false}
      title={isDark ? 'Change to light theme' : 'Change to dark theme'}
      onClick={updateMode}
      content={undefined}
      autoFocus={undefined}
      nonce={undefined}
      rel={undefined}
      rev={undefined}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};

addons.register('storybook-theme-toggle', (api) => {
  addons.add('sstorybook-theme-toggle', {
    title: 'Toggle Theme',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: () => <ToggleTheme />,
  });
});
