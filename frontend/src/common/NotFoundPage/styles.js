const styles = () => ({
  section: {
    width: "100%",
    display: "flex",
    "@media (max-width:600px)": {
      flexDirection: "column-reverse",
    },
  },
  image: {
    width: 200,
    margin: 20,
  },
  contentContainer: {
    display: " flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#ffefd4",
    fontSize: 100,
    fontWeight: 300,
    margin: 0,
    "@media (max-width:600px)": {
      fontSize: 50,
    },
  },
  description: {
    color: "#ffefd4",
    fontSize: 22,
    fontWeight: 300,
    marginBottom: 20,
    maxWidth: 390,
    "@media (max-width:640px)": {
      fontSize: 18,
    },
  },
});

export default styles;
