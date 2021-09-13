<template>
  <div class="grid">
    <div class="column one">
      <group-list @changeGroup="changeGroup" @grde="informGroup"/>
    </div>
    <div class="column two">
      <history :groupId="groupId" />
    </div>
    <div class="column three">
      <group-detail :info="info" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import History from "@/views/History.vue";
import GroupList from "@/views/GroupList.vue"
import GroupDetail from "@/views/GroupDetail.vue"

@Component({
  components: {
    History,
    GroupList,
    GroupDetail
  },
})
export default class fullScreen extends Vue {
  groupId = '0'
  info = {
    members: [],
    name: "",
    id: 0
  }
  changeGroup(data: string | number) {
    console.log("Changing groups...", data);
    
    this.groupId = data.toString()
  }
  informGroup(data: any) {
   this.info = data
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 17rem auto 20rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.column {
  &.one {
    grid-column-start: 1;
    background: rgb(212, 224, 243);
  }
  &.two {
    position: relative;
    grid-column-start: 2;
    background: rgb(202, 202, 202);
  }
  &.three {
    grid-column-start: 3;
    background: rgb(212, 224, 243);
  }
}
</style>
