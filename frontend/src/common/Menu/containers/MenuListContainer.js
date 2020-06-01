import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import MenuList from "../components/MenuList";
import { menuItemsList } from "../constants";
import { menuTabChanged } from "../actions";

const MenuListContainer = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const onMenuClick = useCallback(() => {
    dispatch(menuTabChanged());
  }, [dispatch]);

  return (
    <MenuList
      menuItemsList={menuItemsList}
      onMenuClick={onMenuClick}
      selectedRoute={location.pathname}
    />
  );
};

MenuListContainer.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default MenuListContainer;
