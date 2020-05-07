import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import { ThemeProvider } from "emotion-theming";

import TodoList from "./pages/TodoListClass";
import About from "./pages/About";

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
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
