import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/boton"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState ("")
    const [puesto,actualizarPuesto] = useState ("")
    const [foto,actualizarFoto] = useState ("")
    const [equipo,actualizarEquipo] = useState ("")
   

    const manejarEnvio = (event) => {
        event.preventDefault()
        let datosaEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo:equipo
        }
        console.log(datosaEnviar)
        
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required={true} 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <CampoTexto 
                titulo="Puesto"
                placeholder="Ingresar Puesto" 
                required={true} 
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
                titulo="Foto"
                placeholder="Ingresar enlace de Foto" 
                required={true} 
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear colaborador"/>
        </form>
    </section>
}

export default Formulario