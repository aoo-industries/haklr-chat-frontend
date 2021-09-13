<template>
  <div class="grid">
    <div class="column one">
      <group-list
        v-if="viewGroups"
        @changeGroup="changeGroup"
        @grde="informGroup"
      />
    </div>
    <div v-if="viewHistory" class="column two">
      <history :groupId="groupId" />
      <button class="back-to-groups" @click="toGroups">Groups</button>
      <button class="view-details" @click="toDetails">Details</button>
    </div>
    <div class="column three" v-if="viewDetails">
      <button class="back-to-groups" @click="goback">EXIT</button>

      <group-detail class="top" :info="info" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import History from "@/views/History.vue";
import GroupList from "@/views/GroupList.vue";
import GroupDetail from "@/views/GroupDetail.vue";

@Component({
  components: {
    History,
    GroupList,
    GroupDetail,
  },
})
export default class mobile extends Vue {
  groupId = "-1";
  info = {
    members: [],
    name: "",
    id: 0,
  };

  viewGroups = true;
  viewHistory = false;
  viewDetails = false;
  changeGroup(data: string | number) {
    console.log("Changing groups...", data);

    this.groupId = data.toString();
    this.viewGroups = false;
    this.viewHistory = true;
  }
  informGroup(data: any) {
    this.info = data;
  }

  toGroups() {
    this.viewHistory = false;
    this.viewGroups = true;
  }
  toDetails() {
    this.viewHistory = false;
    this.viewDetails = true;
  }
  goback() {
    this.viewHistory = true;
    this.viewDetails = false;
  }
}
</script>

<style lang="scss" scoped>
.grid {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 42vw;
  height: 67vw;

  border: 5px solid grey
}
.back-to-groups {
  position: absolute;
  z-index: 10000;
  top: 20px;
  left: 20px;
}
.view-details {
  position: absolute;
  z-index: 10000;
  top: 20px;
  right: 20px;
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
.top {
  margin-top: 3rem;
}
</style>
