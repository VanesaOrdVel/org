import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/Header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/miORG';
import Equipo from './componentes/Equipos';
import Footer from './componentes/footer';

function App() {

  //Destructuraciones
  const [mostrarForm, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Instructora",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto:"https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Devops",
      foto:"https://github.com/JoseDarioGonzalezCha.png",
      nombre: "José Gonzalez",
      puesto: "Dev FullStack",
      fav: false
     }
  ])

  const [equipo, actualizarEquipos] = useState ([

    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"

    },

    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"

    },

    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"

    },

    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"

    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"

    },

    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"

    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"

    }
  ])
  

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra  <-- modo corto circuito
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm)
  }

  //Registro de colaboradores

  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador", colaborador);
    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipo.map((equipo) => {
      if(equipo.id===id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipo, { ...nuevoEquipo, id: uuid() }])
  }

  //fav
  const like = (id) => {
    console.log("like", id)

    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }


  //Datos retornados
  return (
    <div>
      <Header/>

      {/*mostrarForm ? <Formulario/> : <></>*/}
      {
        mostrarForm && <Formulario 
        equipo={equipo.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }

      <MiOrg 
        cambiarMostrar={cambiarMostrar}
      />

      {/**Metodo para regresar arreglos dentro de JSX (MAP) */}
      {
        equipo.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor = {actualizarColor}
        like={like}/>)
      }

    <Footer/>
    </div>
  );
}

export default App;
