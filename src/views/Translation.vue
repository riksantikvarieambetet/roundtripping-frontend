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

    <b-pagination v-model="page" :per-page="50" :total-rows="1300" align="center"></b-pagination>

    <div class="container">
      <div class="row mb-2" v-for="translation in translations" :key="translation.mediainfo_id">
        <div class="col-md-1">
          <a
            :href="`//commons.wikimedia.org/wiki/Special:Redirect/file?wptype=page&wpvalue=${translation.mediainfo_id.substring(1)}`"
          >{{ translation.mediainfo_id }}</a>
        </div>

        <div class="col-md-1">{{ translation.local_id }}</div>

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
import { getTranslationsProgress , getTranslations} from "@/api";

export default {
  name: "translations",
  components: {
    Logo
  },
  data() {
    return {
      progress: null,
      updated: '',
      translations: [],
      page: 1,
      collection: null,
    };
  },
  mounted: function() {
    this.collection = this.$route.params.id;

    getTranslationsProgress(this.collection).then(response => {
      this.progress = response.data.progress;
      this.updated = response.data.timestamp;
    });

    this.setTranslations(this.page);
  },
  methods: {
    setTranslations: function(page) {
      console.log(this.collection)
      getTranslations(this.collection, page).then(response => {
        this.translations = response.data;
      });
    }
  },
  watch: {
    page: function (val) {
      this.setTranslations(this.page);
    },
  },
};
</script>
