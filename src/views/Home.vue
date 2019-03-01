<template>
  <div id="Home">
    <div class="jumbotron">
      <div class="container">
        <Logo title="Dashboard"/>
        <p
          class="lead"
        >Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
      </div>
    </div>

    <div class="container">
      <h2 class="mb-4">Institutions</h2>
      <div class="row">
        <div
          class="col-md-4"
          v-for="institution in $store.state.institutions.list"
          :key="institution.id"
        >
          <h4>{{institution.name}}</h4>
          <p>
            <router-link
              class="btn btn-outline-secondary"
              :to="{ name: 'institution', params: { id: institution.id }}"
            >View details &raquo;</router-link>
          </p>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import store from "@/store";

import Logo from "@/components/Logo.vue";

export default {
  name: "home",
  components: {
    Logo
  },
  mounted: function() {
    if (!store.state.institutions.loaded) {
      store.dispatch("getInstitutions");
    }
  }
};
</script>
