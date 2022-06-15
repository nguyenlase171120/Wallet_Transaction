import Navbar from '../navbar/Navbar';
import './header.scss';

const Header = () => {
    return (
        <div className='header__container'>
            <h2 className='header-title'>#Mintforukraine</h2>

            <nav>
                <Navbar />
            </nav>

            <button className='header-btn'>
                <p>Donate</p>
            </button>
        </div>
    );
};

export default Header;
