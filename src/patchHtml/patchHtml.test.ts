import fs from "fs";
import cheerio from "cheerio";
import util from "util";
import patchHtmlFile from "./patchHtml";

const writeFile = util.promisify(fs.writeFile);

test("patchHtmlFile should add the correct meta tags", async () => {
  const testFilePath = "./test.html";
  const initialHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Test Page</title>
    </head>
    <body>
      <h1>Welcome to the test page</h1>
    </body>
    </html>
  `;
  await writeFile(testFilePath, initialHtml, "utf8");

  const updatedHtml = await patchHtmlFile(testFilePath);

  const $ = cheerio.load(updatedHtml);
  expect($('meta[charset="UTF-8"]').length).toBe(1);
  expect($('meta[name="description"]').attr("content")).toBe(
    "Free Web tutorials"
  );
  expect($('meta[name="keywords"]').attr("content")).toBe(
    "HTML, CSS, JavaScript"
  );
  expect($('meta[name="author"]').attr("content")).toBe("John Doe");
  expect($('meta[name="viewport"]').attr("content")).toBe(
    "width=device-width, initial-scale=1.0"
  );

  fs.unlinkSync(testFilePath);
});
