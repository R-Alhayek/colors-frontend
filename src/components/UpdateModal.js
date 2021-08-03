import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class UpdateModal extends React.Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update YOur Favorit Color</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateFavData}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                
                                <Form.Control name="title" type="text" placeholder="Enter Color Title" />
                                
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                
                                <Form.Control name="imageUrl" type="text" placeholder="Enter Image URL" />
                                
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UpdateModal
