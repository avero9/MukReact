import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {NavLink} from "react-router-dom";
import Unimib from "../../Assets/Images/Unimib.jpg"
import stylef from "./footer.module.css"

function Footer(props){
    const {courseName, courseLink, logo, navItems} = props;

    const itemList = navItems.map((item) => {
        return (
            <li key={item.url} className="nav-item mb-2">
                <NavLink exact={item.exact} to={item.url}>
                    {item.text}
                </NavLink>
            </li>
        );
    });

    return(
        <footer className={stylef.footerApp}>
            <Container>
                <Row>
                    <Col className="pt-3">
                        <h3 className={stylef.footerH3}>MukReact<span>
                            <NavLink to="/MukReact/">
                            <img src={logo} alt="Muk" className={stylef.logoa}/></NavLink>
                        </span></h3>
                        <ul className={stylef.ulApp}>
                            {itemList}
                        </ul>
                    </Col>
                </Row>
                <Row className={stylef.footerCopyright}>
                    <Col>
                        <p className="mb-0">Developed by Andrea Veronese</p>
                        <p className="mt-0">Course of "<a href={courseLink}>{courseName}</a>" 2023/2024, University of Milano-Bicocca<span><a href="https://www.unimib.it/"><img src={Unimib} alt="Unimib" className={stylef.unimib}/></a></span></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;