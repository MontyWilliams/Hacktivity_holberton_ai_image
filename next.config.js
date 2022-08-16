/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = withFonts({
  reactStrictMode: true,
  swcMinify: true,
  // enableSvg: true,
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.node = {
//         fs: 'empty',
//     }
//     return config
// }
});
