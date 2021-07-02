<template>
  <div class="history">
    <message-list :messages="Messages" />
    <message-input class="bottom"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getMessages } from "@/services/msg.service";
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
    return getMessages();
  }
}
</script>

<style lang="scss">
.bottom {
  
}
</style>