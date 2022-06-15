import { Button } from "@chakra-ui/core";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    variantColor: { control: "text" },
  },
};

const Template = (args: any) => <Button {...args}>Button</Button>;
export const Danger = Template.bind({});
Danger.args = {
  variantColor: "danger",
  children: "Danger",
};

export const Success = () => <Button {...args}>Button</Button>;
Danger.args = {
  variantColor: "green",
  children: "Success",
};
