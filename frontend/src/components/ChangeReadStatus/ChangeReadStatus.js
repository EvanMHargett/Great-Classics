import {  useSelector, useDispatch } from 'react-redux'
import {addBookToShelf} from "../../store/bookshelves"

export default function ChangeReadStatus({book, readBooks}){
    const sessionUser = useSelector(state => state.session.user)

    const dispatch = useDispatch();
    let readStatus
    if(readBooks){
        if(!readBooks[book.title]){
            readStatus = 'unread'
        }
        else{
            readStatus = readBooks[book.title]
        }

    }
    return (
        <select className="read" 
            onChange={(e) => {         
        }}
        defaultValue={readStatus}>
                <option value='unread' >Unread</option>
                <option value='planningToRead' >Planning to Read</option>
                <option value='read' >Read</option>

        </select>
    )
}