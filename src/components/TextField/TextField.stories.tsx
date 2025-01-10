import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";
import { Icon } from "@jeffcorp/cor-ui-icons";
import { Colors } from "../Colors";

const meta: Meta<typeof TextField> = {
  title: "Design System/TextField",
  component: TextField,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: {
      text: "Change Label",
    },
    hint: {
      text: "This is a hint to help users",
      color: Colors.primary.gray.neutral500,
    },
    outlineColor: "red",
    backgroundColor: Colors.primary.gray.neutral25,
    type: "text",
    placeholder: "Text Area",
    prefixIcon: (
      <Icon
        icon="user-circle"
        variant="outline"
        color={Colors.primary.gray.neutral500}
      />
    ),
    suffixIcon: (
      <Icon
        icon="question"
        variant="outline"
        color={Colors.primary.gray.neutral500}
      />
    ),
    onChange: () => {},
  },
};

export const WithSelector: Story = {
  args: {
    label: {
      text: "Change Label",
    },
    hint: {
      text: "This is a hint to help users",
      color: Colors.primary.gray.neutral500,
    },
    type: "text",
    placeholder: "Text Area",
    selectorPrefix: {
      default: "NG",
      list: [
        {label: "NG", value: "NG"},
        {label: "US", value: "US"}
      ]
    },
    suffixIcon: (
      <Icon
        icon="question"
        variant="outline"
        color={Colors.primary.gray.neutral500}
      />
    ),
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: {
      text: "Change Label",
    },
    hint: {
      text: "This is a hint to help users",
      color: Colors.primary.gray.neutral500,
    },
    backgroundColor: Colors.primary.gray.neutral25,
    type: "text",
    placeholder: "Text Area",
    selectorPrefix: {
      default: "NG",
      list: [
        {label: "NG", value: "NG"},
        {label: "US", value: "US"}
      ]
    },
    suffixIcon: (
      <Icon
        icon="question"
        variant="outline"
        color={Colors.primary.gray.neutral500}
      />
    ),
    onChange: () => {},
  },
};

export const Password: Story = {
  args: {
    label: {
      text: "Change Label",
    },
    hint: {
      text: "This is a hint to help users",
      color: Colors.primary.gray.neutral500,
    },
    type: "password",
    placeholder: "Password",
    selectorPrefix: {
      default: "NG",
      list: [
        {label: "NG", value: "NG"},
        {label: "US", value: "US"}
      ]
    },
    suffixIcon: (
      <Icon
        icon="question"
        variant="outline"
        color={Colors.primary.gray.neutral500}
      />
    ),
    onChange: () => {},
  },
};

export const Selector: Story = {
  args: {
    label: {
      text: "Change Label",
    },
    hint: {
      text: "This is a hint to help users",
      color: Colors.primary.gray.neutral500,
    },
    type: "text",
    select: {
      default: "bima@kretya.com",
      list: [
        { label: "bima@kretya.com", value: "bima@kretya.com" },
        { label: "admin@kretya.com", value: "admin@kretya.com" }
      ]
    },
    placeholder: "someone@email.com",
    prefixIcon: (
      <Icon
        icon="user-circle"
        variant="outline"
        color={Colors.primary.gray.neutral500}
      />
    ),
    suffixIcon: (
      <Icon
        icon="question"
        variant="outline"
        color={Colors.primary.gray.neutral500}
      />
    ),
    onChange: () => {},
  },
};