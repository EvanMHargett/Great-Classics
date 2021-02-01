import Bookshelf from "./Bookshelf"
import {  useSelector } from 'react-redux';
import CreateBookshelf from "./CreateBookshelf";

// import {useEffect} from 'react'
// import {fetchBookshelves} from "../../store/bookshelves"





export default function BookshelvesPage(){
    const sessionUser = useSelector(state => state.session.user);
    const bookshelves = useSelector(state => state.bookshelf)
    
    
    let arrayShelves

    // const dispatch = useDispatch();
    
    if(bookshelves && sessionUser){
        if(bookshelves[sessionUser.id]){
            const userShelves = bookshelves[sessionUser.id]
            arrayShelves = Object.values(userShelves)
        }
    }



    //If arrayShelves has updated, and isn't an empty array, render the bookshelves
    if(arrayShelves && JSON.stringify(arrayShelves) !== JSON.stringify([])){
        return (
            <>
                <h1> My Bookshelves</h1>
    
                <ul>
                    
                    {arrayShelves.map((shelf) => {

                    const books = shelf.Books
                    return (
                        <Bookshelf  books={books} key={shelf.id} shelf={shelf}></Bookshelf>
                    )})}
                </ul>
                <p>Make a new bookshelf?</p>
                <CreateBookshelf></CreateBookshelf>
            </>
        )
    }
    //if arrayShelves is empty, or hasn't updated from state render a placeholder
    else{
        return (
            <>
                <h1> No Bookshelves Currently</h1>
                <p>Would you like to create one?</p>
                <CreateBookshelf></CreateBookshelf>
            </>
        )
    }
} 