import { useState } from "react"

function Contador() {

    const [contador, setContador] = useState(0)

    const aumentar = () => {
        if (contador < 10) {
            setContador(contador + 1)
        }
    }

    const disminuir = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    return (
        <div>
            <h1>Contador</h1>
            <p>{contador}</p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    )

}

export default Contador