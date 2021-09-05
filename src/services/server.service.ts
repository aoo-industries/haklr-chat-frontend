import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";

export const getGroups = async () => {
  return (await axios.get("/chats")).data;
};

export const getMessages = async (groupId: string) => {
  return (await axios.get(`/chats/${groupId}/messages?count=20`)).data;
};

export const sendMessage = async (message: string, groupId: string) => {
  return (await axios.post(`/chats/${groupId}/message`, { content: message }))
    .data;
};
