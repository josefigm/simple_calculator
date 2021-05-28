import {React, useState} from "react";
import { Keyboard } from "./components/Keyboard";
import { Screen } from "./components/Screen";

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
        <div>
            <Screen value={value}/>
            <Keyboard handleValueChangue={handleValueChangue}/>
        </div>
    );
}

export { App };