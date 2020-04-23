import { css } from "@emotion/core";

export const todos = () =>
  css`
    display: flex;
    flex-direction: column;

    min-height: 500%;
  `;

export const todoPlacheholderText = () =>
  css`
    font-family: "Homemade Apple", sans-serif;
    font-size: 24px;
    text-align: center;
    padding: 16px;
  `;

export const addButtonPlaceholder = () =>
  css`
    font-family: "Bungee", sans-serif;
    font-size: 24px;
  `;
