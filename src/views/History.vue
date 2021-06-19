<template>
  <div class="history">
    <message-list :messages="Messages" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getMessages } from "@/services/msg.service"
import messageList from "@/components/messageList.vue";

@Component({
  components: {
    messageList,
  },
})
export default class History extends Vue {

  get Messages() {
    return getMessages()
  }
}
</script>
