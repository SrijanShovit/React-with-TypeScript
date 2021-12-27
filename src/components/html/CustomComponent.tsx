//to extract props of compoenent (may be of use when we can't directly acces or import)

import React from 'react'
import { Greet } from '../Greet'
//extracted prop types of Greet into CustomComponent
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>
           {props.name} 
        </div>
    )
}