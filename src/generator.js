import { markdown } from "markdown-it";

export function generateFromText(text, filename, cssHref) {
    let tags = splitInParagraphs(text);
    return insertInTemplate(tags, filename, cssHref);
}

export function generateFromMd(text, filename, cssHref) {
    let tags = convertHeading1(text);
    return insertInTemplate(tags, filename, cssHref);
}

function insertInTemplate(tags, filename, cssHref) {
    return `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${filename}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${cssHref !== undefined ? `<link rel="stylesheet" href="${cssHref}">` : ""}
</head>
<body>
${tags}
</body>
</html>
`;
}

function splitInParagraphs(text) {
    text = text
        .split(/(\r?\n){2,}/)
        .map((line) => line.trim())
        .filter((line) => line !== "")
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("\n")
        .replace(/\`([^`].*)\`/gim, "<code>$1</code>")
        .replace(/-{3,}/gim, "<hr>");
    return text;
}

function convertHeading1(text) {
    var text = markdown.render(text);
    return text;
}
