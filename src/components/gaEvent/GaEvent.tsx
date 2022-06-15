import { gtag } from '../../gtag';

export const GaEvent = (name: string, value: { event: string }) => {
    gtag('event', name, value);
};
