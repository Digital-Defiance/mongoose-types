/**
 * Schema type tests
 */
import { Document, Schema, Types } from 'mongoose';
import { expectType, expectAssignable } from 'tsd';

// Test: Schema with string ID document
interface IOrderString extends Document<string> {
  _id: string;
  total: number;
  items: string[];
}

const orderStringSchema = new Schema<IOrderString>({
  _id: { type: String, required: true },
  total: Number,
  items: [String],
});

expectAssignable<Schema<IOrderString>>(orderStringSchema);

// Test: Schema with ObjectId document
interface IOrderObjectId extends Document<Types.ObjectId> {
  _id: Types.ObjectId;
  total: number;
  items: string[];
}

const orderObjectIdSchema = new Schema<IOrderObjectId>({
  total: Number,
  items: [String],
});

expectAssignable<Schema<IOrderObjectId>>(orderObjectIdSchema);

// Test: Schema with custom ID type
interface IOrderCustom extends Document<{ region: string; sequence: number }> {
  _id: { region: string; sequence: number };
  total: number;
}

const orderCustomSchema = new Schema<IOrderCustom>({
  _id: {
    region: String,
    sequence: Number,
  },
  total: Number,
});

expectAssignable<Schema<IOrderCustom>>(orderCustomSchema);

// Test: Schema methods preserve ID type
interface IOrderWithMethods extends Document<string> {
  _id: string;
  total: number;
  calculateTax(): number;
}

const orderMethodsSchema = new Schema<IOrderWithMethods>({
  _id: { type: String, required: true },
  total: Number,
});

orderMethodsSchema.methods.calculateTax = function() {
  // In method context, this._id is typed as any due to Mongoose internals
  // The document interface still enforces string type
  return this.total * 0.1;
};
