import { useContext } from "react";
import { ThemeContext } from "../layout/Thems/Thems";

// HOC
export const withTheme =
  (Component) =>
  ({ ...props }) => {
    const theme = useContext(ThemeContext);
    return <Component theme={theme} {...props} />;
  };
