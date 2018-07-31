import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8181';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const setTitle = (title) => {
  document.title = title || '纳纳'
}

const get = (url, params, success, fail) => {
  axios.get(url, {
    params
  }).then(function (response) {
    success(response.data.data)
  })
  .catch(function (error) {
    if (fail) return fail(error)
    console.log(error);
  })
}

const post = (url, params, success, fail) => {
  axios({
    method: 'post',
    url,
    data: params
  }).then(function (response) {
    success(response.data.data)
  })
  .catch(function (error) {
    if (fail) return fail(error)
    console.log(error);
  })
}
 
export {
  setTitle,
  get,
  post
}