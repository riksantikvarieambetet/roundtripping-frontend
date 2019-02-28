import axios from "axios";

const api = axios.create({
  baseURL: "https://byabbe.se/roundtripping-api-mock/mocks/"
});

export function getInstitutions() {
  return api.get("instututions.json");
}

export function getCollections(instituionId) {
  return api.get(`instututions/${instituionId}/collections.json`);
}

export function getCollection(instituionId, collectionId) {
  return api.get(
    `instututions/${instituionId}/collections/${collectionId}.json`
  );
}
