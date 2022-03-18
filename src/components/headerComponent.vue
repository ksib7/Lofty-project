<template>
  <header class="header">
    <div class="container container--flex">
      <button class="header__button" @click="showModal">sign up</button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    showModal(modal) {
      this.$emit("show", modal);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #222831;
  min-height: 70px;
}

.header__button {
  background-color: grey;
  color: white;
  border: none;
  height: 40px;
  max-width: 90px;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
}

.header__button:hover {
  opacity: 0.7;
}

.header__button:active {
  background-color: black;
}

.container--flex {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 70px;
}
</style>
