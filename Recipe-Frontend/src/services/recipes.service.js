import axios from 'axios'
import { API_KEY } from '/Users/hamzahd/Documents/Uni/2nd Year/Block 2/Thematic Project/Recipe/config'

const getRecipe = (pantry_ingredients) => {
  const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
  params: {
    ingredients: pantry_ingredients,
    number: '2',
    ignorePantry: 'true',
    ranking: '1'
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

return axios.request(options)
.then(response => { 
  const data = response.data
  const ids = data.map(item => item.id)
  return ids
})
.catch(error => {
	console.error(error)
  return []
});
}

const getRecipeDetails = (id) => {
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/'+id+'/information',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
  return axios.request(options)
  .then(response => {
    const data = response.data
    const item = {
      id: id,
      title: data.title,
      image: data.image,
      instructions: data.instructions
    }
    const options2 = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/'+id+'/summary',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
    axios.request(options2).then(response => {
      item.push(response.data.summary)
      return item
    }).catch(error => {
      return error
    });
  }).catch(error => {
    console.error(error);
    return []
  });
}

export const recipes = {
    getRecipe,
    getRecipeDetails,
}
