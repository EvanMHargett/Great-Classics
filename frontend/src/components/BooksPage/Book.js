import { useDispatch, useSelector } from 'react-redux';

export default function Book(){
    const booksObj = useSelector(state => state.books)
    const books = Object.values(booksObj)
    

    return (
        <ul className="books">
            {books.map((book) => (
                 <li key={book.title}>
                    <div> Title: {book.title}</div>
                    <div> Author: {book.author}</div>
                    <div> Description: {book.description}</div>
                </li>
            ))}
        </ul>
    )
}