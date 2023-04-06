<template>
  <div class="container">
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="ingredients"
      />
      <button class="btn btn-outline-light btn-md px-5" type="submit" v-on:click.prevent="search">
        Search
      </button>
    </form>
    <div v-for="item in items">
      <ul>
        <p>{{ item.title }}</p>
        <p>{{ item.instructions }}</p>
        <img v-bind:src="item.image" alt = "Recipe image">
      </ul>
    </div>
  </div>
</template>
<script>
//Issue where the item.title and item.instructions and image is just not being shown on the screen
import { recipes } from '../../services/recipes.service'
export default {
  data(){
    return{
      ingredients: "",
      items: []
    }
  },
  methods: {
    search(){
      recipes.getRecipe(this.ingredients)
      .then(ids => {
        ids.forEach(id_ => {
          recipes.getRecipeDetails(id_)
          .then(item => {
            this.items.push(item)
          })
          .catch(error => {
            console.error(error)
          })
        })
        console.log(this.items)
      })
      .catch(error => {
        console.error(error)
      })
    }
  }
}
</script>
<style>
body {
  background-color: #146166;
}

.container {
  padding-top: 300px;
}
</style>
