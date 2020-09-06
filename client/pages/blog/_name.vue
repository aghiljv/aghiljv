<template>
  <div class="container">
    <div class="blogContainer">
      <nuxt-link class="backButton" id="blogDisplay" :to="'/blog/'">
        « Return to List
        <br />BLOGS
      </nuxt-link>
      <div class="blogTitleImageHolder">
        <img class="blogTitleImg" :src="`/img/blog/${blogItem.titleImage}.jpg`" alt="blogImage" />
      </div>
      <div class="blogTitle">{{ blogItem.name }}</div>
      <div class="blogContentHolder">
        <div class="blogContent" v-html="blogItem.content"></div>
      </div>
      <!-- <div class="commentsMain">
        <div class="commentsHeader">Comments</div>
        <br />
        <div class="commentsInput">
          <CommentsInput />
        </div>
        <div class="commentsHolder"></div>
      </div>-->
    </div>
  </div>
</template>

<script>
import ServerService from "../../static/ServerService.js";
import CommentsInput from "../../components/blog/CommentsInput.vue";

export default {
  transition: "fade",
  components: {
    CommentsInput
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "blog",
          name: "Blog",
          content: "The blog of Full Stack Engineer Aghil Jose"
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
        { hid: "og:type", name: "og:type", content: "article" }
      ]
    };
  },
  data() {
    return {
      title: "Blog | Aghil Jose | Full Stack Engineer",
      blogItem: {},
      currentRoute: ""
    };
  },
  async created() {
    this.$store.commit("pageTitle/set", "BLOG");
    if (this.$store.state.blogs.blogs.length > 1) {
      let blogsContent = this.$store.state.blogs.blogs;
      blogsContent.forEach(blogContent => {
        if (blogContent.name.includes(this.$route.params.name)) {
          this.blogItem = blogContent;
          this.title = this.blogItem.name;
        }
      });
    } else {
      let blogsContent = await ServerService.getBlog(this.$route.params.name);
      this.blogItem = blogsContent[0];
    }
  },
  async mounted() {
    // if (this.$store.state.blogs.blogs.length > 1) {
    // 	let blogsContent = this.$store.state.blogs.blogs;
    // 	blogsContent.forEach((blogContent) => {
    // 		if (blogContent.name.includes(this.$route.params.name)) {
    // 			this.blogItem = blogContent;
    // 			this.title = this.blogItem.name;
    // 		}
    // 	});
    // } else {
    // 	let blogsContent = await ServerService.getBlog(this.$route.params.name);
    // 	this.blogItem = blogsContent[0];
    // }
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
.blogContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  color: var(--primary-color);
}
.blogContainer::-webkit-scrollbar {
  display: none;
}
.blogTitleImageHolder {
  top: 0%;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
}
.blogTitleImg {
  height: 100%;
  object-fit: cover;
}
.blogTitle {
  top: 40%;
  width: 100%;
  text-align: center;
  font-size: 4vw;
}
.blogContentHolder {
  display: flex;
  justify-content: center;
  width: 100%;
  top: 50%;
  font-size: 1vw;
}
.blogContent {
  width: 50%;
}
.commentsMain {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 50%;
  font-size: 1vw;
}
.commentsInput {
  width: 50%;
}
@media only screen and (max-width: 600px) {
  .backButton {
    position: unset;
  }
  .blogTitleImageHolder {
    margin-top: 2%;
    height: auto;
  }
  .blogTitleImg {
    width: 100%;
  }
  .blogTitle {
    font-size: 8vw;
  }
  .blogContent {
    width: 100%;
  }

  .blogContentHolder {
    font-size: 3vw;
  }
  .commentsInput {
    width: 100%;
  }
  .commentsMain {
    font-size: 3vw;
  }
}
</style>
