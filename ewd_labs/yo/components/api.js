import axios from 'axios';
//import config from './../config';
const host = "http://localhost:8081";
export const upvote = postId => {
  return axios.post(`${host}/api/posts/${postId}/upvote`)
              .then(resp => resp.data);
};

export const getAll = () => {
   return axios(`${host}/api/posts`)
              .then(resp => resp.data);
};

export const getPost = postId => {
	console.log(`${host}/api/posts/upvote`);
  return axios.get(`${host}/api/posts/${postId}`)
              .then(resp => resp.data);
};

export const add = (newTitle, newLink) => {
  return axios.post(`${host}/api/posts`, { title: newTitle, link: newLink })
              .then(resp => resp.data);
};
