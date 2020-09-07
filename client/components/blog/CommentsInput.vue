<template>
  <div>
    <div class="commentsInputHeader">Leave a comment</div>
    <br />All fields are mandatory. Your email id won't be published!
    <br />
    <br />
    <form id="commentsIn">
      <input
        type="text"
        id="comment"
        class="inputElements"
        v-model="commentInputText"
        name="comment"
        placeholder="Comment"
      />
      <br />
      <br />
      <input
        type="text"
        id="name"
        class="inputElements"
        v-model="nameInputText"
        name="name"
        placeholder="Name"
      />
      <br />
      <br />
      <input
        type="text"
        id="email"
        class="inputElements"
        v-model="emailInputText"
        name="email"
        placeholder="E-mail"
      />
      <br />
      <br />
      <div class="postOption">
        <button class="postButton" type="button" @click="addComment">Post Comment</button>
        <br />
        <br />
      </div>
    </form>
  </div>
</template>

<script>
import ServerService from "../../static/ServerService.js";

export default {
  props: ["blogId"],
  data() {
    return {
      commentInputText: "",
      nameInputText: "",
      emailInputText: "",
      getDetails: false
    };
  },
  methods: {
    async addComment() {
      console.log(new Date("<YYYY-mm-ddTHH:MM:ss>"));
      if (
        this.commentInputText.length > 0 &&
        this.nameInputText.length > 0 &&
        this.emailInputText.length > 0
      ) {
        await ServerService.insertComment(
          this.blogId,
          this.emailInputText,
          this.nameInputText,
          this.commentInputText,
          new Date().toGMTString()
        );
        this.emailInputText = "";
        this.nameInputText = "";
        this.commentInputText = "";
        this.$toast.show("Comment Submitted! It will be updated soon!");
      }
    }
  }
};
</script>

<style scoped>
.commentsInputHeader {
  font-size: x-large;
  font-weight: bold;
}
.inputElements {
  width: 100%;
  height: 2.5vw;
  outline: none;
  background: transparent;
  border: 1px var(--color-primary) solid;
  border-radius: 5vw;
  color: var(--color-primary);
  padding-left: 2.5%;
}
.postButton {
  width: 100%;
  height: 2.5vw;
  outline: none;
  background: var(--color-primary);
  border: 1px var(--color-primary) solid;
  border-radius: 5vw;
  color: var(--background-color-primary);
  padding-left: 2.5%;
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
  .commentsInputHeader {
    font-size: large;
  }
  .inputElements {
    height: 10vw;
  }
  .postButton {
    height: 10vw;
  }
}
</style>
