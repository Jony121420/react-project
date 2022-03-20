import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = (props) => {
    const {image,title,description,category}=props.ModalProduct
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className='row'>
                <>
      <Button variant="primary" onClick={handleShow}>
      Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <img className='w-50 p-2 m-2' src={image} alt="" />
          <Modal.Title>{title}</Modal.Title>
         
        </Modal.Header>
        <Modal.Body>  <h3>{category}</h3> {description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    );
};

export default ReactModal;