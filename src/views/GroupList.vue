<template>
  <div>
    <div v-if="groups != null && groups.length > 0">
      <div v-for="group in groups" :key="group.id">
        <div
          @click="setGroup(group.id)"
          :class="`group ${group.id == currentGroup ? 'selected' : ''}`"
        >
          <group
            :message="
              group.lastMessage
                ? group.lastMessage.content.length > 18
                  ? group.lastMessage.content.substring(0, 15) + '...'
                  : group.lastMessage.content
                : 'No Message'
            "
            :name="group.name"
            :time="group.lastMessage ? group.lastMessage.sentAt : 0"
          />
        </div>
      </div>
    </div>

    <div v-if="groups.length === 0">
      <h1 class="nogroups">No Groups</h1>
    </div>

    <div class="create-group">
      <input type="text" placeholder="Group Name" v-model="newGroupName" />
      <button @click="createGroup">Create</button>
    </div>
    <div class="logout">
      <button @click="logout">Logout</button>
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
  private currentGroup = "-1";
  public a: any

  async mounted() {
    this.groups = await getGroups();
    this.a = setInterval(async () => {
      this.groups = await getGroups();
    }, 500);
    console.log(this.groups);
  }
  async createGroup() {
    if(this.newGroupName.length < 1) return alert("Blank group names are not permitted.")
    await createGroup(this.newGroupName);
  }
  setGroup(groupId: string) {
    console.log("Emmiting changeGroup,", groupId);
    this.currentGroup = groupId;
    this.$emit("changeGroup", groupId);
    this.$emit("grde", this.groups.filter((a: any) => a.id == groupId)[0]);
  }
  beforeDestroy() {
    clearInterval(this.a)
  }
  logout() {
    logout();
  }
}
</script>

<style lang="scss" scoped>
.nogroups {
  color: white;
}
.group {
  background: white;
  &.selected {
    text-decoration: underline;
    background: lightcyan;
  }
}


.create-group {
  margin-top: 1rem;
}

.logout {
  margin-top: 0.5rem;
}
</style>
