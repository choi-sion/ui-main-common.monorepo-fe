
import { StoryObj } from '@storybook/react';

import TourExample from './Tour';

export default {
  title: 'iLink/Pages/투어',
  component: TourExample,
} as StoryObj<typeof TourExample>;

// const Template: StoryObj<typeof TourExample> = () => <TourExample />;

export const Default: StoryObj<typeof TourExample> = {
  name: "체팅화면"
}
