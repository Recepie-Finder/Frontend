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
    <div v-for="item in items" :key="item.id">
      <ul>
        <p>{{ item.title }}</p>
        <img v-bind:src="item.image" alt = "Recipe image">
      </ul>

    </div>
  </div>
</template>
<script>
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
      .then(items => {
        this.items = items
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
