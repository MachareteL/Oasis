import { SessionProvider } from "next-auth/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

const themeProvider = createTheme({
  palette: {
    primary: {
      main: "#000",
      dark: "#fff",
    },
    secondary: {
      main: "#000",
      dark: "#fff",
    },
    text: {
      primary: "#000",
      secondary:"#B2B9C0",

    },

  },
});

export const ThemeMuiProvider = ({ children }: Props) => {
  return <ThemeProvider theme={themeProvider}>{children}</ThemeProvider>;
};
