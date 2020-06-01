import Background from "static/BG-comp.png";

const styles = () => ({
  root: {
    // backgroundImage: `url(${Background})`,
    display: "flex",
    minHeight: "100vh",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    background: `url(${Background}) no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "100%",
    overflow: "hidden"
  },
  content: {
    width: "100%"
  },
  contentWithMenu: {
    width: "calc(100vw - 240px)",
    marginLeft: 240,
    marginRight: 20
  },
  mainLayoutContent: {
    width: "100%"
  }
});

export default styles;
