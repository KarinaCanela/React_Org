import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/boton"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState ("")
    const [puesto,actualizarPuesto] = useState ("")
    const [foto,actualizarFoto] = useState ("")
    const [equipo,actualizarEquipo] = useState ("")
    const [titulo,actualizarTitulo] = useState ("")
    const [color,actualizarColor] = useState ("")

    const {registrarColaborador, crearEquipo} = props
   

    const manejarEnvio = (event) => {
        event.preventDefault()
        let datosaEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosaEnviar)     
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
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
            <Boton>Crear Colaborador</Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required={true} 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <CampoTexto 
                titulo="Color"
                placeholder="Ingresar el color en hex" 
                required={true} 
                valor={color}
                actualizarValor={actualizarColor}
                type= "color"
            />
            <Boton>Crear Equipo</Boton>
        
        </form>
    </section>
}

export default Formulario