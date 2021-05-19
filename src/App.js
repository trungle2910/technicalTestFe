import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Notification from "./components/Notification";
import { Col, Container } from "react-bootstrap";
import LeadsTable from "./components/LeadsTable";
import AddLead from "./components/AddLead";

function App() {
  return (
    <>
      <Notification />
      <Container>
        <Col>
          <AddLead />
        </Col>
        <Col>
          <LeadsTable />
        </Col>
      </Container>
    </>
  );
}

export default App;
