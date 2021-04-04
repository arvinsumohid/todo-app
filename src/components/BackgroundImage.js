import darkImageDesktop from '../images/bg-desktop-dark.jpg';
import lightImageDesktop from '../images/bg-desktop-light.jpg';

const BackgroundImage = () => {


    return (
        <div className="imagebox w-full absolute top-0 left-0">
            <img src={darkImageDesktop} alt="Background Image" className="w-full" />
        </div>
    )
}

export default BackgroundImage;