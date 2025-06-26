module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets"); // copy static assets

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "docs"  // <-- output folder for GitHub Pages
    },
    markdownTemplateEngine: "njk"
  };
};
