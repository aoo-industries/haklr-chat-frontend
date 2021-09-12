<template>
  <div class="grid">
    <div class="column one">
      <group-list @changeGroup="changeGroup"/>
    </div>
    <div class="column two">
      <history :groupId="groupId" />
    </div>
    <div class="column three"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import History from "@/views/History.vue";
import GroupList from "@/views/GroupList.vue"

@Component({
  components: {
    History,
    GroupList
  },
})
export default class fullScreen extends Vue {
  groupId = '0'
  changeGroup(data: string | number) {
    console.log("Changing groups...", data);
    
    this.groupId = data.toString()
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 20rem auto 5rem;
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
