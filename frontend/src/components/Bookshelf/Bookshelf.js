import Book from '../BooksPage/Book'
import ChangeReadStatus from '../ChangeReadStatus/ChangeReadStatus'
import EditBookshelf from './EditBookshelf'
import "./Bookshelf.css"

export default function Bookshelf({books, shelf}){
    const booksArr = Object.values(books)


    return (
        <>
            <div>{shelf.name}
                <ul>
                    {booksArr.map((book) => (

                        <li key = {book.id} className='pure-u-1-4 book-box'>
                            <Book book={book} className="book"></Book>
                            <ChangeReadStatus book={book} readbooks={{}} shelf={shelf}></ChangeReadStatus>
                        </li>
                    ))}
                </ul>
                <EditBookshelf shelf={shelf}></EditBookshelf>
            </div>
        </>
    )
}