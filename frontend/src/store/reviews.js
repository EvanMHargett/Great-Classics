import {fetch} from './csrf'

const FILL = '/reviews/fill'

export const fillReviews = (reviews) => ({
    type: FILL,
    reviews
});

export const fetchReviews = () => async (dispatch) =>{
    const res = await fetch('/api/reviews')
    console.log("fetching reviews", res.data)
    dispatch(fillReviews(res.data))
}

export const submitReview = (score, reviewText, userId, bookId) => async (dispatch) =>{
    console.log("submitting review")
    await fetch(`/api/reviews/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId, score, reviewText, bookId})
    })

    dispatch(fetchReviews())
}


export default function reviewReducer(state={}, action){
    switch (action.type) {
        case FILL:{
            const newState = {...action.reviews}
            return {...newState}
        }
        default:
            return state;
    }
}