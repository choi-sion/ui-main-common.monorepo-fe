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
  args: {
    primary: false,
    label: '예매내역 조회하기'
  },
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    primary: true,
    label: '취소하기',
  },
};


export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
}
