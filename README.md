# write

A binary to write a file given stdin.

# Install

```sh
npm i @mh-cbon/write -g
```

# Usage

```sh
fwrite [output]
fwrite -o [output]
fwrite --output [output]
fwrite [output] --verbose
fwrite [output] -v
```

# programmatic usage

```js
var spawn = require('child_process').spawn;
var c = spawn('write', ['some.txt', '-v'], {stdio: 'pipe'});
// var c = spawn(process.argv[0], ['node_modules/.bin/fwrite', 'some.txt', '-v'], {stdio: 'pipe'});
c.stdout.pipe(process.stdout);
c.stderr.pipe(process.stderr);
c.stdin.end('tomate');
c.on('close', console.log.bind(console));
```

# Why ?

To elevate a process which writes a file.
