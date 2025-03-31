import { Router } from 'express';
const router = Router();
import Post, { find } from '../models/post';

router.post('/post', (req, res, next) => {
	addToDB(req, res);
});

async function addToDB(req, res) {
	const post = new Post({
		uname: req.body.uname,
		title: req.body.title,
		content: req.body.content,
		creation_dt: Date.now(),
	});

	try {
		doc = await post.save();
		return res.status(201).json(doc);
	} catch (err) {
		return res.status(501).json(err);
	}
}

router.get('/', (req, res, next) => {
	find((err, docs) => {
		if (!err) {
			res.send(docs);
		} else {
			console.log(`Err${JSON.stringify(err, undefined, 2)}`);
		}
	});
});

export default router;
