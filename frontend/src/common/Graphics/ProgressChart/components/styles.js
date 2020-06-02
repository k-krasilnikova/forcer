const styles = () => ({
  chartWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: 400,
    color: "#ffefd4",
    margin: 0,
  },
  chart: {
    minWidth: 500,
    maxWidth: 600,
    paddingTop: 40,
  },
  progressBar: {
    backgroundColor: "#96908285",
    borderRadius: "2.79px",
    height: 10,
    margin: "10px 0",
  },
  progressBarColor: {
    background: "linear-gradient(90deg, rgb(178, 167, 148) 0%, #ffefd4 100%)",
    borderRadius: 4,
  },
  breakdown: {
    display: "flex",
    justifyContent: "space-between",
    "&>p": {
      margin: 0,
      color: "#eae7e2",
    },
  },
});

export default styles;
