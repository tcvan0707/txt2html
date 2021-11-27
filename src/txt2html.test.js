const { txt2html } = require("txt2html");

describe("testing version", () => {
    test("Test txt2html function accepts the filepath", () => {
        expect(txt2html("test.txt")).toBeTruthy();
    });

    test("Test txt2html function accepts --version in argument", () => {
        expect(txt2html("test.md")).toBeDefined();
    });
});
