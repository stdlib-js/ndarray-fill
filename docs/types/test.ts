/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import zeros = require( '@stdlib/ndarray-base-zeros' );
import fill = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	fill( zeros( 'float64', [ 2, 2 ], 'row-major' ), 10.0 ); // $ExpectType float64ndarray
	fill( zeros( 'complex128', [ 2, 2 ], 'row-major' ), 10.0 ); // $ExpectType complex128ndarray
	fill( zeros( 'complex128', [ 2, 2 ], 'row-major' ), { 're': 10.0, 'im': 10.0 } ); // $ExpectType complex128ndarray

	fill( zeros( 'generic', [ 2, 2 ], 'row-major' ), 10.0 ); // $ExpectType genericndarray<number>
	fill<number | string>( zeros( 'generic', [ 2, 2 ], 'row-major' ), 'beep' ); // $ExpectType genericndarray<string | number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray-like object...
{
	fill( '5', 10.0 ); // $ExpectError
	fill( 5, 10.0 ); // $ExpectError
	fill( true, 10.0 ); // $ExpectError
	fill( false, 10.0 ); // $ExpectError
	fill( null, 10.0 ); // $ExpectError
	fill( undefined, 10.0 ); // $ExpectError
	fill( {}, 10.0 ); // $ExpectError
	fill( [ 1 ], 10.0 ); // $ExpectError
	fill( ( x: number ): number => x, 10.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( 'float64', [ 2, 2 ], 'row-major' );

	fill(); // $ExpectError
	fill( x, 10.0, {} ); // $ExpectError
}
