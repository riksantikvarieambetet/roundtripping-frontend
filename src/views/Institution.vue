<template>
  <div id="Home">
    <div class="jumbotron">
      <div class="container">
        <Logo :title="institution.name || 'Loading...'"/>
        <p
          class="lead"
        >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
    </div>

    <div class="container">
      <h2 class="mb-4">
        Collections
        <span v-if="institution.collections">({{ institution.collections.length }})</span>
      </h2>
      <div class="row" v-if="institution.collections">
        <div class="col-md-6" v-for="collection in institution.collections" :key="collection.id">
          <h6>{{collection.platform}}</h6>
          <h4>{{collection.generator_value.replace(/_/gi, " ")}}</h4>
          <p>
            <router-link
              class="btn btn-outline-secondary"
              :to="{ name: 'collection', params: { institutionId: institution.id, id: collection.id }}"
            >View details &raquo;</router-link>
          </p>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Logo from "@/components/Logo.vue";

export default {
  name: "home",
  components: {
    Logo
  },
  computed: mapState({
    institution(state) {
      const { id } = this.$route.params;
      const { list = [] } = state.institutions;
      return list.find(institution => institution.id === id) || {};
    }
  }),
  mounted: function() {
    const { id } = this.$route.params;
    const { institutions } = this.$store.state;

    if (!this.institution.collections) {
      this.$store.dispatch("getCollections", { id });
    }
  },
  updated: function() {
    const { id } = this.$route.params;
    const { institutions } = this.$store.state;

    if (!this.institution.collections) {
      this.$store.dispatch("getCollections", { id });
    }
  }
};
</script>
