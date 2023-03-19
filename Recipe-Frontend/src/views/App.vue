<template>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" style="color: aqua" href="#">Recepie finder</a>
      </div>
      <router-link
        class="navbar-link"
        style="text-decoration: none"
        to="/dashboard"
        >Dashboard</router-link
      >
      <router-link class="navbar-link" style="text-decoration: none" to="/feed"
        >Feed</router-link
      >
      <router-link class="navbar-link" style="text-decoration: none" to="/"
        >Home</router-link
      >
      <div class="nav navbar-nav navbar-right">
        <router-link
          class="navbar-link"
          style="text-decoration: none"
          to="/login"
          >Login</router-link
        >
      </div>
    </div>
  </nav>

  <router-view />
</template>
<style>
.navbar {
  background: #141e30;
  background: -webkit-linear-gradient(to right, #243b55, #141e30);
  background: linear-gradient(to right, #243b55, #141e30);
}

.navbar-link {
  color: aqua;
}
</style>
