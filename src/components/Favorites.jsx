
import Card from "./Card";
import { connect } from "react-redux";

const Favorites = ({myFavorites})=>{

return(
    <>
    {
     myFavorites?.map(element => 
      <div>
         <Card
         key={element.id}
         id={element.id}
         name={element.name}
         species={element.species}
         gender={element.gender}
         image={element.image}
         />

      </div>
      )




    }
      </>
) 
}

export const mapStateToProp = (state)=>{
    return{
    myFavorites: state.myFavorites
}

}


export default connect (mapStateToProp, null)(Favorites);