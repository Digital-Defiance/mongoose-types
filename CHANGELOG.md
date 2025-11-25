# Changelog

All notable changes to this project will be documented in this file.

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
