import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { ErrorOutline } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import classNames from "classnames";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";

import styles from "./styles";

const TextInput = ({
  classes,
  input,
  meta: { error, submitFailed },
  label,
  onChangeVisibility,
  placeholder,
  isShowPassword,
  twoErrorMessageLines,
  isConfidential,
  tipText,
  className,
  isOptional,
  endAdornment,
  inputClassName,
  isTooltipShown,
  tooltip,
  checkCapsLock,
  wrapperClassName,
  borderColor,
  focused,
  ...others
}) => {
  const inputStyle = classNames([classes.input, inputClassName], {
    [classes.privateInput]: !isShowPassword
  });
  const textFieldContainerStyle = classNames(
    classes.textFieldContainer,
    className
  );
  return (
    <Tooltip
      open={isTooltipShown}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      title={
        <div className={classes.tooltipText}>
          <ErrorOutline className={classes.tooltipIcon} /> {tooltip}
        </div>
      }
      placement="bottom-start"
      classes={{
        tooltip: classes.tooltip,
        popper: classes.tooltipPopper,
        tooltipPlacementBottom: classes.tooltipPlacementBottom
      }}
    >
      <FormControl
        className={classNames(classes.wrapper, wrapperClassName, {
          [classes.wrapperTwoMessageLines]: twoErrorMessageLines
        })}
      >
        <TextField
          {...input}
          error={Boolean(submitFailed && error)}
          label={
            <>
              {label}
              <span className={classes.optionalText}>
                {isOptional && "Optional"}
              </span>
            </>
          }
          autoFocus={focused}
          placeholder={placeholder}
          className={textFieldContainerStyle}
          variant="outlined"
          type={isShowPassword ? "text" : "password"}
          InputLabelProps={{
            shrink: true,
            classes: {
              root: classes.label,
              focused: classes.labelFocused,
              error: classes.labelError
            }
          }}
          InputProps={{
            classes: {
              root: classNames(classes.textField, {
                [classes[`${borderColor}Border`]]: borderColor
              }),
              focused: classes.textFieldFocused,
              notchedOutline: classes.notchedOutline,
              multiline: classes.multiline,
              error: classes.textFieldError,
              input: inputStyle
            },
            endAdornment:
              endAdornment ||
              (isConfidential && (
                <InputAdornment
                  position="end"
                  className={!input.value ? classes.invisible : undefined}
                >
                  <IconButton
                    color="primary"
                    aria-label="Toggle password visibility"
                    onClick={onChangeVisibility}
                    className={classes.iconButton}
                  >
                    {isShowPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ))
          }}
          {...others}
          onKeyUp={checkCapsLock}
          onKeyDown={checkCapsLock}
          onChange={event => {
            input.onChange(event);
            setTimeout(() => checkCapsLock(event), 1);
          }}
        />
        {error && submitFailed ? (
          <span className={classes.error}>
            <ErrorOutline className={classes.errorIcon} />
            &nbsp;
            {error}
          </span>
        ) : (
          tipText && <span className={classes.tip}>{tipText}</span>
        )}
      </FormControl>
    </Tooltip>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    submitFailed: PropTypes.bool.isRequired
  }).isRequired,
  twoErrorMessageLines: PropTypes.bool,
  isConfidential: PropTypes.bool.isRequired,
  isShowPassword: PropTypes.bool.isRequired,
  onChangeVisibility: PropTypes.func,
  placeholder: PropTypes.string,
  tipText: PropTypes.string,
  className: PropTypes.string,
  isOptional: PropTypes.bool,
  endAdornment: PropTypes.node,
  inputClassName: PropTypes.string,
  isTooltipShown: PropTypes.bool.isRequired,
  focused: PropTypes.bool,
  checkCapsLock: PropTypes.func
};

export default withStyles(styles)(TextInput);
