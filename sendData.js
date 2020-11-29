const fetch = require('node-fetch');
const url = 'https://hidden-ridge-18950.herokuapp.com/api/blogposts';
const data = {
  title: 'new',
  date: '11-12-2020',
  tags: ['text1', 'text2', 'text3'],
  postCategory: 'somecat',
  postContent:
    "<TextBlock>\r\n          But they're barely alone in this - and I can't really blame them\r\n          either. I have guaranteed made similar mistakes in the past, as most\r\n          D3.js tutorials out there don't mention accessibility, and a lot of\r\n          visualization libraries built upon D3.js are inaccessible by default.\r\n        </TextBlock>",
};
const otherParams = {
  headers: { 'content-type': 'application/json; charset=UTF-8' },
  body: data,
  method: 'POST',
};

fetch(url, otherParams)
  .then((data) => data.json)
  .then((res) => console.log(res.body))
  .catch((error) => console.log(error));
