import "./categorycomp.css"

export interface CategoryCompInterface {
    imgUrl: string;
    categoryName: string;
}

const CategoryComp = ( { categoryName, imgUrl }:CategoryCompInterface) => {
  return (
    <div className='category-comp'>
        <img src={imgUrl} alt={categoryName} className="category-icon" />
        <p className="category-name">{categoryName}</p>
    </div>
  )
}

export default CategoryComp