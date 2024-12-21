interface CartListInterface { 
    productId: number;
    quantity: number;
}

const initialCartList: Array<CartListInterface> = []

const ADDCARTITEM = 'add/cartitem'
const REMOVECARTITEM = 'remove/cartitem'

export const AddCartItem = (payload: CartListInterface) => {
    return {
        type: ADDCARTITEM,
        payload:{
            ...payload,
            quantity: 1,
        }
    }
}

export const RemoveCartItem = (productId: number) => {
    return {
        type: REMOVECARTITEM,
        payload: { productId }
    }
}


export default function cartListReducer (state = initialCartList, action : { type: string, payload?: any } = { type: "" }) {
    const productExist = state.find((product) => product.productId == action.payload?.productId)
    switch(action.type){
        case ADDCARTITEM:   
            if(productExist){
                return state.map((product) => {
                    if(product.productId == action.payload?.productId){
                        return { ...product, quantity: product.quantity + 1 }
                    }
                    return product
                })
            }else{
                return [...state, action?.payload]
            }
        break;
        case REMOVECARTITEM:
            if(productExist){
                return state.map((product) => {
                    if(product.productId == action.payload?.productId){
                        if(product.quantity == 1){
                            return null
                        }
                        return { ...product, quantity: product.quantity - 1 }
                    }
                    return product
                }).filter(product => product != null)
            }
            return [...state.filter((cartList) => cartList?.productId != action?.payload?.productId)]
        break;
        default:
            return state
    }
}

