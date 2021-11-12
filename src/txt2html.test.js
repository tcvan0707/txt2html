const { txt2html } = require("./txt2html");

test("Test txt2html function accepts the filepath", () => {
    expect(txt2html("test.txt")).toBeTruthy();
});
