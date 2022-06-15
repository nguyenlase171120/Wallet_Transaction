import React from 'react';

import './listImage.scss';
import { listImages } from '../assets';
import ImageDetail from '../detail/ImageDetail';

//Library
import Modal from 'react-modal';
import { ImageProps } from '../models/imageType';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import {
    completeState,
    donateState,
    modalState,
    saveImageState,
} from '../redux/slice/ImageSlice';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

const ListImages = () => {
    const [itemSelected, setItemSelected] = React.useState<ImageProps>({
        id: '',
        desc: '',
        src: '',
        name: '',
    });

    const statusModal = useAppSelector((state) => state.ImageState.isModal);
    const dispatch = useAppDispatch();

    const handleImage = (item: ImageProps) => {
        localStorage.setItem('imagePreview', item.src);
        setItemSelected(item);
        dispatch(modalState(true));
    };

    const handleClose = () => {
        dispatch(modalState(false));
        dispatch(donateState(false));
        dispatch(saveImageState(false));
    };

    return (
        <div className='list_container'>
            {listImages.map((image, key) => {
                return (
                    <div className='image_container' key={key}>
                        <img
                            src={image.src}
                            alt='images'
                            onClick={() => handleImage(image)}
                        />
                    </div>
                );
            })}

            <Modal isOpen={statusModal} style={customStyles}>
                <button onClick={handleClose} className='btn-close'>
                    &times;
                </button>
                <ImageDetail
                    id={itemSelected.id}
                    src={itemSelected.src}
                    name={itemSelected.name}
                    desc={itemSelected.desc}
                />
            </Modal>
        </div>
    );
};

export default ListImages;
