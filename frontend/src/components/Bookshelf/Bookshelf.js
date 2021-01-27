import Book from '../BooksPage/Book'
import ChangeReadStatus from '../ChangeReadStatus/ChangeReadStatus'

// const bookshelfInfo = {name: 'Testing1'}

export default function Bookshelf({books, shelf}){
    const booksArr = Object.values(books)


    return (
        <>
            <ul>
                {booksArr.map((book) => (

                    <li key = {book.id}>
                         <Book book={book}></Book>
                         <ChangeReadStatus book={book} readbooks={{}} shelf={shelf}></ChangeReadStatus>
                    </li>
                ))}
            </ul>
        </>
    )
}