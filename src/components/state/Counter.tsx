import {useReducer} from 'react'

const initialState = {count : 0}

type CounterState = {
    count: number
}

type CounterAction = {
    type: string,
    payload: number
}

function reducer(state:CounterState,action:CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload}
        case 'decrement':
            return { count: state.count - action.payload}
        default:
            return state
    }
}

export const Counter = () => {
    const [state,dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count : {state.count}
            <button onClick={()=> dispatch({type: 'increment', payload:2})}>Increment by 2</button>
            <button onClick={()=> dispatch({type: 'decrement', payload:2})}>Decrement by 2</button>
        </>
    )
}