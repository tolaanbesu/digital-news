import mongoose from 'mongoose';

const ContactInfoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
}, {timestamps: true});

const ContactInfo = mongoose.models.ContactInfo || mongoose.model('ContactInfo', ContactInfoSchema);

export default ContactInfo;