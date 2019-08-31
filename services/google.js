const { youtube_v3 } = require('googleapis');
class Google {
  constructor() {
    this.youtube_v3 = new youtube_v3.Youtube({
      version: 'v3',
      auth: process.env.API_KEY // specify your API key here
    })
  }

  getVideoInfo(videoId) {
    return this.youtube_v3.videos.list({
      "part": "snippet,contentDetails,statistics",
      "id": videoId
    });
  }
}

module.exports = Google;