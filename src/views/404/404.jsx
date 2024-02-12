import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import mukError from "../../Assets/Images/Muk404.jpg"
function Error () {
    return (

            <Container>
                <h1 className="text-center">404, there is nothing here!</h1>
                <h4 className="text-center">Seems like you are not <i>gooing</i> anywhere!</h4>
                <img src={mukError} alt="Muk404"/>
            </Container>
    );
}

export default Error;