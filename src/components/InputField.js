import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import actions from '../store/actions'


const InputField = ({...rest}) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('');

    function handleChange(evt) {
        setInput(evt.target.value)
    }

    function handleKeyDown(evt) {
        if(evt.key === 'Enter') {
            dispatch(actions.addTodo(input))
            evt.target.value = '';
        }
    }

    return (
        <div {...rest}>
            <input type="text" placeholder="Create a new todo..." className="font-josefin w-full text-light-dgb dark:text-dark-dgb placeholder-light-lgb dark:placeholder-dark-dgb font-bold bg-light-vlg dark:bg-dark-vddb py-4 pl-16" onChange={handleChange} onKeyDown={handleKeyDown} />
        </div>
    )
}

export default InputField;