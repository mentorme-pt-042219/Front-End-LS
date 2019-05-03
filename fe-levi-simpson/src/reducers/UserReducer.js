import {REG_START, REG_SUCCESS, REG_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE, FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_FAILURE,
    LOAD_NEW_FRIEND, NEW_FRIEND_SUCCESS, LOAD_NEW_QUESTION, NEW_QUESTION_SUCCESS, FETCH_FRIEND_UPDATE, FRIEND_UPDATE_SUCCESS, LOAD_DELETE_FRIEND, DELETE_FRIEND_SUCCESS} from "../actions/index";

const initialState = {
  //  questions: [{id:1, user: "BobSmith" , topic:"Marketing", text: "How do increase my social media influence?" }, 
  //  {id:2, user: "JohnWells", topic:"Finance", text: "What if I don't qualify for a business loan?"}],
  //   // loggingIn: false,
    error: "",
    fethcingMessage: false,
   user: [],
  

    logingIn: false,
    error: null,
    isAuthenticated: false,
    logingOut: false,
    registering: false,
    isRegistered: false
 
   };
 
  export  const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          error: '',
          logingIn: true,
          isAuthenticated: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          error: '',
          logingIn: false,
          isAuthenticated: true,
        };
        case LOGIN_FAILURE:
      return {
        ...state,
        logingIn: false,
        isAuthenticated: false,
        error: action.payload
      };
        case FETCH_DATA_START:
        return {
          ...state,
          error: '',
          fetchingMessage: true,
         
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          error: '',
      
          fetchingMessage: false,
        user: action.payload
        
        };
      case FETCH_FAILURE:
        return {
          ...state,
          fetchingMessage: false,
       
        
        };
        case LOAD_NEW_FRIEND:
        return {
          ...state,
          error: '',
    
          
        };

        case NEW_FRIEND_SUCCESS:
        
          let newUser ={
            id: "", handle: "", email:"", password:""}
          
         return{ ...state, user: [...state.user, newUser] };
        
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

          case LOGOUT_START:
          return {
            ...state,
            logingOut: true,
            isAuthenticated: true,
            error: null
          };
        case LOGOUT_SUCCESS:
          return {
            ...state,
            logingOut: false,
            isAuthenticated: false,
            error: null
          };
        case LOGOUT_FAILURE:
          return {
            ...state,
            logingOut: false,
            isAuthenticated: true,
            error: action.payload
          };

         case REG_START:
      return {
        ...state,
        registering: true,
        isRegistered: false,
        error: null
      };
    case REG_SUCCESS:
      return {
        ...state,
        registering: false,
        isRegistered: true,
        error: null
      };
    case REG_FAILURE:
      return {
        ...state,
        registering: false,
        isRegistered: false,
        error: action.payload
      };

      default:
        return state;
    }
  };
  
