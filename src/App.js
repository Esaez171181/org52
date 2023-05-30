import { useState } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/Formulario/formulario';
import MiOrg from './Componentes/MiOrg/MiOrg';
import Equipo from './Componentes/Equipo/Equipo';
import Colaborador from './Componentes/Colaborador/Colaborador';
import Footer from './Componentes/Footer/Footer';
import ListaOpciones from './Componentes/ListaOpciones/ListaOpciones';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Programación",
    foto:"/img/foto enrique.png",
    nombre: "Enrique Sáez",
    puesto: "Instructor",
    fav: false
    },
    {
      id: uuid(),
      equipo: "Devops",
      foto:"/img/foto paty.png",
      nombre:"Patricia Meza ",
      puesto:"Instructora",
      fav: true
    },
    {
    id: uuid(),
    equipo: "Móvil",
    foto:"/img/foto ike.png",
    nombre: "José Enrique Sáez",
    puesto: "Profesor",
    fav: true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto:"/img/foto patricio.png",
      nombre:"Patricio Sáez",
      puesto:"Doctor",
      fav: false
    },
   ]) 
  
  const [equipos, actualizarEquipos] = useState ([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ])

  // Ternario --> es como un if.. asi   condicion ? seMuestra : noMuestra   el ? es como el if
  // tambien se puede utilizar  asi   "condicion && seMuestra"  donde si la condición es verdadera ejecuta seMuestra ya no hay una opción si no cumple
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

 // Resgistrar Colaborador

 const registrarColaborador = (colaborador) => {
      console.log("nuevo colaborador", colaborador)
      //se usa la tecnica del Spread operator..que sirve para agregar los datos del formulario al arreglo sin perder los datos existentes
      actualizarColaboradores([...colaboradores, colaborador])
    }

    // ELIMINAR COLABORADOR 
    const eliminarColaborador = (id) => {
       console.log("Eliminar colaborador")
       const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
       actualizarColaboradores(nuevosColaboradores)
    }

    // Actualizar color de equipo
      const actualizarColor = (color, id) => {
          console.log("Actualizar", color, id)
          const equiposActualizados = equipos.map((equipo) => {
             if(equipo.id === id){
                equipo.colorPrimario = color
             } 
              return equipo
          })
            actualizarEquipos(equiposActualizados)
      }

  // LISTA DE EQUIPOS, se cambio y se uso un useState para actualizar el color cuando se cambie 

// CREAR EQUIPO NUEVO
 const crearEquipo = (nuevoEquipo)=> {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
 }

  const like = (id) => {
    console.log("Like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => { 
      if(colaborador.id === id) {
         colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }


  return (
    <div>
       <Header />
       {/*mostrarFormulario === true ? <Formulario /> : <div></div>*/ }
       {mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
         />
       }
       <MiOrg cambiarMostrar= {cambiarMostrar}/>
       
       {
        // map es un metodo de react para recorrer un arreglo
        // siempre que se usa map hay que colocarle un key que es un identificador de cada elemento del arreglo
         equipos.map( (equipo) =>  <Equipo 
            datos={equipo} 
            key={equipo.titulo} 
            colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
            /> 
         )
       } 

      <Footer />

    </div>
  );
}

export default App;
