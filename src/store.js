import Vue from "vue";
import Vuex from "vuex";

import {
  getInstitutions,
  getCollections,
  getCollection,
  getTranslations
} from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    institutions: {
      busy: false,
      loaded: false,
      list: []
    },
    collections: {},
    translations: {}
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
    },
    setInstitutionCollections(state, { id, collections }) {
      const institution = state.institutions.list.find(
        institution => institution.id === id
      );
      const index = state.institutions.list.indexOf(institution);
      const array = [...state.institutions.list];
      array[index] = {
        ...array[index],
        collections
      };

      state.institutions.list = [...array];
    },
    setCollection(state, { id, collection }) {
      state.collections = {
        ...state.collections,
        [id]: collection
      };
    },
    setTranslations(state, { id, translations }) {
      state.translations = {
        ...state.translations,
        [id]: translations
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
          const collections = response.data;
          commit("setInstitutionCollections", { id, collections });
        });
      });
    },
    getCollection({ commit }, { institutionId, id }) {
      return getCollection(institutionId, id).then(response => {
        const collection = response.data;
        commit("setCollection", { id, collection });
      });
    },
    getTranslations({ commit }, { id }) {
      return getTranslations(id).then(response => {
        const translations = response.data;
        commit("setTranslations", { id, translations });
      });
    }
  }
});
