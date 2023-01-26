import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

// TS definition for the user schema

export interface UserDocument extends mongoose.Document {
    email: string,
    name: string,
    password: string,
    highScore: number,
    createdAt: Date,
    updatedAt: Date,
    comparePassword(candidatePassword: string): Promise<Boolean>
}

//schema definition

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    highScore: {type: Number, required: true}
    },
    {
    timestamps: true
    }
);

// hashing the user's password using bcrypt with salting factor

userSchema.pre("save", async function(next){

    let user = this as UserDocument

    if(!user.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltRounds"))

    const hash = await bcrypt.hashSync(user.password, salt)

    user.password = hash;

    return next();
})

// checking the password used during the login attempt

userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
    const user = this as UserDocument

    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

// user model

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;