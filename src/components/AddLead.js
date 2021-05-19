import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { leadsActions } from "../redux/actions/leads.actions";

const AddLead = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    location_type: "",
    location_string: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      mobile,
      location_type,
      location_string,
    } = formData;
    dispatch(
      leadsActions.addLead({
        first_name,
        last_name,
        email,
        mobile,
        location_type,
        location_string,
      })
    );
    setShow(false);
  };
  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Add Lead
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD LEAD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="first_name"
                  onChange={handleChange}
                  type="firstName"
                  placeholder="Enter First Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>LastName</Form.Label>
                <Form.Control
                  name="last_name"
                  onChange={handleChange}
                  type="lastName"
                  placeholder=" Enter Last Name"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridEmailAddress">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group controlId="formGridMobile">
              <Form.Label>Mobile phone</Form.Label>
              <Form.Control
                name="mobile"
                onChange={handleChange}
                placeholder="Enter Mobile phone"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Location Type</Form.Label>
              <Form.Control
                name="location_type"
                onChange={handleChange}
                as="select"
                defaultValue="City"
              >
                <option>City</option>
                <option>Zip</option>
                <option>Country</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGridAddress">
              <Form.Label>Location String</Form.Label>
              <Form.Control
                name="location_string"
                onChange={handleChange}
                placeholder=""
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Save Change
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

export default AddLead;
