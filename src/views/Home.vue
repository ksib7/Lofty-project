<template>
  <div>
    <header-component @show="showDialog" />
    <main class="container">
      <modal-window v-model:show="hideModal">
        <send-form />
      </modal-window>
      <item-list />
    </main>
  </div>
</template>

<script>
import HeaderComponent from "../components/headerComponent.vue";
import itemList from "../components/itemList.vue";
import ModalWindow from "../components/modalWindow.vue";
import SendForm from "../components/sendForm.vue";
export default {
  components: {
    itemList,
    HeaderComponent,
    ModalWindow,
    SendForm,
  },

  data() {
    return {
      hideModal: false,
    };
  },

  methods: {
    showDialog() {
      this.hideModal = true;
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #1a1d24;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
