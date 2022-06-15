import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'framer-motion';
import { listDonate } from '../assets/ListValues';
import Button from '../components/button/Button';
import { GaEvent } from '../components/gaEvent/GaEvent';
import { localStorae } from '../components/localStorage/LocalStorage';
import { useAppDispatch } from '../redux/hook';
import { completeState, donateState } from '../redux/slice/ImageSlice';
import './donation.scss';

let stripePromise: any;

const getStripe = () => {
    if (!stripePromise) {
        const key = process.env.REACT_APP_STRIPE_KEY;

        if (key !== undefined) {
            stripePromise = loadStripe(key);
        }
    }
    return stripePromise;
};

const Donation = () => {
    const dispatch = useAppDispatch();
    const item = {
        price: 'price_1LAlJyBY8CNbwLwVOU2gpxWI',
        quantity: 1,
    };

    const checkoutOptions = {
        lineItems: [item],
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
    };

    const redirectToCheckout = async () => {
        console.log('redirect to checkout');
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log('stripe checkout error', error);
    };

    const handleTypeUSD = (type: string) => {
        GaEvent('mint_donate_usd', {
            event: 'donate_usd',
        });
        localStorae('typeAmount', type);
    };

    const handleTypeCrypto = (type: string) => {
        GaEvent('mint_donate_crypto', {
            event: 'crypto',
        });
        localStorae('typeAmount', type);
    };

    const handleMoneyDonate = (e: string) => {
        localStorae('amount', e);
    };
    const handleDonate = async () => {
        await redirectToCheckout();
    };

    const handleWithoutDonation = () => {
        GaEvent('mint_no_donate', { event: 'number_click_no_donate' });

        dispatch(completeState(true));
        dispatch(donateState(false));
    };

    return (
        <div className='donate__container'>
            <div className='donate-title'>
                <h2>Make a donation</h2>
                <p>
                    NFTs in this collection are free to mint. Your donation will
                    help fund verified humanitarian aid and cultural charity
                    projects in Ukraine facilitated by the Kjiv school of
                    Economics Charitable Foundation and its official partners
                </p>
            </div>

            <div className='donate-content'>
                <div className='donate-item'>
                    {listDonate.map((amount, key) => {
                        return (
                            <button
                                key={key}
                                id={key + ''}
                                onClick={() => handleMoneyDonate(key + '')}
                            >
                                {amount}
                            </button>
                        );
                    })}
                </div>

                <div className='donate-types'>
                    <div className='donate__types-amount'>
                        <motion.button
                            className='btn-item'
                            id='USD'
                            onClick={() => handleTypeUSD('USD')}
                        >
                            USD
                        </motion.button>
                        <motion.button
                            className='btn-item'
                            id='Crypto'
                            onClick={() => handleTypeCrypto('Crypto')}
                        >
                            CRYPTO
                        </motion.button>
                    </div>

                    <Button title='DONATE' handleEvent={handleDonate} />
                </div>

                <p className='without-donation' onClick={handleWithoutDonation}>
                    Continue without donation
                </p>
            </div>
        </div>
    );
};

export default Donation;
