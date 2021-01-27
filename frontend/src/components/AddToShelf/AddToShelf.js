import {  useSelector, useDispatch } from 'react-redux'
import {addBookToShelf} from "../../store/bookshelves"

export default function AddToShelf({book}){
    const sessionUser = useSelector(state => state.session.user)
    const bookshelves = useSelector(state => state.bookshelf)
    const dispatch = useDispatch();
    
    //pull a list of all bookshelves a user owns if the store is updated
    let arrayShelves
    if(bookshelves)
    {
        if(bookshelves[sessionUser.id])
        {
            const shelvesObj = bookshelves[sessionUser.id]
            arrayShelves = Object.values(shelvesObj)

        }
    }

    //if arrayShelves exists, make an object of all books on shelves for easy access
    //needed for making each select default to the correct option
    let booksOnShelves = {}
    if(arrayShelves)
    {
        arrayShelves.forEach((shelf) =>{
            shelf.Books.forEach((book) =>{
                booksOnShelves[book.title] = shelf.id
            })
        })
    }
    console.log("books on shelves", booksOnShelves)
    let prevShelf
    if(!booksOnShelves[book.title]){
        prevShelf = -1
    }
    else{
        prevShelf = booksOnShelves[book.title]
    }



    if(arrayShelves && JSON.stringify(arrayShelves) !== JSON.stringify([])){
        return (
            <select className="shelf" 
                onChange={(e) => {
                    dispatch(addBookToShelf(sessionUser.id, book.id, prevShelf , Number(e.target.value)))
            }}
            defaultValue={prevShelf}>
                <option value={-1} >None</option>
                {arrayShelves.map((shelf) =>(
                    <option key={shelf.id} value={shelf.id} >{shelf.name}</option>
                ))}

            </select>
        )
    }
    else{
        return null
    }
}

// selected={shelf.id === booksOnShelves[book.title]}