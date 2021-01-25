const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Book } = require('../../db/models');

router.get('/', asyncHandler(async (req, res, next) =>{
    const books = await Book.findAll()
    return res.json({books})
}))


module.exports = router;