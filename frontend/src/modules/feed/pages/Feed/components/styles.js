const styles = () => ({
  container: {
    display: "flex"
  },
  allNews: {
    display: "flex",
    flexDirection: "column"
  },
  wrapperNews: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#9a92878a",
    border: "1px solid #ffffff17",
    borderRadius: 20,
    boxShadow: "0 10px 20px 0 rgb(0, 0, 0)",
    padding: 50,
    marginBottom: 20,
    width: 940
  },
  wrapperDashboard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#9a92878a",
    border: "1px solid #ffffff17",
    borderRadius: 20,
    boxShadow: "0 10px 20px 0 rgb(0, 0, 0)",
    padding: "50px 20px",
    "& > button:last-child": {
      marginBottom: 0
    }
  },
  dashboard: {
    width: 240,
    marginLeft: 40
  },
  button: {
    marginBottom: 20
  },
  tags: {
    display: "flex",
    width: "100%",
    "&>div": {
      marginRight: 10,
      color: " #ffefd4d9",
      minWidth: 100,
      letterSpacing: 1,
      textTransform: " uppercase",
      background:
        "linear-gradient(113.45deg, #00000070 0%, #0000008c 51%, #00000012 100%)"
    }
  },
  title: {
    color: "#faf9f9",
    fontSize: 24,
    fontWeight: 400
  },
  description: {
    color: "#dfd2bb",
    paddingBottom: 40
  },
  descriptionImage: {
    maxWidth: 500
  }
});

export default styles;
