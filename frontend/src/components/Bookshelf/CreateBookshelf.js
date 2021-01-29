import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createBookshelf} from '../../store/bookshelves'

export default function CreateBookshelf(){
    const sessionUser = useSelector(state => state.session.user);
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    function handleSubmit(e){
        e.preventDefault()

        dispatch(createBookshelf(sessionUser.id, title))
    }
    return (
        <form onSubmit={handleSubmit} className="pure-form">
            <input type="text"
                onChange={(e) => setTitle(e.target.value)} value={title}
                placeholder="Title"
            >
            </input>
            <button type="submit" className="pure-button">Create Bookshelf</button>
        </form>
    )

}