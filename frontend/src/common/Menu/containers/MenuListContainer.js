import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import MenuList from "../components/MenuList";
import { menuItemsList } from "../constants";
import * as actionCreators from "../actions";

class MenuListContainer extends Component {
  onMenuClick = () => {
    const {
      actions: { menuTabChanged },
    } = this.props;
    menuTabChanged();
  };

  render() {
    const props = {
      onMenuClick: this.onMenuClick,
      selectedRoute: this.props.location.pathname,
      menuItemsList,
    };
    return <MenuList {...props} />;
  }
}

MenuListContainer.propTypes = {
  location: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(null, mapDispatchToProps)(withRouter(MenuListContainer));
