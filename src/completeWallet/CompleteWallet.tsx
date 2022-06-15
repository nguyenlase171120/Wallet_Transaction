import React from 'react';
import { toast } from 'react-toastify';
import Button from '../components/button/Button';
import { GaEvent } from '../components/gaEvent/GaEvent';
import { useAppDispatch } from '../redux/hook';
import {
    completeState,
    minFreeButton,
    mintForFree,
    modalState,
} from '../redux/slice/ImageSlice';
import './completeWallet.scss';

const CompleteWallet = () => {
    const dispatch = useAppDispatch();

    const handleCompleteConversion = () => {
        GaEvent('mint_complete', { event: 'Complete version' });
        dispatch(modalState(false));
        dispatch(completeState(false));
        dispatch(mintForFree(true));
        dispatch(minFreeButton(true));
        toast.success('Successfully completed transaction');
    };
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        GaEvent('note_added', { event: 'note_added' });
    };

    return (
        <div className='complete_container'>
            <div className='complete_content'>
                <h2>mint with note</h2>
                <p>
                    Add an optional personalized note to be recorded forever on
                    the blockchain with your NFT. This text will be added to the
                    NFT's metadata and will be visible on marketplaces like
                    Opensea
                </p>

                <textarea
                    rows={4}
                    cols={50}
                    onChange={(e) => handleTextChange(e)}
                />
            </div>

            <Button title='MINT NFT' handleEvent={handleCompleteConversion} />
        </div>
    );
};

export default CompleteWallet;
