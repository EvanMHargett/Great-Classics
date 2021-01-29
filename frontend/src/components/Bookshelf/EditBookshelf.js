import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editBookshelf, deleteBookshelf} from '../../store/bookshelves'
import './EditBookshelf.css'

export default function EditBookshelf({shelf}){
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const bookshelves = useSelector(state => state.bookshelf)
    useEffect(() => {
        setVisible(false)
    }, [bookshelves])


    function handleSubmit(e){
        e.preventDefault()

        dispatch(editBookshelf(sessionUser.id, shelf.id, title))
    }

    return(
        <>
            <button onClick={(e) => setVisible(!visible)} className="pure-button">Edit this Bookshelf</button>
            {visible &&
                <form onSubmit={handleSubmit} className="pure-form">
                    <input type="text"
                        onChange={(e) => setTitle(e.target.value)} value={title}
                        placeholder="New Title"
                    />   
                    <button type="submit" className="pure-button pure-button-primary">Edit Bookshelf</button>
                </form>
            }
            <button onClick={(e) => dispatch(deleteBookshelf(sessionUser.id, shelf.id))} className="button-warning pure-button">Delete this Bookshelf</button>
        </>
    )
}