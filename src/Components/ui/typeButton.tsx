/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "../../lib/utils";
import React, { FC } from 'react'

interface TypeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
//custom property
    className:string,
    disabled?:boolean,
    childern:string
}
const TypeButton:FC<TypeButtonProps> =({className,childern, disabled , ...props})=>{

    return (<button 
        disabled 
        className={cn('px-4', className)}
         {...props}>
          {childern}
        </button>
        
        
        )
}





export {
    TypeButton
}