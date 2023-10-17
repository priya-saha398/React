import React, { useReducer } from 'react'

const initialState = {counter: 0,counter2: 0}
const reducer = (state, action) => {
    switch (action.type) {
        case "increment": return {...state,counter : state.counter + 1};
        case "decrement": return {...state,counter :  state.counter - 1};
        case "increment2": return {...state,counter2 : state.counter2 + 1};
        case "decrement2": return {...state,counter2 :  state.counter2 - 1};
        default: return state;
    }
}

export const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>counter - {count.counter}</div>
            <button onClick={() => dispatch({type : "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
            <div>counter - {count.counter2}</div>
            <button onClick={() => dispatch({type : "increment2"})}>Increment2</button>
            <button onClick={() => dispatch({type: "decrement2"})}>Decrement2</button>
        </>

    )
}
