import { combineReducers } from '@reduxjs/toolkit'
import { reducers as productReducer } from './product'
import { IProductState } from '../initialStates/product'

export const reducer = combineReducers({
    product: productReducer,
})

export interface IRootState {
    product: IProductState
}