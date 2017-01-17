// @module: commonjs

// @Filename: file1.ts
import b1 = require('./b');
let x = b1.a;
import b2 = require('./b.json');
if (x) {
    let b = b2.b;
    x = (b1.b === b);
}

// @Filename: b.json
{
    "a": true,
    "b": "hello"
}