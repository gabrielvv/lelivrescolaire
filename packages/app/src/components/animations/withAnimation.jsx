import React, { useState } from "react";

export const withAnimation = (Component, classesArg, duration) => {
  const WithAnimationComponent = props => {
    const [classes, setClassName] = useState(classesArg);
    setTimeout(() => setClassName(""), duration);
    return <Component classes={classes} {...props} />;
  };
  return WithAnimationComponent;
};
