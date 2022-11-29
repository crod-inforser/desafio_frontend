import { IProductState, ISetProductState } from '../../initialStates/product'

export function setProducts(state: IProductState, { payload }: ISetProductState) {
    state.products = payload.products;
}

export function handleSearch(state: IProductState, { payload }: ISetProductState) {
    state.search = payload.payload.search;
}
