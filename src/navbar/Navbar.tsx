import './navbar.scss';
import {
    FaDiscord,
    FaFacebook,
    FaTwitter,
    FaInstagramSquare,
    FaLinkedin,
} from '../assets/icons';

const Navbar = () => {
    return (
        <div className='navbar__container'>
            <ul className='navbar__menu'>
                <li>About</li>
                <li>Faq</li>
                <li>Use of funds</li>
            </ul>

            <div className='navbar__social'>
                <FaDiscord className='social-item' />
                <FaFacebook className='social-item' />
                <FaTwitter className='social-item' />
                <FaInstagramSquare className='social-item' />
                <FaLinkedin className='social-item' />
            </div>
        </div>
    );
};

export default Navbar;
