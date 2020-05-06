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
  content: {
    width: "100%",
  },
  contentWithMenu: {
    width: "calc(100vw - 240px)",
    marginLeft: 240,
  },
  mainLayoutContent: {
    width: "100%",
    // height: "100vh",
  },
});

export default styles;
