/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";
// import React from "react";
import PropTypes from "prop-types";

import Todo from "../todo/TodoClass";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

// import styles from "./todos.module.css";
import * as styles from "./todos.styles";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                isCompleted={todo.isCompleted}
                text={todo.text}
                completeTodo={completeTodo}
                index={index}
              />
            );
          })}
        {todos.length === 0 && (
          <React.Fragment>
            <div css={styles.todoPlacheholderText}>
              Add Todo by click on{" "}
              <span css={styles.addButtonPlaceholder}> Add </span>
            </div>
            <div />
            <Container justifyContent="center">
              <Item>
                <span css={styles.seeAboutPagePlaceholderText}>
                  <Link to="/about">Or visit about page</Link>
                </span>
              </Item>
            </Container>
          </React.Fragment>
        )}
      </Container>
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
