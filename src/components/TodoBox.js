import SwitchTheme from './SwitchTheme';
import InputField from './InputField';
import ListContainer from './ListContainer';

const TodoBox = ({props}) => {
    return(
        <div className="w-11/12 lg:w-2/5 px-5 m-auto relative lg:pt-20 pt-12">
            <div className="flex items-center w-full lg:mb-10 mb-9">
                <h1 className="text-white tracking-widestx3 font-josefin text-3xl lg:text-4xl text-left font-bold flex-auto">TODO</h1>
                <SwitchTheme className="flex-shrink" isDarked={props.isDarked} />
            </div>

            <InputField className=" circle-design relative w-full bg-light-vlg dark:bg-dark-vddb rounded-md lg:rounded text-sm lg:text-base overflow-hidden mb-8 md:mb-5" />

            <ListContainer todoNumber={props.todoNumber} todoList={props.todoList} className="list-container relative w-full bg-light-vlg dark:bg-dark-vddb rounded-md lg:rounded overflow-hidden" />

        </div>
    )
}

export default TodoBox;