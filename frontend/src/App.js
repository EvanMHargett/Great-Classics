import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/SignupFormPage";
import BooksPage from "./components/BooksPage/BooksPage"
import BookshelvesPage from "./components/Bookshelf/BookshelvesPage"
import AllReviews from "./components/Review/AllReviews"
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/Navigation";
import {fetchBooks} from './store/books'
import {fetchBookshelves} from "./store/bookshelves"
import {fetchReviews} from "./store/reviews"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(fetchBooks())
    dispatch(fetchReviews())
  }, [dispatch]);
  
  useEffect(() => {
    if(sessionUser){
      dispatch(fetchBookshelves(sessionUser.id))
    }
  }, [dispatch, sessionUser])


  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.5/build/pure-min.css" integrity="sha384-LTIDeidl25h2dPxrB2Ekgc9c7sEC3CWGM6HeFmuDNUjX76Ert4Z4IY714dhZHPLd" crossOrigin="anonymous"></link>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/books/:bookId">
            <AllReviews></AllReviews>
          </Route>
          <Route path="/books">
            <BooksPage />
          </Route>
          <Route path="/users/:id/bookshelves">
            <BookshelvesPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;