import List from './List';
import HandlerEvent from './HandlerEvent';

const ListContainer = ({...rest}) => {
    return (
        <div {...rest}>
            <List />
            <HandlerEvent />
        </div>
    )
}

export default ListContainer;