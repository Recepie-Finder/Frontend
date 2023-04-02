<template>
  <div class="container">
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="meal"
      />
      <button class="btn btn-outline-light btn-md px-5" type="submit" v-on:click.prevent="search">
        Search
      </button>
    </form>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <img v-bind:src="thumbnail" class="img-thumbnail">
        </div>
        <div class="col-md-8">
          <h2>Title</h2>
          <p> Description</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { recipes } from '../../services/recipes.service'
export default {
  data(){
    return{
      meal: "",
      thumbnail: ""

    }
  },
  methods: {
    search(){
      recipes.getRecipe(this.meal)
      .then(thumbnails => {
        this.thumbnail = thumbnails[0]
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
