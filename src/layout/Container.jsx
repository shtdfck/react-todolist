/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const container = ({
  children,
  flexDirection,
  flexWrap,
  justifyConten,
  alignItems,
  alignContent
}) => {
  const containerStyles = css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyConten};
    align-content: ${alignItems};
    align-content: ${alignContent}
  `;
  return (
    <div className="flex-container" css={containerStyles}>
      {children}
    </div>
  );
};

container.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyConten: "flex-start",
  alignItems: "stretch",
  alignContent: "stretch"
};

container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justifyConten: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-arround",
    "space-evenly",
    "start",
    "end",
    "left",
    "right"
  ]),
  alignItems: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "first baseline",
    "last baseline",
    "start",
    "end",
    "selt-start",
    "selt-end"
  ]),
  alignContent: PropTypes.oneOf({
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-arround",
    "spce-evenly",
    "stretch",
    "start",
    "end",
    "baseline",
    "first baseline",
    "last baseline",

  })
};

export default container;
