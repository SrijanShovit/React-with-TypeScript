import React from "react"

type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg' 
    color?: 'primary' | 'secondary' 
    children: React.ReactNode
    as?:E
}

//React.ComponentProps is of generic type so to combine TextOwnProps with it we need to make that generic too
type TextProps<E extends React.ElementType> = TextOwnProps<E> & 
Omit<React.ComponentProps<E>,keyof TextOwnProps<E>>
//children of HTML might conflict with that of children of TextOwnProps so its is omitted
export const Text = <E extends React.ElementType = 'div'>({size,color,children,as} : TextProps<E>) => {
    const Component = as || 'div'
    return <Component className={`class-width-${size}-${color}`}>{children}</Component>
}