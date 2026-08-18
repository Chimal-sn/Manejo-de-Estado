import { useState } from "react";

function Semaforo() {

    const [color, setColor] = useState("red")

    const cambiarColor = (color) => {
        setColor(color)
    }

    return (
        <div>
            <div style={{ backgroundColor: color }}>
                <button onClick={() => cambiarColor("red")}>Red</button>
                <button onClick={() => cambiarColor("green")}>Green</button>
                <button onClick={() => cambiarColor("blue")}>Blue</button>
            </div>
        </div>
    )
}

export default Semaforo