<template>
  <div>
    <div class="group">
      <div class="name">
        <h3>{{ name }}</h3>
      </div>
      <div class="message">
        <div class="content">
          {{ message }}
        </div>
        <div class="time">
          {{
            new Date(time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    name: {
      type: String,
      default: "No Name",
    },
    message: {
      type: String,
      default: "No Message",
    },
    time: {
      type: Number,
      default: 0,
    },
  },
})
export default class Group extends Vue {
  private name!: string;
  private message!: string;
  private time!: number;
}
</script>

<style lang="scss" scoped>
.group {
  height: 5.77rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  .message {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
}
</style>
