import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg';

const SwitchTheme = ({...rest}) => {
    return (
        <div {...rest}>
            <img src={sun} />
        </div>
    )
}

export default SwitchTheme;