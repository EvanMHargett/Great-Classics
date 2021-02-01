import {fetch} from './csrf'

const FILL = '/bookshelves/FILL'


export const fillBookshelves = (bookshelves, id) =>({
    type: FILL,
    bookshelves,
    id
})



export const fetchBookshelves = (id) => async (dispatch) =>{
    
    const req = await fetch(`/api/bookshelves/${id}`)
    
  
    const normalizedBooks = req.data.bookshelves.map((bookshelf) =>{
        const newShelf = {...bookshelf}
        newShelf.Books.forEach((book) => {
            book.readStatus = book.BookshelfBooks.readStatus
        })
        return newShelf
    })
  
    dispatch(fillBookshelves(normalizedBooks, id))
}

export const createBookshelf = (id, title) => async (dispatch) =>{
    
    await fetch(`/api/bookshelves/${id}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title})
    })
      
    dispatch(fetchBookshelves(id))
}

export const editBookshelf = (userId, id, title) => async (dispatch) =>{
    
    await fetch(`/api/bookshelves/${userId}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, title})
    })
      
    dispatch(fetchBookshelves(userId))
}

export const deleteBookshelf = (userId, id) => async (dispatch) =>{
    
    await fetch(`/api/bookshelves/${userId}/${id}`,{
        method: 'DELETE',
    })
      
    dispatch(fetchBookshelves(userId))
}

export const addBookToShelf = (id, bookId, currentBookshelfId, nextBookshelfId) => async (dispatch) =>{
    await fetch(`/api/bookshelf/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({bookId, currentBookshelfId, nextBookshelfId})
    })

    dispatch(fetchBookshelves(id))
}

export const changeReadStatus = (id, bookId, bookshelfId, readStatus) => async (dispatch) =>{
    await fetch(`/api/bookshelf/readStatus`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({bookId, bookshelfId, readStatus})
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