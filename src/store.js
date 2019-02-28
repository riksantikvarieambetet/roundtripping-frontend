import Vue from "vue";
import Vuex from "vuex";

import { getInstitutions } from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    institutions: {
      busy: false,
      loaded: false,
      list: []
    }
  },
  mutations: {
    setInstitutionsBusy(state) {
      state.institutions.busy = true;
    },
    setInstitutionsList(state, { list }) {
      state.institutions = {
        busy: false,
        loaded: true,
        list
      };
    }
  },
  actions: {
    getInstitutions({ commit }) {
      commit("setInstitutionsBusy");
      return getInstitutions().then(response => {
        commit("setInstitutionsList", { list: response.data });
      });
    }
  }
});
