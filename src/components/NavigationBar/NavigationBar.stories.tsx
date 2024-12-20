import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "./NavigationBar";

const meta: Meta<typeof NavigationBar> = {
  title: "Design System/NavigationBar",
  component: NavigationBar,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {
  args: {
    links: [
      {
        name: "About us",
        href: "aboutus",
      },
      {
        name: "About us",
        href: "aboutus",
      },
      {
        name: "About us",
        href: "aboutus",
      },
      {
        name: "About us",
        href: "aboutus",
      },
    ],
    otherActionButtons: [
      {
        name: "Self Service",
      },
    ],
  },
};

export const Mobile: Story = {
  args: {
    isMobile: true,
    links: [
      {
        name: "About us",
        href: "aboutus",
      },
      {
        name: "About us",
        href: "aboutus",
      },
      {
        name: "About us",
        href: "aboutus",
      },
      {
        name: "About us",
        href: "aboutus",
      },
    ],
    otherActionButtons: [
      {
        name: "Self Service",
      },
    ],
  },
};
