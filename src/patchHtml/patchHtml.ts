import fs from "fs";
import { load } from "cheerio";
import util from "util";

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const metaTags = `
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
`;

async function patchHtmlFile(filePath: string): Promise<string> {
  const data = await readFile(filePath, "utf8");

  const $ = load(data);
  $("head").append(metaTags);

  const updatedHtml = $.html();
  await writeFile(filePath, updatedHtml, "utf8");

  return updatedHtml;
}

export default patchHtmlFile;
