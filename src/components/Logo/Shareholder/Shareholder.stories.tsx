import type { Meta, StoryObj } from '@storybook/react';
import Shareholder from './Shareholder';

const meta: Meta<typeof Shareholder> = {
    title: 'Components/Logo/Shareholder',
    component: Shareholder,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Shareholder>;

export const Default: Story = {
    args: {},
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    }
};