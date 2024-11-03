const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Clipzag video page URL
    const url = 'https://clipzag.com/watch?v=ipqkEttTe_w';
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Extract Google video URL from the page
    const googleVideoUrl = await page.evaluate(() => {
        const downloadLink = document.querySelector('.downloadbox a#360dl'); // Change selector if necessary
        return downloadLink ? downloadLink.href : null;
    });

    if (googleVideoUrl) {
        console.log("Google Video URL:", googleVideoUrl);
    } else {
        console.log("Google Video URL not found.");
    }

    await browser.close();
})();
