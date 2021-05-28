import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () =>
{
    return(
        <Navbar bg="light">
            <Navbar.Brand href="#home">Simple Calculator</Navbar.Brand>
        </Navbar>
    )
}
export { Header };