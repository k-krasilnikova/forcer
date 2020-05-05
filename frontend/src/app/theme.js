import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
  error: { main: "#AA5072" },
};

const fontSize = {
  xs: "12px",
};

const theme = createMuiTheme({
  climCustomStyles: {
    climCustomButton: {
      borderRadius: 0,
      boxShadow: "none",
      background: "rgba(200, 101, 103, 1)",
      "&:hover": {
        background: "rgba(200, 101, 103, 0.7)",
      },
      "&:active": {
        background: "rgba(200, 101, 103, 0.7)",
      },
    },
    climCustomLink: {
      margin: "0 0 4px 0",
      color: "#C86567",
      fontSize: 14,
      fontWeight: 300,
      "&:hover": {
        color: "rgba(200, 101, 103, 0.7)",
      },
      "&:active": {
        color: "rgba(200, 101, 103, 0.7)",
      },
    },
    climCustomLogo: {
      maxWidth: 183,
    },
  },
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: "#78d5d3",
    },
    secondary: {
      main: "#2727C5",
    },
    ...palette,
  },
  textError: {
    position: "absolute",
    color: palette.error.main,
    fontSize: fontSize.xs,
    display: "flex",
    alignItems: "center",
    fontFamily: "Lato, sans-serif",
  },
  tip: {
    // position: 'absolute',
    color: "#767C9E",
    fontSize: fontSize.xs,
    display: "block",
  },
});

theme.overrides = {
  ...theme.overrides,
  MuiTabs: {
    root: {
      border: "1px solid #ECF0FC",
      backgroundColor: "FCFCFD",
      borderRadius: "6px 6px 0 0",
    },
    indicator: {
      height: "4px",
      background: "linear-gradient(113.45deg, #742DCE 0%, #050B99 100%)",
    },
    scroller: {
      scrollbarWidth: "none",
      marginBottom: "0!important",
    },
  },
  MuiTab: {
    root: {
      fontFamily: "Lato, sans-serif",
      color: "#282525",
      backgroundColor: "#FCFCFD",
      fontWeight: 300,
      padding: "5px 20px",
      minWidth: "120px",
      fontSize: "20px",
      textTransform: "none",
      [theme.breakpoints.up(960)]: {
        fontSize: "20px",
        minWidth: "120px",
      },
      [theme.breakpoints.down(480)]: {
        fontSize: "16px",
        flexGrow: 1,
        maxWidth: "none",
        flexShrink: 1,
        padding: "5px 0",
        minWidth: "unset",
      },
    },
    selected: {
      backgroundColor: "#FFFFFF",
      color: "#282525",
      fontWeight: 500,
    },
  },
  MuiButton: {
    flatPrimary: {
      color: "#969082",
      textTransform: "none",
      fontWeight: 500,
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
        color: "#ffefd4",
      },
      "&:active": {
        backgroundColor: "transparent",
        color: "#ffefd4",
      },
    },
    containedPrimary: {
      color: "white",
      fontWeight: 700,
      backgroundSize: "200% auto",
      transition: "0.5s",
      backgroundColor: "#ffffff",
      background:
        "linear-gradient(113.45deg, #742DCE 0%, #050B99 51%, #742DCE 100%)",
      "&:hover": {
        backgroundPosition: "right center",
      },
      "&:active": {
        background: "linear-gradient(113.45deg, #050B99 0%, #080C9A 100%)",
      },
    },
    containedSecondary: {
      color: "white",
      fontWeight: 700,
      backgroundSize: "200% auto",
      transition: "0.5s",
      backgroundColor: "#ffffff",
      background:
        "linear-gradient(116.57deg, #7ADEC9 0%, #5BB0CE 51%, #7ADEC9 100%)",
      "&:hover": {
        backgroundPosition: "right center",
      },
      "&:active": {
        background: "linear-gradient(116.57deg, #5AB6C6 0%, #5BB0CE 100%)",
      },
    },
    disabled: {
      color: "#ffffff",
      background: "none",
      backgroundColor: "#D8D8DF",
    },
    contained: {
      "&$disabled": {
        color: "#ffffff",
        background: "none",
        backgroundColor: "#D8D8DF",
      },
    },
    sizeSmall: {
      padding: "10px 15px",
      fontSize: 12,
    },
    sizeLarge: {
      padding: "16px 24px",
      fontSize: 15,
      textTransform: "uppercase",
      fontWeight: "700",
    },
    label: {
      fontFamily: "Lato, sans-serif",
      lineHeight: "15px",
      boxShadow: "none",
    },
  },
  MuiMenuItem: {
    root: {
      "&:hover": {
        backgroundColor: "#EFF2F7",
      },
      fontFamily: "Lato, sans-serif",
      color: "#36425A",
      fontSize: "16px",
      lineHeight: "15px",
      height: "auto",
      minHeight: "24px",
    },
    selected: {
      backgroundColor: "#DADFEC !important",
    },
  },
  MuiDialog: {
    paper: {
      [theme.breakpoints.down("xs")]: {
        margin: "5px",
      },
    },
  },
  MuiInputAdornment: {
    root: {
      color: "#888EB4",
      fontSize: 16,
      fontWeight: 300,
    },
  },
  MuiCheckbox: {
    checked: {
      color: "#2727C5",
    },
    disabled: {
      color: "#ffffff",
    },
  },
  MuiRadio: {
    checked: {
      color: "#2727C5",
    },
    disabled: {
      color: "#ffffff",
    },
  },
};

export default theme;
