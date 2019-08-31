const Movie = require('../models').Movies;
const Google = require('../services/google');

module.exports = {
  share(req, res) {
    try {
      const videoId = req.params.id;
      const _userId = req.user.data.id;
      const youtube = new Google();
      youtube.getVideoInfo(videoId).then(_res => {
        const { data: { items: [item]}} = _res;
        if (!item) {
          return res.status(400).send("Not Found!");
        }
        const { id, snippet: { title, description }, statistics: { likeCount, dislikeCount }} = item;
        Movie.findOrCreate(
          {where: {videoId: id},
          defaults: {
            title,
            description,
            likeCount,
            dislikeCount,
            userId: _userId
          }
        }).spread((movie) => {
          return res.status(200).send(movie);
        })
      }).catch(err => {
        res.status(400).send(err);
      });
    } catch(err) {
      return res.status(500).send(err);
    };
  },
  getList(req, res) {
    try {
      Movie.findAll().then(movies => {
        res.status(200).send(movies);
      }).catch(err => {
        res.status(400).send(err);
      })
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}