import { useState } from "react";
import "./formulario.css"
import Campo from "../Campo/CampoTexto"; 
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {

const [nombre,actualizarNombre] = useState("")
const [puesto,actualizarPuesto] = useState("")
const [foto,actualizarFoto] = useState("")
const [equipo,actualizarEquipo] = useState("")

const[titulo, actualizarTitulo] = useState("")
const[color, actualizarColor] = useState("")

const { registrarColaborador, crearEquipo } = props

// este codigo lo que hace es prevenir que los datos se manden a un url por defecto
// con esta funcion manejarEnvio lo que se hace es quitarle esa responsabilidad al navegador 
const manejarEnvio = (event) => {
    event.preventDefault()
    let datosAEnviar = {
        nombre:nombre,
        puesto:puesto,
        foto:foto,
        equipo:equipo
    }
    registrarColaborador(datosAEnviar)
}
   const manejarNuevoEquipo = (e) => {
      e.preventDefault()
      crearEquipo({titulo, colorPrimario:color})
   }
    
 return <section className="formulario">
<form onSubmit={manejarEnvio}>
    <h2>Rellena el formulario para crear el colaborador</h2>
    <Campo titulo="Nombre" 
        placeholder="Ingresar Nombre..." 
        required
        valor={nombre}
        actualizarValor={actualizarNombre} 
    />
    <Campo titulo="Puesto" 
        placeholder="Ingresar Puesto..." 
        required
        valor={puesto}
        actualizarValor={actualizarPuesto} 
   />
    <Campo titulo="Foto" 
        placeholder="Ingresar Enlace de Foto..." 
        required
        valor={foto}
        actualizarValor={actualizarFoto}
    />
    <ListaOpciones 
        valor={equipo}
        actualizarEquipo={actualizarEquipo}
        equipos={props.equipos}
    />
    <Boton texto="Crear"/>
</form>
<form onSubmit={manejarNuevoEquipo}>
    <h2>Rellena el formulario para crear el equipo</h2>
    <Campo titulo="Titulo" 
        placeholder="Ingresar titulo..." 
        required
        valor={titulo}
        actualizarValor={actualizarTitulo} 
    />
    <Campo titulo="Color" 
        placeholder="Ingresar el color en Hex" 
        required
        valor={color}
        actualizarValor={actualizarColor} 
        type = "color"
   />
   <Boton texto="Resgistrar Equipo" />
   </form>
</section>
}

export default Formulario
