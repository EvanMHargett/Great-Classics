const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Bookshelf, Book } = require('../../db/models');

router.get('/:userId', asyncHandler(async (req, res, next) =>{
    const bookshelves = await Bookshelf.findAll({
        include: [{
            model: Book,
        }],
        where: {userId: req.params.userId}
    })
    console.log(bookshelves)
    return res.json({bookshelves})
}))

module.exports = router;