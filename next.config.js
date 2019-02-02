const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
      ? require('next/constants')
      : require('next-server/constants');

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_PRODUCTION_SERVER) {
//     // Config used to run in production.
//     return {
//       target: 'serverless'
//     };
//   }

//   // ✅ Put the require call here.
//   const withCSS = require('@zeit/next-sass');

//   return withCSS();
// };

const withCSS = require('@zeit/next-sass');

module.exports = withCSS({
  target: 'serverless'
});
