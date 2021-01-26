import {fetch} from './csrf'

const FILL = '/bookshelves/FILL'

export const fillBookshelves = (bookshelves, id) =>{
    type: FILL,
    bookshelves,
    id
}

export const fetchBooks = (id) => async (dispatch) =>{
    const myShelves = {
    1: {
        1: {
        id: 1,
        title: "asd1",
        author: "as",
        coverLink: "not found"
    },
    2: {
        id: 2,
        title: "asd2",
        author: "as",
        coverLink: "not found"
    },
    3: {
        id: 3,
        title: "asd3",
        author: "as",
        coverLink: "not found"
    },
    4: {
        id: 4,
        title: "asd4",
        author: "as",
        coverLink: "not found"
    }
    },
    2: {
        1: {
        id: 1,
        title: "bsd1",
        author: "as",
        coverLink: "not found"
    },
    2: {
        id: 2,
        title: "bsd2",
        author: "as",
        coverLink: "not found"
    },
    3: {
        id: 3,
        title: "bsd3",
        author: "as",
        coverLink: "not found"
    },
    4: {
        id: 4,
        title: "bsd4",
        author: "as",
        coverLink: "not found"
    }
    },
}
    dispatch(fillBookshelves(myShelves, id))
}

function bookshelfReducer(state ={}, action){
    switch(action.type){
        case FILL:{
            const newState = {...state}
            newstate[id] = state.bookshelves
            return {...newState}

        }
        default:
            return state
    }
}