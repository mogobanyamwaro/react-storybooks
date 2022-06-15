import React from "react";
import Button from "./Button";
import Center from "../Crenter/Center";
import { action, actions } from "@storybook/addon-actions";
export default {
  title: "Form/Button",
  component: Button,
  decorators: [(storyFn) => <Center>{storyFn()}</Center>],
  argTypes: {
    onclick: { action: "clicked" },
  },
};

export const Primary = () => (
  <Center>
    <Button variant="primary">Primary</Button>
  </Center>
);
export const Secondary = () => (
  <Button onclick={action("click handler")} variant="secondary">
    Secondary
  </Button>
);
export const Success = () => (
  <Button onclick={action("click handler")} variant="success">
    Success
  </Button>
);
export const Danger = () => (
  <Button onclick={action("click handler")} variant="danger">
    Danger
  </Button>
);

const Template = (args: any) => <Button {...args}>Button</Button>;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Primary Args Long",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
