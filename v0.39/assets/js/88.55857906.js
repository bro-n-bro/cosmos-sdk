(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{752:function(e,t,s){"use strict";s.r(t);var a=s(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"module-genesis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-genesis"}},[e._v("#")]),e._v(" Module Genesis")]),e._v(" "),s("h2",{attrs:{hide:"",id:"pre-requisite-readings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),s("ul",[s("li",{attrs:{prereq:""}},[s("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[e._v("Module Manager")])],1),e._v(" "),s("li",{attrs:{prereq:""}},[s("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[e._v("Keepers")])],1)]),e._v(" "),s("h2",{attrs:{id:"type-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-definition"}},[e._v("#")]),e._v(" Type Definition")]),e._v(" "),s("p",[e._v("The subset of the genesis state defined from a given module is generally defined in a "),s("code",[e._v("./internal/types/genesis.go")]),e._v(" file, along with the "),s("code",[e._v("DefaultGenesis")]),e._v(" and "),s("code",[e._v("ValidateGenesis")]),e._v(" methods. The struct defining the module's subset of the genesis state is usually called "),s("code",[e._v("GenesisState")]),e._v(" and contains all the module-related values that need to be initialized during the genesis process.")]),e._v(" "),s("p",[e._v("See an example of "),s("code",[e._v("GenesisState")]),e._v(" type definition from the nameservice tutorial")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBHZW5lc2lzU3RhdGUgc3RydWN0IHsKCVdob2lzUmVjb3JkcyBbXVdob2lzIGBqc29uOiZxdW90O3dob2lzX3JlY29yZHMmcXVvdDtgCn0="}})],1),e._v(" "),s("p",[e._v("Next we present the main genesis-related methods that need to be implemented by module developers in order for their module to be used in Cosmos SDK applications.")]),e._v(" "),s("h3",{attrs:{id:"defaultgenesis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultgenesis"}},[e._v("#")]),e._v(" "),s("code",[e._v("DefaultGenesis")])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("DefaultGenesis()")]),e._v(" method is a simple method that calls the constructor function for "),s("code",[e._v("GenesisState")]),e._v(" with the default value for each parameter. See an example from the "),s("code",[e._v("nameservice")]),e._v(" module:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBEZWZhdWx0R2VuZXNpc1N0YXRlKCkgR2VuZXNpc1N0YXRlIHsKCXJldHVybiBHZW5lc2lzU3RhdGV7CgkJV2hvaXNSZWNvcmRzOiBbXVdob2lze30sCgl9Cn0="}})],1),e._v(" "),s("h3",{attrs:{id:"validategenesis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validategenesis"}},[e._v("#")]),e._v(" "),s("code",[e._v("ValidateGenesis")])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("ValidateGenesis(genesisState GenesisState)")]),e._v(" method is called to verify that the provided "),s("code",[e._v("genesisState")]),e._v(" is correct. It should perform validity checks on each of the parameter listed in "),s("code",[e._v("GenesisState")]),e._v(". See an example from the "),s("code",[e._v("nameservice")]),e._v(" module:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBWYWxpZGF0ZUdlbmVzaXMoZGF0YSBHZW5lc2lzU3RhdGUpIGVycm9yIHsKCWZvciBfLCByZWNvcmQgOj0gcmFuZ2UgZGF0YS5XaG9pc1JlY29yZHMgewoJCWlmIHJlY29yZC5Pd25lciA9PSBuaWwgewoJCQlyZXR1cm4gZm10LkVycm9yZigmcXVvdDtpbnZhbGlkIFdob2lzUmVjb3JkOiBWYWx1ZTogJXMuIEVycm9yOiBNaXNzaW5nIE93bmVyJnF1b3Q7LCByZWNvcmQuVmFsdWUpCgkJfQoJCWlmIHJlY29yZC5WYWx1ZSA9PSAmcXVvdDsmcXVvdDsgewoJCQlyZXR1cm4gZm10LkVycm9yZigmcXVvdDtpbnZhbGlkIFdob2lzUmVjb3JkOiBPd25lcjogJXMuIEVycm9yOiBNaXNzaW5nIFZhbHVlJnF1b3Q7LCByZWNvcmQuT3duZXIpCgkJfQoJCWlmIHJlY29yZC5QcmljZSA9PSBuaWwgewoJCQlyZXR1cm4gZm10LkVycm9yZigmcXVvdDtpbnZhbGlkIFdob2lzUmVjb3JkOiBWYWx1ZTogJXMuIEVycm9yOiBNaXNzaW5nIFByaWNlJnF1b3Q7LCByZWNvcmQuVmFsdWUpCgkJfQoJfQoJcmV0dXJuIG5pbAp9"}})],1),e._v(" "),s("h2",{attrs:{id:"other-genesis-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-genesis-methods"}},[e._v("#")]),e._v(" Other Genesis Methods")]),e._v(" "),s("p",[e._v("Other than the methods related directly to "),s("code",[e._v("GenesisState")]),e._v(", module developers are expected to implement two other methods as part of the "),s("RouterLink",{attrs:{to:"/building-modules/module-manager.html#appmodulegenesis"}},[s("code",[e._v("AppModuleGenesis")]),e._v(" interface")]),e._v(" (only if the module needs to initialize a subset of state in genesis). These methods are "),s("a",{attrs:{href:"#initgenesis"}},[s("code",[e._v("InitGenesis")])]),e._v(" and "),s("a",{attrs:{href:"#exportgenesis"}},[s("code",[e._v("ExportGenesis")])]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"initgenesis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initgenesis"}},[e._v("#")]),e._v(" "),s("code",[e._v("InitGenesis")])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("InitGenesis")]),e._v(" method is executed during "),s("RouterLink",{attrs:{to:"/core/baseapp.html#initchain"}},[s("code",[e._v("InitChain")])]),e._v(" when the application is first started. Given a "),s("code",[e._v("GenesisState")]),e._v(", it initializes the subset of the state managed by the module by using the module's "),s("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[s("code",[e._v("keeper")])]),e._v(" setter function on each parameter within the "),s("code",[e._v("GenesisState")]),e._v(".")],1),e._v(" "),s("p",[e._v("The "),s("RouterLink",{attrs:{to:"/building-modules/module-manager.html#manager"}},[e._v("module manager")]),e._v(" of the application is responsible for calling the "),s("code",[e._v("InitGenesis")]),e._v(" method of each of the application's modules, in order. This order is set by the application developer via the manager's "),s("code",[e._v("SetOrderGenesisMethod")]),e._v(", which is called in the "),s("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("application's constructor function")])],1),e._v(" "),s("p",[e._v("See an example of "),s("code",[e._v("InitGenesis")]),e._v(" from the nameservice tutorial")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBJbml0R2VuZXNpcyhjdHggc2RrLkNvbnRleHQsIGtlZXBlciBLZWVwZXIsIGRhdGEgR2VuZXNpc1N0YXRlKSBbXWFiY2kuVmFsaWRhdG9yVXBkYXRlIHsKCWZvciBfLCByZWNvcmQgOj0gcmFuZ2UgZGF0YS5XaG9pc1JlY29yZHMgewoJCWtlZXBlci5TZXRXaG9pcyhjdHgsIHJlY29yZC5WYWx1ZSwgcmVjb3JkKQoJfQoJcmV0dXJuIFtdYWJjaS5WYWxpZGF0b3JVcGRhdGV7fQp9"}})],1),e._v(" "),s("h3",{attrs:{id:"exportgenesis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exportgenesis"}},[e._v("#")]),e._v(" "),s("code",[e._v("ExportGenesis")])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("ExportGenesis")]),e._v(" method is executed whenever an export of the state is made. It takes the latest known version of the subset of the state managed by the module and creates a new "),s("code",[e._v("GenesisState")]),e._v(" out of it. This is mainly used when the chain needs to be upgraded via a hard fork.")]),e._v(" "),s("p",[e._v("See an example of "),s("code",[e._v("ExportGenesis")]),e._v(" from the nameservice tutorial.")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBFeHBvcnRHZW5lc2lzKGN0eCBzZGsuQ29udGV4dCwgayBLZWVwZXIpIEdlbmVzaXNTdGF0ZSB7Cgl2YXIgcmVjb3JkcyBbXVdob2lzCglpdGVyYXRvciA6PSBrLkdldE5hbWVzSXRlcmF0b3IoY3R4KQoJZm9yIDsgaXRlcmF0b3IuVmFsaWQoKTsgaXRlcmF0b3IuTmV4dCgpIHsKCgkJbmFtZSA6PSBzdHJpbmcoaXRlcmF0b3IuS2V5KCkpCgkJd2hvaXMgOj0gay5HZXRXaG9pcyhjdHgsIG5hbWUpCgkJcmVjb3JkcyA9IGFwcGVuZChyZWNvcmRzLCB3aG9pcykKCgl9CglyZXR1cm4gR2VuZXNpc1N0YXRle1dob2lzUmVjb3JkczogcmVjb3Jkc30KfQ=="}})],1),e._v(" "),s("h2",{attrs:{hide:"",id:"next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),s("p",{attrs:{hide:""}},[e._v("Learn about "),s("RouterLink",{attrs:{to:"/building-modules/genesis.html#module-interfaces.html"}},[e._v("modules interfaces")])],1)])}),[],!1,null,null,null);t.default=i.exports}}]);