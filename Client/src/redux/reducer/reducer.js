import { ADD_FAV, REMOVE_FAV , FILTER, ORDER} from "../actions/actios-types";

const initialState = {
 myFavorites: [],
 allCharacters: []

}

const rootReducer = (state=initialState, action)=>{
   const {type , payload} = action;
   switch(type){
   
    case ADD_FAV:      
      return { ...state,
          myFavorites: payload,
           allCharacters: payload 
         };
   

   case REMOVE_FAV:     
    return { ...state, 
      myFavorites: payload , 
      allCharacters: payload };

   case FILTER:
      const charactersFiltered =state.allCharacters.filter(element => element.gender === payload)
   
      return{
         ...state,
         myFavorites: 
         payload === ""
         ? [...state.allCharacters]
         : charactersFiltered,
         
         
      }

    case ORDER:
      const allCharactersOrder = [...state.allCharacters]
     return{
         ...state,
         myFavorites:
          payload === 'A'
          ?allCharactersOrder.sort((a,b)=>a.id - b.id)
         :allCharactersOrder.sort((a,b)=> b.id - a.id)
      }
    default:
        return{
            ...state
        }
    
   }


 
}

export default rootReducer;