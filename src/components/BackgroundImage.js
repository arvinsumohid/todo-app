import darkImageDesktop from '../images/bg-desktop-dark.jpg';
import lightImageDesktop from '../images/bg-desktop-light.jpg';

const BackgroundImage = ({isDarked}) => {


    return (
        <div className="imagebox w-full absolute top-0 left-0">
            <img src={isDarked ? darkImageDesktop : lightImageDesktop} alt={isDarked ? 'hallway' : 'mountain'} className="w-full" />
        </div>
    )
}

export default BackgroundImage;