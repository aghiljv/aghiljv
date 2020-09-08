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
      <div class="recaptchaHolder">
        <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
      </div>
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
      recaptchaSuccess: false
    };
  },
  methods: {
    async addComment() {
      if (
        this.commentInputText.length > 0 &&
        this.nameInputText.length > 0 &&
        this.emailInputText.length > 0 &&
        this.recaptchaSuccess
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
        this.resetCaptcha();
        this.$toast.show("Comment Submitted! It will be updated soon!");
      } else {
        if (this.commentInputText.length == 0)
          this.$toast.error("Enter a comment!!!");
        if (this.nameInputText.length == 0)
          this.$toast.error("Provide Name!!!");
        if (this.emailInputText.length == 0)
          this.$toast.error("Provide Email!!! It will not be published.");
        if (!this.recaptchaSuccess)
          this.$toast.error("Check the 'I'm not a robot' box'");
      }
    },
    onError() {
      console.log("minor error");
    },
    async resetCaptcha() {
      try {
        const token = await this.$recaptcha.getResponse();
        console.log("ReCaptcha token:", token);
        await this.$recaptcha.reset();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log("Error:", error);
      }
    },
    onSuccess(token) {
      console.log("Succeeded:", token);
      this.recaptchaSuccess = true;
    },
    onExpired() {
      this.recaptchaSuccess = false;
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
.recaptchaHolder {
  display: flex;
  justify-content: center;
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
