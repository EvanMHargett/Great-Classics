import {useState, useEffect} from 'react'
import {deleteReview} from '../../store/reviews'
import {useDispatch, useSelector} from 'react-redux'
import Review from './Review'


export default function AlreadyReviewed({review, book}){
    const [visible, setVisible] = useState(false)
    const reviews = useSelector(state => state.review)
    const dispatch = useDispatch()
    useEffect(() => {
        setVisible(false)
    }, [reviews])

    return (
        <div>Your Review
            <div>Score {review.score}</div>
            {review.content && 
                <div> {review.content}</div>
            }
            <button onClick={(e) =>setVisible(!visible)}>Edit this review</button>
            {visible && 
                <Review book={book}></Review>
            }
            <button onClick={(e) => {dispatch(deleteReview(review.id))}}>Delete this review</button>
        </div>
    )
}