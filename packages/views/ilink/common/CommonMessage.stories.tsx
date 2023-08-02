import { ComponentStory, ComponentMeta } from '@storybook/react';

import CommonMessage from './CommonMessage';

export default {
  title: 'iLink/Common',
  component: CommonMessage,
} as ComponentMeta<typeof CommonMessage>;

const Template: ComponentStory<typeof CommonMessage> = () => <CommonMessage />;

export const Default = Template.bind({});
