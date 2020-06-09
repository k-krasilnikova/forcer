const styles = () => ({
  selector: {
    width: "100%",
    paddinBottom: 10,
  },
  label: {
    color: "#ffefd4",
    fontSize: 12,
    fontWeight: 300,
    marginLeft: 14,
  },
  formControl: {
    width: "100%",
    borderBottom: "1px solid #969082",
    "&:hover": {
      borderBottom: "1px solid #eae7e2",
      "&:before": {
        borderBottom: "0 !important",
      },
    },
    "&::before": {
      borderBottom: 0,
    },
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
});

export default styles;
