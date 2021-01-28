const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models');


router.get('/', asyncHandler(async (req, res, next) =>{
    console.log('before search')
    const reviews = await Review.findAll()
    console.log('after search', reviews)

    return res.json(reviews)
}))

router.post('/', asyncHandler(async (req, res, next) =>{
    const {score, reviewText, userId, bookId} = req.body
    const review = await Review.create({userId, score, content: reviewText, bookId})
    return res.json(review)
}))



module.exports = router