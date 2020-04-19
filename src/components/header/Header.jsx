import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Button from "../button/Button";
import styles from "./header.module.css";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <div className={styles.header}>
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 className={styles.headerTitle}>Todo List</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </div>
  );
};

Header.prototype = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
