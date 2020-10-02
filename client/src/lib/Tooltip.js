import React from "react";

export const Tooltip = ({ content, position }) => {
  return <span className={"tooltip tooltip--" + position}>{content}</span>;
};
