import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../Button";

export default {
  title: "ui/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const PlaygroundContent: ComponentStory<typeof Button> = (
  args: JSX.IntrinsicAttributes & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return <Button {...args} />;
};

export const Default = PlaygroundContent.bind({});

Default.args = {
  children: "Кнопка",
};
