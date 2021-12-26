import {useRef,useEffect} from 'react';
import { Input } from '../Input';

export const DomRef = () => {
    //for DOM references specify DOM element type
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
       inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}