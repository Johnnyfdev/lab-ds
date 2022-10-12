import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export interface TextInputRootProps {
    children: ReactNode;
}

export interface TextInputIconProps {
    children: ReactNode;
}

TextInputIcon.displayName = 'TextInput.Icon';

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center py-3 px-2 gap-2 bg-gray-800 rounded  w-full focus-within:ring-2 ring-cyan-300 h-12'>
            {props.children}
        </div>
    )
}

function TextInputIcon(props:TextInputIconProps) {
    return (
        <Slot className='w-5 h-5 text-gray-400'>
            {props.children}
        </Slot>
    )
}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className='bg-transparent flex-1 outline-none  text-gray-100 text-xs  placeholder-gray-400'
            {...props}
        />
    );
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}