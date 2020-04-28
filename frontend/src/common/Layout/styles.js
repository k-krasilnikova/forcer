import Background from "static/BG-comp.png";

const styles = () => ({
  root: {
    backgroundImage: `url(${Background})`,
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
});

export default styles;
