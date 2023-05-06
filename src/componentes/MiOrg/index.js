import { useState } from "react"
import "./MiOrg.css"

const MiOrg = () => {
    //Estado - hooks
    //useState
    //useState()
    //const [nombreVariable,funcionActualiza] = useState(valorInicial)

    const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Mostrar/ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)
    }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={manejarClick} />
    </section>
}

export default MiOrg

