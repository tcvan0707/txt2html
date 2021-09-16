export function generateFromText(text) {
    let tags = splitInParagraphs(text);
    return insertInTemplate(tags);
}

function insertInTemplate(tags) {
    return `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Filename</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
${tags}
</body>
</html>
`;
}

function splitInParagraphs(text) {
    return text
        .split(/\n{2,}/)
        .filter((p) => p !== "")
        .map((p) => `<p>${p.trim()}</p>`)
        .join("\n");
}
