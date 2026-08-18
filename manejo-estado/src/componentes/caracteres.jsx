import { useState } from "react";

function Caracteres() {

    const [texto, setTexto] = useState("")

    const longitudTexto = (e) => {
        setTexto(e.target.value)
    }

    return (
        <div>
            <h1>Caracteres</h1>
            <input type="text" value={texto} onChange={longitudTexto} />
            <p>{texto.length}</p>
        </div>
    )
}

export default Caracteres