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


router.post('/:userId', asyncHandler(async (req, res, next) =>{
    const userId = parseInt(req.params.userId, 10)
    const {title} = req.body
    await Bookshelf.create({userId, name: title})

    return res.json({status: 'ok'})
}))

router.put('/:userId', asyncHandler(async (req, res, next) =>{
    // const userId = parseInt(req.params.userId, 10)
    const {title, id} = req.body
    const shelf = await Bookshelf.findOne({where: {
        id
    }})
    await shelf.update({name: title})

    return res.json({status: 'ok'})
}))

router.delete('/:userId/:id', asyncHandler(async (req, res, next) =>{
    const id = parseInt(req.params.id, 10)
    const bookshelfBooks = await BookshelfBooks.findAll({where: {
        bookshelfId: id
    }})
    bookshelfBooks.forEach(async(entry) =>{
        await entry.destroy()
    })
    const shelf = await Bookshelf.findOne({where: {
        id
    }})
    await shelf.destroy()
    return res.json({status: 'ok'})
}))
module.exports = router;