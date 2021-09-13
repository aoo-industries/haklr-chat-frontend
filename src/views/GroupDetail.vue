<template>
  <div>
    <users class="users" :users="info.members" :id="info.id"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Users from "@/components/users.vue";

@Component({
    components: {
        Users
    }
})
export default class GroupDetail extends Vue {
    @Prop() info: any

}
</script>

<style scoped lang="scss">
.users {
    background: white;
}
</style>
