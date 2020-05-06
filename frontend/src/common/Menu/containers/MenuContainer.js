import React, { Component } from "react";
import PropTypes from "prop-types";

import Menu from "../components/Menu";

class MenuContainer extends Component {
  // onLogoutClick = () => {
  //   const {
  //     authActions: { logout },
  //   } = this.props;
  //   logout();
  // };

  // onGoLiveClick = () => {
  //   this.props.push(Routes.PROFILE_VERIFICATION);
  // };

  render() {
    const props = {
      email: "lol@gmail.com",
      userName: "Main Admin",
    };
    return <Menu {...props} />;
  }
}

MenuContainer.propTypes = {
  email: PropTypes.string,
  userName: PropTypes.string,
};

export default MenuContainer;
