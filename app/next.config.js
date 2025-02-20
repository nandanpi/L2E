module.exports = {
  reactStrictMode: true,
  env: {
    MoralisServerURL: process.env.MORALIS_SERVER_URL,
    MoralisAppID: process.env.MORALIS_APP_ID,
    ReCaptchaSecret: process.env.RECAPTCHA_SECRET_KEY,
    ReCaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
    GoogleTagId: process.env.GOOGLE_TAG_ID,
    AlchemyKey: process.env.ALCHEMY_PROD_KEY,
    AlchemyUrl: process.env.ALCHEMY_PROD_URL,
    AlchemyKey_Dev: process.env.ALCHEMY_DEV_KEY,
    AlchemyUrl_Dev: process.env.ALCHEMY_DEV_URL
  },
  images: {
    domains: ["img.youtube.com"]
  }
}
