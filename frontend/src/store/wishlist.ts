interface CartListInterface { 
    productId: number;
}

const initialCartList: Array<CartListInterface> = []

const TOGGLEWISHLISTITEM = 'toggle/wishlistitem'

export const ToggleWishlistItem = (productId: number) => {
    return {
        type: TOGGLEWISHLISTITEM,
        payload: { productId }
    }
}


export default function wishListReducer (state = initialCartList, action : { type: string, payload?: any } = { type: "" }) {
    switch(action.type){
        case TOGGLEWISHLISTITEM:
            if(state.find(product => product.productId == action.payload?.productId)){
                return [...state.filter(product => product.productId != action.payload?.productId)]
            }else{
                return [...state, action.payload]
            }
        break;
        default:
            return state
    }
}

