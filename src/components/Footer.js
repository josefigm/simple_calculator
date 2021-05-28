import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () =>
{
    return(
        <Navbar bg="light" fixed="bottom">
            <center>
                <Navbar.Text> All Rights Reserved: GitHub -><a href="https://github.com/josefigueirasm">@josefigueirasm</a></Navbar.Text>
            </center>
        </Navbar>
    )
}
export { Footer };