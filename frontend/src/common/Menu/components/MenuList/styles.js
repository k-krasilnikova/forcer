const styles = () => ({
  container: {
    flex: 1,
    background: "transparent",
  },
  menuList: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  menuListItem: {
    flex: 1,
    height: "60px",
    boxSizing: "border-box",
    "&:hover": {
      background: "none",
    },
  },
  menuListItemSelected: {
    backgroundColor: "#333232 !important",
    boxShadow: "10px 10px 10px 10px rgba(55, 55, 55, 0.37)",
    "& $menuListItemText": {
      fontWeight: "bold",
      color: "#eae7e2",
    },
    "& $checked": {
      width: "4px",
    },
  },
  menuListItemText: {
    fontSize: "16px",
    fontFamily: "Helvetica Neue, sans-serif",
    lineHeight: "19px",
    color: "#ffefd4",
  },
  checked: {
    width: "0px",
    height: "100%",
    background: "linear-gradient(104.27deg, #ffefd4 0%, #333232 100%)",
    position: "absolute",
    left: 0,
    top: 0,
  },
  iconContainer: {
    paddingLeft: "7px",
    marginRight: "6px",
  },
  icon: {
    width: 26,
  },
  textContainer: {
    paddingLeft: "7px",
  },
  linkContainer: {
    textDecoration: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
});

export default styles;
