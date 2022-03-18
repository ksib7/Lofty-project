<template>
  <div class="grid">
    <div class="grid__items"></div>
    <div class="grid__items"></div>
    <div class="grid__items"></div>
    <div class="grid__items"></div>
    <div class="grid__items"></div>
    <div class="grid__items"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  height: 300px;
  padding-top: 20px;
}

.grid__items {
  background-color: lightgray;
}

@media (max-width: 769px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 450px;
  }
}

@media (max-width: 460px) {
  .grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    height: 600px;
  }
}
</style>
