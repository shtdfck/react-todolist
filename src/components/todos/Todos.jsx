/** @jsx jsx */
import { jsx } from "@emotion/core";
// import React from "react";
import PropTypes from "prop-types";

import Todo from "../todo/Todo";
import Container from "../../layout/Container";
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
          <div css={styles.todoPlacheholderText}>
            Add Todo by click on{" "}
            <span css={styles.addButtonPlaceholder}> Add </span>
          </div>
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
