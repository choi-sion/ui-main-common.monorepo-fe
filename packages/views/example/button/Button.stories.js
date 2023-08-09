import { Button } from './Button';

export default {
  title: 'example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  name: '활성화 버튼',
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  name: '기본 버튼',
  args: {
    label: 'Button',
  },
};

export const Large = {
  name: 'Large 버튼',
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  name: 'Small 버튼',
  args: {
    size: 'small',
    label: 'Button',
  },
};
