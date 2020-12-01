const axios = require('axios');
const url = 'https://hidden-ridge-18950.herokuapp.com/api/blogposts';
const data = {
  title: 'Hello World! This is ugurtigu.com',
  tags: ['me', 'about', 'techblog', 'hello'],
  // "featured post" or "archive"
  postCategory: 'featured post',
  // All elements here: "<TextBlock></TextBlock>", "<HeaderSmall></HeaderSmall>" and "<ReactEmbedGist gist='youurt/{id}' />"
  postContent: `<TextBlock>
          I allways wished to have a blog where I can write about stuff. In the future time I can do that here. I will try to make posts every day eventually. this blog/webiste is made by myself with react, styled components, framer motion. For the backend I used mongo as db, express and node.js as backend. I have made this endpoint, so I can easily send my posts to the frontend via post request. This post is made with vscode and when it will be finished, I will just make an axios post request to my endpoint which then will store this string and other data in the db.
        </TextBlock>
        <HeaderSmall>Why?</HeaderSmall>
        <TextBlock>
        I am looking to build some  nice projects and I think the best way to learn from them, is to make blogposts related to the projects. 
        </TextBlock>`,
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
