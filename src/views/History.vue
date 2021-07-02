<template>
  <div class="history">
    <message-list :messages="Messages" class="msgss" v-chat-scroll />
    <message-input class="bottom" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store"
import messageList from "@/components/messageList.vue";
import messageInput from "@/components/messageInput.vue";

@Component({
  components: {
    messageList,
    messageInput,
  },
})
export default class History extends Vue {
  get Messages() {
    return store.state.messages;
  }
}
</script>

<style lang="scss">
.history {
  display: grid;
  grid-template-rows: auto 3.6rem;
  height: 100vh
   
}
.msgss {
  grid-row-start: 1;
  grid-row-end: 2;
  overflow-y: scroll;
  overflow-x: none;
}
.bottom {
  grid-row-start: 2;
  grid-row-end: 3;

}
</style>