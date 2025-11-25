/**
 * Document type tests
 */
import { Document, Types } from 'mongoose';
import { expectType, expectAssignable, expectNotAssignable } from 'tsd';

// Test: Document with string ID
interface IUserString extends Document<string> {
  _id: string;
  name: string;
}

const userString: IUserString = {} as IUserString;
expectType<string>(userString._id);
expectAssignable<Document<string>>(userString);

// Test: Document with ObjectId (default behavior)
interface IUserObjectId extends Document<Types.ObjectId> {
  _id: Types.ObjectId;
  name: string;
}

const userObjectId: IUserObjectId = {} as IUserObjectId;
expectType<Types.ObjectId>(userObjectId._id);
expectAssignable<Document<Types.ObjectId>>(userObjectId);

// Test: Document with number ID
interface IUserNumber extends Document<number> {
  _id: number;
  name: string;
}

const userNumber: IUserNumber = {} as IUserNumber;
expectType<number>(userNumber._id);
expectAssignable<Document<number>>(userNumber);

// Test: Document with composite ID
interface IUserComposite extends Document<{ uuid: string; version: number }> {
  _id: { uuid: string; version: number };
  name: string;
}

const userComposite: IUserComposite = {} as IUserComposite;
expectType<{ uuid: string; version: number }>(userComposite._id);
expectAssignable<Document<{ uuid: string; version: number }>>(userComposite);

// Test: Document with any ID (default)
interface IUserAny extends Document {
  _id: any;
  name: string;
}

const userAny: IUserAny = {} as IUserAny;
expectType<any>(userAny._id);

// Test: Type incompatibility - string ID should not be assignable to ObjectId document
expectNotAssignable<Document<Types.ObjectId>>(userString);
expectNotAssignable<Document<string>>(userObjectId);
