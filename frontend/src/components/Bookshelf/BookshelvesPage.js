import Bookshelf from "./Bookshelf"
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react'
import {fetchBookshelves} from "../../store/bookshelves"





export default function BookshelvesPage(){
    const sessionUser = useSelector(state => state.session.user);
    const bookshelves = useSelector(state => state.bookshelf)
    

    const dispatch = useDispatch();
    // useEffect(() => {
    //     console.log("dispatching")
    //     dispatch(fetchBookshelves(1))
    // }, [dispatch])

    const userShelves = bookshelves[sessionUser.id]
    const arrayShelves = Object.values(userShelves)

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