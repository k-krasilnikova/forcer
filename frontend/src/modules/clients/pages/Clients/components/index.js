import React from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';

import Layout from "common/Layout";
import Button from "common/Button";
import defaultAvatar from "static/avatar.png";
import styles from "./styles";

const Clients = ({ classes }) => {
  const allClients = [
    {_id: 1, name: "Kate Krasilnikova", marks: 7, },
    {_id: 2, name: "Vlad Vadimov", marks: 1, },
    {_id: 3, name: "Denis Markov", marks: 14, },
    {_id: 4, name: "Ann Kondratsieva", marks: 3, }
  ];
  return (
    <Layout isAuthenticated title="Clients View">
      <div className={classes.wrapper}>
        <div className={classes.clients}>
        <div className={classes.clientHeader}>
          <p>Avatar</p>
          <p className={classes.headerName}>Name</p>
          <p>Registered marks</p>
          <p className={classes.headerMore}>More</p>
        </div>
        {allClients.map((client) => (
            <div key={client._id} className={classes.clientRow}>
              <Avatar alt="Remy Sharp" src={client.avatar || defaultAvatar} />
              <h3 className={classes.name}>{client.name}</h3>
              <div className={classes.marks}>{client.marks}</div>
              <Button
                color="primary"
                size="large"
                type="submit"
                className={classes.button}
              >
                Show Details
              </Button>
            </div>
          ))}
        </div>

        <div className={classes.dashboard}>
          <div className={classes.wrapperDashboard}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
              className={classes.button}
            >
              Create User
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
              className={classes.button}
            >
              Filter
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Clients.propTypes = {};

export default withStyles(styles)(Clients);
