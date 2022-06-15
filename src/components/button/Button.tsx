import { buttonProps } from '../../models/buttonType';
import './button.scss';

const Button: React.FC<buttonProps> = ({ title, handleEvent }) => {
    return (
        <button className='btn-event' onClick={handleEvent}>
            <p>{title}</p>
        </button>
    );
};

export default Button;
