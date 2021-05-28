import React from "react";

const Keyboard = ({handleValueChangue}) =>
{
    const handleChangue = (character) =>
    {
        handleValueChangue(character);
    }
    return(
        <div>
            <button onClick={ () => {handleChangue("7")}}>7</button><button onClick={ () => {handleChangue("8")}}>8</button><button onClick={ () => {handleChangue("9")}}>9</button><br/>
            <button onClick={ () => {handleChangue("4")}}>4</button><button onClick={ () => {handleChangue("5")}}>5</button><button onClick={ () => {handleChangue("6")}}>6</button><br/>
            <button onClick={ () => {handleChangue("1")}}>1</button ><button onClick={ () => {handleChangue("2")}}>2</button><button onClick={ () => {handleChangue("3")}}>3</button><br/>
            <button onClick={ () => {handleChangue("Reset")}}>Reset</button><button onClick={ () => {handleChangue("+")}}>+</button><button onClick={ () => {handleChangue("=")}}>=</button>
        </div>
    );
}

export { Keyboard };