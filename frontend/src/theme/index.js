import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    backgroundMessage: "#a5f3fc",
    valueIndicator: { color: { primary: "#00FF00", secundary: "#9ca3af" } },
    button: {
      backgroundColor: {
        primary: "#166534",
        secondary: "#052e16"
      }
    }
  }
});

export default theme;
