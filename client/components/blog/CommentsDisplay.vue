<template>
  <div class="fullComments">
    <hr />
    <br />
    <div v-if="this.blogComments==undefined">
      No comments
      <br />
      <br />
    </div>
    <div v-else>
      <CommentComponent
        v-for="(blogComment, index) in blogComments"
        :key="index"
        :commentator="blogComment.name"
        :commentContent="blogComment.comment"
        :commentTime="blogComment.date"
      />
    </div>
    <hr />
  </div>
</template>

<script>
import CommentComponent from "./CommentComponent.vue";
import ServerService from "../../static/ServerService.js";

export default {
  components: {
    CommentComponent
  },
  props: ["blogComments"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.fullComments {
  width: 100%;
}
</style>
