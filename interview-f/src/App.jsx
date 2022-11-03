import React from "react";
import { Container } from "react-bootstrap";

import { DemoNavbar } from "./components/DemoNavbar";
import { PeopleList } from "./components/PeopleList";

import "./scss/main.scss";

export const App = () => {
  return (
    <>
      <DemoNavbar />
      <Container fluid>
        <PeopleList />
      </Container>
    </>
  );
};
