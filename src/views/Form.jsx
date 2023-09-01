import React from "react";
import { useState } from "react"
import validation from '../helpers/validation'

export default function Form ({login}){
   const [errors, setErrors] = useState({});
   const [passwordvisible, setPasswordVisible] = useState(false);


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

const passwordview = () =>{
    if(!passwordvisible){
        setPasswordVisible(true);
    }
    else{
        setPasswordVisible(false);
    }
}

return(
    <div>
    <form onSubmit={handleSubmit}>
     <p style={{ color: 'red', fontSize: '15px' }}>{errors.email}</p>
     <label>Email: </label>
     <input type="text" name="email" value={userData.email} onChange={handleChange}/>
     <label>Password: </label>
     <input type={passwordvisible?"text":'password'} name='password' value={userData.password} onChange={handleChange}/>
     <button type='button' onClick={passwordview}>👁️</button>
     <p style={{ color: 'red', fontSize: '15px' }}>{errors.password}</p>
    
     <button>Submit</button>
    </form>
    </div>
)


}