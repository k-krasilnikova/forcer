import React from "react";
// import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";

import Button from "common/Button";
import CustomModal from "common/Modal";
import TextInput from "common/TextInput";
import Selector from "common/Selector";
import { required } from "utils/validation";
import styles from "./styles";

const AddNews = ({ classes, handleSubmit }) => {
  return (
    <div className={classes.addNews}>
      <CustomModal>
        <div className={classes.form}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Field
              name="title"
              label="Title"
              placeholder="Title"
              type="text"
              component={TextInput}
              className={classes.field}
              validate={[required]}
            />
            <Field
              name="description"
              label="Description"
              placeholder="Description"
              component={TextInput}
              className={classes.field}
              validate={[required]}
            />
            {/* <Field
              name="image_url"
              label="Image"
              placeholder="Image"
              component={TextInput}
              className={classes.field}
              validate={[required]}
            /> */}
            <Field
              name="tags"
              label="Tags"
              placeholder="Tags"
              component={Selector}
              className={classes.field}
              validate={[required]}
            />
            <Button size="large" type="submit" className={classes.button}>
              Publish
            </Button>
          </form>
        </div>
      </CustomModal>
    </div>
  );
};

AddNews.propTypes = {};

export default compose(reduxForm(), withStyles(styles))(AddNews);
