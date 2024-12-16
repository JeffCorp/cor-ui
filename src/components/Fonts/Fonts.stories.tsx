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
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof FontDisplay>;

export const Default: Story = {
  args: {
    children: 'Hello, Lato Font!',
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
    children: 'Hello, Lato Font!',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 48,
  },
};

export const AsH1: Story = {
  args: {
    children: 'Hello, Lato Font!',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 48,
    component: 'h1',
  },
};

export const AsH2: Story = {
  args: {
    children: 'Hello, Lato Font!',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 32,
    component: 'h2',
  },
};

export const AsH3: Story = {
  args: {
    children: 'Hello, Lato Font!',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 24,
    component: 'h3',
  },
};

export const AsH4: Story = {
  args: {
    children: 'Hello, Lato Font!',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 18,
    component: 'h4',
  },
};

export const AsH5: Story = {
  args: {
    children: 'Hello, Lato Font!',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 16,
    component: 'h5',
  },
};

export const AsH6: Story = {
  args: {
    children: 'Hello, Lato Font!',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 16,
    component: 'h6',
  },
};

export const AsP: Story = {
  args: {
    children: 'Hello, Lato Font!',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 16,
    component: 'p',
  },
};

