const initialTodo = {
    isDarked: true,
    todoList: [],
}

const todo = (state = initialTodo, action) => {
    switch(action.type) {

        case 'ADD_TODO' : {
            const {id, label} = action.payload
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: id,
                        label: label,
                        isCompleted: false
                    }
                ]
            }
        }

        case 'TOGGLE_TODO': {
            const {id, checked} = action.payload
            const newState = state.todoList.map((todo) => {
                if(todo.id === parseInt(id)) {
                    return { id: parseInt(id), label: todo.label, isCompleted: checked}
                }
                
                return todo
            })
            return {
                ...state,
                todoList: [
                    ...newState
                ]
            }
        }

        case 'DELETE_TODO': {
            const {id} = action.payload
            const newState = state.todoList.filter( todo => todo.id !== parseInt(id) )
            return {
                ...state,
                todoList: [
                    ...newState
                ]
            }
        }

        case 'CLEAR_COMPLETED' : {
            const newState = state.todoList.filter( todo => !todo.isCompleted)
            return {
                ...state,
                todoList: [
                    ...newState
                ]
            }
        }

        case 'TOGGLE_THEME' : {
            return {
                ...state,
                isDarked : !state.isDarked
            }
        }

        default : 
            return state;
    }
}

export default todo