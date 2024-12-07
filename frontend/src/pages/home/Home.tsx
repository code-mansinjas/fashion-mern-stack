import Button from '../../components/Button/Button'
import { sampleCartData, sampleCategoryData, sampleNewArrivalData } from '../../constant/sampleData'
import CartWidget from '../../widgets/cartWidget/CartWidget'
import CategoryWidget from '../../widgets/categoryWidget/CategoryWidget'
import NewArrivalWidget from '../../widgets/NewArrivalWidget/NewArrivalWidget'
import './home.css'

const Home = () => {
  return (
    <div className="homepage">
         <CartWidget className='mtop50' category="Today's" title="Flash Sales" cartData={sampleCartData} slider={true} />
         <div className="vw-all-product mtop50"><Button text='View all Products'  /></div>
         <CategoryWidget className='mtop50' category='Categories' title='Browse By Category' categoryData={sampleCategoryData} />
         <CartWidget className='mtop50' category="This Month" title="Best Selling Products" cartData={sampleCartData.slice(0,4)} slider={false} />
         <CartWidget className='mtop50' category="Our Products" title="Explore Our Products" cartData={sampleCartData} slider={false} />
         <NewArrivalWidget className='mtop50' category="Featured" title="New Arrival" {...sampleNewArrivalData} /> 
    </div>
  )
}

export default Home