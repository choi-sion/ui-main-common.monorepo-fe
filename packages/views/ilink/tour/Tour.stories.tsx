
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TourExample from './Tour';

export default {
  title: 'iLink/chat/Tour',
  component: TourExample,
} as ComponentMeta<typeof TourExample>;

const Template: ComponentStory<typeof TourExample> = () => <TourExample />;

export const Default = Template.bind({});
