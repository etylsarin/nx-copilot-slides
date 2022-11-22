import React from 'react';
import { render } from 'react-dom';

import { MDXProvider } from '@mdx-js/react';

import './assets/font.css';

import {
  Deck,
  FlexBox,
  Slide,
  Box,
  Progress,
  FullScreen,
  Notes,
  mdxComponentMap
} from 'spectacle';

const colorValues = {
  colors: {
    cyan: '#7FC1CA',
    blue: '#83AFE5',
    purple: '#9A93E1',
    pink: '#D18EC2',
    red: '#DF8C8C',
    orange: '#F2C38F',
    yellow: '#DADA93',
    green: '#A8CE93',
  },
  grays: {
    gray0: '#1E272C',
    gray1: '#3C4C55',
    gray2: '#556873',
    gray3: '#6A7D89',
    gray4: '#899BA6',
    gray5: '#C5D4DD',
    gray6: '#E6EEF3',
  },
};

// SPECTACLE_CLI_MDX_START
import slides, { notes } from './slides.mdx';
// SPECTACLE_CLI_MDX_END


// SPECTACLE_CLI_THEME_START
const theme = {
  colors: {
    primary: colorValues.grays.gray6,
    secondary: colorValues.colors.cyan,
    tertiary: colorValues.grays.gray1,
    quaternary: '#ffc951',
    quinary: '#8bddfd'
  },
  fonts: {
    header: `Montserrat, sans-serif`,
    text: `'Open Sans', sans-serif`,
    monospace: `'Fira Mono', monospace`
  },
  fontSizes: {
    h1: '6rem',
    h2: '4.5rem',
    h3: '3rem',
    text: '2rem',
    monospace: '2rem'
  },
  space: [16, 24, 32]
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <MDXProvider components={mdxComponentMap}>
    <Deck loop theme={theme} template={template}>
      {slides
        .map((MDXSlide, i) => [MDXSlide, notes[i]])
        .map(([MDXSlide, MDXNote], i) => (
          <Slide key={`slide-${i}`} slideNum={i}>
            <MDXSlide />
            <Notes>
              <MDXNote />
            </Notes>
          </Slide>
        ))}
    </Deck>
  </MDXProvider>
);

render(<Presentation />, document.getElementById('root'));
