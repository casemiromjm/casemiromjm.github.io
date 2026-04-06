_default:
    @just -l

# Host local development server
serve *args:
    @bundle exec jekyll serve {{args}}