import axios from 'axios'
const API = {}

const store = require('../store');
const config = {
  // production: {
  //   api: 'https://murmuring-depths-64110.herokuapp.com'
  // },
  development: {
    api: 'http://localhost:3000'
  }
}

const origin = config[process.env.NODE_ENV].api

API.signIn = function (data){
  console.log(store)
  return axios({
    url: origin + '/api/Users/login',
    method: 'POST',
    data,
  });
};

API.signUp = function (data){
  return axios({
    url: `${origin}/api/Users`,
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
  console.log(store)
  return axios({
    url: `${origin}/api/Users/logout/?access_token=${store.user.id}`,
    method: 'POST'
  });
};


export default API
