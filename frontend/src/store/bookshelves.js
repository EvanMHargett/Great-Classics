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