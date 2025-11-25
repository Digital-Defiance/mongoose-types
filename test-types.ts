/**
 * Type test file - compile this to verify types work correctly
 * Run: npx tsc --noEmit test-types.ts
 */

import { Document, Schema, model, Types } from 'mongoose';

// Test 1: String ID
interface IUserString extends Document<string> {
  _id: string;
  username: string;
}

const userStringSchema = new Schema<IUserString>({
  _id: { type: String, required: true },
  username: String,
});

const UserString = model<IUserString>('UserString', userStringSchema);

// Test 2: ObjectId (default)
interface IUserObjectId extends Document<Types.ObjectId> {
  _id: Types.ObjectId;
  username: string;
}

const userObjectIdSchema = new Schema<IUserObjectId>({
  username: String,
});

const UserObjectId = model<IUserObjectId>('UserObjectId', userObjectIdSchema);

// Test 3: Custom composite ID
interface IUserComposite extends Document<{ uuid: string; version: number }> {
  _id: { uuid: string; version: number };
  username: string;
}

const userCompositeSchema = new Schema<IUserComposite>({
  _id: {
    uuid: String,
    version: Number,
  },
  username: String,
});

const UserComposite = model<IUserComposite>('UserComposite', userCompositeSchema);

// Test 4: Number ID
interface IUserNumber extends Document<number> {
  _id: number;
  username: string;
}

const userNumberSchema = new Schema<IUserNumber>({
  _id: { type: Number, required: true },
  username: String,
});

const UserNumber = model<IUserNumber>('UserNumber', userNumberSchema);

// Type assertions to verify compilation
const stringUser: IUserString = {} as IUserString;
const stringId: string = stringUser._id;

const objectIdUser: IUserObjectId = {} as IUserObjectId;
const objectId: Types.ObjectId = objectIdUser._id;

const compositeUser: IUserComposite = {} as IUserComposite;
const compositeId: { uuid: string; version: number } = compositeUser._id;

const numberUser: IUserNumber = {} as IUserNumber;
const numberId: number = numberUser._id;

console.log('✓ All type tests passed');
