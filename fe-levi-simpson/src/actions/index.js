import axios from 'axios';
import axiosWithAuth from '../utils/AxiosAuth';

// const token= 'lambda100500900';

export const REG_START ="REG_START";
export const REG_SUCCESS = "REG_SUCCESS";
export const REG_FAILURE= "REG_FAILURE";

export const regUser = creds => dispatch => {
  dispatch({type: REG_START});
  console.log(creds);
  return axios
    .post('https://mentor-mee.herokuapp.com/auth/register', creds)

    .then(res => {
      dispatch({type: REG_SUCCESS, payload: res.data});
    })
    .catch(err => dispatch({type: REG_FAILURE, payload: err}));
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';



export const login = creds => dispatch => {
    dispatch({type: LOGIN_START});
    return axios
    .post('https://mentor-mee.herokuapp.com/auth/login', creds)
    .then(res => {
        
        dispatch({type: LOGIN_SUCCESS, payload: res.data.token});
        localStorage.setItem('token', res.data.token );
    })
    .catch(err => console.log(err));
};



export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getData = (id) => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axiosWithAuth()
    .get('https://mentor-mee.herokuapp.com/users')
    .then(res => {
      console.log('this is res',res)
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
     
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};


export const LOAD_NEW_FRIEND = 'LOAD_NEW_FRIEND';
export const NEW_FRIEND_SUCCESS='NEW_FRIEND_SUCCESS';

export const postMessage = (data) => dispatch=> {
  dispatch({type:LOAD_NEW_FRIEND});
  axiosWithAuth()
.post('https://mentor-mee.herokuapp.com/users', data)
.then(res =>{
console.log("resolved:", res);
dispatch({type: NEW_FRIEND_SUCCESS, payload: data})
})
.catch(err =>console.log(err));


};


export const FETCH_FRIEND_UPDATE = "LOAD_FRIEND_UPDATE";
export const FRIEND_UPDATE_SUCCESS= "FRIEND_UPDATE_SUCESS";

export const updateFriend = (name, age, email, id) => dispatch => {
  dispatch({type: FETCH_FRIEND_UPDATE});
  axiosWithAuth()
  .put(`http://localhost:5000/api/friends/${id}`, {name, age:Number(age), email})
  .then(res => {
    console.log("putResolved:", res);
    dispatch({type: FRIEND_UPDATE_SUCCESS, payload: id});
  })
  .catch(err=> console.log(err));
}

export const LOAD_DELETE_FRIEND = "LOAD_DELETE_FRIEND";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";

export const deleteFriend = (id) => dispatch => {
dispatch({type: LOAD_DELETE_FRIEND});
  axiosWithAuth()
  .delete(`http://localhost:5000/friends/${id}`)
  .then(res => {
    console.log("delete:", res);
    dispatch({type: DELETE_FRIEND_SUCCESS, payload:id});
  })
  .catch(err => console.log(err));

}

//////QUESTIONS

export const FETCH_QUESTION_LOAD = 'FETCH_QUESTION_LOAD';
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const FETCH_QUESTION_ERROR ='FETCH_QUESTION_ERROR';
export const getQuestion = () => dispatch => {
  dispatch({ type: FETCH_QUESTION_LOAD });
  axiosWithAuth()
    .get('https://mentor-mee.herokuapp.com/questions')
    .then(res => {
      console.log('this is res',res)
      dispatch({ type: FETCH_QUESTION_SUCCESS, payload: res.data });
     
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_QUESTION_ERROR, payload: err.response });
    });
};

export const FILTER_QUESTION = "FILTER_QUESTION"
export const filterQuestion = Q => {
  return {
    type: FILTER_QUESTION,
    payload: Q
  };
};

export const  ADD_QUESTION_LOAD= ' ADD_QUESTION_LOAD';
export const ADD_QUESTION_SUCCESS='ADD_QUESTION_SUCCESS';

export const postQuestion = question => dispatch=> {
  dispatch({type:ADD_QUESTION_LOAD});
 
 return axiosWithAuth()
.post('https://mentor-mee.herokuapp.com/questions', question)
.then(res =>{
console.log("resolved:", res);
dispatch({type: ADD_QUESTION_SUCCESS, payload: res.data})
})
.catch(err =>console.log(err));


};

export const  ADD_ANSWER_START= ' ADD_QUESTION_LOAD';
export const ADD_ANSWER_SUCCESS='ADD_QUESTION_SUCCESS';
export const ADD_ANSWER_FAILURE='ADD_QUESTION_SUCCESS';

const URL = 'https://mentor-mee.herokuapp.com/questions';
export const addAnswer = answer => dispatch => {
  dispatch({type: ADD_ANSWER_START});

  return axiosWithAuth()
    .post(URL, answer)
    .then(res => dispatch({type: ADD_ANSWER_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ADD_ANSWER_FAILURE, payload: err.message}));
};

export const  ADD_QUESTION_START= ' ADD_QUESTION_START';
export const ADD_QUESTION_SUCCESS='ADD_QUESTION_SUCCESS';
export const ADD_QUESTION_FAILURE='ADD_QUESTION_FAILURE';

export const addQuestion = question => dispatch => {
  dispatch({type: ADD_QUESTION_START});

  return axiosWithAuth()
    .post(URL, question)
    .then(res => dispatch({type: ADD_QUESTION_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ADD_QUESTION_FAILURE, payload: err.message}));
};

export const  DELETE_ANSWER_START= ' ADD_QUESTION_START';
export const DELETE_ANSWER_SUCCESS='ADD_QUESTION_SUCCESS';
export const DELETE_ANSWER_FAILURE='ADD_QUESTION_FAILURE';

export const deleteAnswer = id => dispatch => {
  dispatch({type: DELETE_ANSWER_START});

  axiosWithAuth()
    .delete(`https://mentor-mee.herokuapp.com/answers/${id}`)
    .then(res => {
      console.log(res);
      dispatch({type: DELETE_ANSWER_SUCCESS, payload: id});
    })
    .catch(err =>
      dispatch({type: DELETE_ANSWER_FAILURE, payload: err.message})
    );
};

export const  DELETE_QUESTION_START= ' ADD_QUESTION_START';
export const DELETE_QUESTION_SUCCESS='ADD_QUESTION_SUCCESS';
export const DELETE_QUESTION_FAILURE='ADD_QUESTION_FAILURE';

export const deleteQuestion = id => dispatch => {
  dispatch({type: DELETE_QUESTION_START});
  console.log(id);
  return axiosWithAuth()
    .delete(`https://mentor-mee.herokuapp.com/questions/${id}`)
    .then(res => {
      console.log(res);
      dispatch({type: DELETE_QUESTION_SUCCESS, payload: id});
    })
    .catch(err =>
      dispatch({type: DELETE_QUESTION_FAILURE, payload: err.message})
    );
};


export const  EDIT_QUESTION_START = 'EDIT_QUESTION_START'
export const EDIT_QUESTION_SUCCESS ='EDIT_QUESTION_SUCCESS' 
export const EDIT_QUESTION_FAILURE ='EDIT_QUESTION_FAILURE'

export const editQuestion = (id, question) => dispatch => {
  dispatch({type: EDIT_QUESTION_START});
  console.log(id);
  axiosWithAuth()
    .put(`${URL}/${id}`, question)

    .then(res => {
      console.log(res.data);
      dispatch({type: EDIT_QUESTION_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: EDIT_QUESTION_FAILURE, payload: err.message});
    });
};


export const  FETCH_ANSWERS_START = 'FETCH_ANSWERS_START'
export const FETCH_ANSWERS_SUCCESS ='FETCH_ANSWERS_SUCCESS' 
export const FETCH_ANSWERS_FAILURE ='FETCH_ANSWERS_FAILURE'

export const fetchAnswers = id => dispatch => {
  dispatch({type: FETCH_ANSWERS_START});

  axiosWithAuth()
    .get(`https://mentor-mee.herokuapp.com/questions/${id}`)
    .then(res =>
      dispatch({type: FETCH_ANSWERS_SUCCESS, payload: res.data.answers})
    )
    .catch(err =>
      dispatch({type: FETCH_ANSWERS_FAILURE, payload: err.message})
    );
};

export const  FETCH_QUESTIONS_START = 'FETCH_QUESTIONS_START'
export const FETCH_QUESTIONS_SUCCESS ='FETCH_QUESTIONS_SUCCESS' 
export const FETCH_QUESTIONS_FAILURE ='FETCH_QUESTIONS_FAILURE'

export const fetchQuestions = () => dispatch => {
  dispatch({type: FETCH_QUESTIONS_START});

  axiosWithAuth()
    .get('https://mentor-mee.herokuapp.com/questions')
    .then(res => {
      console.log(res);
      dispatch({type: FETCH_QUESTIONS_SUCCESS, payload: res.data});
    })
    .catch(err =>
      dispatch({type: FETCH_QUESTIONS_FAILURE, payload: err.response})
    );
};

export const  LOGOUT_START = 'FETCH_QUESTIONS_START'
export const LOGOUT_SUCCESS ='FETCH_QUESTIONS_SUCCESS' 
export const LOGOUT_FAILURE ='FETCH_QUESTIONS_FAILURE'


export const logOutUser = () => dispatch => {
  dispatch({type: LOGOUT_START});

  localStorage
    .clear()
    .then(() => {
      dispatch({type: LOGOUT_SUCCESS});
    })
    .catch(err => dispatch({type: LOGOUT_FAILURE, payload: err.message}));
};