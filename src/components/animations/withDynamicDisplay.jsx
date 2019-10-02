import React, { useState, useEffect } from "react";
import lodashGet from "lodash/get";

const CURVES = {
  EASE_IN: 'EASE_IN',
  LINEAR: 'LINEAR',
};

const withDynamicDisplay = (
  Component,
  dynamicValueName,
  duration = 10,
  curve = CURVES.EASE_IN
) => {
  const WithStateComponent = props => {
    const [dynamicValue, setDynamicValue] = useState(0);

    useEffect(() => {
      const targetValue = lodashGet(props, dynamicValueName);
      if (dynamicValue !== targetValue) {
        const newValue =
          dynamicValue > targetValue ? dynamicValue - 1 : dynamicValue + 1;

        const time =
          curve === CURVES.EASE_IN
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

withDynamicDisplay.CURVES = CURVES;

export default withDynamicDisplay;