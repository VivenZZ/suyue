import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    user_name: String,
    password: String,
    id: Number,
    create_time: String,
});

adminSchema.index({id: 1});

const User = mongoose.model('User', adminSchema);


export default User
