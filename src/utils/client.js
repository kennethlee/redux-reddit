import axios from 'axios';

const REDDIT_HOST = 'https://www.reddit.com';
const Client = {};

Client.fetchSubreddits = () => {
  return axios.get(`${REDDIT_HOST}/subreddits/popular.json`)
  .then((response) => {
    return response.data.data.children.map((child) => {
      // console.log(child.data);
      return child.data;
    });
  });
};

Client.fetchPosts = (url) => {
  const fullURL = `${REDDIT_HOST}${url}.json`;
  return axios.get(fullURL)
    .then((response) => {
      return response.data.data.children.map(child => child.data);
    });
};

module.exports = Client;
