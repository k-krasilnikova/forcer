import React from "react";
import PropTypes from "prop-types";

import Menu from "../components/Menu";

const MenuContainer = () => {
  // onLogoutClick = () => {
  //   const {
  //     authActions: { logout },
  //   } = this.props;
  //   logout();
  // };

  // onGoLiveClick = () => {
  //   this.props.push(Routes.PROFILE_VERIFICATION);
  // };

  const props = {
    email: "lol@gmail.com",
    userName: "Main Admin"
  };
  return <Menu {...props} />;
};

MenuContainer.propTypes = {
  email: PropTypes.string,
  userName: PropTypes.string
};

export default MenuContainer;
