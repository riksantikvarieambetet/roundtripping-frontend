import Vue from "vue";
import Vuex from "vuex";

import { getInstitutions, getCollections } from "./api";

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
    },
    getCollections({ commit, dispatch, state }, { id }) {
      const loadInstitutions = state.institutions.loaded
        ? Promise.resolve()
        : dispatch("getInstitutions");

      return loadInstitutions.then(() => {
        return getCollections(id).then(response => {
          console.log(response.data);
        });
      });
    }
  }
});
