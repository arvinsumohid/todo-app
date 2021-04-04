import SwitchTheme from './SwitchTheme';
import InputField from './InputField';
import ListContainer from './ListContainer';

const TodoBox = ({props}) => {
    return(
        <div className="w-2/5 px-5 m-auto relative pt-20">
            <div className="flex items-center w-full mb-10">
                <h1 className="text-white tracking-widestx3 font-josefin text-4xl text-left font-bold flex-auto">TODO</h1>
                <SwitchTheme className="flex-shrink" isDarked={props.isDarked} />
            </div>

            <InputField className=" circle-design relative w-full bg-light-vlg dark:bg-dark-vddb rounded overflow-hidden mb-8" />

            <ListContainer todoNumber={props.todoNumber} todoList={props.todoList} className="list-container relative w-full bg-light-vlg dark:bg-dark-vddb rounded overflow-hidden" />

        </div>
    )
}

export default TodoBox;