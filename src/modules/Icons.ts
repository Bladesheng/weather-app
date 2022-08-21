export const Icons = (() => {
  // modules for loading icons with webpack and resolving paths to them
  const _iconsPaths: any = {};

  // Makes sure webpack loads all icons to "dist/assets/".
  // Also saves the generated icon's paths to "_icons" object - doesn't actually work in prod
  const _initImportAll = (() => {
    const images = require.context("../weatherIcons/", false, /\.svg$/);
    const iconsGeneral = require.context("../icons/", false, /\.svg$/);

    images.keys().forEach((filename) => {
      // slice off the extension and the "./" part
      const trimmedFilename = filename.substring(2).slice(0, -4);
      _iconsPaths[trimmedFilename] = images(filename);
    });
  })();

  // given name of icon, returns path to it
  function get(iconName: string) {
    return `./assets/${iconName}.svg`;
  }

  return {
    get
  };
})();
