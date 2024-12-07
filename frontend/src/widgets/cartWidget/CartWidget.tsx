import WidgetHeading, {
  WidgetHeadingInterface,
} from "../../components/WidgetHeading/WidgetHeading";
import SingleCart, {
  SingleCartInterface,
} from "../../components/SingleCart/SingleCart";
import "./cartwidget.css"

interface CartListingInterface extends WidgetHeadingInterface {
  cartData?: Array<SingleCartInterface>;
  slider: boolean;
  className?: string;
}

const CartListing = ({
  category = "",
  cartData = [],
  title = "",
  wrapper,
  slider = false,
  className = ""
}: CartListingInterface) => {
  return (
    <div className={`cartlist ${className}`}>
      <WidgetHeading category={category} title={title} wrapper={wrapper} />
      <div className={`${slider ? "slider-wrapper" : ""}`}>
      <div className={`cartlist-comp ${slider ? "slider" : "grid"} `}>
        {cartData?.map((cart) => (
          <SingleCart {...cart} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default CartListing;
