import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {NavLink} from "react-router-dom";
import  "../../index.css"
import style from "./Home.module.css"
import muk1 from "../../Assets/Images/muk_poison_jab.jpg"
import muk2 from "../../Assets/Images/alolan.png"

function Home(){
    return(
        <>
            <Container>
                <Row>
                    <h1 className="text-center">MukReact</h1>
                    <h3 className="text-center">A web application dedicated to the n° 89 sludge</h3>
                </Row>
                <Row className="py-4">
                    <Col classname="col-md-6">
                        <h2>Enjoy Muk</h2>
                        <p>Being one of the first 151 Pokemon, Muk has had its fair number of apparitions in all things Pokemon related: the official games, the anime, the trading card game (TGC), plushies and so on.
                        On this site I decided to focus on its appearances in the TCG, by showing the world the many ways Muk has been interpreted by various artist throughout the years.</p>
                        <NavLink to={"/Appearances"}>
                        <button type="button" className={style.bottone} >Click to see!</button>
                        </NavLink>
                    </Col>
                    <Col classname="col-md-6">
                        <img className="img-fluid" src={muk1} alt="mukImage1"/>
                    </Col>

                </Row>
                <Row className="py-4">
                    <Col classname="col-md-6">
                        <img className="img-fluid" src={muk2} alt="mukImage2"/>
                    </Col>
                    <Col classname="col-md-6">
                        <h2>Understand Muk</h2>
                        <p className="align-content-center">Muk is the prime example of the fan named Pokemon archetype: "Objectmon". Despite (or because) of this Muk never really had its time to shine and has always sidelined has a pokemon associated with the various villains.
                        <br/>To remedy this, I decided to bring justice to one of my Pokemon by creating a site dedicated exclusively to it.</p>
                        <NavLink to={"/Info"}>
                        <button type="button" className={style.bottone}>Learn more!</button>
                        </NavLink>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Home;