import { ADD_FAV, REMOVE_FAV , FILTER, ORDER} from "../actions/actios-types";

const initialState = {
 myFavorites: [],
 allCharacters: []

}

const rootReducer = (state=initialState, action)=>{
   const {type , payload} = action;
   switch(type){
   
    case ADD_FAV:
   return{
   ...state,
   myFavorites:  [...state.allCharacters, payload],
   allCharacters:  [...state.allCharacters, payload]
   
}

   case REMOVE_FAV:
    return{
     ...state,
     myFavorites: state.myFavorites.filter(element => element.id !== payload)

    }

   case FILTER:
      const charactersFiltered = payload !== "" ? state.allCharacters.filter(element => element.gender === payload): state.allCharacters 
      return{
         ...state,
         myFavorites: charactersFiltered
         
      }

    case ORDER:
      const orderCharacter = [...state.allCharacters]
      return{
         ...state,
         myFavorites: payload === "A" ? orderCharacter.sort((a,b)=> a.id - b.id) : orderCharacter.sort((a,b) => b.id - a.id)
      }
    default:
        return{
            ...state
        }
    
   }


 
}

export default rootReducer;