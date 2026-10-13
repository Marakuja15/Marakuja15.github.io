const fs = require("node:fs");

module.exports = function (eleventyConfig) {
  const configText = fs.readFileSync("_config.yml", "utf8");
  const site = {};

  for (const key of ["title", "description", "lang"]) {
    const match = configText.match(new RegExp(`^${key}:\\s*(.*)$`, "m"));
    if (match) site[key] = match[1].trim().replace(/^['"]|['"]$/g, "");
  }

  eleventyConfig.addGlobalData("site", site);
  eleventyConfig.addLiquidFilter("relative_url", (value) => value || "/");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      includes: "_includes",
      layouts: "_layouts",
      output: "_site",
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
