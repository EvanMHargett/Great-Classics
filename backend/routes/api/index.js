const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const booksRouter = require('./books.js');
const bookshelvesRouter = require('./bookshelves.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/books', booksRouter)

router.use('/bookshelves', bookshelvesRouter)



module.exports = router;
