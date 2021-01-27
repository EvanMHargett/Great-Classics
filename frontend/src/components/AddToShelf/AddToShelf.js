import {  useSelector } from 'react-redux'

export default function AddToShelf({book}){
    const sessionUser = useSelector(state => state.session.user)
    const bookshelves = useSelector(state => state.bookshelf)
    
    let arrayShelves
    if(bookshelves)
    {
        if(bookshelves[sessionUser.id])
        {
            const shelvesObj = bookshelves[sessionUser.id]
            arrayShelves = Object.values(shelvesObj)

        }
    }


    if(arrayShelves && JSON.stringify(arrayShelves) !== JSON.stringify([])){
        return (
            <select className="shelf">
                <option value='none'>None</option>
                {arrayShelves.map((shelf) =>(
                    <option key={shelf.id} value={shelf.id}>{shelf.name}</option>
                ))}

            </select>
        )
    }
    else{
        return null
    }
}