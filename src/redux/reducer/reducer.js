import { ADD_FAV, REMOVE_FAV } from "../actions/actios-types";

const initialState = {
 myFavorites: []

}

const rootReducer = (state=initialState, actions)=>{
   const {type , payload} = actions;
   switch(type){
   
    case ADD_FAV:
   return{
   ...state,
   myFavorites: [...state.myFavorites, payload] 
}
   case REMOVE_FAV:
    return{
     ...state,
     myFavorites: state.myFavorites.filter(element => element.id != payload)

    }

    default:
        return{
            ...state
        }
    
   }


 
}

export default rootReducer;