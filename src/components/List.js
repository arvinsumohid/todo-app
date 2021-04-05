import { useDispatch } from 'react-redux';

import actions from '../store/actions'
import cross from '../images/icon-cross.svg'

const List = ({todoList}) => {
    const dispatch = useDispatch()

    function handleCheck(evt) {
        const listItem = evt.target.parentNode
        

        if( document.querySelector('html').classList.contains('dark') ) {
            if( evt.target.checked ) {
                listItem.querySelector('.label').classList.add('line-through', 'text-dark-vdgb')
                listItem.querySelector('.label').classList.remove('text-dark-lgb')
                listItem.parentNode.querySelector('button').classList.add('hidden')
            } else {
                listItem.querySelector('.label').classList.remove('line-through', 'text-dark-vdgb')
                listItem.querySelector('.label').classList.add('text-dark-lgb')
                listItem.parentNode.querySelector('button').classList.remove('hidden')
            }
        } else {
            if( evt.target.checked ) {
                listItem.querySelector('.label').classList.add('line-through')
                listItem.parentNode.querySelector('button').classList.add('hidden')
            } else {
                listItem.querySelector('.label').classList.remove('line-through')
                listItem.parentNode.querySelector('button').classList.remove('hidden')
            }
        }

        dispatch(actions.toggleTodo(evt.target.id, evt.target.checked))

    }

    function handleDelete(id) {
        dispatch(actions.deleteTodo(id))
    }

    function RemoveBtn({dataId}) {
        return (
            <button className="button-close flex-shrink" onClick={handleDelete.bind(null, dataId)} data-id={dataId}>
                <img src={cross} alt="Cross" />
            </button>
        )
    }

    function Item({id, label, isCompleted}) {
        return (
            <li className="list-item w-full relative font-josefin w-full bg-light-vlg dark:bg-dark-vddb pr-6 text-xs lg:text-lg text-left flex item-center border-light-vlg dark:border-dark-vdgb">
                
                <label className="text-base flex-auto py-4 text-xs lg:text-lg lg:py-4 pl-12 lg:pl-16 cursor-pointer">
                    <span className={`label text-light-vdgb dark:text-dark-lgb text-xs lg:text-lg font-josefin ${isCompleted && 'line-through'}`}>{label}</span>
                    <input id={id} type="checkbox" onChange={handleCheck} defaultChecked={isCompleted}/>
                    <span className="checkmark"></span>
                </label>

                <RemoveBtn dataId={id} />
            </li>
        )
    }

    if( todoList.length !== 0 )

        return  (
            <ul>
                {todoList.map(todo => {
                    return <Item key={todo.id} id={todo.id} isCompleted={todo.isCompleted} label={todo.label} />
                })}
            </ul>
        )

    return <p className="text-dark-dgb text-sm lg:text-base font-josefin font-bold pt-5">No Data Found.</p>
}

export default List;