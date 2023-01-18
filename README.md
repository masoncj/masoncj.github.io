# CMason Website

This website is a mashup of a [Jekyll](https://jekyllrb.com/) blog post site and a [next.js](https://nextjs.org/) 
statically rendered site: the front page is an interactive next.js react component
that allows sorting and filtering, whereas the rest of the blog posts are
pure Jekyll static pages.

The jekyll content is output in the `public` directory, where the next.js
build process picks it up.  Then the combined site is output to `out`.

The headers and footers are a bit funky so that they can shared between
Jekyll and Next: standalone template outputs are generated to eg `header_include.html`
in public, and then read into the Next static props and used to set the inner HTML.

## Building Static Website

To run locally:

```
bundle install
bundle exec jekyll serve --host=0.0.0.0 --trace
```


To update version of Jekyll:

```
rm build Gemfile.lock
bundle install
```


## Developing Javascript

```
node --version
# v19.1.0
brew install pnpm
pnpm install
pnpm dev
open localhost:3000
```

## Building Javascript

```
pnpm build
```





