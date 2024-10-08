/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var exponential = require( '@stdlib/random-base-exponential' );
var arcsine = require( '@stdlib/random-base-arcsine' );
var randn = require( '@stdlib/random-base-improved-ziggurat' );
var ns = require( './../lib' );

// Create a binary PRNG array:
var dtypes = [ 'float64', 'float32', 'generic' ];
var defaultDType = 'float64';

var rand = new ns.binary( arcsine, dtypes, defaultDType );
var x = rand.generate( 10, 2.0, 5.0 );
console.log( x );
// e.g., => <Float64Array>[ ~3.65, ~4.34, ~3.52, ~4.68, ~2.62, ... ]

// Create a unary PRNG array:
rand = new ns.unary( exponential, dtypes, defaultDType );
x = rand.generate( 10, 0.5 );
console.log( x );
// e.g., => <Float64Array>[ ~0.22, ~2.89, ~0.69, ~2.48, ~0.82, ... ]

// Create a nullary PRNG array:
rand = new ns.nullary( randn, dtypes, defaultDType );
x = rand.generate( 10 );
console.log( x );
// e.g., => <Float64Array>[ ~-0.22, ~1.89, ~-0.69, ~0.48, ~-0.82, ... ]
