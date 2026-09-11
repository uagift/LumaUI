import Card from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  argTypes: {
    title: {
      control: 'text',
    },

    className: {
      control: 'text',
    },

    children: {
      control: 'text',
    },
  },
};

export default meta;

export const Default = {
  args: {
    title: 'Card Title',
    children: 'This is a simple LumaUI card component.',
  },
};

export const WithoutTitle = {
  args: {
    children: 'This card does not have a title.',
  },
};

export const WithLongContent = {
  args: {
    title: 'Learning with LumaUI',
    children:
      'LumaUI provides reusable, accessible, and customizable React components for building consistent interfaces.',
  },
};