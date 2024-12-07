import React from "react";
import "./widgetheading.css";

export interface WidgetHeadingInterface {
  category: string;
  title: string;
  wrapper?: React.ReactNode;
}

const WidgetHeading = ({
  category,
  title,
  wrapper = <></>,
}: WidgetHeadingInterface) => {
  return (
    <div className="widgthead">
      <div className="left-widgthead">
        <div className="widgt-categry">
          <div></div>
          {category}
        </div>
        <div className="widgt-title">{title}</div>
      </div>
      <div className="right-widgthead">{wrapper}</div>
    </div>
  );
};

export default WidgetHeading;
