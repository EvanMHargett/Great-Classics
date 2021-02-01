import {  useSelector, useDispatch } from 'react-redux'
import {addBookToShelf} from "../../store/bookshelves"

export default function AddToShelf({book, arrayShelves, booksOnShelves}){
    const sessionUser = useSelector(state => state.session.user)

    const dispatch = useDispatch();
    
    //pull a list of all bookshelves a user owns if the store is updated


    //if arrayShelves exists, make an object of all books on shelves for easy access
    //needed for making each select default to the correct option

    let prevShelf
    if(!booksOnShelves[book.title]){
        prevShelf = -1
    }
    else{
        prevShelf = booksOnShelves[book.title]
    }
 

    if(arrayShelves && JSON.stringify(arrayShelves) !== JSON.stringify([])){
        return (
            <div>Currently on shelf:
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
            </div>
        )
    }
    else{
        return null
    }
}

// selected={shelf.id === booksOnShelves[book.title]}