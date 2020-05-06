import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "common/Button";

import Layout from "common/Layout";
import TextInput from "common/TextInput";
import Logo from "static/Logo-black-web.png";
import { email, required } from "utils/validation";
import styles from "./styles";

const Clients = ({ classes, handleSubmit, error, isPending }) => {
  return (
    <Layout isAuthenticated title="User Management">
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
            validate={[required, email]}
          />
          <Field
            name="password"
            label="Password"
            placeholder="Password"
            component={TextInput}
            className={classes.field}
            validate={[required]}
            isConfidential
          />
          <Button
            color="primary"
            size="large"
            type="submit"
            isPending={isPending}
          >
            Search
          </Button>
        </section>
      </form>
    </Layout>
  );
};

Clients.propTypes = {
  isPending: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default compose(reduxForm(), withStyles(styles))(Clients);
