import { useState } from "react";

function Fondo() {

    const [color, setColor] = useState(["red"])

    const cambiarColor = (color) => {
        setColor(color)
    }

    return (
        <div style={{ backgroundColor: color }}>
            <button onClick={() => cambiarColor("red")}>Red</button>
            <button onClick={() => cambiarColor("green")}>Green</button>
            <button onClick={() => cambiarColor("blue")}>Blue</button>
            <button onClick={() => cambiarColor("yellow")}>Yellow</button>
            <button onClick={() => cambiarColor("pink")}>Pink</button>
            <button onClick={() => cambiarColor("orange")}>Orange</button>
        </div>
    )

}


export default Fondo