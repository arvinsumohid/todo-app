let todoId = 0;

const addTodo = (label) => {
    return dispatch => {
        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: ++todoId,
                label: label
            }
        })
    }
}

const toggleTodo = (id, checked) => {
    return dispatch => {
        dispatch({
            type: 'TOGGLE_TODO',
            payload: {
                id: id,
                checked: checked
            }
        })
    }
}

const toggleTheme = () => {
    return dispatch => {
        dispatch({
            type: 'TOGGLE_THEME'
        })
    }
}

const deleteTodo = (id) => {
    return dispatch => {
        dispatch({
            type: 'DELETE_TODO',
            payload: {
                id: id,
            }
        })
    }
}

const clearCompleted = () => {
    return dispatch => {
        dispatch({
            type: 'CLEAR_COMPLETED',
        })
    }
}

export default {
    addTodo,
    toggleTodo,
    deleteTodo,
    toggleTheme,
    clearCompleted
}