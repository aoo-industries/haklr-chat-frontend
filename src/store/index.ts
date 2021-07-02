import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const author = {
  name: "galook",
};

export default new Vuex.Store({
  state: {
    messages: [
      {
        author: "Beria",
        content: "Ahoj",
        side: 1,
        time: Date.now() - 10e6,
      },
      {
        author: author.name,
        content: "Čus. Benga!",
        side: 0,

        time: Date.now() - 10e5,
      },
      {
        author: "Beria",
        content: "Jaký benga??",
        side: 1,

        time: Date.now() - 10e5,
      },
      {
        author: "Beria",
        content: "Should I enable the Hiding Extraction Protocol?",
        side: 1,

        time: Date.now() - 10e5,
      },
      {
        author: author.name,
        content:
          "You should stay totally calm. No worries there. The bengas will be handled by my team and you have literally nothing to worry about.",
        side: 0,

        time: Date.now() - 10e3,
      },
    ] as Message[],
  },
  mutations: {
    addmessage(state, message: Message) {
      message.author = author.name;
      return state.messages.push(message);
    },
  },
  actions: {
   
  },
  modules: {},
});
