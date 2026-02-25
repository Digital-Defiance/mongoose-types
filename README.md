# @digitaldefiance/mongoose-types

Custom TypeScript definitions for Mongoose 8.x with support for flexible ID types.

[![npm version](https://badge.fury.io/js/@digitaldefiance%2Fmongoose-types.svg)](https://www.npmjs.com/package/@digitaldefiance/mongoose-types)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Why This Package?

Mongoose 8's official types enforce `_id: Types.ObjectId` in the Document type, which prevents using custom ID types like strings, UUIDs, or GUIDs. This package provides modified type definitions that allow `_id` to be any type, enabling full flexibility for ID management.

### Use Cases

- Using string-based IDs (UUIDs, GUIDs, custom formats)
- Migrating from other databases with non-ObjectId primary keys
- Building systems that require specific ID formats
- Cross-platform applications with custom ID providers

## Installation

```bash
npm install @digitaldefiance/mongoose-types mongoose@^8.20.0
# or
yarn add @digitaldefiance/mongoose-types mongoose@^8.20.0
```

## Usage

### TypeScript Configuration

Add path mapping to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "mongoose": ["node_modules/@digitaldefiance/mongoose-types/src/index.d.ts"]
    }
  }
}
```

### Code Examples

```typescript
import { Document, Schema, model, Types } from 'mongoose';

// String-based IDs
interface IUser extends Document<string> {
  _id: string;
  username: string;
  email: string;
}

const userSchema = new Schema({
  _id: { type: String, required: true },
  username: String,
  email: String
});

const User = model<IUser>('User', userSchema);

// ObjectId (default behavior still works)
interface IRole extends Document<Types.ObjectId> {
  _id: Types.ObjectId;
  name: string;
}

// Custom ID type
interface IProduct extends Document<{ uuid: string; version: number }> {
  _id: { uuid: string; version: number };
  name: string;
}
```

## Changes from Official Mongoose Types

- `Document<T>` generic parameter `T` default changed from `Types.ObjectId` to `any`
- Updated JSDoc to clarify that `_id` can be ObjectId, string, or any custom type
- All other Mongoose functionality remains unchanged

## Compatibility

- **Mongoose**: ^8.20.0
- **TypeScript**: ^5.0.0
- **Node.js**: 18+

## Versioning

This package follows Mongoose's version numbers. Version `8.20.1` corresponds to Mongoose `8.20.1` types with custom ID support.

## Contributing

Contributions are welcome! Please open an issue or PR at [https://github.com/Digital-Defiance/mongoose-types](https://github.com/Digital-Defiance/mongoose-types)

## License

MIT © Digital Defiance, Jessica Mulein

## Related Packages

Part of the [Express Suite](https://github.com/Digital-Defiance/express-suite) ecosystem.

## ChangeLog

### Version 8.20.0

- Initial release with custom Mongoose 8.x TypeScript definitions supporting flexible ID types
- Added type tests and tsd-based test suite
- Added LICENSE, README, and CHANGELOG

### Version 8.20.2

- Fixed duplicate `devDependencies` in package.json
- Updated dev dependencies (`@types/node` ^24.10.1, `tsd` ^0.33.0, `typescript` ^5.9.3)
- Added Nx `project.json` for workspace integration
- Reformatted type definitions in `src/types.d.ts` for readability

### Version 8.20.3

- Added `src/index.js` runtime re-export of mongoose for runtime compatibility
- Added `test-runtime.js` runtime test
- Updated package `main` entry to `src/index.js`; included JS files and test files in published package
- Added `test:runtime` script and integrated it into the test pipeline

### Version 8.20.4

- Major update to `src/index.d.ts`: reformatted and expanded type definitions with improved readability
- Fixed TypeScript module resolution by correcting re-exports to export from `mongoose` instead of circular self-reference
- Added comprehensive runtime re-exports in `index.js` for Jest compatibility
- Fixed `inferschematype.d.ts` import to reference `@digitaldefiance/mongoose-types`
- Removed test files from published package `files` list

### Version 8.20.5

- Simplified `src/index.js` to a single `module.exports = require('mongoose')` re-export
- Moved `mongoose` from `devDependencies` to `dependencies`
- Removed `src/index.ts` barrel file (no longer needed)

### Version 8.20.7

- Added `publish:public` npm script
- Added `repository` and `homepage` fields to package.json
- Removed `rootDir` from `tsconfig.lib.json`

### Version 8.20.8

- Version bump only

### Version 8.20.9

- Version bump only
