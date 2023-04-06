import axios from 'axios'
import { API_KEY } from '/Users/hamzahd/Documents/Uni/2nd Year/Block 2/Thematic Project/Recipe/config'

const getRecipe = (pantry_ingredients) => {
  const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
  params: {
    ingredients: pantry_ingredients,
    number: '1',
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
  const items = []
  data.forEach(item => {
    const newItem = {
      id: item.id,
      title: item.title,
      image: item.image
    }
    items.push(newItem)
  })
  return items
})
.catch(error => {
	console.error(error)
  return []
});
}

export const recipes = {
    getRecipe
}