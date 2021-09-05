<template>
  <div>
    <h1>Login</h1>
    <div class="login">
      <input type="text" placeholder="Username" v-model="login.username" />
      <input type="password" placeholder="Password" v-model="login.password" />
      <button @click="makeLogin">Login</button>
    </div>
    <h1>
      Register
    </h1>
    <div class="register">
      <input type="text" placeholder="Username" v-model="register.username" />
      <input type="password" placeholder="Password" v-model="register.password" />
      <button @click="makeRegister">Register</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { login, register } from "@/services/server.service"

@Component
export default class Login extends Vue {
  private login: LoginBody = {
    username: "",
    password: "",
  };

  private register: LoginBody = {
    username: "",
    password: "",
  };

  private async makeLogin() {
      const result =  await login(this.login.username, this.login.password);
      if(result.username) {
          this.$router.push("/")
      } else {
          console.log(result);
      }
  }
  private async makeRegister() {
      const result = await register(this.register.username, this.register.password)
        console.log(result);
        
  }
}

interface LoginBody {
  username: string;
  password: string;
}
</script>

<style lang="scss" scoped>
.login {
  margin-bottom: 10rem;
}
</style>
