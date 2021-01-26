import Bookshelf from "./Bookshelf"
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react'
import {fetchBookshelves} from "../../store/bookshelves"





export default function BookshelvesPage(){
    const sessionUser = useSelector(state => state.session.user);
    const bookshelves = useSelector(state => state.bookshelf)
    
    let arrayShelves

    const dispatch = useDispatch();
    useEffect(() => {
       if(bookshelves){
        //    console.log("does this run")
        if(bookshelves[sessionUser.id]){
            const userShelves = bookshelves[sessionUser.id]
            arrayShelves = Object.values(userShelves)
            console.log("Array shelves was set to",arrayShelves)
            if(arrayShelves){
                console.log("should trigger")
            }
            
        }
       }
    }, [bookshelves])

    
    if(arrayShelves){
        return (
            <>
                <h1> My Bookshelves</h1>
    
                <ul>
                    
                    {arrayShelves.map((shelf) => {
                    return (
                        <Bookshelf  books={shelf}></Bookshelf>
                    )})}
                </ul>
            </>
        )
    }
    else{
        return (
            <>
                <h1> No Bookshelves Currently</h1>
                <p>Would you like to create on?</p>
            </>
        )
    }
} 