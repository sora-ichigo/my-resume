import fs from "fs";
import { load } from "cheerio";
import util from "util";

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function patchHtmlFile(
  filePath: string,
  metaTags: string
): Promise<string> {
  const data = await readFile(filePath, "utf8");

  const $ = load(data);
  $("head").append(metaTags);

  const updatedHtml = $.html();
  await writeFile(filePath, updatedHtml, "utf8");

  return updatedHtml;
}

export default patchHtmlFile;
