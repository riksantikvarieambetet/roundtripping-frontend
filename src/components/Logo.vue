<template>
  <div id="Logo" class="d-flex flex-column align-items-center">
    <img
      class="logo__image"
      src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Emojione_1F439.svg"
    >
    <h3 class="display-4 w-100">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
#Logo {
  .logo__image {
    width: 150px;
  }
}
</style>

