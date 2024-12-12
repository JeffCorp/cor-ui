import type { Meta, StoryObj } from '@storybook/react';
import FontDisplay from './Fonts';

const meta: Meta<typeof FontDisplay> = {
  title: 'Design System/FontDisplay',
  component: FontDisplay,
  argTypes: {
    fontWeight: {
      control: { type: 'select', options: ['normal', 'bold'] },
    },
    fontStyle: {
      control: { type: 'select', options: ['normal', 'italic'] },
    },
    fontSize: {
      control: { type: 'number', min: 12, max: 72, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FontDisplay>;

export const Default: Story = {
  args: {
    text: 'Hello, Lato Font!',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 24,
  },
};

export const Bold: Story = {
  args: {
    ...Default.args,
    fontWeight: 'bold',
  },
};

export const Italic: Story = {
  args: {
    ...Default.args,
    fontStyle: 'italic',
  },
};

export const LargeText: Story = {
  args: {
    ...Default.args,
    fontSize: 48,
  },
};