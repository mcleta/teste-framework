const axios = require('axios');

const response = axios('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => console.log(response.data))
