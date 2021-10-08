# txt2html

Static Site Generator that converts .txt and .md to .html

## Features

-   Support for custom stylesheets
-   Custom output directory
-   Support converting .md to .html
-   Support converting `---` to `<hr>` tag
-   Support converting `backtick` to `<code>..text..</code>`
-   Support's custom JSON configuration file

## Installation

To run this script you need to:

1. `git clone https://github.com/tcvan0707/txt2html.git && cd txt2html`
2. `npm install`

## Example

Running `npm start -- -i hello.txt` containing

```
Hello world!

This world is beautiful
```

will generate output file `dist/hello.html` containing

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>hello</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>
<p>Hello world!</p>
<p>This world is beautiful</p>
</body>
</html>
```

Running `npm start -- -c config.json` containing

```
{
    "input": "test/The-Red-Headed-League.txt",
    "output": "dist",
    "stylesheet": ""
}
```

will run the arguments inside the JSON file. 

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
