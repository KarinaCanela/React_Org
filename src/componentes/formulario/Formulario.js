import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/boton"

const Formulario = () => {

    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("Manejar el envio", event)
        
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre"/>
            <CampoTexto titulo="Puesto"
            placeholder="Ingresar Puesto"/>
            <CampoTexto titulo="Foto"
            placeholder="Ingresar enlace de Foto"/>
            <ListaOpciones />
            <Boton texto="Crear colaborador"/>
        </form>
    </section>
}

export default Formulario