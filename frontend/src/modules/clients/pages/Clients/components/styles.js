const styles = () => ({
  wrapper: {
    display: "flex",
  },
  clientHeader: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "#eae7e2",
  },
  headerName: {
    width: 160,
  },
  headerMore: {
    width: 100,
  },
  clients: {
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
  clientRow: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    borderBottom: "1px dashed #aaa",
    alignItems: "center",
    "&> button" :{
      margin: 0,
    },
  },
  name: {
    color: "#ffefd4",
    fontWeight: 300,
    width: 300,
  },
  marks: {
    color: "#ffefd4",
    fontWeight: 300,
    width: 100,
    display: "flex",
    justifyContent: "center",
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
