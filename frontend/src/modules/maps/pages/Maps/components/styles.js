const styles = () => ({
  wrapper: {
    display: "flex",
  },
  map: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#9a92878a",
    border: "1px solid #ffffff17",
    borderRadius: 20,
    boxShadow: "0 10px 20px 0 rgb(0, 0, 0)",
    padding: 50,
    marginBottom: 20,
    width: 940,
  },
  mapImage: {
    width: '100%',
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
      marginBottom: 0,
    },
  },
  dashboard: {
    width: 240,
    marginLeft: 40,
  },
  button: {
    marginBottom: 20,
  },
});

export default styles;
