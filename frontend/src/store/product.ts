import { fakeProductData } from "../constant/productData"

const CREATEPRODUCT = 'createProduct'
const REMOVEPRODUCT = 'removeProduct'

export const AddProduct = (payload: any) => {
    return {
        type: CREATEPRODUCT,
        payload
    }
}

export const DeletProduct = (productId: number) => {
    return {
        type: REMOVEPRODUCT,
        payload: { productId }
    }
}


export default function productReducer (state = fakeProductData, action : { type: string, payload?: any } = { type: "" }) {
    switch(action.type){
        case CREATEPRODUCT:
            return [...state, action?.payload]
        break;
        case REMOVEPRODUCT:
            return [...state.filter((product) => product?.id != action?.payload?.productId)]
        break;
        default:
            return state
    }
}

