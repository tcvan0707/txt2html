# txt2html
Static Site Generator that converts .txt to .html

## Features
* Support for custom stylesheets
* Custom output directory

## Example
Input file `hello.txt` containing
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

## Usage
```
Usage: index.js [options]

Options:
  -h, --help        Show help message                                  [boolean]
  -v, --version     Show current version                               [boolean]
  -i, --input       Input txt file / directory with txt files         [required]
  -o, --output      Path to folder with generated files        [default: "dist"]
  -s, --stylesheet  Adds custom CSS to generated html
```
