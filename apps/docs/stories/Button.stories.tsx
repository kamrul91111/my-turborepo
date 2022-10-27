import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "ui";
import { ButtonType } from "ui/atoms/Button/types";

export default {
  title: "Atomic Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonType) => (
  <Button {...args} />
);

export const Default = Template.bind({});
export const WithIcons = Template.bind({});

Default.args = {
  children: "Button",
};

WithIcons.args = {
  children: "With Icons",
};
