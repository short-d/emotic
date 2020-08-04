import React from 'react';
import { Emotic } from 'emotic-react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

export default {
  title: 'Emotic',
  component: <Emotic />,
  decorators: [withKnobs, withInfo({ header: false, inline: true })]
};

export const Default = () => {
  return <Emotic />;
};
