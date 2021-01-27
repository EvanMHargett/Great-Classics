const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Bookshelf, Book, BookshelfBooks } = require('../../db/models');

router.get('/:userId', asyncHandler(async (req, res, next) =>{
    const bookshelves = await Bookshelf.findAll({
        include: [{
            model: Book,
            through: {
                attributes: ['readStatus']
            }
        }],
        where: {userId: req.params.userId}
    })
    console.log("Looking for info", bookshelves[1].Books[0].BookshelfBooks)
    return res.json({bookshelves})
}))

module.exports = router;