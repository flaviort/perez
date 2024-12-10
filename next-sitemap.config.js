/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.WEBSITE_URL || 'https://drericaperez.com',
    generateRobotsTxt: true,
}