<template>
  <div>

    <div v-if="messages" class="box">
      <div v-for="(message, i) in messages" :key="i">
        <div class="message">
          <message
            :class="`content ${message.author.id == idd ? 'me' : 'them'}`"
            :content="message.content"
            :author="message.author.username"
            :time="message.sentAt"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <i>No messages yet</i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Message from "@/components/message.vue";
import { getUserId } from "@/services/server.service"

@Component({
  components: {
    Message,
  },
})
export default class MessageList extends Vue {
  @Prop({ required: false }) messages!: Message[];
  mounted() {
    console.log(this.messages);
  }
  get idd() {
    return getUserId()
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  position: relative;
  gap: 1rem;
  flex-direction: column;
  padding: 5rem 3rem 3rem 3rem;
  .message {
    .content {
      width: 25rem;
      border-radius: 0.5rem;
      padding: 1rem;
      word-break: break-word;
    }
    .me {
      float: right;
      text-align: right;
      background-color: lightblue;
    }
    .them {
      float: left;
      text-align: left;
      background-color: lightgreen;
    }
  }
}
</style>
