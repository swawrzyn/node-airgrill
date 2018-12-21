const { Bookmark } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const { grillId, userId } = req.query;
      const bookmark = await Bookmark.findOne({
        where: {
          GrillId: grillId,
          UserId: userId,
        },
      });
      return res.send(bookmark);
    } catch (err) {
      return res.status(500).send({
        error: 'an error has occured trying to fetch bookmarks',
      });
    }
  },
  async post(req, res) {
    try {
      const bookmark = req.body.params;
      console.log('creating bookmark!!!!!!!', bookmark);
      const newBookmark = await Bookmark.create(bookmark);
      return res.send(newBookmark);
    } catch (err) {
      return res.status(500).send({
        error: 'an error has occured trying to create the bookmark',
      });
    }
  },
  async delete(req, res) {
    try {
      const { bookmarkId } = req.params;
      const bookmark = await Bookmark.findById(bookmarkId);
      await bookmark.destroy();
      return res.send(bookmark);
    } catch (err) {
      return res.status(500).send({
        error: 'an error has occured trying to delete the bookmark',
      });
    }
  },
};
