import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {CardText} from "reactstrap";
import {NavLink} from "react-router-dom";
import mukDefaultImg from "../../Utility/Utility";
import styleCa from "./CardApp.module.css"

function CardApp(props){
    const {id, name, image, numb, set, series, date, logo} = props;

    return(

            <Card className={styleCa.mukCard}>
                <Row className="no-gutters">
                    <Col md={6}>
                        <NavLink to={`/Appearances/${numb}`}>
                            <CardImg onError={(event) => mukDefaultImg(event)}
                                     src={image} alt={name}/>
                        </NavLink>
                    </Col>
                    <Col md={6} >
                        <CardText><b>Series:</b> <span>{series}</span></CardText>
                        <CardText><b>Set: </b> {set}</CardText>
                        <CardText><b>Release date: </b><span>{date}</span></CardText>
                    </Col>
                </Row>
            </Card>
    )
}

export default CardApp