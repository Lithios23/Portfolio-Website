import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function ProjectModal({project, showModal, setShowModal}) {
  
  return (
    <Modal show={showModal} onHide={setShowModal(false)}>
        <Modal.Header closeButton>
            <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {project.img}
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={setShowModal(false)}>Close</Button>
            <Button onClick={setShowModal(false)}>Save Changes</Button>
        </Modal.Footer>
    </Modal>
  )
}
