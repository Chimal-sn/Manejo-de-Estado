import { useState } from "react";

function mostrarTexto() {
    const [mensaje, setMensaje] = useState(["Hola Mundo"]);
    return (

        <div>
            <p>
                {mensaje}
            </p>

            <button onClick={() => setMensaje("Hola Mundo")}>Mostrar</button>

            <button onClick={() => setMensaje("")}>Ocultar</button>
        </div>
    )

}

export default mostrarTexto