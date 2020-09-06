<template>
  <div>
    <br />
    <form id="commentsIn">
      <input
        v-if="getDetails"
        type="text"
        id="email"
        class="textInputs"
        ref="emailInputText"
        name="email"
        placeholder="E=mail"
      />
      <input
        v-else
        type="text"
        id="comment"
        class="textInputs"
        ref="commentInputText"
        @keyup="keyUpEvent('commentInputText')"
        name="comment"
        placeholder="Add a comment"
      />
      <br />
      <br />
      <div v-if="this.commentInputText.length>0" class="postOption">
        <button class="postButton" @click="getCredentials">Post</button>
        <br />
        <br />
      </div>
      <div v-else>
        <br />
        <br />
        <br />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      commentInputText: "",
      getDetails: false
    };
  },
  mounted() {
    console.log(this.commentInputText.length);
  },
  methods: {
    keyUpEvent(refCode) {
      let entry = this.$refs[refCode];
      this.commentInputText = entry.value;
      console.log(this.commentInputText.length);
    },
    getCredentials() {
      this.getDetails = true;
    }
  }
};
</script>

<style scoped>
.textInputs {
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
}
@media only screen and (max-width: 600px) {
  .textInputs {
    height: 10vw;
  }
  .postButton {
    height: 10vw;
  }
}
</style>
