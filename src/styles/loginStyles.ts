import { SxProps, Theme } from "@mui/material";

const loginStyles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  loginBox: {
    width: "100%",
    maxWidth: "500px",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "white",
    textAlign: "center",
    position: "relative",
    top: "-40px",
  },
  startExamButton: {
    mt: 2,
    backgroundColor: "#6A0DAD",
    color: "white",
    "&:hover": { backgroundColor: "#580A91" },
  },
  footerText: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    width: "100%",
    backgroundColor: "white",
    padding: "50px 0",
    height: "100px",
  },
};

export default loginStyles;