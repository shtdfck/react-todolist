/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./AboutContent.styles";
import { symbol } from "prop-types";

const AboutContent = () => {
  return (
    <section className="about-page-content-component">
      <Container flexDirection="column">
        <Item align="center">
          <h1 css={styles.aboutPageHeader}>About This Apps</h1>
          <h3 css={styles.aboutPageSubHeader}>
            What i learn by building this app
          </h3>
        </Item>
        <Item>
          <Container>
            <p css={styles.aboutPageParagraph}>
              you face same of pig and you shit motherfucker
            </p>
          </Container>
        </Item>
        <Item align="center">
          <Link to="/">
            <span css={styles.backHome}>back to hell</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
