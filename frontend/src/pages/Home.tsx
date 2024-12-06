import Button from "../components/Button/Button"
import SingleCart from "../components/SingleCart/SingleCart"
import WidgetHeading from "../components/WidgetHeading/WidgetHeading"


const Home = () => {
  return (
    <div>Home
      <SingleCart />
      <Button/>
      <WidgetHeading category="Categories" title="Browse By Category" wrapper={<>Hello</>} />
    </div>
  )
}

export default Home