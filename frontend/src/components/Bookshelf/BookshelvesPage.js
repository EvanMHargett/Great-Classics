import Bookshelf from "./Bookshelf"

const myShelves = {
    1: {
        1: {
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
    },
    2: {
        1: {
        id: 1,
        title: "bsd1",
        author: "as",
        coverLink: "not found"
    },
    2: {
        id: 2,
        title: "bsd2",
        author: "as",
        coverLink: "not found"
    },
    3: {
        id: 3,
        title: "bsd3",
        author: "as",
        coverLink: "not found"
    },
    4: {
        id: 4,
        title: "bsd4",
        author: "as",
        coverLink: "not found"
    }
    },
}
const arrayShelves = Object.values(myShelves)
console.log(arrayShelves)

export default function BookshelvesPage(){
    return (
        <>
            <h1> My Bookshelves</h1>

            <ul>
                {arrayShelves.map((shelf) => (
                    <Bookshelf books={shelf}></Bookshelf>
                ))}
            </ul>
        </>
    )
} 