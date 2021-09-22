import marked from "marked";
export function generateFromText(text, filename, cssHref) {
    let tags = splitInParagraphs(text);
    return insertInTemplate(tags, filename, cssHref);
}

export function generateFromMd(text, filename, cssHref){
    text = marked(text);
    let tags = boldText(text);
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
    return text
        .split(/(\r?\n){2,}/)
        .map((line) => line.trim())
        .filter((line) => line !== "")
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("\n");
}

function boldText(text){
    return text.replace(/^# (.*$)/gim, '<h1>$1</h1>');
}

