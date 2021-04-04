import List from './List';
import HandlerEvent from './HandlerEvent';

const ListContainer = ({todoNumber, todoList, ...rest}) => {
    return (
        <div {...rest}>
            <List todoList={todoList}/>
            <HandlerEvent todoNumber={todoNumber} />
        </div>
    )
}

export default ListContainer;