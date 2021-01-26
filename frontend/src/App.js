import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/SignupFormPage";
import BooksPage from "./components/BooksPage/BooksPage"
import BookshelvesPage from "./components/Bookshelf/BookshelvesPage"
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/Navigation";
import {fetchBooks} from './store/books'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(fetchBooks())
  }, [dispatch]);
  

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