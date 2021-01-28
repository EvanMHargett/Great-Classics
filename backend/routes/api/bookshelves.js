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
    return res.json({bookshelves})
}))


router.get('/:userId', asyncHandler(async (req, res, next) =>{
    const userId = parseInt(req.params.userId, 10)
    const {title} = req.body
    const bookshelves = await Bookshelf.findAll({
        include: [{
            model: Book,
            through: {
                attributes: ['readStatus']
            }
        }],
        where: {userId: req.params.userId}
    })

    return res.json({bookshelves})
}))
module.exports = router;