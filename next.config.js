/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compilerOptions: {
    baseUrl: "./src",
    // paths: {
    //   "styles/*": ["styles/*"],
    // },
  },
  images: {
    domains: ["192.168.1.13", "stratoz.stagingcs.com"],
  },
};
