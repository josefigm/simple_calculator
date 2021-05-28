import {React, useState} from "react";
import { Keyboard } from "./components/Keyboard";
import { Screen } from "./components/Screen";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TheNavbar } from "./components/TheNavbar";

const App = () =>
{
    const [value, setValue] = useState("");

    const handleValueChangue = (character) =>
    {
        console.log("Enter");
        if(character === "=")
        {
            setValue(eval(value));
            return;
        }
        if(character === "Reset")
        {
            setValue("");
            return;
        }
        setValue(`${value}${character}`);
    }

    return(
        <>
        <TheNavbar/>
        <Container fluid>
            <Screen value={value}/>
            <Keyboard handleValueChangue={handleValueChangue}/>
        </Container>
        </>
    );
}

export { App };