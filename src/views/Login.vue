<template>
  <div class="jumbotron">
    <div class="container">
      <form>
        <div class="form-group">
          <label for="email">E-Mail Address</label>
          <input id="email" class="form-control" type="email" v-model="email" required autofocus>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" class="form-control" type="password" v-model="password" required>
        </div>
        <div>
          <button class="btn btn-primary" type="submit" @click="handleSubmit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      localStorage.setItem("jwt", "test");
      this.$router.push("/");
    }
  }
};
</script>