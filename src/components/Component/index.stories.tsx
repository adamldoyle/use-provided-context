import { Story, Meta } from '@storybook/react';
import { Component } from './';

export default {
  title: 'components/Component',
  component: Component,
  argTypes: {},
  decorators: [(Story) => <Story />],
} as Meta;

const Template: Story = () => <Component />;

export const Default = Template.bind({});
Default.args = {};
