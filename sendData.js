const axios = require('axios');
const url = 'https://hidden-ridge-18950.herokuapp.com/api/blogposts';
const data = {
  title: 'newest old boys',
  date: '11-12-2020',
  tags: ['text1', 'text2', 'text3'],
  postCategory: 'somecat',
  postContent:
    "<TextBlock>\r\n          But they're barely alone in this - and I can't really blame them\r\n          either. I have guaranteed made similar mistakes in the past, as most\r\n          D3.js tutorials out there don't mention accessibility, and a lot of\r\n          visualization libraries built upon D3.js are inaccessible by default.\r\n        </TextBlock>",
};

axios({
  method: 'post',
  url: url,
  data: data,
}).then(
  (response) => {
    console.log(response);
  },
  (error) => {
    console.log(error);
  }
);
