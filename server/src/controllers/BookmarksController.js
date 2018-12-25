const _ = require('lodash');
const { Bookmark, Grill } = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const { grillId } = req.query;
      const userId = req.user.id;
      const where = {
        UserId: userId,
      };
      if (grillId) {
        where.GrillId = grillId;
      }
      const bookmark = await Bookmark.findAll({
        where,
        include: [
          {
            model: Grill,
          },
        ],
      }).map(bm => bm.toJSON())
        .map(bm => _.extend({
          bookmarkId: bm.id,
          bookmarkCreatedAt: bm.createdAt,
        }, bm.Grill));
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
      bookmark.UserId = req.user.id;
      const checkBookmark = (await Bookmark.findOne(bookmark)).data;

      if (checkBookmark) {
        return res.status(400).send({
          error: 'you already set this as a bookmark',
        });
      }

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
      const userId = req.user.id;
      const { bookmarkId } = req.params;
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId,
        },
      });
      if (!bookmark) {
        return res.status(403).send({
          error: 'you do not have access to this bookmark',
        });
      }
      await bookmark.destroy();
      return res.send(bookmark);
    } catch (err) {
      return res.status(500).send({
        error: 'an error has occured trying to delete the bookmark',
      });
    }
  },
};
