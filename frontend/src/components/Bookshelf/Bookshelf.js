import Book from '../BooksPage/Book'

const sampleData = { 1: {
        id: 1,
        title: "asd1",
        author: "as",
        coverLink: "not found"
    },
    2: {
        id: 2,
        title: "asd2",
        author: "as",
        coverLink: "not found"
    },
    3: {
        id: 3,
        title: "asd3",
        author: "as",
        coverLink: "not found"
    },
    4: {
        id: 4,
        title: "asd4",
        author: "as",
        coverLink: "not found"
    }
}

const bookshelfInfo = {name: 'Testing1'}

export default function Bookshelf({books}){
    const booksTemp = Object.values(sampleData)
    console.log(booksTemp)

    return (
        <>
            <ul>
                {booksTemp.map((book) => (

                    <li key = {book.id}>
                         <Book book={book}></Book>
                    </li>
                ))}
            </ul>
        </>
    )
}