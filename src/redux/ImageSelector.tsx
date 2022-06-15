import { useAppSelector } from './hook';

export const ImageSelector = (type: string) => {
    const confirmState = useAppSelector(
        (state) => state.ImageState.confirmState
    );

    const createState = useAppSelector((state) => state.ImageState.createState);
    const saveState = useAppSelector(
        (state) => state.ImageState.saveImageState
    );
    const donateState = useAppSelector((state) => state.ImageState.donateState);
    const completeState = useAppSelector(
        (state) => state.ImageState.completeState
    );

    const mintStart = useAppSelector((state) => state.ImageState.mintStart);
    const minFreeButton = useAppSelector(
        (state) => state.ImageState.mintFreeButton
    );

    switch (type) {
        case 'confirm': {
            return confirmState;
        }
        case 'create': {
            return createState;
        }
        case 'save': {
            return saveState;
        }
        case 'donate': {
            return donateState;
        }
        case 'complete': {
            return completeState;
        }
        case 'mintStart': {
            return mintStart;
        }
        case 'minFreeButton': {
            return minFreeButton;
        }
    }
};
