

const axios = require("axios");
const request = require("request");
const cheerio = require("cheerio");


async function getThumbnail(query) {
  const lookupURL = "https://genius.com/api/search/multi?per_page=1&q=" + query;
  const response = await axios.get(lookupURL);
  var thumbnailUrl =
    response.data.response.sections[0].hits[0].result.cover_art_thumbnail_url;

  if (thumbnailUrl == undefined || thumbnailUrl == null) {
    thumbnailUrl =
      "https://t2.genius.com/unsafe/409x409/https%3A%2F%2Fimages.genius.com%2F08c6cf3234ccbad210617ba252eee193.999x999x1.png";
  }
  return thumbnailUrl;
}

async function getLyrics(query) {
  const lookupURL = "https://genius.com/api/search/multi?per_page=1&q=" + query;
  const response = await axios.get(lookupURL);
  let geniusURL = response.data.response.sections[0].hits[1]?.result.url;
  if (geniusURL == undefined || geniusURL == null) {
    geniusURL = response.data.response.sections[0].hits[0].result.url;
  }

  return new Promise((resolve, reject) => {
    request(geniusURL, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        $ = cheerio.load(html);
        const siteData = $(".Lyrics__Container-sc-1ynbvzw-5");
        const item = siteData.text();

        const formattedLyrics = item.replace(/([A-HJ-Z])/g, "\n$1");
        let newText = formattedLyrics.replace(/[\()]/g, "");
        let newText1 = newText.replace(/\[/g, "\n");
        let newText2 = newText1.replace(/]/g, "\n");

        resolve(newText2);
      } else {
        reject(new Error("Song not found !"));
      }
    });
  });
}

module.exports = {
  getThumbnail: getThumbnail,
  getLyrics: getLyrics,
};
