import { createSitemap } from "sitemaps";
import fs from "fs";

const routes = [
  {
    loc: "https://afl.ng",
  },
  {
    loc: "https://afl.ng/about-us",
  },
  { loc: "https://afl.ng/our-solutions" },
  {
    loc: "https://afl.ng/get-connected",
  },
  {
    loc: "https://afl.ng/partners",
  },
  {
    loc: "https://afl.ng/careers",
  },
];

const sitemap = createSitemap({
  urls: routes,
});

// Save the sitemap to a file
fs.writeFileSync("./public/sitemap.xml", sitemap.toString());

// Log a message indicating that the sitemap has been generated
console.log("Sitemap generated successfully.");
