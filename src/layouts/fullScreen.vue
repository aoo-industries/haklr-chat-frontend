<template>
  <div class="grid">
    <div class="column one"></div>
    <div class="column two">
      <history :groupId="'6'" />
    </div>
    <div class="column three"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import History from "@/views/History.vue";

@Component({
  components: {
    History,
  },
})
export default class fullScreen extends Vue {}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 20rem auto 25rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.column {
  &.one {
    grid-column-start: 1;
    background: blue;
  }
  &.two {
    position: relative;
    grid-column-start: 2;
    background: lightgray;
  }
  &.three {
    grid-column-start: 3;
    background: green;
  }
}
</style>
