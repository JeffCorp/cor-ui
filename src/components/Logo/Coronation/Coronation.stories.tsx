import type { Meta, StoryObj } from '@storybook/react';
import Coronation from './Coronation';

const meta: Meta<typeof Coronation> = {
    title: 'Components/Logo/Coronation',
    component: Coronation,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Coronation>;

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
