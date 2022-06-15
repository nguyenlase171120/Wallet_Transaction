import React from 'react';
import { useAppDispatch } from '../redux/hook';
import {
    donateState,
    minFreeButton,
    modalState,
} from '../redux/slice/ImageSlice';

const Cancel = () => {
    const dispatch = useAppDispatch();
    dispatch(modalState(true));
    dispatch(donateState(true));
    dispatch(minFreeButton(false));

    return (
        <div>
            <h1>Cancel</h1>
            <p>Your purchased was canceled</p>
        </div>
    );
};

export default Cancel;
