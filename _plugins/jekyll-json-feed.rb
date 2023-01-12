# frozen_string_literal: true

require "jekyll"
require "fileutils"
require_relative "jekyll-json-feed/generator"

module JekyllJsonFeed
  autoload :MetaTag,          "jekyll-json-feed/meta-tag"
  autoload :PageWithoutAFile, "jekyll-json-feed/page-without-a-file.rb"
end

Liquid::Template.register_tag "json_feed_meta", JekyllJsonFeed::MetaTag
