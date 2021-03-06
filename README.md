# Hexo Blog Tutorial

Personal blog: https://github.com/BinarywoodB/BinarywoodB.github.io

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

1. Set information of your blog

    ```yaml    
    # _config.yml
    # Site
    title: Di Lin's Blog
    subtitle: ''
    description: 'Di Lin's personal blog'
    keywords:
    author: Di Lin
    language: en
    timezone: ''
    ```

1. Use nexT them

    - Fork next theme repo to your personal github so later you can make changes to the next config. Go to https://github.com/theme-next/hexo-theme-next and click fork to your personal github.

    - Set next as your hexo blog's submodule.
        ```bash
        git submodule add https://github.com/<your-github-name>/hexo-theme-next blog/themes/next
        ```
    - Update `blog/_config.yml`:
        ```
        theme: next
        ```

1. Overwrite nexT config
    
    Add `theme_config` in [_config.yml](./blog/_config.yml) to override config of theme. (e.g. themes/next/_config.yml)
    ```yaml
    theme_config:
    avatar:
        # avatar locates in ./blog/source/images/avatar.jpg
        url: /images/avatar.jpg
    sidebar:
        position: right
    ```
1. Local debug your blog

    ```bash
    # Generate static files
    $ hexo generate
    $ hexo g

    # Start hexo server, running at localhost:4000/
    $ hexo server
    $ hexo s
    ```

1. Create a new page / post / draft

    ```bash
    $ hexo new [layout] <title>
    $ hexo new page tags
    $ hexo new page about
    ```
    Layout:
    
    * page
    * post
    * draft

    After creating new pages, you can find new page folder with *index.html* under *source* folder. 
    
    Create the new page **before** you add content to that page, or you will get 404 when nevigate to the page. Since the new page command will create index.html for the page.

1. Create pages for your personal site

    - Create page
        ```bash
        $ hexo new page about
        $ hexo new page tags
        $ hexo new page CV
        $ hexo new page categories
        ```
    - Edit *blog/source/about/index.md* to add your about info.
    - Update *_config.yml*
        ```yaml
        theme: next
        theme_config:
        menu:
            home: / || fa fa-home
            about: /about/ || fa fa-user
            CV: /CV/ || fa fa-heartbeat
            tags: /tags/ || fa fa-tags
            categories: /categories/ || fa fa-th
            archives: /archives/ || fa fa-archive
        ```
    - Add "type" to *blog/source/tags/index.md* and *blog/source/categories/index.md*. So posts with "tags" or "categories" can be sorted into these two pages.
        ```md
        # *blog/source/tags/index.md*
        ---
        title: tags
        date: 2021-01-02 16:24:48
        type: "tags"
        ---

        # blog/source/categories/index.md
        ---
        title: categories
        date: 2021-01-02 19:56:18
        type: "categories"
        ---
        ```

1. Create a new post

    Place your default blogs as posts. To create new post:

    ```bash
    $ hexo new "post file name"
    $ hexo new -p toolkit/delete-useless-aad-app.md "Delete Useless AAD App"
    ```

1. Create a new draft

    ```bash
    # You need to point out path. Default layout is post.
    $ hexo new draft "newDraft"

    $ hexo publish [layout] <filename>
    # E.g. hexo publish
    ```

1. Local debug
    ```bash
    hexo g && hexo s
    ```

1. Deploy to GitHub Page
    - Under *blog/* directory, install git as deployer
        ```bash
        npm install hexo-deployer-git --save
        ```
    - Update *_config.yml* file
        ```yaml
        deploy:
            type: git
            repo: git@github.com:BinarywoodB/BinarywoodB.github.io.git
            branch: main
        ```
    - Deploy To GitHub Page
        ```bash
        hexo clean && hexo g && hexo d
        ```

## Known Issue
1. Next theme icon not showing when deploy to GitHub page [[REF: The icons are gone?](https://github.com/theme-next/hexo-filter-optimize/issues/2)]

    **Root Cause**: The next plugin fails to pack font-awesome to correct location. We can  

    - Install `hexo-filter-optimize`
        ```bash
        cd blog && npm install hexo-filter-optimize -D
        ```
    -  Activate the plugin in hexo's *_config.yml* like this:
        ```yaml        
        filter_optimize:
        enable: true
        # remove the surrounding comments in each of the bundled files
        remove_comments: false
        css:
            # minify all css files
            minify: true
            # bundle loaded css files into one
            bundle: true
            # use a script block to load css elements dynamically
            delivery: true
            # make specific css content inline into the html page
            #   - only support the full path
            #   - default is ['css/main.css']
            inlines:
            excludes:
            - '**/font-awesome.min.css'
        js:
            # minify all js files
            minify: true
            # bundle loaded js files into one
            bundle: true
            excludes:
        # set the priority of this plugin,
        # lower means it will be executed first, default of Hexo is 10
        priority: 12  
        ```
        Mind the following part to fix the filter issue.
        ```yaml
        css:
            ...
            excludes:
            - '**/font-awesome.min.css'
        ```

    - In *<next_root>/_config.myl*, use CDN to provide font-awesome.
        ```
        vendors:
        # Internal path prefix.
        _internal: lib

        # Internal version: 3.1.0
        # anime: //cdn.jsdelivr.net/npm/animejs@3.1.0/lib/anime.min.js
        anime:

        # Internal version: 5.13.0
        # fontawesome: //cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/css/all.min.css
        fontawesome: //cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css
        ```
    - Deploy To GitHub Page again
        ```bash
        hexo clean && hexo g && hexo d
        ```
1. Case sensitive issue of files / directories of `tags`/`categories`.

    Resolved: [hexo-deploy-case-sensitive](http://1mhz.me/2015/hexo-deploy-case-sensitive/) 
## Reference
* [Hexo Blog Documentation](https://hexo.io/docs/)