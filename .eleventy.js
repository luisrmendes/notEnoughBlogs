const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md").sort((a, b) => b.date - a.date);
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
      includes: "src/_includes",
      output: "_site"
    }
  };
};
