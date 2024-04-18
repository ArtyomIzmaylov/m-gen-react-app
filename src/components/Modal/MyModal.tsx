import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface MyModalProps {
    show : boolean
    handleClose: () => void;
}

const MyModal : React.FC<MyModalProps> = ({show, handleClose}) => {

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <div className="container d-flex justify-content-center">
                        <Modal.Title id="modalBasicLabel" className="">QR-Code</Modal.Title>

                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center">
                        <img src="/images/QR-Code.jpg" className="img-fluid w-25 "/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};


export default MyModal;
