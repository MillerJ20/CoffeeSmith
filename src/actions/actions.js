import * as types from '../constants/actionTypes';

export const fetchAllCoffeesActionCreator = dispatch => {
  fetch('http://localhost:3000/api', {
    method: 'get',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNywiZW1haWwiOiJPYmktV29uQGVtYWlsLmNvbSIsImlhdCI6MTY0NjIzODIxNSwiZXhwIjoxNjQ2MjU2MjE1fQ.XGLho2ddSCEqqjzi0knmE-CIcQRBBxuSjcvYfvdIix4'
    })
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: types.GET_ALL_COFFEES,
        payload: data
      })
      return;
    })
    .catch(err => {
      console.log(err);
    })
}

export const addCoffeeToCartActionCreator = coffeeToAdd => ({
  type: types.ADD_TO_CART,
  payload: coffeeToAdd
})

export const loginUserActionCreator = (userToLogin, dispatch) => {
  fetch('http://localhost:3000/api/login', {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userToLogin)
  })
  .then(res => res.json())
  .then(data => {
    dispatch({
      type: types.LOGIN_USER, 
      payload: data
    })
  })
  .catch(err => {
    console.log(err);
  })  
};