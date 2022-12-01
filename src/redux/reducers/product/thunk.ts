import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { actions } from './'
import { ISetProductState } from '../../initialStates/product'

export const searchProductThunk = createAsyncThunk('product/searchProduct', async ({ payload }: ISetProductState, { dispatch, rejectWithValue }) => {
    try {
        console.log("sending")
        const response = await axios.get(`https://desafio-backend-crod.herokuapp.com/products/search?search=${payload.search}`)
        console.log("ok!", response.data)
        dispatch(actions.setProducts({ products: response.data.products }))
    } catch (e) {
        console.log("error")
        return rejectWithValue(e)
    }
    return {
        products: []
    }
})
