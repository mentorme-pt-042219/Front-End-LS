import axios from 'axios';
import axiosWithAuth from '../utils/AxiosAuth';



export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';



export const login = creds => dispatch => {
    dispatch({type: LOGIN_START});
    return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
        localStorage.setItem('token', res.data.payload );
        dispatch({type: LOGIN_SUCCESS, payload: res.data.payload});
    })
    .catch(err => console.log(err));
};



export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA = 'FETCH_DATA';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};

export const LOAD_NEW_FRIEND = 'LOAD_NEW_FRIEND';
export const NEW_FRIEND_SUCCESS='NEW_FRIEND_SUCCESS';

export const postFriend = (data) => dispatch=> {
  dispatch({type:LOAD_NEW_FRIEND});
  axiosWithAuth()
.post('http://localhost:5000/api/friends', data)
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