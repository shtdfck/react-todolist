import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Todo from "../todo/TodoClass";

import Container from "../../layout/Container";

const StyledTodoPlaceHolderText = styled.div`
  font-family: "Homemade Apple", sans-serif;
  font-size: 24px;
  text-align: center;
  padding: 16px;
`;

const StyledButtonPlaceHolderText = styled.span`
  font-family: "Bungee", sans-serif;
  font-size: 24px;
`;

class Todos extends React.Component {
  render() {
    const { todos, completeTodo } = this.props;
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
            <StyledTodoPlaceHolderText>
              {[
                "Add Todo by click on",
                <StyledButtonPlaceHolderText>Add</StyledButtonPlaceHolderText>,
                "button on the top of left corner"
              ]}
            </StyledTodoPlaceHolderText>
          )}
        </Container>
      </section>
    );
  }
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    ),
    completeTodo: PropTypes.func.isRequired
  };
}
export default Todos;
