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
    const existingReview = await Review.findOne({where: {
        userId, bookId
    }})
    if(existingReview){
        await existingReview.destroy()
    }
    const review = await Review.create({userId, score, content: reviewText, bookId})
    return res.json(review)
}))

router.delete('/:reviewId', asyncHandler(async (req,res, next) =>{
    const reviewId = parseInt(req.params.reviewId, 10)
    const review = await Review.findOne({where: {
        id: reviewId
    }})
    await review.destroy()
    return res.json({success: true})
}))

// router.put('/:reviewId', asyncHandler(async (req,res, next) =>{
//     const reviewId = parseInt(req.params.reviewId, 10)
//     const {score, content} = req.body
//     const review = await Review.findOne({where: {
//         id: reviewId
//     }})
//     await review.update({score, content})
//     return res.json({success: true})
// }))



module.exports = router