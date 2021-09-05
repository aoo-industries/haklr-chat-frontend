<template>
  <div>
    <div class="input">
      <input type="text" class="message-space" v-model="message" v-on:keyup.enter="send" />
      <send-icon @click="send" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { sendMessage } from "@/services/server.service"
import { SendIcon } from "vue-feather-icons";

@Component({
  components: {
    SendIcon,
  },
})
export default class messageInput extends Vue {
  private message = ""

  public send() {
    sendMessage(this.message, '6')
    this.message = ""
  }
}
</script>

<style lang="scss" scoped>
.input {
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 2rem);
  height: 3rem;
  padding: 0.3rem 1rem;
  .message-space {
    width: inherit;
    height: -webkit-fill-available;
    margin: 0 2rem 0  0
  }
}
</style>
