import React, { useState } from 'react';
import Button from '../components/button/Button';
import { ImageProps } from '../models/imageType';
import './imageDetail.scss';
import { sequence } from '0xsequence';
import { toast } from 'react-toastify';
import SaveWallet from '../saveWallet/SaveWallet';
import ConfirmWallet from '../confirmWallet/ConfirmWallet';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import Donation from '../donation/Donation';
import CompleteWallet from '../completeWallet/CompleteWallet';
import { GaEvent } from '../components/gaEvent/GaEvent';
import {
    createImageState,
    minFreeButton,
    mintForFree,
    saveImageState,
} from '../redux/slice/ImageSlice';
import { ImageSelector } from '../redux/ImageSelector';

const ImageDetail: React.FC<ImageProps> = ({ id, src, name, desc }) => {
    const [image, setImage] = useState(() => {
        const imagePreview = localStorage.getItem('imagePreview');
        return imagePreview;
    });

    const wallet = new sequence.Wallet();
    const dispatch = useAppDispatch();

    const mintStart = ImageSelector('mintStart');
    const minButton = ImageSelector('minFreeButton');
    const confirmState = ImageSelector('confirm');
    const saveState = ImageSelector('save');
    const createState = ImageSelector('create');
    const donateState = ImageSelector('donate');
    const completeState = ImageSelector('complete');

    const handleMint = () => {
        GaEvent('mint_start', { event: 'Click button start' });
        dispatch(minFreeButton(false));
        dispatch(createImageState(true));
    };

    const wallet_create_new = async () => {
        GaEvent('wallet_create_new', { event: 'Wallet_create_new' });
        const connectDetails = await wallet.connect({
            app: 'Your wallet',
            authorize: true,
            settings: {
                theme: 'goldDark',
                bannerUrl: 'https://yoursite.com/banner-image.png',
                includedPaymentProviders: ['moonpay', 'ramp'],
                defaultFundingCurrency: 'matic',
                lockFundingCurrencyToDefault: false,
            },
        });
        wallet.openWallet();
        if (connectDetails.connected) {
            toast.success('Created wallet to success');
        }
        dispatch(mintForFree(false));
        dispatch(createImageState(false));
        dispatch(saveImageState(true));
    };

    const handleAlreadyWallet = async () => {
        GaEvent('wallet_connect', { event: 'Wallet_connect' });
    };

    return (
        <div className='detail__container'>
            <div>{image !== null && <img src={image} alt='images' />}</div>

            <div className='detail-content'>
                {mintStart && (
                    <div>
                        <h2>{name}</h2>
                        <p>{desc}</p>
                    </div>
                )}

                {minButton && (
                    <Button title='Mint for free' handleEvent={handleMint} />
                )}

                {createState && (
                    <div className='detail-button'>
                        <Button
                            title='Create a wallet for me'
                            handleEvent={wallet_create_new}
                        />

                        <Button
                            title='I already have a wallet'
                            handleEvent={handleAlreadyWallet}
                        />
                    </div>
                )}

                {saveState && <SaveWallet />}

                {confirmState && <ConfirmWallet walletId='' />}

                {donateState && <Donation />}

                {completeState && <CompleteWallet />}
            </div>
        </div>
    );
};

export default ImageDetail;
