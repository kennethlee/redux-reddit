import axios from 'axios';
import supa from 'superagent';

const REDDIT_HOST = 'https://www.reddit.com';
const Client = {};

function subredditPromise() {
  return axios.get(`${REDDIT_HOST}/subreddits/popular.json`)
  .then((response) => {
    return response.data.data.children.map((child) => {
      // console.log(child.data);
      return child.data;
    });
  });
}

Client.fetchSubreddits = () => {
  // return axios.all([subredditPromise()])
  //   .then((response) => {
  //     // console.log(response[0])
  //     return response[0]
  //   })
  return axios.get(`${REDDIT_HOST}/subreddits/popular.json`)
  .then((response) => {
    return response.data.data.children.map((child) => {
      // console.log(child.data);
      return child.data;
    });
  });
};

module.exports = Client;

// module.exports = {
//   fetchSubreddits: function() {
//     // console.log("IN HERE????")
//     return supa.get(`${REDDIT_HOST}/subreddits/popular.json`)
//       .end(function(err, response) {
//         console.log("IN CLIENT", response.body.data.children.map((child) => child.data))
//         return response.body.data.children.map((child) => child.data)
//       })
//   }
// }
