import React from "react";
import PropTypes from "prop-types";
import {
  // Field,
  reduxForm,
} from "redux-form";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

import Layout from "common/Layout";
import Logo from "static/Logo-white.png";
import styles from "./styles";

const SignInForm = ({ classes, handleSubmit, error, isPending }) => {
  return (
    <Layout>
      {/* <DocumentTitle
          title={t("signIn.documentTitle", { company: CURRENT_HUB_LABEL })}
        /> */}
      <form className={classes.form} onSubmit={handleSubmit}>
        {/* <CustomLink to="/"> */}
        <img src={Logo} alt="logo" className={classes.logo} />
        {/* </CustomLink> */}
        <section className={classes.wrapper}>
          {/* {error && (
            <span className={classes.formError}>
              <ErrorOutline className={classes.errorIcon} />
              &nbsp;
            </span>
          )} */}
          {/* <Field
            name="email"
            label="common:labels.email"
            placeholder="common:labels.email"
            type="text"
            component={TextField}
          />
          <Field
            name="password"
            label="common:labels.password"
            placeholder="common:labels.password"
            component={TextField}
          />
          <Button
            fullWidth
            color="primary"
            size="large"
            label="buttons.logIn"
            type="submit"
          /> */}
        </section>
      </form>
    </Layout>
  );
};

SignInForm.propTypes = {
  isPending: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

SignInForm.defaultProps = {
  error: null,
};

export default compose(reduxForm(), withStyles(styles))(SignInForm);
