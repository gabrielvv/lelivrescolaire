import React, { useState } from "react";
import lodashGet from "lodash/get";

export const withDynamicDisplay = (Component, dynamicValueName) => {
  const WithStateComponent = props => {
    const [dynamicValue, setDynamicValue] = useState(0);
    const targetValue = lodashGet(props, dynamicValueName);
    if (dynamicValue < targetValue) {
      setTimeout(
        () => setDynamicValue(dynamicValue + 1),
        (10 * (targetValue - dynamicValue)) / targetValue
      );
    }
    const updatedProps = { ...props, [dynamicValueName]: dynamicValue };
    return <Component {...updatedProps} />;
  };
  return WithStateComponent;
};
