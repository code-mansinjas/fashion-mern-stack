import Button from "../components/Button/Button"
import SingleCart from "../components/SingleCart/SingleCart"
import WidgetHeading from "../components/WidgetHeading/WidgetHeading"
import { sampleCartData, sampleCategoryData, sampleNewArrivalData } from "../constant/sampleData"
import CartWidget from "../widgets/cartWidget/CartWidget"
import CategoryWidget from "../widgets/categoryWidget/CategoryWidget"
import NewArrivalWidget from "../widgets/NewArrivalWidget/NewArrivalWidget"


const Home = () => {
  return (
    <div>Home
      {/* <SingleCart />
      <Button/>
      <WidgetHeading category="Categories" title="Browse By Category" wrapper={<>Hello</>} />

      <CartWidget category="Categories" title="Browse By Category" cartData={sampleCartData} slider={false} />

      <CategoryWidget category="Categories" title="Browse By Category" categoryData={sampleCategoryData} />

      <NewArrivalWidget category="Categories" title="Browse By Category" {...sampleNewArrivalData} /> */}
    </div>
  )
}

export default Home