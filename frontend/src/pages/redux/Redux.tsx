import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { AddCartItem } from '../../store/cartlist';
import './redux.css'
import { useDispatch, useSelector } from "react-redux"
import { ToggleWishlistItem } from '../../store/wishlist';

interface ProductInterface {
    id: number;
    title: string;
    rating: { rate: number, count: number };
    price: number;
    image: string;
    wishlist: boolean;
}

const Redux = () => {
    const productData = useSelector((state: any) => state?.products)
    const wishListData = useSelector((state:any) => state?.wishList)
    return (
        <div className='products-container'>
            {
                productData?.map(({ id, image, price, rating, title }: ProductInterface) => (
                    <Product
                        key={id}
                        image={image}
                        price={price}
                        rating={rating}
                        title={title}
                        id={id}
                        wishlist={ wishListData?.find((product:any) => product?.productId == id ) ? true : false}
                    />
                ))
            }
        </div>
    )
}

function Product({ title, rating, price, image, id, wishlist }: ProductInterface) {
    
    const dispatch = useDispatch()

    return (
        <div className="product">
            <div className="wishlist">
                {!wishlist ? <FaRegHeart onClick={() => dispatch(ToggleWishlistItem(id))} size={20} /> : <FaHeart onClick={() => dispatch(ToggleWishlistItem(id))} size={20} />}
            </div>
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="title-container">
                <h3>
                    <a href="#">{title}</a>
                </h3>
            </div>
            <div className="price-rating-container">
                <p className="rating">{+rating.rate} ★ ★ ★ ★</p>
                <p className="price">{price}</p>
            </div>
            <div className="cta-container">
                <button onClick={() => dispatch(AddCartItem({productId: id, quantity: 1}))} >Add to Cart</button>
                <button>Buy Now</button>
            </div>
        </div>
    )
}

export default Redux
