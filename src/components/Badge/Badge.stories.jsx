import Badge from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: 'Default',
    variant: 'default',
  },
};

export const Success = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Warning = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};

export const Error = {
  args: {
    children: 'Error',
    variant: 'error',
  },
};