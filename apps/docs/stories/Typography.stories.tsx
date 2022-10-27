import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "ui";
import { TypographyType } from "ui/atoms/Typography/types";

export default {
  title: "Atomic Components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args: TypographyType) => (
  <Typography {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: "Button",
};
