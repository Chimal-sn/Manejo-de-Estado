import { useState } from "react"

function Adivinar() {

    const [numero, setNumero] = useState(Math.floor(Math.random() * 50) + 1)
    const [mensaje, setMensaje] = useState("")

    const adivinar = (e) => {
        const Valor = Number(e.target.value)
        if (Valor === numero) {
            setMensaje("Numero encontrado")
        } else if (Valor > numero) {
            setMensaje("Alto del numero correcto")
        } else {
            setMensaje("Bajo del numero correcto")
        }
    }

    return (
        <div>
            <h1>Adivina el numero</h1>
            <input type="number" onChange={adivinar} />
            <p>{mensaje}</p>
            <p>{numero}</p>
        </div>
    )

}

export default Adivinar