import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const schema = new Schema({
	name: { type: String, require: true },
	phone: { type: String, require: true },
	email: { type: String, require: true },
	feedback: { type: String, require: true },
});

export default model('Contact', schema);
