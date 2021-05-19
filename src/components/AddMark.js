import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { leadsActions } from "../redux/actions/leads.actions";

const AddMark = (id) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    communication: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { communication } = formData;
    dispatch(
      leadsActions.addLead(
        {
          communication,
        },
        id
      )
    );
    setShow(false);
  };
  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Mark Update
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Mark Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupName">
              <Form.Label>Communication</Form.Label>
              <Form.Control
                name="communication"
                onChange={handleChange}
                placeholder="Enter Communication"
              />
            </Form.Group>
            <Button variant="succes" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMark;
