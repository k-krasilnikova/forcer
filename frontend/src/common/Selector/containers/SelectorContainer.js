import React, { useCallback } from "react";

import Selector from "../components";

const SelectorContainer = ({ label }) => {
  const [selectorValues, changeSelectorValue] = React.useState([]);

  const selectorOnChange = useCallback(
    (data) => {
      const selectedItem = data.target ? data.target.value : "";
      changeSelectorValue([...selectedItem]);
    },
    [changeSelectorValue]
  );

  return (
    <Selector
      selectorOnChange={selectorOnChange}
      values={selectorValues}
      label={label}
    />
  );
};

export default SelectorContainer;
