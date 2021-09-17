export function generateFromText(text, filename, cssHref) {
    let tags = splitInParagraphs(text);
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
        .split(/[\r\n]{2,}/)
        .filter((p) => p !== "")
        .map((p) => `<p>${p.trim()}</p>`)
        .join("\n");
}
