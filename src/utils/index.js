import axios from 'axios'
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
 
export {
  setTitle,
  get
}