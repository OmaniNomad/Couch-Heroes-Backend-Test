import SessionModel, { SessionDocument } from "../models/session.model"
import { FilterQuery, UpdateQuery } from "mongoose";

export async function createSession(USerId: string, userAgent: string) {
    const session = await SessionModel.create({user: USerId, userAgent});

    return session.toJSON();
}

export async function updateSession(
    query: FilterQuery<SessionDocument>,
    update: UpdateQuery<SessionDocument>
  ) {
    return SessionModel.updateOne(query, update);
}

 