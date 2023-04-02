import axios from 'axios'

const getRecipe = (meal) => {
return new Promise((resolve,reject) => {
const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {from: '0', size: '20', tags: 'under_30_minutes', q: meal},
    headers: {
      'X-RapidAPI-Key': 'd9f28a7ab1msh7e963c236672ac8p11645ajsnada6c14554f0',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      /* console.log(response.data); */
      const data = response.data.results
      const thumbnails = data.map((item) => item.thumbnail_url)
      resolve(thumbnails)
  }).catch(function (error) {
      console.error(error);
      reject(error)
  })
})
}

export const recipes = {
    getRecipe
}