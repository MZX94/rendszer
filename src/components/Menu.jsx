import React, {Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Nav,
    NavItem,
    Navbar,
    NavbarBrand
} from 'react-bootstrap';

class Menu extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <NavbarBrand href="/">
                        Kürt Alapítványi Gimnázium
                    </NavbarBrand>
                </Navbar.Header>
                <Navbar.Toggle  />
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer exact to="/">
                            <NavItem >
                            Irányítópult
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer exact to="/tanterem">
                            <NavItem >
                            Tantermi rendszerek
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer exact to="/munkarend">
                            <NavItem >
                            Munkarend
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Menu;