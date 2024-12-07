import "./singlecart.css";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";

export interface SingleCartInterface {
  img?: string;
  title?: string;
  price?: number;
  discountPrice?: number | boolean;
  rating?: number;
  ratingCount?: number;
  wishlist?: boolean;
  tag?: string;
  tagColor?: string;
}

const SingleCart = ({
  discountPrice,
  img = "/product1.png",
  price = 100,
  rating = 3,
  ratingCount = 45,
  title = "sample text for title",
  wishlist,
  tag = "-40%",
  tagColor = "#DB4444"
}: SingleCartInterface) => {
  return (
    <div className="single-cart">
      <div className="cart-img-sec">
        <img className="cartimg" src={img} alt={title}  />
        <div className="cartwish-cont">
          {!wishlist ? <FaRegHeart size={20} /> : <FaHeart size={20} />}
        </div>
        { tag ? <div className="carttag" style={{backgroundColor: tagColor}} >{tag}</div> : <></> }
        <div className="addcart-cont"><p>Add To Cart</p></div>
      </div>
      <div className="cart-details">
        <p>{title}</p>
        <p className="price-cont">
          {discountPrice && price ? (
            <>
              <span className="pprice">{discountPrice}</span>
              <span className="oprice">
                <del>{price}</del>
              </span>
            </>
          ) : (
            <span className="pprice">{price}</span>
          )}
        </p>
        <p className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={20}
              color={star <= rating ? "#ffc107" : "#e4e5e9"}
            />
          ))}
          {ratingCount ? (
            <span className="rcount">({ratingCount})</span>
          ) : (
            <></>
          )}
        </p>
      </div>
    </div>
  );
};

export default SingleCart;
