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

/***/ "./components/circle.js":
/*!******************************!*\
  !*** ./components/circle.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Circle; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-draggable */ \"../../../node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Circle extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    // function to send updated location to database\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_2___default()), {\n            onStart: this.handleStart,\n            onStop: this.handleStop,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                cx: this.props.x,\n                cy: this.props.y,\n                r: this.props.radius,\n                fill: this.props.color\n            }, void 0, false, {\n                fileName: \"/Users/cyclo/Documents/Programming/concept-map/components/circle.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/cyclo/Documents/Programming/concept-map/components/circle.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(props){\n        super(props);\n        // function to update location\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"handleStart\", (event)=>{\n            console.log(event.pageX);\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"handleStop\", (event)=>{\n            let coordinates = [\n                event.clientX - this.state.startX,\n                event.clientY - this.state.startY\n            ];\n            this.setState({\n                coordinates: [\n                    coordinates[0],\n                    coordinates[1]\n                ]\n            });\n        });\n        this.state = {\n            id: this.props.id,\n            startCoords: [],\n            endCoords: []\n        };\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NpcmNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNjO0FBRXpCLE1BQU1FLGVBQWVGLHdEQUFlO0lBc0IvQyxnREFBZ0Q7SUFHaERJLFNBQVM7UUFDTCxxQkFDSSw4REFBQ0gsd0RBQVNBO1lBQUNJLFNBQVMsSUFBSSxDQUFDQyxXQUFXO1lBQUVDLFFBQVEsSUFBSSxDQUFDQyxVQUFVO3NCQUN6RCw0RUFBQ0M7Z0JBQU9DLElBQUksSUFBSSxDQUFDQyxLQUFLLENBQUNDLENBQUM7Z0JBQUVDLElBQUksSUFBSSxDQUFDRixLQUFLLENBQUNHLENBQUM7Z0JBQUVDLEdBQUcsSUFBSSxDQUFDSixLQUFLLENBQUNLLE1BQU07Z0JBQUVDLE1BQU0sSUFBSSxDQUFDTixLQUFLLENBQUNPLEtBQUs7Ozs7Ozs7Ozs7O0lBR3BHO0lBOUJBQyxZQUFZUixLQUFLLENBQUU7UUFDZixLQUFLLENBQUNBO1FBUVYsOEJBQThCO1FBQzlCTCxnRkFBQUEsT0FBQUEsZUFBYyxDQUFDYyxRQUFVO1lBQ3JCQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLEtBQUs7UUFDM0I7UUFFQWYsZ0ZBQUFBLE9BQUFBLGNBQWEsQ0FBQ1ksUUFBVTtZQUNwQixJQUFJSSxjQUFjO2dCQUFDSixNQUFNSyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU07Z0JBQUVQLE1BQU1RLE9BQU8sR0FBRyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csTUFBTTthQUFDO1lBQ3hGLElBQUksQ0FBQ0MsUUFBUSxDQUFDO2dCQUNWTixhQUFhO29CQUFDQSxXQUFXLENBQUMsRUFBRTtvQkFBRUEsV0FBVyxDQUFDLEVBQUU7aUJBQUM7WUFDakQ7UUFDSjtRQWpCSSxJQUFJLENBQUNFLEtBQUssR0FBRztZQUNUSyxJQUFJLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ29CLEVBQUU7WUFDakJDLGFBQWEsRUFBRTtZQUNmQyxXQUFXLEVBQUU7UUFDakI7SUFDSjtBQXdCSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2lyY2xlLmpzPzZjNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAncmVhY3QtZHJhZ2dhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICAgICAgc3RhcnRDb29yZHM6IFtdLFxuICAgICAgICAgICAgZW5kQ29vcmRzOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gdG8gdXBkYXRlIGxvY2F0aW9uXG4gICAgaGFuZGxlU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQucGFnZVgpO1xuICAgIH1cblxuICAgIGhhbmRsZVN0b3AgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW2V2ZW50LmNsaWVudFggLSB0aGlzLnN0YXRlLnN0YXJ0WCwgZXZlbnQuY2xpZW50WSAtIHRoaXMuc3RhdGUuc3RhcnRZXVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdXVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHRvIHNlbmQgdXBkYXRlZCBsb2NhdGlvbiB0byBkYXRhYmFzZVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RHJhZ2dhYmxlIG9uU3RhcnQ9e3RoaXMuaGFuZGxlU3RhcnR9IG9uU3RvcD17dGhpcy5oYW5kbGVTdG9wfT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXt0aGlzLnByb3BzLnh9IGN5PXt0aGlzLnByb3BzLnl9IHI9e3RoaXMucHJvcHMucmFkaXVzfSBmaWxsPXt0aGlzLnByb3BzLmNvbG9yfSAvPlxuICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICAgIClcbiAgICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiRHJhZ2dhYmxlIiwiQ2lyY2xlIiwiQ29tcG9uZW50IiwicmVuZGVyIiwib25TdGFydCIsImhhbmRsZVN0YXJ0Iiwib25TdG9wIiwiaGFuZGxlU3RvcCIsImNpcmNsZSIsImN4IiwicHJvcHMiLCJ4IiwiY3kiLCJ5IiwiciIsInJhZGl1cyIsImZpbGwiLCJjb2xvciIsImNvbnN0cnVjdG9yIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicGFnZVgiLCJjb29yZGluYXRlcyIsImNsaWVudFgiLCJzdGF0ZSIsInN0YXJ0WCIsImNsaWVudFkiLCJzdGFydFkiLCJzZXRTdGF0ZSIsImlkIiwic3RhcnRDb29yZHMiLCJlbmRDb29yZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/circle.js\n"));

/***/ })

});