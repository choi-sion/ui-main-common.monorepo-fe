import { dirname, join } from "path";
module.exports = {
  stories: ['../packages/**/*.stories.{js,ts,tsx}', '../packages/**/*.stories.mdx'],
  addons: [
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-essentials"),
    {
    name: '@storybook/addon-styling',
    options: {
      sass: {
        // Require your Sass preprocessor here
        implementation: require('sass')
      }
    }
  }],
  docs: {
    autodocs: true
  },
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  }
};
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
