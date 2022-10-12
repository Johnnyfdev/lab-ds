import { TextInput, TextInputProps } from './TextInput';
import { Meta, StoryObj } from '@storybook/react';


export default {
    title: 'Components/TextInput',
    component: TextInput,
    args: {
        placeholder: 'Placeholder',
    },
    argTypes: {
       
    },
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {}
