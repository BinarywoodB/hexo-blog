# Hexo Blog

Personal blog: https://binarywoodb.github.io

## Prerequisites

- Node.js 20+
- Git with SSH configured

## Quick Start

```bash
# Clone with submodules
git clone https://github.com/BinarywoodB/hexo-blog.git
git submodule init
git submodule update

# Install dependencies
cd blog
npm install
```

## Development

All commands run in the `blog/` directory.

**Local preview:**
```bash
hexo server  # or: hexo s
# Visit: http://localhost:4000
```

**Build static files:**
```bash
hexo generate  # or: hexo g
```

## Create Content

**New post:**
```bash
hexo new "post title"
hexo new -p category/post-name.md "Post Title"
```

**New page:**
```bash
hexo new page about
```

**New draft:**
```bash
hexo new draft "draft title"
hexo publish draft "draft title"  # Publish when ready
```

Posts go to `source/_posts/` with front matter:
```yaml
---
title: Post Title
date: 2026-05-03
categories:
- Category
tags:
- tag1
- tag2
---

Content here...
```

## Deployment

### Option 1: Automatic CI/CD (Recommended)

GitHub Actions automatically builds and deploys when you push to `main`.

**One-time setup:**

1. Add SSH private key as GitHub secret:
   - Go to https://github.com/BinarywoodB/hexo-blog/settings/secrets/actions
   - Create secret `DEPLOY_PRIVATE_KEY` with content of `~/.ssh/id_ed25519`

2. Add SSH public key as deploy key:
   - Go to https://github.com/BinarywoodB/BinarywoodB.github.io/settings/keys
   - Add deploy key with `~/.ssh/id_ed25519.pub`
   - Enable "Allow write access"

**Usage:**
```bash
git add .
git commit -m "Update blog"
git push origin main
# ✨ Automatic deployment to GitHub Pages!
```

Monitor at: https://github.com/BinarywoodB/hexo-blog/actions

### Option 2: Manual Deployment

```bash
cd blog
hexo clean && hexo generate && hexo deploy
# or shorthand: hexo clean && hexo g && hexo d
```

## Configuration

Edit `blog/_config.yml` for site settings:

```yaml
# Site
title: Your Blog Title
subtitle: Subtitle
description: Description
author: Your Name

# Theme
theme: next

# Deployment
deploy:
  type: git
  repo: git@github.com:YOUR-USERNAME/YOUR-USERNAME.github.io.git
  branch: main
```

Customize theme in `theme_config` section. See `themes/next/_config.yml` for all options.

## Troubleshooting

**Icons not showing after deployment:**
- This is handled by `hexo-filter-optimize` with Font Awesome CDN
- Config: `blog/_config.yml` has `filter_optimize.css.excludes: ['**/font-awesome.min.css']`

## Resources

- [Hexo Documentation](https://hexo.io/docs/)
- [NexT Theme Documentation](https://theme-next.js.org/)
- [GitHub Pages Guide](https://pages.github.com/)