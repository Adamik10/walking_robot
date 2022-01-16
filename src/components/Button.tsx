import React from "react";

interface funcProps {
  onClick(): void;
  prop: string;
}

const Button: React.FC<funcProps> = ({ onClick, prop }) => {
  if (prop !== "conf") {
    return (
      <button type="button" onClick={onClick}>
        {prop === "prev" && "Previous"}
        {prop === "next" && "Next"}
        {prop === "conf" && "Calculate!"}
      </button>
    );
  } else {
    return <input type="submit" value="Submit" />;
  }
};

export default Button;
