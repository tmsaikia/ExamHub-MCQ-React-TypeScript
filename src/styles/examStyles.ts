import { SxProps, Theme } from "@mui/material";

const examStyles: Record<string, SxProps<Theme>> = {
  container: {
    mt: 5,
    p: 3,
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 3,
  },
  questionNumber: {
    fontSize: "12px",
  },
  timerText: {
    fontSize: "12px",
    fontWeight: "light",
  },
  questionBox: {
    p: 2,
  },
  questionText: {
    fontWeight: "light",
    fontSize: "15px",
    mb: 2,
  },
  buttonBox: {
    mt: 2,
    display: "flex",
    gap: 2,
    justifyContent: "flex-end",
  },
  footerButtons: {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
  },
  nextButton: {
    "&:hover": {
      backgroundColor: "#f3e5f5",
    },
    fontSize: "12px",
  },
  finishButton: {
    "&:hover": {
      backgroundColor: "#f3e5f5",
    },
    fontSize: "12px",
  },
  noQuestionsText: {
    fontWeight: "bold",
    color: "gray",
  },
  additionalInfo: {
    color: "gray",
    fontSize: "14px",
  },
};

export default examStyles;