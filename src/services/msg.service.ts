import store from '@/store'


export const sendMessage = (content: string): void => {
  store.commit('addmessage', {
    author: "",
    content: content,
    side: 0,
    time: Date.now(),
  })
}
