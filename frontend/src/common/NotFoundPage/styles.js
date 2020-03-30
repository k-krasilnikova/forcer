const styles = () => ({
  section: {
    width: "100%",
    display: "flex",
    marginTop: 100,
    "@media (max-width:600px)": {
      flexDirection: "column-reverse",
      marginTop: 0
    }
  },
  title: {
    color: "#36425A",
    fontSize: 100,
    fontWeight: 300,
    "@media (max-width:600px)": {
      fontSize: 50
    }
  },
  description: {
    color: "#36425A",
    fontSize: 22,
    fontWeight: 300,
    marginBottom: 20,
    maxWidth: 390,
    "@media (max-width:640px)": {
      fontSize: 18
    }
  }
});

export default styles;
