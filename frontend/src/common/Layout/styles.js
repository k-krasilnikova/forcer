import Background from "static/BG-comp.png";

const styles = () => ({
  root: {
    backgroundImage: `url(${Background})`,
    display: "flex",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainLayoutContent: {
    width: "100%",
    height: "100vh",
  },
});

export default styles;
