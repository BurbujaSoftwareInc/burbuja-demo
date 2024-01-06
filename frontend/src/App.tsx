import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
   const [miembros, setMiembros] = useState("No hay miembros obtenidos");
   async function llamaBackend() {
      try {
         const response = await axios.get("http://localhost:8000/equipo");
         console.log(response);
         const { data } = response; // {miembros: ""}
         if (data.miembros && typeof data.miembros === "string") {
            // Verificar la respuesta
            setMiembros(data.miembros);
         }
      } catch (error) {
         console.log("error");
      }
   }

   return (
      <>
         <div>
            <a href="https://vitejs.dev" target="_blank">
               <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <h1>Vite + React</h1>
         <div className="card">
            <button onClick={async () => await llamaBackend()}>Obtener Miembros</button>
            <p>{miembros}</p>
         </div>
         <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </>
   );
}

export default App;
