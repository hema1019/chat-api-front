import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import theme from "./theme/newTheme";
import router from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
