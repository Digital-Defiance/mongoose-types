# Changelog

All notable changes to this project will be documented in this file.

## [8.20.4] - 2024-11-25

### Fixed
- Fixed TypeScript module resolution by correcting re-exports in index.d.ts to export from 'mongoose' instead of circular self-reference
- Added comprehensive runtime re-exports in index.js to ensure all mongoose properties are available
- Fixed Jest compatibility issues where mongoose getters weren't being evaluated properly
- Added proper default export alongside named exports for better ES module compatibility

### Added
- Documentation in index.js explaining the re-export strategy for Jest compatibility

## [8.20.3] - 2024-11-25

### Fixed
- Added index.js to re-export all mongoose runtime exports, fixing "Cannot read properties of undefined (reading 'ObjectId')" error in Jest tests
- Package now properly provides both type declarations and runtime exports

## [8.20.2] - 2024-11-25

### Fixed
- Added proper export of `Types` namespace from types.d.ts to fix "Cannot read properties of undefined (reading 'ObjectId')" error
- Moved mongodb and bson imports outside of declare module block

## [8.20.1] - 2024-11-24

### Added
- Initial release based on Mongoose 8.20.1 types
- Support for custom ID types in Document interface
- Changed `Document<T>` default from `Types.ObjectId` to `any`
- Comprehensive README with usage examples
- MIT License
- TypeScript path mapping configuration

### Changed
- Document `_id` type parameter now accepts any type instead of being constrained to ObjectId

## Notes

This package maintains version parity with Mongoose. Version 8.20.1 corresponds to Mongoose 8.20.1 with custom ID type support.
