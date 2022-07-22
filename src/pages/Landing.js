import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>Job <span>tracking</span> app </h1>
                    <p>
                        Fanny pack before they sold out succulents tumeric. Banjo VHS glossier disrupt microdosing. Marfa pork belly fanny pack, intelligentsia retro yr bushwick tbh cloud bread small batch woke typewriter.
                    </p>
                    <Link to="/register" className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt="job hunt" className='img main-img' />
            </div>
        </Wrapper>
    )
};

export default Landing;