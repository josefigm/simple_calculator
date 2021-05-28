import React from "react";
import { Container } from "react-bootstrap";

const Screen = ({value}) =>
{
    return(
        <Container>
            <label>{value}</label>
        </Container>
    );
}

export { Screen };