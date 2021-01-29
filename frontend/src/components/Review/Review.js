import { useState } from 'react'
import {  useSelector, useDispatch } from 'react-redux';
import { submitReview } from '../../store/reviews'
import './Review.css'

export default function Review({book}){
    const [score, setScore] = useState(1)
    const [review, setReview] = useState("")
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()      

        dispatch(submitReview(score, review, sessionUser.id, book.id))
    }

    return (
        <>
            {sessionUser && 
                <form onSubmit={handleSubmit} className="pure-form">
                    <label> Choose a score
                        <select className="score"
                            onChange={(e) => setScore(e.target.value)}
                            value={score}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </label>
                    <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Write a review (optional)"></textarea> 
                    <button type='submit' className='pure-button pure-button-primary'>Submit Review</button>
                </form>
            }
            {!sessionUser && 
                <p className="login-text">Log in to review books</p>
            }
        </>
    )
}