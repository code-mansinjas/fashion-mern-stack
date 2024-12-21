
import { combineReducers, createStore } from "redux";
import productReducer from "./product";
import cartListReducer, { AddCartItem, RemoveCartItem } from "./cartlist";
import wishListReducer from "./wishlist";

const reducer = combineReducers({
    products: productReducer,
    cartList: cartListReducer,
    wishList: wishListReducer

})

export const store = createStore(reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)