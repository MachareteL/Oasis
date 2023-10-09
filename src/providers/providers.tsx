import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children?: React.ReactNode;
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
      secondary: "#B2B9C0",
    },
  },
});

const queryClient = new QueryClient();

export const ReactQueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export const ThemeMuiProvider = ({ children }: Props) => {
  return <ThemeProvider theme={themeProvider}>{children}</ThemeProvider>;
};
