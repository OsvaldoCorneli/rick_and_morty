import Card from '../Card/Card';
import style from "./cards.module.css"

export default function Cards({characters, onClose}) {
   return <div >
      <div className={style.ordenar}>
      {
         
         characters.map((character) => (
          <Card 
          key={characters.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={onClose}
          />

         )) 
      }
          </div>
   </div>;
}
