import React, { useState, useEffect } from "react";
import lodashGet from "lodash/get";

export const withDynamicDisplay = (
  Component,
  dynamicValueName,
  duration = 10,
  curve = "ease-in"
) => {
  const WithStateComponent = props => {
    const [dynamicValue, setDynamicValue] = useState(0);

    useEffect(() => {
      const targetValue = lodashGet(props, dynamicValueName);
      if (dynamicValue !== targetValue) {
        const newValue =
          dynamicValue > targetValue ? dynamicValue - 1 : dynamicValue + 1;

        const time =
          curve === "ease-in"
            ? (duration * (targetValue - dynamicValue)) / targetValue
            : duration;
        const timeout = window.setTimeout(
          () => setDynamicValue(newValue),
          time
        );
        return () => window.clearTimeout(timeout);
      }
    });
    const updatedProps = { ...props, [dynamicValueName]: dynamicValue };
    return <Component {...updatedProps} />;
  };
  return WithStateComponent;
};
