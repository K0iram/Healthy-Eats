import axios from 'axios'
const API = {}

const store = require('../store');
const config = {
  production: {
    api: 'https://hidden-spire-77972.herokuapp.com'
  },
  development: {
    api: 'http://localhost:4741'
  }
}

const origin = config[process.env.NODE_ENV].api

API.getMeals = function () {
  return axios({
    url: `${origin}/meals`,
    method: 'GET',
    headers: {
      "Authorization": `Token token=${store.user.token}`
    }
  });
};

API.removeMeals = (id) => {
  return axios({
    url: `${origin}/meals/${id}`,
    method: 'DELETE',
    headers: {
      "Authorization": `Token token=${store.user.token}`
    }
  });
};

API.createMeal = function (data) {
  return axios({
    url: `${origin}/meals`,
    method: 'POST',
    headers: {
      "Authorization": `Token token=${store.user.token}`
    },
    data,
  });
};

API.signIn = function (data){
  return axios({
    url: `${origin}/sign-in`,
    method: 'POST',
    data,
  });
};

API.signUp = function (data){
  return axios({
    url: `${origin}/sign-up`,
    method: 'POST',
    data,
  });
};

API.changePassword = function (data) {
  return axios({
    url: `${origin}/change-password/${store.user.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

API.signOut = function () {
  return axios({
    url: `${origin}/sign-out/${store.user.id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};


export default API

