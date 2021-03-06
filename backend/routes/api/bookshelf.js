const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { BookshelfBooks } = require('../../db/models');

router.post('/', asyncHandler(async (req, res, next) =>{
    const {bookId, currentBookshelfId, nextBookshelfId} = req.body
    if(nextBookshelfId === -1){
        const bookshelfBook = await BookshelfBooks.findOne({where: {bookId, bookshelfId: currentBookshelfId}})
        await bookshelfBook.destroy()
    } 
    else {
        if(currentBookshelfId !== -1)
        {
            const bookshelfBook = await BookshelfBooks.findOne({where: {bookId, bookshelfId: currentBookshelfId}})
            await bookshelfBook.destroy()
        }
        await BookshelfBooks.create({bookId, bookshelfId: nextBookshelfId})
    }
    return res.json({success: true})
}))

router.post('/readStatus', asyncHandler(async (req, res, next) =>{
    const {bookId, bookshelfId, readStatus} = req.body
    const bookshelfBook = await BookshelfBooks.findOne({where: {bookId, bookshelfId}})
    await bookshelfBook.destroy()
    await BookshelfBooks.create({bookId, bookshelfId, readStatus: readStatus})
    return res.json({success: true})
}))

module.exports = router