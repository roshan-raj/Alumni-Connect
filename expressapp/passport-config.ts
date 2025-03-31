const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

passport.use(
	'local',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		(username, password, done) => {
			User.findOne({ email: username }, (err, user) => {
				if (err) {
					return done(err);
				}
				if (!user) {
					return done(null, false, { message: 'Incorrect username.' });
				}
				if (!user.isValid(password)) {
					return done(null, false, { message: 'Incorrect password.' });
				}
				return done(null, user);
			});
		},
	),
);

passport.serializeUser((user, done) => {
	done(null, user._id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});
