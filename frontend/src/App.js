import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/SignupFormPage";
import BooksPage from "./components/BooksPage/BooksPage"
import BookshelvesPage from "./components/Bookshelf/BookshelvesPage"
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/Navigation";
import {fetchBooks} from './store/books'
import {fetchBookshelves} from "./store/bookshelves"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(fetchBooks())
  }, [dispatch]);
  
  useEffect(() => {
    if(sessionUser){
      dispatch(fetchBookshelves(sessionUser.id))
    }
  }, [dispatch, sessionUser])


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
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