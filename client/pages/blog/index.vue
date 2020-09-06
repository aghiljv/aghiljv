<template>
  <div class="container">
    <div
      class="blogContainer"
      v-touch:swipe.right="swipeUpAction"
      v-touch:swipe.left="swipeDownAction"
    >
      <BlogMain
        v-for="(blog, index) in blogs"
        v-bind:item="blog"
        v-bind:index="index"
        v-bind:key="blog._id"
        :blogName="blog.name"
        :blogImage="blog.titleImage"
        :blogBrief="blog.briefdesc"
      />
    </div>
  </div>
</template>

<script>
import BlogMain from "../../components/blog/BlogMain.vue";

export default {
  transition: "fade",
  components: {
    BlogMain
  },
  data() {
    return {
      title: "Blog | Aghil Jose | Full Stack Engineer",
      scrollState: null,
      swipeState: null,
      scrollDirecton: 0,
      currentIndex: 0,
      minIndex: 0,
      error: "",
      currentDeltaY: 0,
      firstLoad: true
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "desaription",
          content: "The blog and portfolio of Aghil Jose | Full Stack Engineer"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/img/common/ogBlog.png"
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "The blog of Aghil Jose | Full Stack Engineer"
        },
        { hid: "og:type", name: "og:type", content: "blog" }
      ]
    };
  },
  mounted() {
    document
      .getElementById("mainContent")
      .addEventListener("wheel", this.handleScroll);
  },
  methods: {
    handleScroll(e) {
      this.firstLoad = false;
      if (e.deltaY < -20) {
        this.scrollState = "up";
      } else if (e.deltaY > 20) {
        this.scrollState = "down";
      }
      if (e.deltaY == -1 || e.deltaY == 1) {
        this.scrollState = null;
      }
    },
    switchblog(opacityState) {
      document.getElementById("blogDisplay").style.opacity = opacityState;
    },
    swipeUpAction() {
      this.scrollState = "up";
      setTimeout(() => {
        this.scrollState = null;
      }, 500);
    },
    swipeDownAction() {
      this.scrollState = "down";
      setTimeout(() => {
        this.scrollState = null;
      }, 500);
    }
  },
  watch: {
    scrollState() {
      if (this.scrollState == "up") {
        if (this.currentIndex > 0) {
          setTimeout(() => {
            this.currentIndex--;
          }, 500);
        }
      } else if (this.scrollState == "down") {
        if (this.currentIndex < this.maxIndex - 1) {
          // this.switchblog(0);
          setTimeout(() => {
            this.currentIndex++;
          }, 500);
        }
      } else {
        // this.switchblog(1);
      }
    }
  },
  computed: {
    blogs() {
      return this.$store.state.blogs.blogs;
    },
    maxIndex() {
      return this.$store.state.blogs.blogs.length;
    }
  }
};
</script>

<style scoped>
.blogContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 5%;
  -ms-overflow-style: none;
}
.blogContainer::-webkit-scrollbar {
  display: none;
}
</style>
