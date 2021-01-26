const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Bookshelf, Book } = require('../../db/models');

router.get('/:userId', asyncHandler(async (req, res, next) =>{
    const bookshelves = await Bookshelf.findAll({
        include: [{
            model: Book,
            through: {where: {bookshelfId: 1}}
        }],
        where: {userId: req.params.userId}
    })
    // const json = await bookshelves.json()
    console.log("as", bookshelves)
    // console.log(bookshelves.dataValues.Books)
    return res.json({bookshelves})
}))

module.exports = router;