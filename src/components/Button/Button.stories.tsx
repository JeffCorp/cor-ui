import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HelloWorld: Story = {
  args: {
    label: 'Hello World',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const CorUi: Story = {
  args: {
    label: 'Button',
  },
};

