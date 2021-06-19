<template>
  <div class="bubble">
    <h5 class="author">{{ author || `No author` }}</h5>
    <p class="text">
      {{ content || `No message content` }}
    </p>
    <span v-if="time" class="time">
      {{
        new Date(time).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Message extends Vue {
  @Prop({ required: true }) content!: string;
  @Prop({ required: true }) author!: string;
  @Prop({ required: true }) time!: number;
}
</script>

<style lang="scss" scoped>
.time {
  font-size: 0.73rem;
}
.text {
  margin: -0.7rem 0 0.37rem 0;
  font-size: 1.0rem;
}
.author {
    margin-top: 0;
    margin-bottom: 1rem;
}

</style>
