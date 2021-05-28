import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const Keyboard = ({handleValueChangue}) =>
{
    const handleChangue = (character) =>
    {
        handleValueChangue(character);
    }
    return(
        <div>
            <ButtonGroup>
                <Button variant="light" onClick={ () => {handleChangue("7")}}>7</Button>
                <Button variant="light" onClick={ () => {handleChangue("8")}}>8</Button>
                <Button variant="light" onClick={ () => {handleChangue("9")}}>9</Button>
             
            </ButtonGroup>
            <br/>
            <ButtonGroup>
                <Button variant="light" onClick={ () => {handleChangue("4")}}>4</Button>
                <Button variant="light" onClick={ () => {handleChangue("5")}}>5</Button>
                <Button variant="light" onClick={ () => {handleChangue("6")}}>6</Button>
              
            </ButtonGroup>
            <br/>
            <ButtonGroup>
                <Button variant="light" onClick={ () => {handleChangue("1")}}>1</Button>
                <Button variant="light" onClick={ () => {handleChangue("2")}}>2</Button>
                <Button variant="light" onClick={ () => {handleChangue("3")}}>3</Button>
               
            </ButtonGroup>
            <br/>
            <ButtonGroup>
                <Button variant="light" onClick={ () => {handleChangue("0")}}>0</Button>
                <Button variant="light" onClick={ () => {handleChangue("(")}}>(</Button>
                <Button variant="light" onClick={ () => {handleChangue(")")}}>)</Button>
            </ButtonGroup>
            <br/>
            <ButtonGroup>
                <Button variant="warning" onClick={ () => {handleChangue("+")}}>+</Button>
                <Button variant="warning" onClick={ () => {handleChangue("-")}}>-</Button>
                <Button variant="warning" onClick={ () => {handleChangue("/")}}>/</Button>
                <Button variant="warning" onClick={ () => {handleChangue("*")}}>*</Button>
                <Button variant="warning" onClick={ () => {handleChangue("=")}}>=</Button>
            </ButtonGroup>
            <br/>
            <ButtonGroup>
                <Button variant="secondary" onClick={ () => {handleChangue("Reset")}}>Reset</Button>
            </ButtonGroup>
        </div>
    );
}

export { Keyboard };