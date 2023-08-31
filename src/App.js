import React from 'react';
import './App.css';
import Cards from './components/Cards'
import Nav from './components/Nav'
import {useState} from 'react';
import axios from 'axios';
import { Routes, Route , useLocation} from 'react-router-dom';
import About from './views/About'
import Detail from './views/Detail';
import Error from './views/Error';
import Form from './views/Form';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const [access, setAccess] = useState(localStorage.getItem('access') === 'true');
   const EMAIL = 'overcorneli@gmail.com';
   const PASSWORD = 'qwerty1';
   
   function login(userData) {  
       if (userData.password === PASSWORD && userData.email === EMAIL)
        { setAccess(true);      
          localStorage.setItem('access','true');
          navigate('/home'); 
         }}

   useEffect(() => {   
      if(!access) {
          navigate('/')};
         }, [access]);



 const onSearch = (id) => {  
   // `https://rym2-production.up.railway.app/api/character/${id}?key=henrym-OsvaldoCorneli` 
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {      
         if (data.name) {         setCharacters((oldChars) => [...oldChars, data]);    
           } else {alert('¡No hay personajes con este ID!');      }   
         });}
               
   const clearAll = () => {
    setCharacters([]);
   }
      
         
const onClose = (id) => {

   const filteredCharacters = characters.filter(character => character.id !== Number(id));
    setCharacters(filteredCharacters);
   
}


   return (

      <div className='App'>
         {
            location.pathname !== '/'
            ?<Nav onSearch = {onSearch} clearAll={clearAll} setAccess={setAccess}/>
            : null 
         }
         <Routes>
         <Route path={'/'} element = {<Form login={login}/>}/>
         <Route path = {'/home'} element = {<Cards onClose={onClose} characters={characters} />}/>
         <Route path = {'/about'} element = {<About/>} />
         <Route path = {`/detail/:id`} element = {<Detail/>}/>
         <Route path = "*" element={<Error/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
