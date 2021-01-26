import Book from '../BooksPage/Book'

const bookshelfInfo = {name: 'Testing1'}

export default function Bookshelf({books}){
    const booksArr = Object.values(books)


    return (
        <>
            <ul>
                {booksArr.map((book) => (

                    <li key = {book.id}>
                         <Book book={book}></Book>
                    </li>
                ))}
            </ul>
        </>
    )
}