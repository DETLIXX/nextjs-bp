import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: { 
        type: String,
        uniqe: [true, 'Email already exists'],
        required: [true, 'Email is required']
    },
    first_name: { 
        type: String
    },
    last_name: { 
        type: String,
    },
    id: { 
        type: String,
        required: [true, 'ID is required']

    },
    username: { 
        type: String,
        required: [true, 'Username is required']
    },
    image: {
        type: String,
    }
})

const User = models.User || model('User', UserSchema)

export default User;