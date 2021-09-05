import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const author = {
  name: "galook",
};

export default new Vuex.Store({
  state: {
    messages: [{ } as Message],
  },
  mutations: {
    addmessage(state, message: Message, ) {
      message.author = author.name;
      return state.messages.push(message);
    },
    addgroup(state, message: Message) {
      message.author = author.name;
      return state.messages.push(message);
    },
  },
  actions: {
   
  },
  modules: {},
});
