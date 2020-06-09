import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import styles from "./styles";

const CustomModal = ({ classes, isModalOpen, onClose, children }) => {
  return (
    <Modal open={isModalOpen} onClose={onClose} className={classes.modal}>
      <div className={classes.modalWrapper}>{children}</div>
    </Modal>
  );
};

export default withStyles(styles)(CustomModal);
