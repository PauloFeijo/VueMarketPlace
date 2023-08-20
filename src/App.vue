<template>
    <Products/>
</template>

<script lang="ts">
import Products from "./components/Products.vue";

export default {
  components: {
    Products,
  },
  data: () => ({}),
};  
</script>

<style scoped>
.card-container {
  display: block;
  justify-content: space-between;  
}
</style>
