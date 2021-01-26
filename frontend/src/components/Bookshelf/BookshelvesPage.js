import Bookshelf from "./Bookshelf"
import { useDispatch, useSelector } from 'react-redux';



const arrayShelves = Object.values(myShelves)

export default function BookshelvesPage(){
    const sessionUser = useSelector(state => state.session.user);
    const bookshelvesObj = useSelector(state => state.bookshelf[user.id])
    const arrayShelves = Object.values(bookshelvesObj)
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