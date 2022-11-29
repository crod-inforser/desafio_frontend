import { createSlice } from '@reduxjs/toolkit'

import { setProducts, handleSearch } from './reducer'

import { productInitialState } from '../../initialStates/product'

const productSlice = createSlice({
    name: 'product',
    initialState: productInitialState,
    reducers: {
        setProducts,
        handleSearch,
    },
})

export const reducers = productSlice.reducer
export const actions = productSlice.actions