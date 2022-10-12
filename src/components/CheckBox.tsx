import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'phosphor-react';


export interface CheckBoxProps {
}



export function CheckBox(props: CheckBoxProps) {
    return (
        <CheckboxPrimitive.Root
            className='w-5 h-5 p-[2px] rounded bg-gray-800 '
            >
            <CheckboxPrimitive.Indicator asChild> 
            <Check weight='bold' className='h-4 w-4 text-cyan-500'/>
              </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root >
    );
}

