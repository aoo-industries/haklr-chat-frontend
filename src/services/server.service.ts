import axios from "axios";
axios.defaults.baseURL = "http://192.168.1.37:3000/";
import router from "../router";
let userid = localStorage.getItem('id') || 0
let token = "";
const getToken = async () => {
  const checkToken = token || localStorage.getItem('token')
  if (!checkToken) router.push("/login");
  return checkToken;
};

const getConfig = async () => {
  return {
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
  };
};

export const createGroup =  async (name: string) => {
  return ( await axios.post("/chats", { name: name }, await getConfig()))
}

export const getGroups = async () => {
  return (await axios.get("/chats", await getConfig())).data;
};

export const getMessages = async (groupId: string) => {
  return (
    await axios.get(`/chats/${groupId}/messages?count=20`, await getConfig())
  ).data;
};

export const newUser = async (userId: string, groupId: string) => {
  return ( await axios.post(`/chats/${groupId}/user`, { userId }, await getConfig())).data
}

export const getUserId = () => {
  console.log(userid);
  
  return userid
}

export const sendMessage = async (message: string, groupId: string) => {
  return (
    await axios.post(
      `/chats/${groupId}/message`,
      { content: message },
      await getConfig()
    )
  ).data;
};

export const login = async (username: string, password: string) => {
  const result = (await axios.post(
    `/users/login`,
    { username: username, password: password }
  )).data;
  if (result.token) {
    token = result.token
    userid = result.user.id
    localStorage.setItem('token', result.token)
    localStorage.setItem('id', result.user.id)

    return result.user
  } else {
    return result
  }
};

export const register = async (username: string, password: string) => {
  return (await axios.post(
    `/users/register`,
    { username: username, password: password }
  )).data;
};


export const logout = () => {
  localStorage.clear()
  window.location.reload()
}