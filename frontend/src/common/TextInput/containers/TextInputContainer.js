import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import TextInput from "../components/TextInput";

class TextInputContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowPassword: false,
      isTooltipShown: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.label !== prevProps.label) {
      this.forceUpdate();
    }
  }

  checkCapsLock = (event) => {
    if (!event) {
      return;
    }
    const { isConfidential } = this.props;
    if (isConfidential && event.getModifierState) {
      this.setState({
        isTooltipShown: event.getModifierState("CapsLock"),
      });
    }
  };

  onChangeVisibility = () => {
    const { isShowPassword } = this.state;

    this.setState({ isShowPassword: !isShowPassword });
  };

  render() {
    const { isConfidential } = this.props;
    const props = {
      isTooltipShown: this.state.isTooltipShown,
      checkCapsLock: this.checkCapsLock,
    };

    return isConfidential ? (
      <TextInput
        isShowPassword={this.state.isShowPassword}
        onChangeVisibility={this.onChangeVisibility}
        tooltip="lalalal"
        {...props}
        {...this.props}
      />
    ) : (
      <TextInput isShowPassword {...props} {...this.props} />
    );
  }
}

TextInputContainer.propTypes = {
  isConfidential: PropTypes.bool,
};

TextInputContainer.defaultProps = {
  isConfidential: false,
};

export default TextInputContainer;
