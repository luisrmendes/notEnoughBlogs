const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addPassthroughCopy("assets");

  // Date filter
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-LL-dd") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  return {
    pathPrefix: "/notEnoughBlogs/",
    dir: {
      input: ".",
      includes: "_includes",
      output: "docs"
    }
  };
};
