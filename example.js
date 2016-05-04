var spawn = require('child_process').spawn;

var c = spawn(process.argv[0], ['index.js', '/some.txt', '-v'], {stdio: 'pipe'});
c.stdout.pipe(process.stdout)
c.stderr.pipe(process.stderr)
c.stdin.end('tomate')
c.on('close', console.log.bind(console))
