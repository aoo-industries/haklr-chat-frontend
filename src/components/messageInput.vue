<template>
  <div>
    <div class="input">
      <input type="text" class="message-space" />
      <send-icon />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SendIcon } from "vue-feather-icons";

@Component({
  components: {
    SendIcon,
  },
})
export default class messageInput extends Vue {}
</script>

<style lang="scss" scoped>
.input {
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1178px;
  height: 3rem;
  position: absolute;

  .message-space {
    width: inherit;
    height: -webkit-fill-available;
    margin: 0 2rem 0  0
  }
}
</style>
