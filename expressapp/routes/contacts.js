import { Router } from 'express';
import Contact from '../models/contact';
const router = Router();

router.post('/contact', (req, res, _next) => {
	addToDB(req, res);
});

async function addToDB(req, res) {
	const { name, phone, email, feedback } = req.body;
	const contact = new Contact({
		name,
		phone,
		email,
		feedback,
	});

	try {
		const doc = await contact.save();
		return res.status(201).json(doc);
	} catch (err) {
		return res.status(501).json(err);
	}
}

export default router;
