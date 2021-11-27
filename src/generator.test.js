const { generateFromText } = require("./generator");

test("Generate from text file", () => {
    expect(generateFromText("text", "fileName", "css")).toBeTruthy();
});

test("Generate from Markdown file", () => {
    expect(generateFromText("text", "fileName", "css")).toBeTruthy();
});
