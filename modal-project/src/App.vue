<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal theme="" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">More info</a>
      </template>
    </Modal>
  </div>
  <div v-if="showModalTwo">
    <Modal theme="sale" @close="toggleModal2">
      <template v-slot:alex>
        <h1>I am the king</h1>
        <p>Best programmer ever</p>
      </template>
    </Modal>
  </div>
  <button @click="toggleModal">Open modal</button>
  <button @click="toggleModal2">Open modal II</button>
</template>

<script>
import Modal from "./components/Modal";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "Harry Potter and the Cursed Child",
      header: "Sign up for the giveaway!",
      text: "Grab your ninja swag for half price!",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>