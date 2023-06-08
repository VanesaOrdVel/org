import { useState } from "react"
import "./formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../boton"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props
    
    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log("Manejar el envio");
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
            registrarColaborador(datosEnviar);
     }


     const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
     }

    return <section className="formulario">
{/**Formulario para agregar colaboradores*/}
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador </h2>
            <Campo titulo="Nombre" 
                        placeholder="Ingresar nombre" 
                        required 
                        valor={nombre}     
                        actualizarValor={actualizarNombre}/>

            <Campo titulo="Puesto" 
                        placeholder="Ingresar puesto" 
                        required 
                        valor={puesto}     
                        actualizarValor={actualizarPuesto}/>

            <Campo  titulo="Foto"  
                        placeholder="Ingresar enlace de foto" 
                        required
                        valor={foto}     
                        actualizarValor={actualizarFoto}/>
            
            <ListaOpciones valor={equipo}
                        actualizarEquipo={actualizarEquipo}
                        equipo={props.equipo}/>
            <Boton>
                Crear
            </Boton> 
        </form>

{/**Formulario para agregar equipos*/}
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo </h2>
            <Campo titulo="Titulo" 
                        placeholder="Ingresar titulo" 
                        required 
                        valor={titulo}     
                        actualizarValor={actualizarTitulo}/>

            <Campo titulo="Color" 
                        placeholder="Ingresar color en Hex" 
                        required 
                        valor={color}     
                        actualizarValor={actualizarColor}
                        type="color"
                    />
    
            <Boton>
                Crear Equipo 
            </Boton> 
    </form>
    </section>
}

export default Formulario