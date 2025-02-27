// next-sitemap.js
module.exports = {
    siteUrl: 'https://www.shapedservices.com',  // Replace with your site's URL
    generateRobotsTxt: true,              // Generate robots.txt file
    sitemapSize: 7000,                    // Maximum number of URLs per sitemap
    outDir: './public',                   // Output directory (it will generate sitemap in the /public folder)
    changefreq: 'weekly',                 // Frequency of content updates
    priority: 0.7,                        // Default priority of pages
  };
  