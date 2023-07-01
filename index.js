const puppeteer = require('puppeteer');
const fs = require('fs');
const json2csv = require("json2csv").parse;

async function scrapeNews() {
    // Launch the browser and open a new page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to dailymail.co.uk
    await page.goto('https://www.dailymail.co.uk/home/index.html');

    // Scrape the news titles, urls, and add current date
    const news = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('.linkro-darkred a'));
        const currentDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD format
        return anchors.map(anchor => {
            const title = anchor.innerText.trim();
            const url = anchor.href;
            return { title, url, date: currentDate };
        });
    });

    // Close the browser
    await browser.close();

    // Parse to CSV
    const csv = json2csv(news, { fields: ["title", "url", "date"] });

    // Get the current date and time in a format suitable for a filename
    const now = new Date();
    const date = now.toISOString().slice(0, 10); // YYYY-MM-DD format
    const time = now.toTimeString().slice(0, 5).replace(':', '-'); // HH-MM format

    // Write data to CSV file
    fs.writeFileSync(`dailymail-news-${date}-${time}.csv`, csv);

    return news;
}

scrapeNews()
    .then(news => console.log('CSV file successfully written.'))
    .catch(console.error);
