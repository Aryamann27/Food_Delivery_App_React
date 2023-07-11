import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertComp() {

    const [show, setShow] = useState(true);

  return (
    <>
        <Alert style={{fontSize:"1.1rem"}} dismissible onClose={() => setShow(false)} show={show} variant="success">
        Login to start adding items into your cart!
        </Alert>
    </>
  );
}

export default AlertComp;