import {fetch} from './csrf'

const FILL = '/reviews/fill'

export const fillReviews = (reviews) => ({
    type: FILL,
    reviews
});


export const fetchReviews = () => async (dispatch) =>{
    const res = await fetch('/api/reviews')
    dispatch(fillReviews(res.data))
}

export const submitReview = (score, reviewText, userId, bookId) => async (dispatch) =>{
    await fetch(`/api/reviews/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId, score, reviewText, bookId})
    })

    dispatch(fetchReviews())
}

export const deleteReview = (reviewId) => async (dispatch) =>{
    
    await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
    })

    dispatch(fetchReviews())
}

// export const editReview = (score, content, reviewId) => async (dispatch) =>{
//     await fetch(`/api/reviews/${reviewId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({score, content})
//     })

//     dispatch(fetchReviews())
// }

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