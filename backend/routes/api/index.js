const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const booksRouter = require('./books.js');
const bookshelvesRouter = require('./bookshelves.js');
const bookshelfRouter = require('./bookshelf.js');
const reviewsRouter = require('./reviews')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/books', booksRouter)

router.use('/bookshelves', bookshelvesRouter)

router.use('/bookshelf', bookshelfRouter)

router.use('/reviews', reviewsRouter)


module.exports = router;
