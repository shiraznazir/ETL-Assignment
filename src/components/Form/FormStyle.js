const style = {
    container: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
    },
    searchIcon:{
        width: "20px",
        height: "20px",
        // position: "absolute",
        // top: 45,
        // left: 10
    },
    timePicker: {
        mt: "5px",
        width: "50%",
        "& .MuiOutlinedInput-input": {
          cursor: "pointer",
          borderColor: "#FF0000",
        },
        "& .MuiInputLabel-root.Mui-focused": {
      
        },
        "& .MuiInputLabel-root": {
          cursor: "pointer",
        },
        "@media (max-width: 1024px)": {
          width: "100%",
        },
    }
}

export default style;