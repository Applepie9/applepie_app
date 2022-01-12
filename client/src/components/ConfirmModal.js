import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ConfirmModal({buttonName, handleSomething}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>
        {buttonName}
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleSomething}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}