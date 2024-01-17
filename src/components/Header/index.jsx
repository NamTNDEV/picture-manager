import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a className="header__link header__title" href="/">
              Photo Manager
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              //   className="header__link header__link--active"
              className={({ isActive }) =>
                isActive ? "header__link--active" : "header__link"
              }
              to="/sign-in"
            >
              Sign In
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
