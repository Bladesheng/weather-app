export const Icons = (() => {
  const _iconsPaths: any = {};

  // Makes sure webpack loads all icons to "dist/assets/".
  // Also saves the generated icon's paths to "_icons" object.
  const initImportAll = (() => {
    const images = require.context("../weatherIcons/", false, /\.svg$/);

    images.keys().forEach((filename) => {
      // slice off the extension and the "./" part
      const trimmedFilename = filename.substring(2).slice(0, -4);
      _iconsPaths[trimmedFilename] = images(filename);
    });
  })();

  // given name of icon, returns path to it
  function get(iconName: string) {
    return _iconsPaths[iconName];
  }

  return {
    get
  };
})();
