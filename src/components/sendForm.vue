<template>
  <div>
    <form id="formElem" @submit.prevent class="form" action="#">
      <input
        class="form__input"
        type="text"
        placeholder="username"
        required
        v-model="form.username"
      />
      <input
        class="form__input"
        type="password"
        placeholder="password"
        required
        v-model="form.password"
      />
      <button @click="postMethod" class="btn">send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    async postMethod() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: new FormData(formElem),
      });
      let result = await response.json();

      alert("Данные успешно отправлены");

      this.form = {
        username: "",
        password: "",
      };
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.form__input {
  width: 100%;
  min-height: 55px;
  border: none;
  background-color: #222831;
  color: white;
  margin-top: 10px;
  font-size: 18px;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
}

.form__input::placeholder {
  color: white;
}

.btn {
  align-self: center;
  background-color: #dfa612;
  color: black;
  border: none;
  height: 40px;
  max-width: 90px;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 20px;
}
</style>
