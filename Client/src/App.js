import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import {useState} from 'react';
import axios from 'axios';
import { Routes, Route , useLocation} from 'react-router-dom';
import About from './views/About'
import Detail from './views/Detail';
import Error from './views/Error';
import Form from './views/Form';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';

function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   console.log(characters)
   const navigate = useNavigate();
   localStorage.setItem('access', 'true'); 
    
    const [access, setAccess] = useState(true);
  

   // function login(userData) {const { email, password } = userData;

   
   // const URL = 'http://localhost:3001/rickandmorty/login/';
   // axios(URL + `?email=${email}&password=${password}`)
   // .then(({ data }) => {      const { access } = 
   // data;      setAccess(data);      access && navigate('/home');});}

  
  async function login(userData) {const { email, password } = userData;

   try{
   const URL = 'http://localhost:3001/rickandmorty/login/';
    const {data} = await axios(URL + `?email=${email}&password=${password}`)
     const { access } = data;   
        setAccess(data);    
        access && navigate('/home');}
   catch(error){alert(error)}}
 


   useEffect(() => {   
      if(!access) {
          navigate('/')};
         }, [access]);

const logout = () => {
           setAccess(false)
            navigate('/');
          }         
          


const onSearch = async (id) => {
   try{
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if(data.name){
         setCharacters((oldChars) => [...oldChars, data]);
      }
      else{
         throw new Error('¡No hay personajes con este ID!');
       }
      }
catch(error){ alert(error)}
  

}



               
   const clearAll = () => {
    setCharacters([]);
   }

   
      
         
const onClose = (id) => {

   const filteredCharacters = characters.filter(character => character.id !== +id);
    setCharacters(filteredCharacters);
   
}


   return (

      <div className='App'>
         {
            location.pathname !== '/'
            ?<Nav onSearch = {onSearch} clearAll={clearAll} logout={logout}/>
            : null 
         }
         <Routes>
         <Route path={'/'} element = {<Form login={login}/>}/>
         <Route path = {'/home'} element = {<Cards onClose={onClose} characters={characters} />}/>
         <Route path = {'/about'} element = {<About/>} />
         <Route path = {`/detail/:id`} element = {<Detail/>}/>
         <Route path = {'/favorites'} element = {<Favorites/>}/>
         <Route path = "*" element={<Error/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
