webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./src/components/pagewise/dashboard/Result.tsx":
/*!******************************************************!*\
  !*** ./src/components/pagewise/dashboard/Result.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Result; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Exposure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Exposure */ \"./src/components/Exposure.tsx\");\n\nvar _jsxFileName = \"/Users/justin/Desktop/covidexposures/src/components/pagewise/dashboard/Result.tsx\";\n\n\nfunction Result(_ref) {\n  var _this = this;\n\n  var result = _ref.result;\n  if (result == null || result == \"SENDING\") return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"\".concat(result == null ? \"hidden\" : \"animate-spin\"),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      priority: true,\n      src: \"/icons/spinner.svg\",\n      height: 100,\n      width: 100,\n      alt: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n  if (result.length == 0) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"text-center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n      children: \"No exposures matched your subscription.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this), \" We will keep your information for 30 days and email you if we detect any potential exposures.\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, this);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"text-center mb-4\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: [result.length, \" exposure\", result.length > 1 ? \"s\" : \"\", \" matched your subscription.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), \" Please review the exposure details below:\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), result.map(function (e) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Exposure__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        e: e\n      }, e._id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 42\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n_c = Result;\n\nvar _c;\n\n$RefreshReg$(_c, \"Result\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXdpc2UvZGFzaGJvYXJkL1Jlc3VsdC50c3g/MzI0NSJdLCJuYW1lcyI6WyJSZXN1bHQiLCJyZXN1bHQiLCJsZW5ndGgiLCJtYXAiLCJlIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUdBO0FBRWUsU0FBU0EsTUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUN2QyxNQUFJQSxNQUFNLElBQUksSUFBVixJQUFrQkEsTUFBTSxJQUFJLFNBQWhDLEVBQTJDLG9CQUN2QztBQUFLLGFBQVMsWUFBS0EsTUFBTSxJQUFJLElBQVYsR0FBaUIsUUFBakIsR0FBNEIsY0FBakMsQ0FBZDtBQUFBLDJCQUNJLHFFQUFDLGlEQUFEO0FBQU8sY0FBUSxNQUFmO0FBQWdCLFNBQUcsRUFBQyxvQkFBcEI7QUFBeUMsWUFBTSxFQUFFLEdBQWpEO0FBQXNELFdBQUssRUFBRSxHQUE3RDtBQUFrRSxTQUFHLEVBQUM7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEdUM7QUFNM0MsTUFBSUEsTUFBTSxDQUFDQyxNQUFQLElBQWlCLENBQXJCLEVBQXdCLG9CQUNwQjtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEb0I7QUFReEIsc0JBQ0k7QUFBQSw0QkFDSTtBQUFHLGVBQVMsRUFBQyxrQkFBYjtBQUFBLDhCQUNJO0FBQUEsbUJBQVNELE1BQU0sQ0FBQ0MsTUFBaEIsZUFBaUNELE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixDQUFoQixHQUFvQixHQUFwQixHQUEwQixFQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQU1LRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxVQUFDQyxDQUFEO0FBQUEsMEJBQWlCLHFFQUFDLGlEQUFEO0FBQXlCLFNBQUMsRUFBRUE7QUFBNUIsU0FBa0JBLENBQUMsQ0FBQ0MsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFqQjtBQUFBLEtBQVgsQ0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIO0tBekJ1QkwsTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3BhZ2V3aXNlL2Rhc2hib2FyZC9SZXN1bHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCB7IEV4cG9zdXJlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGFiYXNlL0V4cG9zdXJlXCI7XG5pbXBvcnQgRXhwb3N1cmVKU1ggZnJvbSBcIi4uLy4uL0V4cG9zdXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdCh7IHJlc3VsdCB9KSB7XG4gICAgaWYgKHJlc3VsdCA9PSBudWxsIHx8IHJlc3VsdCA9PSBcIlNFTkRJTkdcIikgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3Jlc3VsdCA9PSBudWxsID8gXCJoaWRkZW5cIiA6IFwiYW5pbWF0ZS1zcGluXCJ9YH0+XG4gICAgICAgICAgICA8SW1hZ2UgcHJpb3JpdHkgc3JjPVwiL2ljb25zL3NwaW5uZXIuc3ZnXCIgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9IGFsdD1cIkxvYWRpbmcuLi5cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT0gMCkgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPHN0cm9uZz5ObyBleHBvc3VyZXMgbWF0Y2hlZCB5b3VyIHN1YnNjcmlwdGlvbi48L3N0cm9uZz4gV2Ugd2lsbCBrZWVwIHlvdXJcbiAgICAgICAgICAgIGluZm9ybWF0aW9uIGZvciAzMCBkYXlzIGFuZCBlbWFpbCB5b3UgaWYgd2UgZGV0ZWN0IGFueSBwb3RlbnRpYWwgZXhwb3N1cmVzLlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e3Jlc3VsdC5sZW5ndGh9IGV4cG9zdXJle3Jlc3VsdC5sZW5ndGggPiAxID8gXCJzXCIgOiBcIlwifSBtYXRjaGVkXG4gICAgICAgICAgICAgICAgeW91ciBzdWJzY3JpcHRpb24uPC9zdHJvbmc+IFBsZWFzZSByZXZpZXcgdGhlIGV4cG9zdXJlIGRldGFpbHMgYmVsb3c6XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIHtyZXN1bHQubWFwKChlOiBFeHBvc3VyZSkgPT4gPEV4cG9zdXJlSlNYIGtleT17ZS5faWR9IGU9e2V9IC8+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/pagewise/dashboard/Result.tsx\n");

/***/ })

})