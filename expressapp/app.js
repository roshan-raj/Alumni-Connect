import { join } from 'node:path';
import cookieParser from 'cookie-parser';
import express, { json, urlencoded, static as _static } from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import indexRouter from './routes/index';
import usersRouter from './routes/users';

import cors from 'cors';
import contactRouter from './routes/contacts';
import postsRouter from './routes/posts';
const app = express();
import { connect, connection } from 'mongoose';

app.use(
	cors({
		origin: ['http://localhost:4200', 'http://127.0.0.1:4200'],
		credentials: true,
	}),
);

connect(
	'mongodb://root:root12345@ds237363.mlab.com:37363/alumni-connect',
	{ useNewUrlParser: true },
	(err) => {
		if (!err) {
			console.log('MLab Database successfully connected');
		}
	},
);

// mongoose.connect('mongodb://localhost:27017/alumni-connect',{ useNewUrlParser: true }, function(err) {
//     if (!err) {
//         console.log("Local Database successfully connected");
//     }
// });

import session from 'express-session';
//passport
import { session as _session, initialize } from 'passport';
const MongoStore = require('connect-mongo')(session);
app.use(
	session({
		name: 'myname.sid',
		resave: false,
		saveUninitialized: false,
		secret: 'secret',
		cookie: {
			maxAge: 36000000,
			httpOnly: false,
			secure: false,
		},
		store: new MongoStore({ mongooseConnection: connection }),
	}),
);
import './passport-config';
app.use(initialize());
app.use(_session());

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(_static(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/contacts', contactRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

export default app;
