import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import {NavLink} from "react-router-dom";
import styleN from "./Header.module.css"

function Header(props){
    const {logo, navItems} = props;

    const itemList = navItems.map((item) => {
        return (
            <NavItem key={item.url} className={styleN.headerlink}>
                <NavLink className={styleN.headerlink} exact={item.exact} to={item.url}>
                    {item.text}
                </NavLink>
            </NavItem>
        );
    });


    return(
        <Navbar collapseOnSelect expand="lg" className={styleN.Header}>

                <Navbar.Brand>
                    <NavLink to="/">
                        <img src={logo} className="d-inline-block align-top app-logo" alt="Arancia"/>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {itemList}
                    </Nav>
                </Navbar.Collapse>

        </Navbar>
    )
}

export default Header;