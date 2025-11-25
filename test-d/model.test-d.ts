/**
 * Model type tests
 */
import { Document, Schema, model, Model, Types } from 'mongoose';
import { expectType, expectAssignable } from 'tsd';

// Test: Model with string ID
interface IProductString extends Document<string> {
  _id: string;
  name: string;
  price: number;
}

const productStringSchema = new Schema<IProductString>({
  _id: { type: String, required: true },
  name: String,
  price: Number,
});

const ProductString = model<IProductString>('ProductString', productStringSchema);
expectType<Model<IProductString>>(ProductString);

const productString = new ProductString({ _id: 'prod-123', name: 'Widget', price: 9.99 });
expectType<string>(productString._id);

// Test: Model with ObjectId
interface IProductObjectId extends Document<Types.ObjectId> {
  _id: Types.ObjectId;
  name: string;
  price: number;
}

const productObjectIdSchema = new Schema<IProductObjectId>({
  name: String,
  price: Number,
});

const ProductObjectId = model<IProductObjectId>('ProductObjectId', productObjectIdSchema);
expectType<Model<IProductObjectId>>(ProductObjectId);

const productObjectId = new ProductObjectId({ name: 'Widget', price: 9.99 });
expectType<Types.ObjectId>(productObjectId._id);

// Test: Model with number ID
interface IProductNumber extends Document<number> {
  _id: number;
  name: string;
}

const productNumberSchema = new Schema<IProductNumber>({
  _id: { type: Number, required: true },
  name: String,
});

const ProductNumber = model<IProductNumber>('ProductNumber', productNumberSchema);
const productNumber = new ProductNumber({ _id: 12345, name: 'Widget' });
expectType<number>(productNumber._id);

// Test: Query operations preserve ID type
async function testQueries() {
  const foundString = await ProductString.findById('prod-123');
  if (foundString) {
    expectType<string>(foundString._id);
  }

  const foundObjectId = await ProductObjectId.findById(new Types.ObjectId());
  if (foundObjectId) {
    expectType<Types.ObjectId>(foundObjectId._id);
  }

  const foundNumber = await ProductNumber.findById(12345);
  if (foundNumber) {
    expectType<number>(foundNumber._id);
  }
}
