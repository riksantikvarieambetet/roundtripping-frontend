<template>
  <div id="Home">
    <div class="jumbotron">
      <div class="container">
        <Logo :title="institution ? institution.name : 'Loading...'"/>
        <p
          class="lead"
        >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
    </div>

    <div class="container">
      <h2 class="mb-4">Collections</h2>
      <div class="row">
        <div
          class="col-md-4"
          v-for="institutionn in $store.state.institutions.list"
          :key="institutionn.id"
        >
          <h4>{{institutionn.name}}</h4>
          <p>
            <router-link
              class="btn btn-outline-secondary"
              :to="{ name: 'institution', params: { id: institutionn.id }}"
            >View details &raquo;</router-link>
          </p>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  name: "home",
  components: {
    Logo
  },
  data: function() {
    return {
      institution: null
    };
  },
  mounted: function() {
    const { id } = this.$route.params;
    const { institutions } = this.$store.state;

    this.institution = institutions.list.find(
      institution => institution.id === id
    );

    console.log(this.institution);

    if (!institutions.loaded) {
      this.$store.dispatch("getCollections", { id });
    }
  }
};
</script>
