<template>
  <div class="container">
    <div class="portfolioContainer">
      <nuxt-link class="backButton" id="portfolioDisplay" :to="'/portfolio/'">
        « Return to List
        <br />PORTFOLIOS
      </nuxt-link>
      <div class="portfolioTitleImageHolder">
        <img
          class="portfolioTitleImg"
          :src="`/img/portfolio/${portfolioItem.titleImage}.jpg`"
          alt="portfolioImage"
        />
      </div>
      <div class="portfolioTitle">{{ portfolioItem.name }}</div>
      <div class="portfolioContentHolder">
        <div class="portfolioContent" v-html="portfolioItem.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ServerService from "../../static/ServerService.js";

export default {
  transition: "fade",
  data() {
    return {
      title: "Portfolio | Aghil Jose | Full Stack Engineer",
      portfolioItem: {},
      currentRoute: ""
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: "/img/common/ogPortfolio.png"
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "The portfolio of Aghil Jose | Full Stack Engineer"
        },
        { hid: "og:type", name: "og:type", content: "portfolio" }
      ]
    };
  },
  created() {
    this.$store.commit("pageTitle/set", "PORTFOLIO");
  },
  async mounted() {
    if (this.$store.state.portfolios.portfolios.length > 1) {
      let portfoliosContent = this.$store.state.portfolios.portfolios;
      portfoliosContent.forEach(portfolioContent => {
        if (portfolioContent.name == this.$route.params.name) {
          this.portfolioItem = portfolioContent;
          this.title = this.portfolioItem.name + " | " + this.title;
        }
      });
    } else {
      let portfoliosContent = await ServerService.getPortfolio(
        this.$route.params.name
      );
      this.portfolioItem = portfoliosContent[0];
    }
  },
  validate({ params }) {
    return isNaN(+params.name);
  }
};
</script>

<style scoped>
.backButton {
  position: absolute;
  text-decoration: none;
  top: 10%;
  color: var(--primary-color);
  z-index: 6;
}
.container {
  /* flex-direction: column; */
}
.portfolioContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  color: var(--primary-color);
}
.portfolioContainer::-webkit-scrollbar {
  display: none;
}
.portfolioTitleImageHolder {
  top: 0%;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
}
.portfolioTitleImg {
  height: 100%;
  object-fit: cover;
}
.portfolioTitle {
  top: 40%;
  width: 100%;
  text-align: center;
  font-size: 4vw;
}
.portfolioContentHolder {
  display: flex;
  justify-content: center;
  width: 100%;
  top: 50%;
  font-size: 1vw;
}
@media only screen and (max-width: 600px) {
  .backButton {
    position: unset;
  }
  .portfolioTitleImageHolder {
    margin-top: 2%;
    height: auto;
  }
  .portfolioTitleImg {
    width: 100%;
  }
  .portfolioTitle {
    font-size: 8vw;
  }
  .portfolioContent {
    width: 100%;
  }
  .portfolioContentHolder {
    font-size: 3vw;
  }
}
</style>
