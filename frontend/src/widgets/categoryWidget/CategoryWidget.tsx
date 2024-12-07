import WidgetHeading, {
  WidgetHeadingInterface,
} from "../../components/WidgetHeading/WidgetHeading";
import CategoryComp, {
  CategoryCompInterface,
} from "../../components/CategoryComp/CategoryComp";
import './categorywidget.css'

interface CategoryWidgetInterface extends WidgetHeadingInterface {
  categoryData: Array<CategoryCompInterface>;
  className?: string;
}

const CategoryWidget = ({
  category = "",
  title = "",
  wrapper,
  categoryData,
  className = "",
}: CategoryWidgetInterface) => {
  return (
    <div className={`categorywidget ${className} `}>
      <WidgetHeading category={category} title={title} wrapper={wrapper} />
      <div className="catgy-list">
        {categoryData?.map((category) => (
          <CategoryComp {...category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryWidget;
