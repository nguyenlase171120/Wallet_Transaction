import { configureStore } from '@reduxjs/toolkit';
import ImageSlice from './slice/ImageSlice';

const store = configureStore({
    reducer: {
        ImageState: ImageSlice,
    },
});

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>;

export default store;
