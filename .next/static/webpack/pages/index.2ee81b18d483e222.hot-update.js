"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/circle */ \"./components/circle.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-draggable */ \"../../../node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nlet data = [\n    {\n        id: 1,\n        x: 50,\n        y: 50,\n        radius: 15,\n        color: \"black\"\n    }\n];\nclass NodeLayout extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    render() {\n        renter(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_3___default()), {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"100vw\",\n                height: \"100vh\",\n                children: data.map((entry)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_circle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: entry.id,\n                        x: entry.x,\n                        y: entry.y,\n                        radius: entry.radius,\n                        color: entry.color\n                    }, void 0, false, {\n                        fileName: \"/Users/cyclo/Documents/Programming/concept-map/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 38\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/cyclo/Documents/Programming/concept-map/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/cyclo/Documents/Programming/concept-map/pages/index.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this));\n    }\n}\nfunction App() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\"\n    }, void 0, false, {\n        fileName: \"/Users/cyclo/Documents/Programming/concept-map/pages/index.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2U7QUFDRDtBQUV4QyxJQUFJRyxPQUFPO0lBQ1A7UUFBRUMsSUFBSTtRQUFHQyxHQUFHO1FBQUlDLEdBQUc7UUFBSUMsUUFBUTtRQUFJQyxPQUFPO0lBQVE7Q0FDckQ7QUFFRCxNQUFNQyxtQkFBbUJULHdEQUFlO0lBQ3BDVyxTQUFTO1FBQ0xDLHFCQUNJLDhEQUFDVix3REFBU0E7c0JBQ04sNEVBQUNXO2dCQUFJQyxPQUFNO2dCQUFRQyxRQUFPOzBCQUN6QlosS0FBS2EsR0FBRyxDQUFDLENBQUNDLHNCQUFVLDhEQUFDaEIsMERBQU1BO3dCQUFDRyxJQUFJYSxNQUFNYixFQUFFO3dCQUFFQyxHQUFHWSxNQUFNWixDQUFDO3dCQUFFQyxHQUFHVyxNQUFNWCxDQUFDO3dCQUFFQyxRQUFRVSxNQUFNVixNQUFNO3dCQUFFQyxPQUFPUyxNQUFNVCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0lBSXZIO0FBQ0o7QUFFZSxTQUFTVSxNQUFNO0lBQzFCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzs7Ozs7QUFJdkIsQ0FBQztLQU51QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2lyY2xlIGZyb20gXCIuLi9jb21wb25lbnRzL2NpcmNsZVwiXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcblxubGV0IGRhdGEgPSBbXG4gICAgeyBpZDogMSwgeDogNTAsIHk6IDUwLCByYWRpdXM6IDE1LCBjb2xvcjogXCJibGFja1wiIH1cbl07XG5cbmNsYXNzIE5vZGVMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmVudGVyKFxuICAgICAgICAgICAgPERyYWdnYWJsZT5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTAwdndcIiBoZWlnaHQ9XCIxMDB2aFwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoZW50cnkpID0+IDxDaXJjbGUgaWQ9e2VudHJ5LmlkfSB4PXtlbnRyeS54fSB5PXtlbnRyeS55fSByYWRpdXM9e2VudHJ5LnJhZGl1c30gY29sb3I9e2VudHJ5LmNvbG9yfSAvPil9XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2lyY2xlIiwiRHJhZ2dhYmxlIiwiZGF0YSIsImlkIiwieCIsInkiLCJyYWRpdXMiLCJjb2xvciIsIk5vZGVMYXlvdXQiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJyZW50ZXIiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsIm1hcCIsImVudHJ5IiwiQXBwIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});