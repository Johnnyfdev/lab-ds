import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';


export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {

}
export function TextInput(props: TextInputProps) {

    return (
        <input

            className={
                clsx(
                    'py-3 px-2 bg-gray-800 rounded text-gray-100 text-xs w-full placeholder-gray-400',
                )}
            {...props}
        />

    );
}