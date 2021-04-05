import darkImageDesktop from '../images/bg-desktop-dark.jpg';
import lightImageDesktop from '../images/bg-desktop-light.jpg';
import darkImageMobile from '../images/bg-mobile-dark.jpg';
import lightImageMobile from '../images/bg-mobile-light.jpg';

const BackgroundImage = ({isDarked}) => {


    return (
        <div className="imagebox w-full absolute top-0 left-0">
            <img src={isDarked ? darkImageDesktop : lightImageDesktop} alt={isDarked ? 'hallway' : 'mountain'} className="w-full hidden lg:block" />
            <img src={isDarked ? darkImageMobile : lightImageMobile} alt={isDarked ? 'hallway' : 'mountain'} className="w-full block lg:hidden" />
        </div>
    )
}

export default BackgroundImage;