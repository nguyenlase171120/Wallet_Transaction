import { passpharseGenerator } from '../assets/ListValues';
import Button from '../components/button/Button';
import { GaEvent } from '../components/gaEvent/GaEvent';
import { useAppDispatch } from '../redux/hook';
import { confirmState, saveImageState } from '../redux/slice/ImageSlice';
import './saveWallet.scss';

const SaveWallet = () => {
    const dispatch = useAppDispatch();

    const handleSaveWallet = () => {
        GaEvent('save_wallet_seed', { event: 'save click wallet button' });
        dispatch(confirmState(true));
        dispatch(saveImageState(false));
    };

    return (
        <div className='save__container'>
            <div className='save-desc'>
                <h3>Your wallet</h3>
                <p>
                    We've created a temporary wallet for you since you don't
                    have one. Record this secret passpharse and don't share it
                    with anyone. You can access your NFT later by downloading a
                    wallet like Metamask, Coinbase, or others and applying this
                    phrase
                </p>
            </div>

            <div className='save__generator'>
                {passpharseGenerator.map((character, key) => {
                    return (
                        <p key={key} className='save-character'>
                            {character}
                        </p>
                    );
                })}
            </div>

            <div className='save-confirm'>
                <div className='save-privacy'>
                    <input type='checkbox' />
                    <span>
                        I have written down my seed phrase, and understand that
                        if i lose this phrase, i will permanetly lose access to
                        my NFTs
                    </span>
                </div>

                <Button title='CONTINUE' handleEvent={handleSaveWallet} />
            </div>
        </div>
    );
};

export default SaveWallet;
