const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { BookshelfBooks } = require('../../db/models');

router.post('/', asyncHandler(async (req, res, next) =>{
    const {bookId, currentBookshelfId, nextBookshelfId} = req.body
    console.log("BookId", bookId, typeof bookId)
    console.log("currentBookshelfId", currentBookshelfId, typeof currentBookshelfId)
    console.log("nextBookshelfId", nextBookshelfId, typeof nextBookshelfId)
    if(nextBookshelfId === -1){
        const bookshelfBook = await BookshelfBooks.findOne({where: {bookId, bookshelfId: currentBookshelfId}})
        await bookshelfBook.destroy()
    } 
    else if(currentBookshelfId === -1){
        const bookshelfBook = await BookshelfBooks.create({bookId, bookshelfId: nextBookshelfId})
    }
    else{
        console.log("updating entry")
        const bookshelfBookToUpdate = await BookshelfBooks.findOne({where: {bookId, bookshelfId: currentBookshelfId}})
        bookshelfBookToUpdate.bookshelfId = nextBookshelfId
        await bookshelfBookToUpdate.save()
    }

}))

module.exports = router