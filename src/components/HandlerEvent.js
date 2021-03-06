import { useDispatch } from 'react-redux';
import actions from '../store/actions'


const Counter = ({todoNumber, className}) => {
    return  (
        <span className={`text-light-lgb dark:text-dark-vdgb font-josefin text-sm font-bold ${className}`}>{todoNumber} items left</span>
    )
}

const Status = ({className, updateType}) => {
    const buttons = document.querySelectorAll('.statusbox button')

    function resetButton() {
        buttons.forEach(button => {
            Object(button).classList.remove('text-brightBlue')
            Object(button).classList.add('text-light-dgb', 'dark:text-dark-dgb')
        })
    }
    
    const updateButtonFocus = (event) => {
        event.target.classList.add('text-brightBlue')
        event.target.classList.remove('text-light-dgb', 'dark:text-dark-dgb')
    }

    const buttonAll = event => {
        resetButton()
        updateButtonFocus(event)
        updateType('all')
    }

    const buttonActive = event => {
        resetButton()
        updateButtonFocus(event)
        updateType('active')

    }

    const buttonCompleted = event => {
        resetButton()
        updateButtonFocus(event)
        updateType('completed')
    }

    return (
        <div className={`statusbox text-center ${className}`}>
            <button className="font-josefin px-2.5 text-sm font-bold text-brightBlue" onClick={buttonAll.bind(this)}>All</button>
            <button className=" text-light-dgb dark:text-dark-dgb font-josefin px-2.5 text-sm font-bold" onClick={buttonActive.bind(this)}>Active</button>
            <button className=" text-light-dgb dark:text-dark-dgb font-josefin px-2.5 text-sm font-bold" onClick={buttonCompleted.bind(this)}>Completed</button>
        </div>
    )
}

const Clear = ({className}) => {
    const dispatch = useDispatch()

    
    function clearHandler() {
        dispatch(actions.clearCompleted())
    }

    return (
        <button className={`font-josefin text-light-lgb dark:text-dark-vdgb text-sm font-bold ${className}`} onClick={clearHandler}>Clear Completed</button>
    )
}

const HandlerEvent = ({todoNumber, updateType}) => {
    return (
        <div className="w-full flex items-center md:bg-light-vlg md:dark:bg-dark-vddb bg-transparent flex-wrap">
            <Counter className="justify-items-stretch bg-light-vlg dark:bg-dark-vddb py-5 pl-5 order-1 w-2/4 md:w-auto text-left rounded-bl-md md:rounded-bl-none relative" todoNumber={todoNumber} />
            <Status className="justify-items-stretch flex-auto bg-light-vlg dark:bg-dark-vddb py-4 order-3 md:order-2 mt-5 md:mt-0 rounded-t-md md:rounded-t-none" updateType={updateType} />
            <Clear className="justify-items-stretch bg-light-vlg dark:bg-dark-vddb py-5 pr-5 order-2 md:order-3 w-2/4 md:w-auto text-right  rounded-br-md md:rounded-br-none relative" />
        </div>
    )
}

export default HandlerEvent;