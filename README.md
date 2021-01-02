# Hexo Blog
hexo blog site for personal blog: https://github.com/BinarywoodB/BinarywoodB.github.io

## Prerequisite
1. Node.js v12

## Development

1. Create a Hexo Blog

    ```bash
    npm install hexo-cli -g
    hexo init blog
    cd blog
    npm install
    hexo server
    ```

1. Use nexT them
    
    ```bash
    cd blog/
    git clone https://github.com/theme-next/hexo-theme-next themes/next
    ```
    Update `_config.yml`:
    ```
    theme: next
    ```

1. New a new page
    ```
    $ hexo new [layout] <title>
    ```

## Travis CI to Deploy Blog to GitHub Page

## Reference
* [Hexo Blog Documentation](https://hexo.io/docs/)