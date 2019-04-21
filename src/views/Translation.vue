<template>
  <div id="Home">
    <div class="jumbotron">
      <div class="container">
        <Logo title="Översättning"/>
        <p class="lead">
          Framsteg (% uppdaterad {{ updated }}):<br>
          <b-progress v-if="progress" :value="progress" :max="100" show-progress class="mb-3"></b-progress>
        </p>
      </div>
    </div>

    <div class="container">
      <div class="row mb-2" v-for="translation in translations" :key="translation.mediainfo_id">
        <div class="col-md-2">
          <a
            :href="`//commons.wikimedia.org/wiki/Special:Redirect/file?wptype=page&wpvalue=${translation.mediainfo_id.substring(1)}`"
          >{{ translation.mediainfo_id }}</a>
        </div>
        <div class="col-md-5 small">{{ translation.translations[0].value}}</div>
        <div class="col-md-5 small">{{ translation.translations[1].value}}</div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Logo from "@/components/Logo.vue";
import { getTranslationsProgress } from "@/api";
import { setTimeout } from 'timers';

export default {
  name: "translations",
  components: {
    Logo
  },
  data() {
    return {
      progress: null,
      updated: '',
    };
  },
  computed: mapState({
    translations(state) {
      const { id } = this.$route.params;
      return state.translations[id] || {};
    },
  }),
  mounted: function() {
    const { id } = this.$route.params;
    const { translations } = this.$store.state;

    getTranslationsProgress(id).then(response => {
      this.progress = response.data.progress;
      this.updated = response.data.timestamp;
    });

    if (!translations[id]) {
      this.$store.dispatch("getTranslations", { id });
    }
  },
  updated: function() {
    const { id } = this.$route.params;
    const { translations } = this.$store.state;

    if (!translations[id]) {
      this.$store.dispatch("getTranslations", { id });
    }
  }
};
</script>
