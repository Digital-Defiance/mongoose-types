// Re-export everything from mongoose to ensure runtime compatibility
const mongoose = require('mongoose');

// Force evaluation of all getters and create plain object
const reexports = {
  // Core exports
  Schema: mongoose.Schema,
  Model: mongoose.Model,
  Document: mongoose.Document,
  Types: mongoose.Types,
  model: mongoose.model,
  connect: mongoose.connect,
  connection: mongoose.connection,

  // Additional commonly used exports
  connections: mongoose.connections,
  models: mongoose.models,
  default: mongoose,
  mongoose: mongoose,

  // Methods
  cast: mongoose.cast,
  STATES: mongoose.STATES,
  setDriver: mongoose.setDriver,
  set: mongoose.set,
  get: mongoose.get,
  createConnection: mongoose.createConnection,
  disconnect: mongoose.disconnect,
  deleteModel: mongoose.deleteModel,
  modelNames: mongoose.modelNames,
  plugin: mongoose.plugin,
  pluralize: mongoose.pluralize,
  version: mongoose.version,
  Mongoose: mongoose.Mongoose,
  mongo: mongoose.mongo,
  mquery: mongoose.mquery,
  Error: mongoose.Error,
  CastError: mongoose.CastError,
  MongooseError: mongoose.MongooseError,
  Query: mongoose.Query,
  Aggregate: mongoose.Aggregate,
  VirtualType: mongoose.VirtualType,
  SchemaType: mongoose.SchemaType,
  SchemaTypes: mongoose.SchemaTypes,
  ValidatorError: mongoose.ValidatorError,
  ValidationError: mongoose.ValidationError,
  startSession: mongoose.startSession,
  syncIndexes: mongoose.syncIndexes,
  overwriteMiddlewareResult: mongoose.overwriteMiddlewareResult,
  skipMiddlewareFunction: mongoose.skipMiddlewareFunction,
  sanitizeFilter: mongoose.sanitizeFilter,
  trusted: mongoose.trusted,
  omitUndefined: mongoose.omitUndefined,
  now: mongoose.now,
  isValidObjectId: mongoose.isValidObjectId,
  isObjectIdOrHexString: mongoose.isObjectIdOrHexString,
};

module.exports = reexports;
