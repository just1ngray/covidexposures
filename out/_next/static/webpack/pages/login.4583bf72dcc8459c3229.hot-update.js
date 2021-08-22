webpackHotUpdate_N_E("pages/login",{

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.tsx\");\n/* harmony import */ var _util_credentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/credentials */ \"./src/util/credentials.ts\");\n\n\nvar _jsxFileName = \"/Users/justin/Desktop/covidexposures/src/pages/login.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Login(_ref) {\n  _s();\n\n  var clientId = _ref.clientId;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var creds = Object(_util_credentials__WEBPACK_IMPORTED_MODULE_5__[\"useLogin\"])();\n  if (creds != null) router.push(\"/\");\n\n  function successful(res) {\n    Object(_util_credentials__WEBPACK_IMPORTED_MODULE_5__[\"login\"])({\n      token: res.tokenId,\n      name: res.profileObj.name,\n      provider: \"google\"\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"m-auto justify-center flex flex-col w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 shadow-xl p-4 \",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        className: \"font-semibold text-3xl text-center pb-1\",\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"text-gray-700 text-center\",\n        children: \"Subscribe to locations you've recently visited. If a potential exposure is detected, you'll be notified via email.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"border-t border-b border-gray-300 my-1 py-2 flex flex-col\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"bg-green-600 text-white hover:bg-green-300 hover:bg\",\n          children: \"DEMO LOGIN\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_google_login__WEBPACK_IMPORTED_MODULE_3__[\"GoogleLogin\"], {\n          clientId: clientId,\n          onSuccess: function onSuccess(res) {\n            return successful(res);\n          },\n          onFailure: function onFailure(err) {\n            return console.error(err);\n          },\n          cookiePolicy: 'single_host_origin'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"text-center\",\n        children: [\"Please review our \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: \"/privacy\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"underline text-blue-500 cursor-pointer\",\n            children: \"Privacy Policy\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, this), \" and \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: \"/terms\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"underline text-blue-500 cursor-pointer\",\n            children: \"Terms of Service\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Login, \"ksS6xwEHRj6JEYINN1uG/YS1x50=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], _util_credentials__WEBPACK_IMPORTED_MODULE_5__[\"useLogin\"]];\n});\n\n_c = Login;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luLnRzeD84ZDE5Il0sIm5hbWVzIjpbIkxvZ2luIiwiY2xpZW50SWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjcmVkcyIsInVzZUxvZ2luIiwicHVzaCIsInN1Y2Nlc3NmdWwiLCJyZXMiLCJsb2dpbiIsInRva2VuIiwidG9rZW5JZCIsIm5hbWUiLCJwcm9maWxlT2JqIiwicHJvdmlkZXIiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRWUsU0FBU0EsS0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN4QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTUMsS0FBSyxHQUFHQyxrRUFBUSxFQUF0QjtBQUNBLE1BQUlELEtBQUssSUFBSSxJQUFiLEVBQ0lGLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLEdBQVo7O0FBRUosV0FBU0MsVUFBVCxDQUFvQkMsR0FBcEIsRUFBOEM7QUFDMUNDLG1FQUFLLENBQUM7QUFDRkMsV0FBSyxFQUFFRixHQUFHLENBQUNHLE9BRFQ7QUFFRkMsVUFBSSxFQUFFSixHQUFHLENBQUNLLFVBQUosQ0FBZUQsSUFGbkI7QUFHRkUsY0FBUSxFQUFFO0FBSFIsS0FBRCxDQUFMO0FBS0g7O0FBRUQsc0JBQ0kscUVBQUMsNkRBQUQ7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQywrRkFBZjtBQUFBLDhCQUlJO0FBQUksaUJBQVMsRUFBQyx5Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBS0k7QUFBRyxpQkFBUyxFQUFDLDJCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFVSTtBQUFLLGlCQUFTLEVBQUMsMkRBQWY7QUFBQSxnQ0FDSTtBQUFRLG1CQUFTLEVBQUMscURBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBS0kscUVBQUMsOERBQUQ7QUFDSSxrQkFBUSxFQUFFYixRQURkO0FBRUksbUJBQVMsRUFBRSxtQkFBQ08sR0FBRDtBQUFBLG1CQUFTRCxVQUFVLENBQUNDLEdBQUQsQ0FBbkI7QUFBQSxXQUZmO0FBR0ksbUJBQVMsRUFBRSxtQkFBQ08sR0FBRDtBQUFBLG1CQUFTQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZCxDQUFUO0FBQUEsV0FIZjtBQUlJLHNCQUFZLEVBQUU7QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSixlQXVCSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLHNEQUVJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFVBQVg7QUFBQSxpQ0FDSTtBQUFHLHFCQUFTLEVBQUMsd0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLHdCQU1JLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFFBQVg7QUFBQSxpQ0FDSTtBQUFHLHFCQUFTLEVBQUMsd0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQ0g7O0dBckR1QmYsSztVQUNMRyxxRCxFQUVERSwwRDs7O0tBSE1MLEsiLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBHb29nbGVMb2dpbiwgR29vZ2xlTG9naW5SZXNwb25zZSB9IGZyb20gXCJyZWFjdC1nb29nbGUtbG9naW5cIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCBrZXlzIGZyb20gXCIuLi8uLi9rZXlzXCI7XG5pbXBvcnQgeyB1c2VMb2dpbiwgbG9naW4gfSBmcm9tIFwiLi4vdXRpbC9jcmVkZW50aWFsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbih7IGNsaWVudElkIH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGNyZWRzID0gdXNlTG9naW4oKTtcbiAgICBpZiAoY3JlZHMgIT0gbnVsbClcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuXG4gICAgZnVuY3Rpb24gc3VjY2Vzc2Z1bChyZXM6IEdvb2dsZUxvZ2luUmVzcG9uc2UpIHtcbiAgICAgICAgbG9naW4oe1xuICAgICAgICAgICAgdG9rZW46IHJlcy50b2tlbklkLFxuICAgICAgICAgICAgbmFtZTogcmVzLnByb2ZpbGVPYmoubmFtZSxcbiAgICAgICAgICAgIHByb3ZpZGVyOiBcImdvb2dsZVwiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byBqdXN0aWZ5LWNlbnRlciBmbGV4IGZsZXgtY29sXG4gICAgICAgICAgICAgICAgdy1mdWxsIHNtOnctNS82IG1kOnctNC82IGxnOnctMy82IHhsOnctMi82XG4gICAgICAgICAgICAgICAgc2hhZG93LXhsIHAtNFxuICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC0zeGwgdGV4dC1jZW50ZXIgcGItMVwiPkxvZ2luPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIFN1YnNjcmliZSB0byBsb2NhdGlvbnMgeW91J3ZlIHJlY2VudGx5IHZpc2l0ZWQuIElmIGEgcG90ZW50aWFsIGV4cG9zdXJlXG4gICAgICAgICAgICAgICAgICAgIGlzIGRldGVjdGVkLCB5b3UnbGwgYmUgbm90aWZpZWQgdmlhIGVtYWlsLlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIG15LTEgcHktMiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNjAwIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JlZW4tMzAwIGhvdmVyOmJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBERU1PIExPR0lOXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQ9e2NsaWVudElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzPXsocmVzKSA9PiBzdWNjZXNzZnVsKHJlcyBhcyBHb29nbGVMb2dpblJlc3BvbnNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17KGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2BQbGVhc2UgcmV2aWV3IG91ciBgfVxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ByaXZhY3lcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVuZGVybGluZSB0ZXh0LWJsdWUtNTAwIGN1cnNvci1wb2ludGVyXCI+UHJpdmFjeSBQb2xpY3k8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAge2AgYW5kIGB9XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVybXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVuZGVybGluZSB0ZXh0LWJsdWUtNTAwIGN1cnNvci1wb2ludGVyXCI+VGVybXMgb2YgU2VydmljZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY2xpZW50SWQ6IGtleXMuZ29vZ2xlLm9hdXRoXG4gICAgICAgIH1cbiAgICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

/***/ })

})