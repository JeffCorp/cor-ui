import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Design System/Badge",
  component: Badge,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    type: "default",
    child: "Badge",
    color: "purple",
    size: "small",
    style: "subtle",
  },
};

export const WithLeftIcon: Story = {
    args: {
      type: "leftIcon",
      isLoading: true,
      icon: "circle",
      child: "Badge",
      color: "purple",
      size: "small",
      style: "subtle",
    },
  };
