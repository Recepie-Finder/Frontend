<template>
  <section class="h-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div
            class="card card-registration my-4"
            style="
              border-radius: 1rem;
              background-color: #146166;
              box-shadow: 20px 20px 20px 20px #a8c7ae;
            "
          >
            <div class="row g-0">
              <div class="col-xl-6 d-none d-xl-block">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/delish-190814-mcdonalds-apple-pies-0283-portrait-pf-1566604978.jpg"
                  alt="Sample photo"
                  class="img-fluid"
                  style="
                    border-top-left-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                  "
                />
              </div>
              <div class="col-xl-6">
                <div class="card-body p-md-5 text-black">
                  <h3 class="mb-5 text-uppercase text-center font-weight-bold">
                    RF Registration Form
                  </h3>
                  <p class="text-white-50 mb-5 text-center">
                    Please create your account
                  </p>

                  <form @submit.prevent="handleSubmit">
                    <div class="row">
                      <div class="form-white col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            class="form-control form-control-lg"
                            placeholder="First Name"
                            name="First Name"
                            v-model="FirstName"
                          />
                          <label
                            class="form-label"
                            for="form3Example1m"
                          ></label>
                          <div v-show="submitted && !FirstName">
                            This is a required field
                          </div>
                        </div>
                      </div>
                      <div class="form-white col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="form3Example1n"
                            class="form-control form-control-lg"
                            placeholder="Last Name"
                            name="Last Name"
                            v-model="LastName"
                          />
                          <label
                            class="form-label"
                            for="form3Example1n"
                          ></label>
                          <div v-show="submitted && !LastName">
                            This is a required field
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        placeholder="Email"
                        name="email"
                        v-model="email"
                      />
                      <label class="form-label" for="typeEmailX"></label>
                      <div v-show="submitted && !email">
                        This is a required field
                      </div>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                        placeholder="Password"
                        name="Password"
                        v-model="password"
                      />
                      <label class="form-label" for="typePasswordX"></label>
                      <div v-show="submitted && !password">
                        This is a required field
                      </div>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                        placeholder="Re-enter Password"
                        name="Re-enter Password"
                        v-model="Reenterpassword"
                      />
                      <label class="form-label" for="typePasswordX"></label>
                      <div v-show="submitted && !Reenterpassword">
                        This is a required field
                      </div>
                    </div>

                    <div class="d-flex justify-content-around pt-3">
                      <button
                        class="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Reset
                      </button>
                      <button
                        class="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Submit form
                      </button>
                    </div>
                    <div v-if="error">{{ error }}</div>
                  </form>
                </div>

                <div>
                  <p class="fs-4 mb-0 text-center">
                    Already have an account?
                    <router-link :to="{ path: '/login' }"
                      ><a>Log in</a></router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
    };
  },
  methods: {
    handleSubmit(b) {
      this.submitted = true;
      this.error = "";

      console.log(this.email);
      usersService
        .login(this.email, this.password)
        .then((result) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
  },
};
</script>
<style>
.form {
  margin-top: 120px;
}

section {
  color: #2c2628;
}
</style>
