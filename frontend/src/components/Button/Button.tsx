import React from "react";
import "./button.css";

interface ButtonInterface {
  text?: string;
  style?: React.CSSProperties | undefined;
}

const Button = ({
  style = {},
  text = "Click Me",
}: ButtonInterface) => {
  return (
    <button
      style={{
        color: "#fff",
        backgroundColor: "#DB4444",
        fontSize: 16,
        padding:"16px 30px",
        borderRadius: 5,
        ...style,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
