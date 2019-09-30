import React, { useState, useEffect } from "react";

export const withAnimation = (Component, classesArg, duration = 100) => {
  const WithAnimationComponent = props => {
    const [classes, setClassName] = useState(classesArg);
    useEffect(() => {
      const timeout = window.setTimeout(() => setClassName(""), duration);
      return () => window.clearTimeout(timeout);
    });
    return <Component classes={classes} {...props} />;
  };
  return WithAnimationComponent;
};
