## Installation

To run this script you need to:

1. `git clone https://github.com/tcvan0707/txt2html.git`
2. Change the current working directory to txt2html.
3. `npm install`

## Prettier Script

npm
`npx prettier --write .`

yarn
`yarn prettier --write .`

## ESlint Script

`npm run eslint`

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
