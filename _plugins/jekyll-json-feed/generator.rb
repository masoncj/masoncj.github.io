module JekyllJsonFeed
  class Generator < Jekyll::Generator
    safe true
    priority :lowest

    # Main plugin action, called by Jekyll-core
    def generate(site)
      @site = site
      return if file_exists?(feed_path)
      @site.pages << content_for_file(feed_path, feed_source_path)
    end

    private

    # Path to feed from config, or feed.json for default
    def feed_path
      if @site.config["json_feed"] && @site.config["json_feed"]["path"]
        @site.config["json_feed"]["path"]
      else
        "feed.json"
      end
    end

    # Path to feed.json template file
    def feed_source_path
      File.expand_path "./feed.json", File.dirname(__FILE__)
    end

    # Checks if a file already exists in the site source
    def file_exists?(file_path)
      if @site.respond_to?(:in_source_dir)
        File.exist? @site.in_source_dir(file_path)
      else
        File.exist? Jekyll.sanitized_path(@site.source, file_path)
      end
    end

    # Generates contents for a file
    def content_for_file(file_path, file_source_path)
      file = PageWithoutAFile.new(@site, File.dirname(__FILE__), "", file_path)
      file.content = File.read(file_source_path)
      file.data["layout"] = nil
      file.data["sitemap"] = false
      file.output
      file
    end
  end
end
