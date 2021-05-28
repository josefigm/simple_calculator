import {React, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";

const App = () =>
{
    const [value, setValue] = useState("");

    const handleValueChangue = (character) =>
    {
        console.log("Enter");
        if(character === "=")
        {
            // eslint-disable-next-line
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
            <Header/>
            <center>
                <Body value={value} handleValueChangue={handleValueChangue}/>
            </center>
            <Footer/>
        </div>
    );
}

export { App };