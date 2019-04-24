import {LOGIN_START, LOGIN_SUCCESS, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_FAILURE,
    LOAD_NEW_FRIEND, NEW_FRIEND_SUCCESS, FETCH_FRIEND_UPDATE, FRIEND_UPDATE_SUCCESS, LOAD_DELETE_FRIEND, DELETE_FRIEND_SUCCESS} from "../actions/index";

const initialState = {
   questions: [{username: "BobSmith" , text: "How do increase my social media influence?" }, 
   {user: "JohnWells", text: "What if I don't qualify for a business loan?"}],
    // loggingIn: false,
    error: "",
 
   };
 
   const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          error: '',
          errorStatusCode: null,
          fetchingFriends: false,
          loggingIn: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          error: '',
          loggingIn: false
        };
        case FETCH_DATA_START:
        return {
          ...state,
          error: '',
          fetchingFriends: true,
          errorStatusCode: null
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          error: '',
          errorStatusCode: null,
          fetchingFriends: false,
          friends: action.payload
        
        };
      case FETCH_FAILURE:
        return {
          ...state,
          fetchingFriends: false,
          error: action.payload.data.error,
          errorStatusCode: action.payload.status
        };
        case LOAD_NEW_FRIEND:
        return {
          ...state,
          error: '',
    
          
        };

        case NEW_FRIEND_SUCCESS:
        
          let newFriend1 ={
            id: "", name: "", age:"", email: ""}
          
         return{ ...state, friends: [...state.friends, newFriend1] };
        
         case FETCH_FRIEND_UPDATE:
         return{
           ...state, error: ""
         };

         case FRIEND_UPDATE_SUCCESS:
         let updateFriend = {
           id: "", name:"", age:"", email:""
         }
         return{...state, friends: [...state.friends, updateFriend]
          };

          case LOAD_DELETE_FRIEND:
          return { ...state, error:""}

         

      default:
        return state;
    }
  };
  
  export default reducer;
     