const express = require('express');
const Twitter = require('twit');
const moment = require('moment');
const app = express();
const client = new Twitter({
  "consumer_key": "PvWebREG3fHx8DWpAeFgInRdV",
  "consumer_secret": "WJ09CPP0ui6Fa6SHWJMfYQNxHRnM9X1B1l01KOhlqT7qMDGGAr",
  "access_token": "1070234029067300864-7IPyaQZt7pq3pZgjzd4gAp1pzIKla4",
  "access_token_secret": "tRaIoGZasq3IFswl75bdGDyJmEOKQkUGBRukedmCXV1ie",
});

app.use(require('cors')());
app.use(require('body-parser').json());

function transformData(tweetData) {
  const transformedData = [];
  for(let item of tweetData) {
    const data = {
      'created_at': '',
      'text': '',
      'link': ''
    };

    data.created_at = moment(item.created_at).fromNow();
    if(item.retweeted_status) {
      data.link = getLink(item.retweeted_status.text)
    }else {
      data.link = getLink(item.text);
    }

    data.text = formatText(item.text);
    transformedData.push(data);
  }
  return transformedData;
}

function getLink(text) {
  return text.slice(text.lastIndexOf(" ") + 1);
}

function formatText(text) {
  return text.slice(0, text.lastIndexOf(" "));
}

app.post('/api/get-tweets', (req, res) => {

  const editView = req.body;
  let screenNames = ["makeSchool", "newsycombinator", "ycombinator"];
  let count = 30;
  if (editView) {
    if (editView.number > 0) {
      count = editView.number
    }

    if (editView.first) {
      screenNames[0] = editView.first
    }

    if (editView.second) {
      screenNames[1] = editView.second
    }

    if (editView.third) {
      screenNames[2] = editView.third
    }
  }

  const params1 = {
    screen_name: screenNames[0],
    count
  };

  const params2 = {
    screen_name: screenNames[1],
    count
  };

  const params3 = {
    screen_name: screenNames[2],
    count
  };

  const twitterData = [];
  client
    .get(`statuses/user_timeline`, params1)
    .then(res1 => {
      twitterData.push({name:screenNames[0], data: transformData(res1.data)});
      client
        .get(`statuses/user_timeline`, params2)
        .then(res2 => {
          twitterData.push({name:screenNames[1], data: transformData(res2.data)});
          client
            .get(`statuses/user_timeline`, params3)
            .then(res3 => {
              twitterData.push({name:screenNames[2], data: transformData(res3.data)});
              res.send(twitterData);
            })
            .catch(error => res.send(error));
        })
        .catch(error => res.send(error));
    })
    .catch(error => res.send(error));
});

app.listen(3000, () => console.log('Server running on port 3000'));
