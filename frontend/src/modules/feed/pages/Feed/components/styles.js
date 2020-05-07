const styles = () => ({
  container: {
    display: "flex",
  },
  allNews: {
    display: "flex",
    flexDirection: "column",
  },
  wrapperNews: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff63",
    border: "1px solid #ffffff17",
    borderRadius: 20,
    boxShadow: "0 10px 20px 0 rgb(0, 0, 0)",
    padding: 50,
    marginBottom: 20,
    width: 840,
  },
  wrapperDashboard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff63",
    border: "1px solid #ffffff17",
    borderRadius: 20,
    boxShadow: "0 10px 20px 0 rgb(0, 0, 0)",
    padding: "50px 20px",
    "& > button:last-child": {
      marginBottom: 0,
    },
  },
  dashboard: {
    width: 240,
    marginLeft: 80,
  },
  button: {
    marginBottom: 20,
    // background:
    //   "linear-gradient(113.45deg, #000000 0%, #0000008c 51%, #00000082 100%)",
    // color: "#ffefd4",
  },
});

export default styles;
