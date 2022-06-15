import React from 'react';
import './modal.scss';

interface modalProps {
    children: JSX.Element;
}

const Modal: React.FC<modalProps> = ({ children }) => {
    console.log(children);
    return (
        <div className='modal'>
            <div className='modal-content'>Hello anh em</div>
        </div>
    );
};

export default Modal;
