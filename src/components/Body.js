import React from "react";
import { Keyboard } from "./Keyboard";
import { Screen } from "./Screen";

const Body = ({value, handleValueChangue}) =>
{
    return(
        <div>
            <Screen value={value}/>
            <Keyboard handleValueChangue={handleValueChangue}/>
        </div>
    );
}

export { Body };