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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Circle; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-draggable */ \"../../../node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Circle extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    // function to send updated location to database\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_2___default()), {\n            onStart: this.handleStart,\n            onStop: this.handleStop,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                cx: this.props.x,\n                cy: this.props.y,\n                r: this.props.radius,\n                fill: this.props.color\n            }, void 0, false, {\n                fileName: \"/Users/cyclo/Documents/Programming/concept-map/components/circle.js\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/cyclo/Documents/Programming/concept-map/components/circle.js\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(props){\n        super(props);\n        // function to update location\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"handleStart\", (event)=>{\n            console.log(this.state.location);\n            this.setState({\n                displacement: [\n                    event.clientX,\n                    event.clientY\n                ]\n            });\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"handleStop\", (event)=>{\n            this.setState({\n                displacement: [\n                    event.clientX - this.state.displacement[0],\n                    event.clientY - this.state.displacement[1]\n                ]\n            });\n            this.setState({\n                location: [\n                    this.state.location[0] + this.state.displacement[0],\n                    this.state.location[1] + this.state.displacement[1]\n                ]\n            });\n            console.log(this.state.location);\n        });\n        this.state = {\n            id: this.props.id,\n            location: [\n                this.props.x,\n                this.props.y\n            ],\n            displacement: []\n        };\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NpcmNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNjO0FBRXpCLE1BQU1FLGVBQWVGLHdEQUFlO0lBNEIvQyxnREFBZ0Q7SUFHaERJLFNBQVM7UUFDTCxxQkFDSSw4REFBQ0gsd0RBQVNBO1lBQUNJLFNBQVMsSUFBSSxDQUFDQyxXQUFXO1lBQUVDLFFBQVEsSUFBSSxDQUFDQyxVQUFVO3NCQUN6RCw0RUFBQ0M7Z0JBQU9DLElBQUksSUFBSSxDQUFDQyxLQUFLLENBQUNDLENBQUM7Z0JBQUVDLElBQUksSUFBSSxDQUFDRixLQUFLLENBQUNHLENBQUM7Z0JBQUVDLEdBQUcsSUFBSSxDQUFDSixLQUFLLENBQUNLLE1BQU07Z0JBQUVDLE1BQU0sSUFBSSxDQUFDTixLQUFLLENBQUNPLEtBQUs7Ozs7Ozs7Ozs7O0lBR3BHO0lBcENBQyxZQUFZUixLQUFLLENBQUU7UUFDZixLQUFLLENBQUNBO1FBUVYsOEJBQThCO1FBQzlCTCxnRkFBQUEsT0FBQUEsZUFBYyxDQUFDYyxRQUFVO1lBQ3JCQyxRQUFRQyxHQUFHLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVE7WUFDL0IsSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0JBQ1ZDLGNBQWM7b0JBQUNOLE1BQU1PLE9BQU87b0JBQUVQLE1BQU1RLE9BQU87aUJBQUM7WUFDaEQ7UUFDSjtRQUVBcEIsZ0ZBQUFBLE9BQUFBLGNBQWEsQ0FBQ1ksUUFBVTtZQUNwQixJQUFJLENBQUNLLFFBQVEsQ0FBQztnQkFDVkMsY0FBYztvQkFBQ04sTUFBTU8sT0FBTyxHQUFHLElBQUksQ0FBQ0osS0FBSyxDQUFDRyxZQUFZLENBQUMsRUFBRTtvQkFBRU4sTUFBTVEsT0FBTyxHQUFHLElBQUksQ0FBQ0wsS0FBSyxDQUFDRyxZQUFZLENBQUMsRUFBRTtpQkFBQztZQUMxRztZQUNBLElBQUksQ0FBQ0QsUUFBUSxDQUFDO2dCQUNWRCxVQUFVO29CQUFDLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDRyxZQUFZLENBQUMsRUFBRTtvQkFBRSxJQUFJLENBQUNILEtBQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUNELEtBQUssQ0FBQ0csWUFBWSxDQUFDLEVBQUU7aUJBQUM7WUFDeEg7WUFDQUwsUUFBUUMsR0FBRyxDQUFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRO1FBQ25DO1FBdkJJLElBQUksQ0FBQ0QsS0FBSyxHQUFHO1lBQ1RNLElBQUksSUFBSSxDQUFDbEIsS0FBSyxDQUFDa0IsRUFBRTtZQUNqQkwsVUFBVTtnQkFBQyxJQUFJLENBQUNiLEtBQUssQ0FBQ0MsQ0FBQztnQkFBRSxJQUFJLENBQUNELEtBQUssQ0FBQ0csQ0FBQzthQUFDO1lBQ3RDWSxjQUFjLEVBQUU7UUFDcEI7SUFDSjtBQThCSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2lyY2xlLmpzPzZjNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAncmVhY3QtZHJhZ2dhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICAgICAgbG9jYXRpb246IFt0aGlzLnByb3BzLngsIHRoaXMucHJvcHMueV0sXG4gICAgICAgICAgICBkaXNwbGFjZW1lbnQ6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiB0byB1cGRhdGUgbG9jYXRpb25cbiAgICBoYW5kbGVTdGFydCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmxvY2F0aW9uKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkaXNwbGFjZW1lbnQ6IFtldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdG9wID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGlzcGxhY2VtZW50OiBbZXZlbnQuY2xpZW50WCAtIHRoaXMuc3RhdGUuZGlzcGxhY2VtZW50WzBdLCBldmVudC5jbGllbnRZIC0gdGhpcy5zdGF0ZS5kaXNwbGFjZW1lbnRbMV1dXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9jYXRpb246IFt0aGlzLnN0YXRlLmxvY2F0aW9uWzBdICsgdGhpcy5zdGF0ZS5kaXNwbGFjZW1lbnRbMF0sIHRoaXMuc3RhdGUubG9jYXRpb25bMV0gKyB0aGlzLnN0YXRlLmRpc3BsYWNlbWVudFsxXV1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5sb2NhdGlvbik7XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gdG8gc2VuZCB1cGRhdGVkIGxvY2F0aW9uIHRvIGRhdGFiYXNlXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEcmFnZ2FibGUgb25TdGFydD17dGhpcy5oYW5kbGVTdGFydH0gb25TdG9wPXt0aGlzLmhhbmRsZVN0b3B9PlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9e3RoaXMucHJvcHMueH0gY3k9e3RoaXMucHJvcHMueX0gcj17dGhpcy5wcm9wcy5yYWRpdXN9IGZpbGw9e3RoaXMucHJvcHMuY29sb3J9IC8+XG4gICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJEcmFnZ2FibGUiLCJDaXJjbGUiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJvblN0YXJ0IiwiaGFuZGxlU3RhcnQiLCJvblN0b3AiLCJoYW5kbGVTdG9wIiwiY2lyY2xlIiwiY3giLCJwcm9wcyIsIngiLCJjeSIsInkiLCJyIiwicmFkaXVzIiwiZmlsbCIsImNvbG9yIiwiY29uc3RydWN0b3IiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImxvY2F0aW9uIiwic2V0U3RhdGUiLCJkaXNwbGFjZW1lbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/circle.js\n"));

/***/ })

});