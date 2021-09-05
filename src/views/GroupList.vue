<template>
  <div>
    <div v-if="groups.length > 0">
      <div v-for="group in groups" :key="group.id">
        <group
          :message="group.lastMessage ? group.lastMessage.content : 'No Message'"
          :name="group.name"
          :time="group.lastMessage ? group.lastMessage.sentAt : 0"
        />
      </div>
    </div>

    <div v-if="groups.length === 0">
      <h1 class="nogroups">No Groups</h1>
    </div>

    <div class="creategroup">
      <input type="text" v-model="newGroupName" />
      <button @click="createGroup">Create</button>
    </div>
    <div class="logout">
      <button @click="logout">See you later, aligator</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getGroups, createGroup, logout } from "@/services/server.service";
import Group from "@/components/group.vue";

@Component({
  components: {
    Group,
  },
})
export default class GroupList extends Vue {
  private groups: any = null;
  private newGroupName = "";

  async mounted() {
    this.groups = await getGroups();
    console.log(this.groups);
  }
  async createGroup() {
    await createGroup(this.newGroupName);
  }
  logout() {
      logout()
  }
}
</script>

<style lang="scss" scoped>
.nogroups {
  color: white;
}
</style>
