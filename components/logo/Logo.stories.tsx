import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Logo, { LogoProps } from "./Logo";

export default {
  title: "Common/Logo",
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Main = Template.bind({});
Main.args = {
  showSubtitle: true,
};

export const Small = Template.bind({});
Small.args = {
  showSubtitle: false,
};
