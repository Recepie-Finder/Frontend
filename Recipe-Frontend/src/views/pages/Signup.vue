<template>
  <section class="h-100 bg-dark">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div
            class="card card-registration my-4"
            style="border-radius: 1rem; background-color: #146166"
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
                  <h3 class="mb-5 text-uppercase">RF Registration Form</h3>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1m"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example1m"
                          >First name</label
                        >
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1n"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example1n"
                          >Last name</label
                        >
                      </div>
                    </div>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example8"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form3Example8"
                      >Email Address</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example9"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form3Example9"
                      >Password</label
                    >
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example90"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form3Example90"
                      >Confirm Password</label
                    >
                  </div>

                  <div class="d-flex justify-content-end pt-3">
                    <button type="button" class="btn btn-light btn-lg">
                      Reset all
                    </button>
                    <button type="button" class="btn btn-warning btn-lg ms-2">
                      Submit form
                    </button>
                  </div>
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
