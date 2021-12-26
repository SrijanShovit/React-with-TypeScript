import React from 'react';

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    //the props can also be used after  destructuring as usual
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event)
    }
    // return <input type='text' value={props.value} onChange={props.handleChange} />
    return <input type='text' value={props.value} onChange={handleInputChange} />
}