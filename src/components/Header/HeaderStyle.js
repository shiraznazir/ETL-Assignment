const style = {
  mainContainer: {
    bgcolor: "#fff",
  },
  container: {
    width: "70%",
    mx: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  grayBox: {
    width: "28px",
    height: "28px",
    flexShrink: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    width: "24px",
    height: "24px",
    flexShrink: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    // alignItems: "center",
    // justifyContent: "center",
    "@media (max-width: 900px)":{
      flexDirection: "column",
    }
  },
  navItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
  },
  lineBox: {
    width: "5vw",
    height: "5px",
    flexShrink: 0,
  },
  textBox: {
    display: "flex",
    // width: "116px",
    height: "27px",
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
  },
  clearBox:{
     width: "160px",
     cursor: "pointer"
  }
};

export default style;
