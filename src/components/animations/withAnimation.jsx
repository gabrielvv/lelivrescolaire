import React, { useState, useEffect } from "react";

const withAnimation = (Component, cssClassArg, duration = 100) => {
  const WithAnimationComponent = props => {
    const [cssClass, setCSSClassName] = useState(cssClassArg);
    useEffect(() => {
      const timeout = window.setTimeout(() => setCSSClassName(""), duration);
      return () => window.clearTimeout(timeout);
    });
    return <Component cssClass={cssClass} {...props} />;
  };
  return WithAnimationComponent;
};

export default withAnimation;