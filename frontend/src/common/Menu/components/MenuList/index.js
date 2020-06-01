import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import MenuListComponent from "@material-ui/core/MenuList";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "./styles";

const MenuList = ({ classes, selectedRoute, onMenuClick, menuItemsList }) => {
  return (
    <div className={classes.container}>
      <MenuListComponent className={classes.menuList} component="nav">
        {menuItemsList.map(({ label, id, icon, url }) => {
          return (
            <Link to={url} className={classes.linkContainer} key={id}>
              <MenuItem
                selected={selectedRoute.includes(url)}
                className={classes.menuListItem}
                classes={{ selected: classes.menuListItemSelected }}
                button
                onClick={onMenuClick}
              >
                <div className={classes.checked} />
                <ListItemIcon className={classes.iconContainer}>
                  <img src={icon} alt={label} className={classes.icon} />
                </ListItemIcon>
                <ListItemText
                  className={classes.textContainer}
                  disableTypography
                  primary={
                    <Typography className={classes.menuListItemText}>
                      {label}
                    </Typography>
                  }
                />
              </MenuItem>
            </Link>
          );
        })}
      </MenuListComponent>
    </div>
  );
};

MenuList.propTypes = {
  selectedRoute: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  menuItemsList: PropTypes.array.isRequired
};

export default withStyles(styles)(MenuList);
