const initialState = {
        1: {
            title: "Testing1",
            author: "Shakespear",
            description: "Filler Text"
        },
        2: {
            title: "Testing2",
            author: "Shakespear",
            description: "Filler Text"
        },
        3: {
            title: "Testing3",
            author: "Shakespear",
            description: "Filler Text"
        },
        4: {
            title: "Testing4",
            author: "Shakespear",
            description: "Filler Text"
        }
}

const FETCH = 'books/FETCH';


export const fetchBooks = () => {
    return {
        type: FETCH
    }
}



function bookReducer(state = initialState, action){
    switch (action.type) {
        case FETCH:{
            const newState = {...initialState}
            console.log(newState)
            return {...newState}
        }
        default:
            return state;
    }
}

export default bookReducer
