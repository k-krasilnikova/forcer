import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Layout from "common/Layout";
import TextInput from "common/TextInput";
import Logo from "static/Logo-black-web.png";
import styles from "./styles";

const SignInForm = ({ classes, handleSubmit, error, isPending }) => {
  return (
    <Layout>
      <form className={classes.form} onSubmit={handleSubmit}>
        {/* <CustomLink to="/"> */}
        <img src={Logo} alt="logo" className={classes.logo} />
        {/* </CustomLink> */}
        <section className={classes.wrapper}>
          <Field
            name="email"
            label="Email"
            placeholder="Email"
            type="text"
            component={TextInput}
            className={classes.field}
          />
          <Field
            name="password"
            label="Password"
            placeholder="Password"
            component={TextInput}
            className={classes.field}
          />
          <Button fullWidth color="primary" size="large" type="submit">
            Sign In
          </Button>
        </section>
      </form>
    </Layout>
  );
};

SignInForm.propTypes = {
  isPending: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default compose(reduxForm(), withStyles(styles))(SignInForm);
