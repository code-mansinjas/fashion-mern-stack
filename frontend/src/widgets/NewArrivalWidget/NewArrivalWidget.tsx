import WidgetHeading, { WidgetHeadingInterface } from '../../components/WidgetHeading/WidgetHeading'
import './newarrivalwidget.css'

interface ItemValueInterface {
    title: string
    description: string
    shopNowLink: string
    imgUrl: string
}

export interface ArrivalWidgetInterface {
    firstItem:  ItemValueInterface
    secondItem: ItemValueInterface
    thirdItem: ItemValueInterface
    fourthItem: ItemValueInterface
}

export interface NewArrivalWidgetInterface extends WidgetHeadingInterface, ArrivalWidgetInterface {
    className?: string;
}

const ItemComp = ({ description, imgUrl, shopNowLink, title }: ItemValueInterface) => {
    return (
        <div className="img-out-cont">
            <img className='img-cont' src={imgUrl} alt={title} />
            <div className='img-desc-cont' >
                <p className="img-title">{title}</p>
                <p className="img-desc">{description}</p>
                <button className='shop-btn'>Shop Now</button>
            </div>
        </div>
    )
}

const NewArrivalWidget = ({
    category,
    title,
    wrapper,
    firstItem,
    fourthItem,
    secondItem,
    thirdItem,
    className = "",
}:NewArrivalWidgetInterface) => {
  return (
   <div className={`new-arrival-widget ${className}`}>
    <WidgetHeading category={category} title={title} wrapper={wrapper} />
    <div className="new-arrival-comp">
        <div className="firstItem">
            <ItemComp {...firstItem} />
        </div>
        <div className="secondItem">
            <ItemComp {...secondItem} />
        </div>
        <div className="thirdItem">
            <ItemComp {...thirdItem} />
        </div>
        <div className="fourthItem">
            <ItemComp {...fourthItem} />
        </div>
    </div>
   </div>
  )
}

export default NewArrivalWidget