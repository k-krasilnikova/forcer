const styles = () => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalWrapper: {
    width: 400,
    maxHeight: 700,
    boxShadow: "0 10px 20px 0 rgb(0, 0, 0)",
    backgroundColor: "#616161f0",
    border: "1px solid #ffffff17",
    borderRadius: 20,
    padding: 50,
    "&>div>form": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

export default styles;
