import Alert from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },

    role: {
      control: 'select',
      options: ['alert', 'status'],
    },

    children: {
      control: 'text',
    },
  },
};

export default meta;

export const Info = {
  args: {
    children: 'This is an informational message.',
    variant: 'info',
  },
};

export const Success = {
  args: {
    children: 'Your changes were saved successfully.',
    variant: 'success',
  },
};

export const Warning = {
  args: {
    children: 'Please review this information before continuing.',
    variant: 'warning',
  },
};

export const Error = {
  args: {
    children: 'Something went wrong. Please try again.',
    variant: 'error',
  },
};