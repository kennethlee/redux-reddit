import axios from 'axios';

const REDDIT_HOST = 'https://www.reddit.com';
const Client = {};

function subredditPromise() {
  return axios.get(`${REDDIT_HOST}/subreddits/popular.json`)
}

Client.fetchSubreddits = () => {
  return axios.all([subredditPromise()])
    .then((response) => {
      return response.data.data.children.map((child) => {
        console.log(child.data);
        return child.data;
      }
    );
  });
};

module.exports = Client;
