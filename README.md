![lyrics](https://telegra.ph/file/35bda7ae74dfd4095fc62.png)

<h1 align="center">The Best lyrics Scraper </a>
</h1>
<h1 align="center"> <a href="https://github.com/nxt-owner/lyrics-x">lyrics-x </a>
</h1>
<h4 align="center"> The simplest yet most powerful <a href="https://genius.com/">Genius Lyrics </a> scrapper
</h4>

<p align="center">
<a href="https://www.npmjs.com/~lasiya-nxt">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" width="140px">
</a>
  
</p>

<br>

## 🍃 Description:
- This is a Scraper which can scrap and give you lyrics of any song that's available on [Genius Offitial Site](https://genius.com/). 
- This can return both album thumbnail and lyrics if they are available through thw power of web scraping.
- Scraping an website is not always allowed by the website owners. This project is made for educational purposes only.

<br>

## 🪄 Installation:

```
npm i lyrics-x
```

## 🪝 Usage:
- Make sure to always use an asynchronous function to fetch

### Metod 1:

```js
const {getThumbnail, getLyrics} = require('lyrics-x');

async function main() {
    const query = "Heat Waves";
    const thumbnailUrl = await getThumbnail(query);
    const lyrics = await getLyrics(query);

    console.log(thumbnailUrl+"\n\n");
    console.log(lyrics); 
  }
  
  main();
  
```

### Method 2:

```js
const {getThumbnail, getLyrics} = require('lyrics-x');

const query = "Heat Waves";

getThumbnail(query).then((thumbnailUrl) => {
    console.log(thumbnailUrl);
});

getLyrics(query).then((lyrics) => {
    console.log(lyrics);
});

```
