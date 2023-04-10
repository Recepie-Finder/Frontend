<template>
  <h1 class="text-center mt-5">Dashboard</h1>
  <div class="d-flex justify-content-center">
    <button v-on:click="logout" type="button" class="btn btn-danger">Logout</button>
  </div>
  <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
      <div class="container" style="height: 100vh;border-style:solid;border-color:darkgreen;border-radius: 20px;margin-top: 10%;">
        <div>
          <h4 style="font-family: monospace;font-weight: lighter;margin-top: 5%;text-decoration: underline;">Saved Recipes</h4>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="containe" style="height: 100vh;border-style:solid;border-color:darkgreen;border-radius: 20px;margin-top: 10%;">
        <div>
          <h4 style="font-family: monospace;font-weight: lighter;margin-top: 5%;text-decoration: underline;">My Recipes</h4>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { userService } from "../../services/users.service"
export default {
  data(){
    return{
    }
  },
  methods:{
    logout(){
      this.$router.push("/login")
      userService.logout()
      .then(() => 
      location.reload())
    }
  }
}
</script>
