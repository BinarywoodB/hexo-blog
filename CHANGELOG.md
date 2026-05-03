# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0] - 2026-05-03

### Added
- NPM-based NexT theme installation (hexo-theme-next ^8.27.0)
- Theme version management via package.json

### Changed
- Migrated from git-cloned theme to NPM package for better dependency management
- Theme updates now via `npm update hexo-theme-next` instead of git operations
- Updated about page with latest work experience and education details

### Removed
- .gitmodules file (submodule configuration)
- themes/next git repository (now managed via npm)

## [2.0.0] - 2026-05-03

### Added
- GitHub Actions CI/CD pipeline for automatic deployment to GitHub Pages
- `.nojekyll` file to prevent Jekyll building conflicts on GitHub Pages
- SSH-based deployment authentication for GitHub Actions
- Comprehensive deployment documentation in README
- CHANGELOG file

### Changed
- Upgraded Hexo from 5.4.2 to 7.3.0 for Node.js 20+ compatibility
- Updated hexo-renderer-stylus to 3.0.1 (resolves circular dependency warnings)
- Updated hexo-server and hexo-renderer-marked to latest stable versions
- Simplified and reorganized README for clarity
- Deployment workflow now supports automatic pushing via GitHub Actions

### Fixed
- Resolved circular dependency warnings in stylus renderer
- Fixed GitHub Pages jekyll building conflicts
- Updated Node.js action versions to v4 (fixes deprecation warnings)

### Removed
- Removed verbose initial setup instructions from README (moved to focused quick start)

## [1.0.0] - 2021-01-08

### Added
- Initial Hexo blog setup with NexT theme
- Blog source structure with posts organized by category
- CV, About, Tags, and Categories pages
- Basic deployment to GitHub Pages
- Hexo filter-optimize plugin for assets optimization
- Support for blog post drafts

### Changed
- N/A

### Fixed
- N/A
