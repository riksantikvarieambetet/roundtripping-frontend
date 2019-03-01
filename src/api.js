import axios from "axios";

const api = axios.create({
  baseURL: "https://tools.wmflabs.org/roundtripping"
});

export function getInstitutions() {
  return api.get("institutions");
}

export function getCollections(instituionId) {
  return api.get(`institutions/${instituionId}/collections`);
}

export function getCollection(instituionId, collectionId) {
  return api.get(`institutions/${instituionId}/collections/${collectionId}`);
}
