# Changelog

All notable changes to `expo-squircle` are documented here.

## [Unreleased]

### Fixed

- Guard `smoothFactor` at runtime and clamp it between 0 and 1 so misconfigured
  props surface as a descriptive error instead of a crash.
- Prevent divisions by zero inside the path generator, fixing NaN-filled SVG
  output when only one rounded corner is provided.
- Added regression tests that cover asymmetric radii and the smoothing validator.

### Changed

- Moved squircle geometry utilities and caches into `src/internal/*` modules to
  keep the main component lightweight and simplify unit testing.

## [1.0.0] - 2025-11-12

### Added

- Initial release of the `expo-squircle` package.
