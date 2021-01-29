import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editBookshelf, deleteBookshelf} from '../../store/bookshelves'

export default function EditBookshelf({shelf}){
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()

        dispatch(editBookshelf(sessionUser.id, shelf.id, title))
    }

    return(
        <>
            <button onClick={(e) => setVisible(!visible)}>Edit this Bookshelf</button>
            {visible &&
                <form onSubmit={handleSubmit}>
                    <label>Enter a new title for the bookshelf
                        <input type="text"
                            onChange={(e) => setTitle(e.target.value)} value={title}>
                        </input>
                    </label>
                    <button type="submit">Edit Bookshelf</button>
                </form>
            }
            <button onClick={(e) => dispatch(deleteBookshelf(sessionUser.id, shelf.id))}>Delete this Bookshelf</button>
        </>
    )
}