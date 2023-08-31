

export default function validation (userDate){ 
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;//para verificar si lo que ingresa el usuario es un email
    const regexPassword = /\d/; //para verificar que sea el usuario ingrese un numero
    const errors = {};
    if(!regexEmail.test(userDate.email)){
      errors.email = 'El email ingresado no es valido'
    }
    if(!userDate.email){
        errors.email = 'El email no puede estar vacio'
    }
    if(userDate.email.length > 36){
        errors.email = 'El email no puede tener mas de 35 caracteres'
    }
    if(!regexPassword.test(userDate.password)){
        errors.password = 'La constraseña tiene que tener al menos un numero'
    }
    if(userDate.password.length < 6 || userDate.password.length > 10){
        errors.password = 'la contraseña tiene que tener una longitud entre 6 y 10 caracteres'
    }
   



 return errors;
}