#!/usr/bin/env node

var argv    = require('minimist')(process.argv.slice(2));
var target  = argv.o || argv.output || argv['_'] && argv['_'][0];
var verbose = argv.v || argv.verbose;

if (!target) {
  console.error('Wrong usage: missing target output');
  console.error('Usage:');
  console.error('fwrite [output]');
  console.error('fwrite [output] --verbose');
  console.error('fwrite [output] -v');
  process.exit(1)
}

var fs = require('fs');

process.stdin
.pipe(
  fs.createWriteStream(target)
  .on('error', function (err) {
    if (verbose) {
      console.error("%s: %s", err.message, err.code);
      console.error("%j", err);
    }
    process.exit(1)
  })
  .on('close', function () {
    process.exit(0);
  })
)

process.stdin.resume();
