import { useState } from 'react';
import Input from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },

  argTypes: {
    label: {
      control: 'text',
    },

    id: {
      control: 'text',
    },

    type: {
      control: 'select',
      options: [
        'text',
        'email',
        'password',
        'number',
        'tel',
      ],
    },

    placeholder: {
      control: 'text',
    },

    required: {
      control: 'boolean',
    },

    disabled: {
      control: 'boolean',
    },

    error: {
      control: 'text',
    },

    ariaLabel: {
      control: 'text',
    },

    value: {
      control: 'text',
    },

    onChange: {
      control: false,
    },
  },
};

export default meta;

export const Default = {
  args: {
    label: 'Full Name',
    id: 'full-name',
    placeholder: 'Enter your name',
  },

  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const Email = {
  args: {
    label: 'Email Address',
    id: 'email',
    type: 'email',
    placeholder: 'you@example.com',
  },

  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const Password = {
  args: {
    label: 'Password',
    id: 'password',
    type: 'password',
    placeholder: 'Enter your password',
  },

  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const Required = {
  args: {
    label: 'Username',
    id: 'username',
    placeholder: 'Enter your username',
    required: true,
  },

  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const WithError = {
  args: {
    label: 'Email Address',
    id: 'email-error',
    type: 'email',
    placeholder: 'Enter your email',
    error: 'Please enter a valid email address.',
  },

  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <Input
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Input',
    id: 'disabled-input',
    placeholder: 'This field is disabled',
    disabled: true,
    value: 'Disabled value',
  },

  render: (args) => {
    return (
      <Input
        {...args}
        onChange={() => {}}
      />
    );
  },
};