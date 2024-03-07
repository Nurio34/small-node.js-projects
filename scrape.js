const request = require("request");
const cheerio = require("cheerio");

request("https://www.kevinpowell.co/", (err, res, html) => {
    if (!err) {
        const $ = cheerio.load(html);

        const page = $("html");
        const body = $("body");
        const container = $(".container");

        // console.log(page.html());
        // console.log(page.text());
        // console.log(page.find("li").html());
        // console.log(page.children("head").html());
        // console.log(page.children("head").next().html());
        console.log(page.parent().html());
    }
});
