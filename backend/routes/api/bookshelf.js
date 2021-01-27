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
    else if(currentBookshelfId === -1){
        const bookshelfBook = await BookshelfBooks.create({bookId, bookshelfId: nextBookshelfId})
    }
    else{
        const bookshelfBookToUpdate = await BookshelfBooks.findOne({where: {bookId, bookshelfId: currentBookshelfId}})
        let updated = {bookId, bookshelfId: nextBookshelfId}
        await bookshelfBookToUpdate.update(updated)
    }
    
}))