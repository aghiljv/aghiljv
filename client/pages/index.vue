<template>
  <div class="container">
    <HomePage />
  </div>
</template>

<script>
import HomePage from "../components/HomePage.vue";

export default {
  transition: "fade",
  data() {
    return {
      title: "Aghil Jose | Full Stack Engineer"
    };
  },
  head() {
    return {
      title: "Aghil Jose | Full Stack Engineer",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The blog and portfolio of Aghil Jose | Full Stack Engineer"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/img/common/ogMain.png"
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "The blog and portfolio of Aghil Jose | Full Stack Engineer"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    introAnimRemove() {
      document.getElementById("introAnimComp").style.opacity = 0;
      setTimeout(this.sendElementDown, 1000);
    },
    sendElementDown() {
      document.getElementById("introAnimComp").style.display = "none";
    }
  },
  components: {
    HomePage
  }
};
</script>

<style scoped></style>
