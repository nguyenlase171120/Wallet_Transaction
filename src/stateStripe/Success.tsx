import { useAppDispatch } from '../redux/hook';
import {
    completeState,
    donateState,
    minFreeButton,
    modalState,
} from '../redux/slice/ImageSlice';

const Success = () => {
    const dispatch = useAppDispatch();
    dispatch(modalState(true));
    dispatch(donateState(false));
    dispatch(completeState(true));
    dispatch(minFreeButton(false));

    return (
        <div>
            <h1>Success</h1>
            <p>Thank you for your donate</p>
        </div>
    );
};

export default Success;
