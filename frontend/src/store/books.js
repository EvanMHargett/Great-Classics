import {fetch} from './csrf'


const FILL = 'books/FILL';


export const fillBooks = (books) => ({
    type: FILL,
    books
});

export const fetchBooks = () => async (dispatch) =>{
    const res = await fetch('/api/books')
    dispatch(fillBooks(res.data.books))
}



function bookReducer(state = {}, action){
    switch (action.type) {
        case FILL:{
            const newState = {...action.books}
            return {...newState}
        }
        default:
            return state;
    }
}

export default bookReducer
