"use strict";var n=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}}};var i=n(function(y,a){"use strict";var u=require("@stdlib/assert-is-ndarray-like"),o=require("@stdlib/ndarray-base-assert-is-read-only"),s=require("@stdlib/ndarray-base-fill"),l=require("@stdlib/string-format");function v(r,e){if(!u(r))throw new TypeError(l("invalid argument. First argument must be an ndarray-like object. Value: `%s`.",r));if(o(r))throw new Error("invalid argument. Cannot write to a read-only array.");return s(r,e),r}a.exports=v});var d=i();module.exports=d;
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
