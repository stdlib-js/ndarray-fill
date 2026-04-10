"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=t(function(m,a){"use strict";var n=require("@stdlib/assert-is-ndarray-like"),u=require("@stdlib/ndarray-base-assert-is-read-only"),o=require("@stdlib/ndarray-base-fill"),s=require("@stdlib/string-format");function l(r,e){if(!n(r))throw new TypeError(s("invalid argument. First argument must be an ndarray-like object. Value: `%s`.",r));if(u(r))throw new Error("invalid argument. Cannot write to a read-only array.");return o(r,e),r}a.exports=l});var v=i();module.exports=v;
/**
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
//# sourceMappingURL=index.js.map
