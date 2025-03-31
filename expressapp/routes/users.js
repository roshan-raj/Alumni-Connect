import { Router } from 'express';
const router = Router();
import { authenticate } from 'passport';
import User, { hashPassword, find } from '../models/user';

router.post('/register', (req, res, next) => {
	addToDB(req, res);
});

async function addToDB(req, res) {
	const {
		email,
		username,
		password,
		usn,
		phone,
		branch,
		dob,
		location,
		classof,
	} = req.body;
	const user = new User({
		email,
		username,
		password: hashPassword(password),
		usn,
		phone,
		branch,
		dob,
		location,
		classof,
		creation_dt: Date.now(),
	});

	try {
		const doc = await user.save();
		return res.status(201).json(doc);
	} catch (err) {
		return res.status(501).json(err);
	}
}

router.post('/login', (req, res, next) => {
	authenticate('local', (err, user, info) => {
		if (err) {
			return res.status(501).json(err);
		}
		if (!user) {
			return res.status(501).json(info);
		}
		req.logIn(user, (err) => {
			if (err) {
				return res.status(501).json(err);
			}
			return res.status(200).json({ message: 'Login Success' });
		});
	})(req, res, next);
});

router.get('/user', isValidUser, (req, res, next) =>
	res.status(200).json(req.user),
);

router.get('/profile', isValidUser, (req, res, next) =>
	res.status(200).json(req.user),
);

router.get('/logout', isValidUser, (req, res, next) => {
	req.logout();
	return res.status(200).json({ message: 'Logout Success' });
});

router.get('/allusers', (req, res, next) => {
	find((err, docs) => {
		if (!err) {
			res.send(docs);
		} else {
			console.log(`Err${JSON.stringify(err, undefined, 2)}`);
		}
	});
});

function isValidUser(req, res, next) {
	if (req.isAuthenticated()) next();
	else return res.status(401).json({ message: 'Unauthorized Request' });
}

export default router;
