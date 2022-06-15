import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    confirmState: false,
    donateState: false,
    completeState: false,
    isModal: false,
    saveImageState: false,
    createState: false,
    mintStart: true,
    mintFreeButton: true,
    image: '',
};

const ImageSlice = createSlice({
    name: 'imageSlice',
    initialState,
    reducers: {
        confirmState: (state, action) => {
            state.confirmState = action.payload;
        },
        donateState: (state, action) => {
            state.donateState = action.payload;
        },
        completeState: (state, action) => {
            state.completeState = action.payload;
        },
        modalState: (state, action) => {
            state.isModal = action.payload;
        },
        saveImageState: (state, action) => {
            state.saveImageState = action.payload;
        },
        loadImage: (state, action) => {
            state.image = action.payload;
        },
        createImageState: (state, action) => {
            state.createState = action.payload;
        },
        mintForFree: (state, action) => {
            state.mintStart = action.payload;
        },
        minFreeButton: (state, action) => {
            state.mintFreeButton = action.payload;
        },
    },
});

export const {
    confirmState,
    donateState,
    completeState,
    modalState,
    loadImage,
    saveImageState,
    createImageState,
    mintForFree,
    minFreeButton,
} = ImageSlice.actions;
export default ImageSlice.reducer;
