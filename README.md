# DailyMail Article Scraper

A simple web scraper built with Node.js and Puppeteer. The script extracts the titles and URLs of articles from the index page of dailymail.co.uk and saves the data to a CSV file. 

## Installation
Install Node.js - https://nodejs.org/en

**Libraries required**
npm install puppeteer csv-writer


## How to Use Guide for Windows PowerShell:​

    Open PowerShell: Use the search bar to find PowerShell. Right-click on the PowerShell icon and select 'Run as administrator'.
    Install the Dependencies: Run the command npm install puppeteer csv-writer. This will install the Puppeteer and csv-writer packages that are dependencies for the script.
    Navigate to the Folder: Use the cd command to navigate to the directory containing your script.
    Example: cd C:\Users\YourUserName\DailyMailScraper
    Run the Script: Now, you can execute the script using Node.js by typing node index.js and then pressing Enter.

## How to Use Guide for macOS:​

    Open Terminal: You can open Terminal by pressing Cmd + Space, typing 'Terminal', and then hitting Enter.
    Navigate to the Folder: Use the cd command to navigate to the directory containing your script.
    Example: cd /Users/YourUserName/DailyMailScraper
    Install the Dependencies: Run the command npm install puppeteer csv-writer to install the Puppeteer and csv-writer packages.
    Run the Script: Finally, to execute the script, type node index.js and then hit Enter.

## Output
This will generate a CSV file named `news-YYYY-MM-DD-HH-MM.csv` (where `YYYY-MM-DD` is the current date and `HH-MM` is the current time) in the project directory. The CSV file contains the titles, URLs, and the date of extraction for the articles.

## License

This project is licensed under the terms of the MIT license.

Created by Chris Lever SEO (Technical SEO Consultant): https://chrisleverseo.com

This script could be useful for content marketing teams. You can schedule the script to run daily to extract the news headlines and monitor trends.
