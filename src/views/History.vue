<template>
  <div class="history">
    <message-list v-if="Messages" :messages="Messages" class="msgss" v-chat-scroll />
    <message-input class="bottom" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import messageList from "@/components/messageList.vue";
import messageInput from "@/components/messageInput.vue";
import { getGroups, getMessages } from "@/services/server.service";

@Component({
  components: {
    messageList,
    messageInput,
  },
  props: {
    groupId: {
      type: String,
    },
  },
})
export default class History extends Vue {
  private groupId!: string;

  private Messages: any = 0
    
  
  async mounted() {
    this.Messages =  await getMessages(this.groupId);
    console.log(this.Messages);
    
  }
}
</script>

<style lang="scss">
.history {
  display: grid;
  grid-template-rows: auto 3.6rem;
  height: 100vh;
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
