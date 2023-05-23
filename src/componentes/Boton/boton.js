import "./boton.css"

const Boton = (props) => {
    console.log(props.texto)
    return <button className="boton">{props.children}</button>

}

export default Boton