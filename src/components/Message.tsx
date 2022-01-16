import React from "react";

interface messageProps {
  prop: string;
}

export const Message: React.FC<messageProps> = ({ prop }) => {
  return (
    <span className={prop === "error" ? "warning" : ""}>
      {prop === "error" &&
        "You need to fill out all the fields in order to calculate your robot's moves"}
    </span>
  );
};
