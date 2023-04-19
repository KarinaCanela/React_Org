import CampoTexto from "../CampoTexto/CampoTexto"
import "./Formulario.css"

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre"/>
            <CampoTexto titulo="Puesto"
            placeholder="Ingresar Puesto"/>
            <CampoTexto titulo="Foto"
            placeholder="Ingresar enlace de Foto"/>
        </form>
    </section>
}

export default Formulario