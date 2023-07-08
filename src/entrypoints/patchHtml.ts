import patchHtmlFile from "../patchHtml/patchHtml";

const filePath = "public/index.html";
const metaTags = `
<meta property="og:title" content="Sora Ichigo - Web Developer" />
<meta property="og:description" content="Sora Ichigo is a Web Developer based in Tokyo, Kanto, JP. Currently working as a Software Engineer at Wantedly, Inc. Skilled in Frontend and Backend Development, Infrastructure, and Knowledge in various fields." />
<meta property="og:url" content="https://igsr5.github.io/my-resume/" />
<meta property="og:image" content="https://res.cloudinary.com/drb9hgnv3/image/upload/v1688789772/Screen_Shot_2023-07-08_at_13.15.28_nixbnw.png" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="ja_JP" />
`;

(async () => {
  await patchHtmlFile(filePath, metaTags);
})();
