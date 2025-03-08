import { useEffect, useState } from "react";
import Component2 from "./component2";
import divider from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";

function Component1() {

    const [component, setComponent] = useState(null); // Default to null
        async function apiCall() {
            try {
                const response = await fetch ("https://api.adviceslip.com/advice");
                const data = await response.json();
    
                setComponent({
                    id: data.slip.id,
                    advice: data.slip.advice,
                    divider: divider,
                    dice: dice,
                });
            } catch (error) {
                console.error("Error fetching advice:", error);
            }
        }

        useEffect(() => {
            apiCall();
        },[])
    /*

    useEffect(() => {
        setTimeout(() => (
            setComponent([
                {
                    id : 1,
                    advice : "fhi ie ejig",
                    divider : divider ,
                    dice : dice,
                }
            ])
        ),2000)
    },[]);

    */
    

    if(!component) {
        return (
            <div className="loading-container">
                {<img className="loading" src="src\assets\827.gif" />}  
            </div>
        )

    }

    return (
        <>
            <Component2 key={component.id} id={component.id} advice={component.advice} divider={component.divider} dice={component.dice} />
        </>
    );
}

export default Component1;

