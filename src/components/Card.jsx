import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions/actions";
import { useState, useEffect } from "react";
// export default function Card(props) {
//    return (
//       <div  key = {props.id}>
//          <button onClick={props.onClose}>X</button>
//          <h2>Name: {props.name}</h2>
//          <h2>Status: {props.status}</h2>
//          <h2>Species: {props.species}</h2>
//          <h2>Gender: {props.gender}</h2>
//          <h2>Origin: {props.origin.name}</h2>
//          <img src={props.image} alt='' />
//       </div>
//    );
// }

export function Card(props) {
   const {id,name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites} = props;
   
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
    if(isFav){
      setIsFav(false);
      removeFav(id);
    }else{
      setIsFav(true);
      addFav({id,name,status,species,gender,origin,image})
    }

   }


   return (
      <div>
          {   isFav ? (      <button onClick={handleFavorite}>❤️</button>   ) : 
          (      <button onClick={handleFavorite}>🤍</button>   )}
         <button onClick={() => onClose(id)}>X</button>
         <Link to = {`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>Species: {species}</h2>
          <h2>Gender: {gender}</h2>
          <img src={image} alt={name} />

      </div>
   );
};

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}
export function mapDispatchToProps(dispatch){
   return{
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id))
       
   }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Card);