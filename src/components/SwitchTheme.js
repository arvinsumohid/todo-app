import { useDispatch } from 'react-redux';
import actions from '../store/actions'

import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';


const SwitchTheme = ({isDarked, ...rest}) => {
    const dispatch = useDispatch()

    function themeChange() {
        dispatch(actions.toggleTheme())
    }

    return (
        <div {...rest}>
            <img src={isDarked ? sun : moon} alt={isDarked ? 'Sun' : 'Moon'} onClick={themeChange} />
        </div>
    )
}

export default SwitchTheme;