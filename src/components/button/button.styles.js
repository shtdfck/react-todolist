import { css } from "@emotion/core";

export const button = ({ color, align }) => {
  let textColor;

  switch (color) {
    case "black":
      textColor = "black";
      break;
    case "red":
      textColor = "#ff0000";
      break;
    default:
      textColor = "black";
  }

  return css`
    width: 24%;
    color: ${textColor};
    text-align: ${align};
    font-size: 1.8rem;
    font-family: "bungee", sans-serif;

    padding: 16px;

    background: unset;
    border: unset;
    outline: unset;
    cursor: pointer;
  `;
};
