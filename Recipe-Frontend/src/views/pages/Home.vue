<template>
  <div class="container-md bg-dark">
    &nbsp;
    <div>
        <form v-on:submit.prevent="data_input">
          <input v-model="query" type="text" class="form-control" id="specificSizeInputName" placeholder="Enter one pantry item ..." />
        </form>
        &nbsp;
        <!-- <div class="col">
          <div class="form-check">
            <input class="form-check-input ms-3" type="checkbox" value="" id="flexCheckDefault">
            <label style="color: brown;" class="form-check-label" for="flexCheckDefault">
            Default checkbox
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input ms-3" type="checkbox" value="" id="flexCheckDefault2">
            <label style="color: brown;" class="form-check-label" for="flexCheckDefault2">
            Default checkbox
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input ms-3" type="checkbox" value="" id="flexCheckDefault2">
            <label style="color: brown;" class="form-check-label" for="flexCheckDefault2">
            Default checkbox
            </label>
          </div>
        </div> --->
    </div>
    <div class="row">
      <div v-for="ingredient in ingredients" :key="ingredient" class="col-md-2 col-sm-2 col-lg-2">
        <div class="card mb-3" style="width: fit-content;">
          <div class="card-body" style="padding: 5px; display: flex; align-items: center; justify-content: space-between;">
                <h5 class="card-title mr-2" style="font-size: 13px;">{{ ingredient }}</h5>
                <button v-on:click="delete_ingredient(ingredient)" type="button" class="btn btn-danger" style="margin-left: 5px; font-size: 10px;">X</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.ingredients.length >= 1" class="d-flex justify-content-center">
      <button v-on:click="search()" type="button" class="btn btn-outline-light mb-3">Search</button>
    </div>
   </div>
   <div class="container-md">
  <div class="row">
    <div v-for="item in items" class="mt-5">
      <div class="card text-bg-dark mb-2">
        <div class="row g-0">
          <div class="col-md-4">
            <img v-bind:src="item.image" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.summary }} . . . .</p>
            </div>
          </div>
        </div>
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
      ingredients: [],
      items: [],
      query: '',
    }
  },
  methods: {
    search(){
      recipes.getRecipe(this.ingredients.join(','))
      .then(ids => {
        ids.forEach(id_ => {
          recipes.getRecipeDetails(id_)
          .then(item => {
            this.items.push(item)
            console.log(this.items)
          })
          .catch(error => {
            console.error(error)
          })
        })
      })
      .catch(error => {
        console.error(error)
      })
    },
    data_input(){
      this.ingredients.push(this.query)
      this.query = ''
    },
    delete_ingredient(ingredient){
      const index = this.ingredients.indexOf(ingredient)
      if (index !== -1){
        this.ingredients.splice(index,1)
      }
    }
  },
}
</script>
<style>
body {
  background-color: #146166;
}
.container-md {
  margin-top: 10vh;
  width: 50vw;
  border-radius: 20px;
}
</style>
