import { StoryObj } from '@storybook/react';

import Button from './Button';

export default {
  title: 'iLink/Componets',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as StoryObj<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  name: "문의버튼",
  args: {
    primary: false,
    label: '예매내역 조회하기',
    fontSize: 13,
    maxWidth: 208
  },
};

export const Primary: StoryObj<typeof Button> = {
  name: "문의버튼 활성화",
  args: {
    primary: true,
    label: '취소하기',
    fontSize: 13,
    maxWidth: 208
  },
};
