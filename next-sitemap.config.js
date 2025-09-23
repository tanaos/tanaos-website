import { Config } from './config';


/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: Config.WEBSITE_BASE_URL,
  generateRobotsTxt: true,
  outDir: 'out'
};