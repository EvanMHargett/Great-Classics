import {fetch} from './csrf'

const FILL = '/bookshelves/FILL'


export const fillBookshelves = (bookshelves, id) =>({
    type: FILL,
    bookshelves,
    id
})



export const fetchBookshelves = (id) => async (dispatch) =>{
    
    const req = await fetch(`/api/bookshelves/${id}`)
  
    dispatch(fillBookshelves(req.data.bookshelves, id))
}

export const addToShelf = (id, bookId, currentBookshelfId, nextBookshelfId) => async (dispatch) =>{
    await fetch(`/api/bookshelf/${nextBookshelfId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({bookId, currentBookshelfId, nextBookshelfId})
    })

    dispatch(fetchBookshelves(id))
}

function bookshelfReducer(state ={}, action){
    switch(action.type){
        case FILL:{
            const newState = {...state}
            newState[action.id] = {...action.bookshelves}
            return {...newState}

        }
        default:
            return state
    }
}

export default bookshelfReducer