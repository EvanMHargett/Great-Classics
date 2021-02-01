import Book from './Book'
import AddToShelf from '../AddToShelf/AddToShelf'
import {  useSelector } from 'react-redux';
import Review from '../Review/Review'
import AlreadyReviewed from '../Review/AlreadyReviewed';
import './BooksPage.css'
import { Link } from 'react-router-dom'


export default function BooksPage(){
    const booksObj = useSelector(state => state.book)
    const books = Object.values(booksObj)
    const bookshelves = useSelector(state => state.bookshelf)
    const sessionUser = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.review)
    const userReviewsObj = {}

    if(reviews && sessionUser){
        const reviewsArr = Object.values(reviews)
        if(reviewsArr){
            const userReviews = reviewsArr.filter(review => review.userId = sessionUser.id) 
            userReviews.forEach(review =>{
            userReviewsObj[review.bookId] = review
            })
        }
    }
    let arrayShelves
    if(bookshelves && sessionUser)
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
                    <Book book={book} className="book"></Book>
                    <div>Currently on shelf&nbsp;    
                    <AddToShelf book={book} arrayShelves={arrayShelves} booksOnShelves={booksOnShelves} classNam='add-to-shelf'></AddToShelf>

                    </div>
                    {userReviewsObj && 
                    <div>
                        { userReviewsObj[book.id] && 
                            <AlreadyReviewed review={userReviewsObj[book.id]} book={book}></AlreadyReviewed>
                        }
                        {!userReviewsObj[book.id] && 
                            <Review book={book}></Review>
                        } 
                    </div>
                    }
                    <Link to={`/books/${book.id}`}>View all reviews for this book</Link>
                    
                </li>
            ))}
        </ul>
 
    )
}