import React, { useCallback } from "react";

import CustomModal from "../components";

const CustomModalContainer = ({ children }) => {
  const [isModalOpen, setModalState] = React.useState(false);

  const changeModalState = useCallback(() => {
    setModalState(!isModalOpen);
  }, [isModalOpen, setModalState]);

  const onClose = useCallback(() => {
    setModalState(false);
  }, [setModalState]);

  return (
    <CustomModal
      isModalOpen={isModalOpen}
      onClose={onClose}
      children={children}
    />
  );
};

export default CustomModalContainer;
