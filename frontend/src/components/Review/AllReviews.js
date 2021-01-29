import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

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
        <>
            {userReviews && 
            <ul>
                {userReviews.map(review =>(
                    <li key={review.id}>
                        <div>Score {review.score}</div>
                        <div>{review.content}</div>
                    </li>
                ))}
            </ul>}
        </>
    )

}