const { version } = require("./package.json");
const path = require("path");

module.exports = {
  title: "Portfolio Component Library",
  version,
  styleguideComponents: {
    Wrapper: path.join(
      __dirname,
      "src/components/Molecules/ThemeProvider/ThemeProvider"
    ),
  },
  assetsDir: "src/resources",
  sections: [
    {
      name: "Introduction",
      content: "docs/introduction.md",
    },
    {
      name: "Atoms",
      components: "src/components/Atoms/**/*.tsx",
      sectionDepth: 2,
    },
    {
      name: "Molecules",
      components: "src/components/Molecules/**/*.tsx",
      sectionDepth: 2,
    },
  ],
};
