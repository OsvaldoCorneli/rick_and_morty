import {useState} from 'react';

export default function SearchBar(props) {
   const {onSearch} = props; 
   const [id, setId] = useState('');
   const handleChange = (event) => {
      const num = event.target.value
      const convertednumber = convertirStringANumero(num)
      if(typeof convertednumber === "number"){ //verifica que el usuario ingrese un numero en la busqueda del character
      setId(event.target.value);}
      else{ alert("ID Must be numbers")}

   }

   function convertirStringANumero(str) {
      if (typeof str === "string" && !isNaN(str)) {
        return parseFloat(str);
      }
      return str; // Devuelve el mismo valor si no es un string numérico válido
    }

   return (
      <div>
         <input type='search' placeholder = "Search ID" onChange={handleChange} value={id}/>
         <button onClick={()=>{onSearch(id); setId("")}}>Agregar</button>
      </div>
   );
}
