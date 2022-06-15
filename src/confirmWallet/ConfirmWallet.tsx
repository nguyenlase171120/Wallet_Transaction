import Button from '../components/button/Button';
import { GaEvent } from '../components/gaEvent/GaEvent';
import { useAppDispatch } from '../redux/hook';
import { confirmState, donateState } from '../redux/slice/ImageSlice';
import './confirmWallet.scss';

interface walletProps {
    walletId: string;
}

const ConfirmWallet: React.FC<walletProps> = ({ walletId }) => {
    const dispatch = useAppDispatch();

    const handleConfirmWallet = () => {
        GaEvent('wallet_confirm', { event: 'wallet_Confirm' });

        dispatch(confirmState(false));
        dispatch(donateState(true));
    };

    return (
        <div className='confirm__container'>
            <h2>Your Current Connected Wallet</h2>

            <div className='confirm-event'>
                <div className='confirm-code'>x632...78fe</div>
                <Button title='CONTINUE' handleEvent={handleConfirmWallet} />
            </div>

            <p className='wallet-change'>Change Wallet</p>
        </div>
    );
};

export default ConfirmWallet;
