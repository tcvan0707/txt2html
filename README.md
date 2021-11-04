# txt2html

Static Site Generator that converts .txt and .md to .html

## Features

-   Support for custom stylesheets
-   Custom output directory
-   Support converting .md to .html
-   Support converting `---` to `<hr>` tag
-   Support converting `backtick` to `<code>..text..</code>`
-   Support's custom JSON configuration file

## Usage

```
Usage: txt2html.js [options]

Options:
  -h, --help        Show help message                                  [boolean]
  -v, --version     Show current version                               [boolean]
  -i, --input       Input txt file / directory with txt files         [required]
  -o, --output      Path to folder with generated files        [default: "dist"]
  -s, --stylesheet  Adds custom CSS to generated html
  -c, --config      Allows custom JSON for inputs
```
