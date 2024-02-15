import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mukError from "../../Assets/Images/Muk404.jpg"
function Error () {
    return (

            <Container>
                <h1 className="text-center">404, there is nothing here!</h1>
                <h4 className="text-center">Seems like you are not <i>gooing</i> anywhere!</h4>
                <Row>
                    <Col>
                        <img className="img-fluid" src={mukError} alt="Muk404"/>
                    </Col>
                </Row>
            </Container>
    );
}

export default Error;