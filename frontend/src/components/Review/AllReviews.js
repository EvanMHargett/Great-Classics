import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import './AllReviews.css'

export default function AllReviews(){
    const {bookId} = useParams()
    const reviews = useSelector(state => state.review)
    let userReviews

    if(reviews){
        const reviewsArr = Object.values(reviews)
        if(reviewsArr){
            userReviews = reviewsArr.filter(review => review.bookId = bookId) 
        }
    }
    

    return (
        <div className="review-box">
            {userReviews && 
            <ul>
                {userReviews.map(review =>(
                    <li key={review.id} className="review pure-u-1-2">
                        <div>Score {review.score}</div>
                        <div>{review.content}</div>
                    </li>
                ))}
            </ul>}
        </div>
    )

}