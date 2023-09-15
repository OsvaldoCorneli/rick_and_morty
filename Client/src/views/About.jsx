import style from "./about.module.css"

function About(){

return(
 <div className={style.titulos} >
 
 <h1 className={style.hs1}> About Me</h1>
 <p className={style.ps}>
Mi nombre es Osvaldo Matías Corneli Nassif y soy el creador de esta webapp inspirada en 
"Rick and Morty",
 un proyecto integrador del  modulo 2, 3 y 4.<br></br>
 Estoy estudiando en "Soy Henry" y este proyecto
forma parte de mi aprendizaje y pasión por la programación.<br></br>

Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto conmigo a
 través de mi perfil de
  <a href="https://www.linkedin.com/in/osvaldo-corneli-nassif-822728268/" style = {{color: "skyblue" }}>LinkedIn</a>. <br></br>

¡Gracias por visitar mi proyecto!</p>
 </div>


)

}

export default About;