const EXTERNAL_DATA_URL = "https://www.vedantlohbare.com/notes";
const API_DATA_URL = "https://www.vedantlohbare.com/api/get-notes";

function formatDateForSitemap(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function generateSiteMap(posts) {
  const manualURLs = [
    "https://www.vedantlohbare.com",
    "https://www.vedantlohbare.com/side-projects",
    "https://www.vedantlohbare.com/proof-of-work",
  ];
  const postURLs = posts.map((slug) => `${EXTERNAL_DATA_URL}/${slug}`);
  const allURLs = [...manualURLs, ...postURLs];
  const today = new Date();

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allURLs
      .map((url) => {
        return `
     <url>
       <loc>${url}</loc>
       <lastmod>${formatDateForSitemap(today)}</lastmod>
     </url>
   `;
      })
      .join("")}
  </urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(API_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;