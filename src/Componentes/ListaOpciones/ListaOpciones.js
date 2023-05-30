import "./ListaOpciones.css"
import App from "../../App"


const ListaOpciones = (props) => {
// se usa el Metodo map --> arreglo.map((equipo, index) => {
//  return <option></option>
 
   /*const equipos = [
      "Programación",
      "Front End",
      "Data science",
      "Devops",
      "UX y Diseño",
      "Movil",
      "Innovación y Gestión"      
    ]  */ 


    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

   return <div className="lista-opciones">
       <label>Equipos</label>
       <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
        {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)} 
       </select>
   </div>
}

export default ListaOpciones