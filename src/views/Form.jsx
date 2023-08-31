import React from "react";
import { useState } from "react"
import validation from '../helpers/validation'

export default function Form ({login}){
   const [errors, setErrors] = useState({});


    const [userData, setUserDate] = useState({
    email: '',
    password: ''
});

const handleChange = (event)=>{
  setUserDate({...userData,[event.target.name]: event.target.value})
  
  setErrors(validation({...userData,[event.target.name]: event.target.value}))

}

const handleSubmit = (event)=>{
    event.preventDefault()
    login(userData);
    
}    


return(
    <div>
    <form onSubmit={handleSubmit}>
     <p>{errors.email}</p>
     <label>Email: </label>
     <input type="text" name="email" value={userData.email} onChange={handleChange}/>
     <label>Password: </label>
     <input type="password" name='password' value={userData.password} onChange={handleChange}/>
     <p>{errors.password}</p>
    
     <button>Submit</button>
    </form>
    </div>
)


}