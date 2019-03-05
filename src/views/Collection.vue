<template>
  <div id="Home">
    <div class="jumbotron">
      <div class="container">
        <Logo :title="`${collection.platform} ${collection.type}`"/>
        <p
          class="lead"
        >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
    </div>

    <div class="container">
      <h2 class="mb-4">-</h2>
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
    collection(state) {
      const { id } = this.$route.params;
      return state.collections[id] || {};
    }
  }),
  mounted: function() {
    const { institutionId, id } = this.$route.params;
    const { collections } = this.$store.state;

    if (!collections[id]) {
      this.$store.dispatch("getCollection", { institutionId, id });
    }
  },
  updated: function() {
    const { institutionId, id } = this.$route.params;
    const { collections } = this.$store.state;

    if (!collections[id]) {
      this.$store.dispatch("getCollection", { institutionId, id });
    }
  }
};
</script>
