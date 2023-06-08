import "./ListaOpciones.css"

const ListaOpciones = (props) =>{

    /*//Metodo map -> arreglo.map( (equipos, index) => {
        return <option></option>
    })*/


    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones"> 
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipo.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option> )}
        </select>
    </div>
}

export default ListaOpciones;