import Book from './Book'
import AddToShelf from '../AddToShelf/AddToShelf'
import {  useSelector } from 'react-redux';
import Review from '../Review/Review'
import AlreadyReviewed from '../Review/AlreadyReviewed';
import './BooksPage.css'


export default function BooksPage(){
    const booksObj = useSelector(state => state.book)
    const books = Object.values(booksObj)
    const bookshelves = useSelector(state => state.bookshelf)
    const sessionUser = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.review)
    const reviewsArr = Object.values(reviews)
    const userReviews = reviewsArr.filter(review => review.userId = sessionUser.id) 
    const userReviewsObj = {}
    userReviews.forEach(review =>{
        userReviewsObj[review.bookId] = review
    })
    let arrayShelves
    if(bookshelves)
    {
        if(bookshelves[sessionUser.id])
        {
            const shelvesObj = bookshelves[sessionUser.id]
            arrayShelves = Object.values(shelvesObj)

        }
    }

    let booksOnShelves = {}
    if(arrayShelves)
    {
        arrayShelves.forEach((shelf) =>{
            shelf.Books.forEach((book) =>{
                booksOnShelves[book.title] = shelf.id
            })
        })
    }


    return (
        <ul>
            {books.map((book) => (
                <li key={book.id} className='pure-u-1-4 book-box'>
                    <Book book={book} class="book"></Book>
                    <AddToShelf book={book} arrayShelves={arrayShelves} booksOnShelves={booksOnShelves} classNam='add-to-shelf'></AddToShelf>
                    { userReviewsObj[book.id] && 
                        <AlreadyReviewed review={userReviewsObj[book.id]} book={book}></AlreadyReviewed>
                     }
                    {!userReviewsObj[book.id] && 
                        <Review book={book}></Review>
                    } 
                    
                </li>
            ))}
        </ul>
 
    )
}