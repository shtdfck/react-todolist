import React from "react";
import "./styles.css";
import { ThemeProvider } from "emotion-theming";

import TodoList from "./pages/TodoList";

const theme = {
  color: {
    primary: {
      black: "black",
      red: "#ff0000"
    }
  },
  background: {
    color: {
      primary: "#dcdcdc"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}
