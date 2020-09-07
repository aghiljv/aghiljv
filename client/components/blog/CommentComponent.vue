<template>
  <div class="indComment">
    <div class="commentator">
      <div class="commentatorPic">
        <img class="commentatorImage" src="/img/common/person.png" />
      </div>
      <div class="commentNameTime">
        <div class="commtatorName">{{commentator}}</div>
        <div class="commentTime">{{commentTime}}</div>
      </div>
    </div>
    <div class="commentContent">{{commentContent}}</div>
  </div>
</template>

<script>
import ServerService from "../../static/ServerService.js";

export default {
  props: ["commentator", "commentContent", "commentTime"]
};
</script>

<style scoped>
.indComment {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  padding: 1%;
  align-items: flex-start;
}
.commentator {
  width: 60%;
  display: grid;
  grid-template-columns: 2fr 7fr;
}
.commentatorPic {
  height: 4vw;
  width: 4vw;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
}
.commentNameTime {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.commtatorName {
  font-weight: bold;
}
.commentTime {
  font-size: small;
}
.commentContent {
  padding: 2% 2% 2% 12.5%;
}
.commentatorImage {
  filter: var(--invert-value);
}
@media only screen and (max-width: 600px) {
  .commentatorPic {
    height: 10vw;
    width: 10vw;
  }
  .commentTime {
    font-size: smaller;
  }
}
</style>
