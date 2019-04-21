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

    <b-button-toolbar style="margin:auto; max-width: 500px;">
      <b-pagination v-model="page" :per-page="50" :total-rows="1300" align="center"></b-pagination> <b-button style="height:40px; margin-left:5px;" @click="prepareDownload">{{ downBtnText }}</b-button>
    </b-button-toolbar>

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
      translationsForDownload: [],
      downBtnText: 'Download CSV',
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
      getTranslations(this.collection, page).then(response => {
        this.translations = response.data;
      });
    },
    syncQueryWrapper(i) {
      return new Promise((resolve, reject) => {
        getTranslations(this.collection, i).then(response => {
          resolve(this.translationsForDownload.concat(response.data));
        }).catch(error => {
          resolve(false);
        });
      });
    },
    async prepareDownload() {
      this.downBtnText = 'Generating download'
      let more = true;
      let i = 1;
      while (more) {
        let data = await this.syncQueryWrapper(i);
        if (data) {
          this.translationsForDownload = data;
          i += 1;
        } else {
          more = false;
        }
      }
    }
  },
  watch: {
    page: function (val) {
      this.setTranslations(this.page);
    },
  },
};
</script>
