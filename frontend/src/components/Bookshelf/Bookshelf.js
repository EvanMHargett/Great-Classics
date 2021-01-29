import Book from '../BooksPage/Book'
import ChangeReadStatus from '../ChangeReadStatus/ChangeReadStatus'
import EditBookshelf from './EditBookshelf'
// const bookshelfInfo = {name: 'Testing1'}

export default function Bookshelf({books, shelf}){
    const booksArr = Object.values(books)


    return (
        <>
            <div>{shelf.name}
                <ul>
                    {booksArr.map((book) => (

                        <li key = {book.id}>
                            <Book book={book}></Book>
                            <ChangeReadStatus book={book} readbooks={{}} shelf={shelf}></ChangeReadStatus>
                        </li>
                    ))}
                </ul>
                <EditBookshelf shelf={shelf}></EditBookshelf>
            </div>
        </>
    )
}