import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'; 
import Button from './Button';
import { Colors } from '../Colors';
import { Icon } from '../Icons';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
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

export const WithRightIcon: Story = {
  args: {
    label: 'Hello World',
    background: Colors.primary.brand.purple700,
    suffixIcon: <Icon icon="circle-dashed" variant="outline" color="white" />
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Hello World',
    background: Colors.primary.brand.purple700,
    prefixIcon: <Icon icon="circle-dashed" variant="outline" color="white" />
  },
};

export const OnlyIcon: Story = {
  args: {
    background: Colors.primary.brand.purple200,
    prefixIcon: <Icon icon="circle-dashed" variant="outline" color="white" />
  },
};

export const RoundedIcon: Story = {
  args: {
    background: Colors.primary.brand.purple200,
    prefixIcon: <Icon icon="circle-dashed" variant="outline" color="white" />,
    isRounded: true
  },
};

export const IsLoadingIcon: Story = {
  args: {
    background: Colors.primary.brand.purple200,
    isLoading: true
  },
};

export const IsRoundedLoadingIcon: Story = {
  args: {
    background: Colors.primary.brand.purple200,
    isLoading: true,
    isRounded: true
  },
};

export const IsLabelRoundedLoadingIcon: Story = {
  args: {
    label: "Hello world",
    background: Colors.primary.brand.purple200,
    isLoading: true
  },
};
