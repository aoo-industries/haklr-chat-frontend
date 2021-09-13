<template>
  <div>
    <span class="heading">Users</span>
    <ul class="users">
      <li class="user" v-for="user in users" :key="user.id">
        {{ user.username }} ({{ user.id }})
      </li>
    </ul>
    <br />
    <input type="text" placeholder="Add User Id" v-model="nUser" />
    <button @click="add">Add</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { newUser } from "@/services/server.service";

@Component
export default class Users extends Vue {
  @Prop() users!: any[];
  @Prop() id!: string;
  private nUser = "";

  async add() {
        if(this.nUser.length < 1) return alert("Blank user ids are not permitted.")

      await newUser(this.nUser, this.id)
  }
}
</script>

<style scoped lang="scss">
.heading {
  font-weight: 700;
  font-size: 1.77rem;
}
.users {
  text-align: left;
  .user {
    text-align: left;
  }
}
</style>
