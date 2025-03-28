<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Tools

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Pseudorandom number generator (PRNG) array creation function tools.

<section class="installation">

## Installation

```bash
npm install @stdlib/random-array-tools
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/random-array-tools' );
```

#### ns

Namespace containing array creation pseudorandom number generator (PRNG) function tools.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`binaryFactory( prng, dtypes, dtype )`][@stdlib/random/array/tools/binary-factory]</span><span class="delimiter">: </span><span class="description">create a factory function for generating pseudorandom values drawn from a binary PRNG.</span>
-   <span class="signature">[`binary( prng, dtypes, dtype )`][@stdlib/random/array/tools/binary]</span><span class="delimiter">: </span><span class="description">constructor for creating arrays filled with pseudorandom values drawn from a binary PRNG.</span>
-   <span class="signature">[`nullary( prng, dtypes, dtype )`][@stdlib/random/array/tools/nullary]</span><span class="delimiter">: </span><span class="description">constructor for creating arrays filled with pseudorandom values drawn from a nullary PRNG.</span>
-   <span class="signature">[`ternaryFactory( prng, dtypes, dtype )`][@stdlib/random/array/tools/ternary-factory]</span><span class="delimiter">: </span><span class="description">create a factory function for generating pseudorandom values drawn from a ternary PRNG.</span>
-   <span class="signature">[`ternary( prng, dtypes, dtype )`][@stdlib/random/array/tools/ternary]</span><span class="delimiter">: </span><span class="description">constructor for creating arrays filled with pseudorandom values drawn from a ternary PRNG.</span>
-   <span class="signature">[`unaryFactory( prng, dtypes, dtype )`][@stdlib/random/array/tools/unary-factory]</span><span class="delimiter">: </span><span class="description">create a factory function for generating pseudorandom values drawn from a unary PRNG.</span>
-   <span class="signature">[`unary( prng, dtypes, dtype )`][@stdlib/random/array/tools/unary]</span><span class="delimiter">: </span><span class="description">constructor for creating arrays filled with pseudorandom values drawn from a unary PRNG.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var exponential = require( '@stdlib/random-base-exponential' );
var arcsine = require( '@stdlib/random-base-arcsine' );
var randn = require( '@stdlib/random-base-improved-ziggurat' );
var ns = require( '@stdlib/random-array-tools' );

// Create a binary PRNG array:
var dtypes = [ 'float64', 'float32', 'generic' ];
var defaultDType = 'float64';

var rand = new ns.binary( arcsine, dtypes, defaultDType );
var x = rand.generate( 10, 2.0, 5.0 );
// e.g., returns <Float64Array>[ ~3.65, ~4.34, ~3.52, ~4.68, ~2.62, ... ]

// Create a unary PRNG array:
rand = new ns.unary( exponential, dtypes, defaultDType );
x = rand.generate( 10, 0.5 );
// e.g., returns <Float64Array>[ ~0.22, ~2.89, ~0.69, ~2.48, ~0.82, ... ]

// Create a nullary PRNG array:
rand = new ns.nullary( randn, dtypes, defaultDType );
x = rand.generate( 10 );
// e.g., returns <Float64Array>[ ~-0.22, ~1.89, ~-0.69, ~0.48, ~-0.82, ... ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-array-tools.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-array-tools

[test-image]: https://github.com/stdlib-js/random-array-tools/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-array-tools/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-array-tools/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-array-tools?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-array-tools.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-array-tools/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-array-tools/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-array-tools/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-array-tools/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-array-tools/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-array-tools/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-array-tools/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-array-tools/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-array-tools/main/LICENSE

<!-- <toc-links> -->

[@stdlib/random/array/tools/binary-factory]: https://github.com/stdlib-js/random-array-tools-binary-factory

[@stdlib/random/array/tools/binary]: https://github.com/stdlib-js/random-array-tools-binary

[@stdlib/random/array/tools/nullary]: https://github.com/stdlib-js/random-array-tools-nullary

[@stdlib/random/array/tools/ternary-factory]: https://github.com/stdlib-js/random-array-tools-ternary-factory

[@stdlib/random/array/tools/ternary]: https://github.com/stdlib-js/random-array-tools-ternary

[@stdlib/random/array/tools/unary-factory]: https://github.com/stdlib-js/random-array-tools-unary-factory

[@stdlib/random/array/tools/unary]: https://github.com/stdlib-js/random-array-tools-unary

<!-- </toc-links> -->

</section>

<!-- /.links -->
