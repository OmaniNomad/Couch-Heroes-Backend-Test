import mongoose from 'mongoose';
import { UserDocument } from './user.model';

// TS definition for the session schema

export interface SessionDocument extends mongoose.Document {
    user: UserDocument['_id'];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}

//schema definition

const sessionSchema = new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        valid: {type: Boolean, default: true},
        userAgent: {type: String}
    },
    {
        timestamps: true
    }
);

// Session model

const SessionModel = mongoose.model<SessionDocument>("Session", sessionSchema);

export default SessionModel;