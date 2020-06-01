import { ERROR_MESSAGE_HEIGHT } from "../../constants";

const styles = theme => ({
  wrapper: {
    width: "100%",
    paddingBottom: ERROR_MESSAGE_HEIGHT
  },
  wrapperTwoMessageLines: {
    //paddingBottom: ERROR_MESSAGE_HEIGHT * 2,
  },
  label: {
    color: "#ffefd4",
    fontFamily: "Helvetica Neue, sans-serif",
    fontSize: "15px",
    lineHeight: "15px",
    "&$labelFocused:not($labelError)": {
      color: "#ffefd4"
    }
  },
  labelFocused: {},
  labelError: {},
  textFieldContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 7
  },
  textField: {
    "&$textFieldFocused:not($textFieldError) $notchedOutline": {
      borderColor: "#ffefd4 !important"
    },
    "&:hover:not($textFieldDisabled):not($textFieldError):not($textFieldFocused) $notchedOutline": {
      borderColor: "#ffefd4 !important"
    },
    "&$textFieldError $notchedOutline": {
      borderColor: `${theme.palette.error.main} !important`
    },
    height: 48,
    color: "#3f3e39",
    lineHeight: "20px",
    fontSize: "16px",
    fontFamily: "Helvetica Neue, sans-serif"
  },
  purpleBorder: {
    "&$textFieldFocused:not($textFieldError) $notchedOutline": {
      borderColor: "#ff00306b !important"
    },
    "&:hover:not($textFieldDisabled):not($textFieldError):not($textFieldFocused) $notchedOutline": {
      borderColor: "#ff00306b !important"
    }
  },
  multiline: {
    height: "auto",
    minHeight: 48
  },
  notchedOutline: {
    borderWidth: "1px !important",
    borderColor: "#969082 !important"
  },
  textFieldFocused: {},
  textFieldDisabled: {},
  textFieldError: {},
  input: {
    "&::placeholder": {
      color: "#969082",
      opacity: 1,
      fontSize: "16px",
      lineHeight: "20px"
    }
  },
  privateInput: {
    letterSpacing: 8,
    "&::placeholder": {
      letterSpacing: "normal"
    }
  },
  iconButton: {
    color: "#ffefd4",
    fontSize: 22,
    width: 36,
    height: 36,
    padding: 7
  },
  error: {
    ...theme.textError,
    bottom: 10,
    left: 0,
    maxHeight: ERROR_MESSAGE_HEIGHT - 3
  },
  errorIcon: {
    fontSize: 12
  },
  tip: {
    ...theme.tip
  },
  optionalText: {
    color: "#CCD2DE"
  },
  tooltip: {
    border: "1px solid #EFF2F7",
    borderRadius: "4px 0 4px 4px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 4px 10px 0 rgba(73,93,124,0.13)",
    padding: "6px 11px",
    opacity: 1
  },
  tooltipPopper: {
    left: "-60px !important",
    [theme.breakpoints.down(480)]: {
      left: "-20px !important"
    }
  },
  tooltipText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#3f3e39",
    fontSize: "12px",
    fontWeight: 300,
    letterSpacing: "0.05px",
    lineHeight: "20px"
  },
  tooltipIcon: {
    fontSize: "14px",
    marginRight: "4px",
    color: "#969082"
  },
  tooltipPlacementBottom: {
    margin: "-18px 0"
  },
  invisible: {
    display: "none"
  }
});

export default styles;
