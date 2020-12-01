const axios = require('axios');
const url = 'https://hidden-ridge-18950.herokuapp.com/api/blogposts';
const data = {
  title: 'Similar post to this! Lorem, ipsum 9.',
  date: '11-12-2020',
  tags: ['it', 'digital', 'react'],
  postCategory: 'featured post',
  postContent: `<TextBlock>
          But they're barely alone in this - and I can't really blame them
          either. I have guaranteed made similar mistakes in the past, as most
          D3.js tutorials out there don't mention accessibility, and a lot of
          visualization libraries built upon D3.js are inaccessible by default.
        </TextBlock>
        <HeaderSmall>Starting point</HeaderSmall>
        <TextBlock>
          This first tutorial will be quite broad, but we will go into more
          detail in upcoming posts. You will need to have a basic understanding
          of D3.js to follow along; but don't worry, an intro to D3.js series is
          in the make as well.
        </TextBlock>
        <ReactEmbedGist gist='youurt/044f9aa7def8951f083b274b8f65c467' />`,
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
