import { createContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
const themes = (colorScheme) =>
  colorScheme === "dark"
    ? {
        textColor: "#fff",
        headerColor: "#fff",
        backgroundColor: "#000",
        cardColor: "#222",
      }
    : {
        textColor: "#222",
        headerColor: "#000",
        backgroundColor: "#fff",
        cardColor: "#eef",
      };
export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes());

  const colorScheme = useColorScheme();

  useEffect(() => {
    setTheme(themes(colorScheme));
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
