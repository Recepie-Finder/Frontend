<template>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand font-weight-bold" style="color: #a8c7ae" href="#"
          >Recepie finder</a
        >
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
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-person-fill"
            viewBox="0 0 16 16"
            color="#2C2628"
          >
            <path
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </nav>

  <router-view />
</template>
<style>
.navbar {
  background: #146166;
  box-shadow: 0 12px 8px 0 #a8c7ae;
}

.navbar-link {
  color: #deddd3;
}

.navbar-link:hover {
  color: #2c2628;
}
</style>
