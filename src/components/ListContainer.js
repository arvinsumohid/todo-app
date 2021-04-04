
import React, { useEffect, useState } from 'react';

import List from './List';
import HandlerEvent from './HandlerEvent';

const ListContainer = ({todoNumber, todoList, ...rest}) => {
    const [showType, setShowType] = useState('all')
    const [todoListDisplay, setTodoListDisplay] = useState([])

    useEffect(() => {
        
        
        if(showType === 'active') setTodoListDisplay(todoList.filter(todo => !todo.isCompleted))
        else if(showType === 'completed') setTodoListDisplay(todoList.filter(todo => todo.isCompleted))
        else if(showType === 'all') setTodoListDisplay(todoList)

    }, [showType, todoList])

    function updateType(type) {
        setShowType(type)
    }

    return (
        <div {...rest}>
            <List todoList={todoListDisplay}/>
            <HandlerEvent todoNumber={todoNumber} updateType={updateType} />
        </div>
    )
}

export default ListContainer;