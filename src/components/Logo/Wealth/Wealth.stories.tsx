import type { Meta, StoryObj } from '@storybook/react';
import Wealth from './Wealth';

const meta: Meta<typeof Wealth> = {
    title: 'Components/Logo/Wealth',
    component: Wealth,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Wealth>;

export const Light: Story = {
    args: {
        theme: 'light',
    },
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
};

export const Dark: Story = {
    args: {
        theme: 'dark',
    },
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};
