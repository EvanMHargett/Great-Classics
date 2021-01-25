import { useDispatch, useSelector } from 'react-redux';

export default function Book(){
    const booksObj = useSelector(state => state.book)
    const books = Object.values(booksObj)
    
    

    return (
        <ul className="books">
            {books.map((book) => (
                 <li key={book.id}>
                    <div> Title: {book.title}</div>
                    <div> Author: {book.author}</div>
                    <img src={'/' + book.coverLink} alt=''></img>
                </li>
            ))}
        </ul>
    )
}