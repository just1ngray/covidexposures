webpackHotUpdate_N_E("pages/heatmap",{

/***/ "./src/pages/heatmap.tsx":
/*!*******************************!*\
  !*** ./src/pages/heatmap.tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Heatmap; });\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.tsx\");\n/* harmony import */ var _components_pagewise_heatmap_MoreInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pagewise/heatmap/MoreInfo */ \"./src/components/pagewise/heatmap/MoreInfo.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/justin/Desktop/covidexposures/src/pages/heatmap.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar recentCallTime = null;\nvar __N_SSG = true;\nfunction Heatmap(_ref) {\n  _s();\n\n  var apiKey = _ref.apiKey,\n      exposures = _ref.exposures;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    latitude: 44.651070,\n    longitude: -63.582687,\n    zoom: 11\n  }),\n      viewport = _useState[0],\n      setViewport = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    navigator.geolocation.getCurrentPosition(function (_ref2) {\n      var coords = _ref2.coords;\n      setViewport({\n        zoom: 11,\n        latitude: coords.latitude,\n        longitude: coords.longitude\n      });\n      findExposures();\n    });\n  }, []);\n  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    input: null,\n    exposures: exposures.map(function (e) {\n      return {};\n    })\n  }),\n      cache = _useState2[0],\n      setCache = _useState2[1];\n\n  function findExposures() {\n    return _findExposures.apply(this, arguments);\n  }\n\n  function _findExposures() {\n    _findExposures = Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _findExposures.apply(this, arguments);\n  }\n\n  var geojson = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useMemo\"])(function () {\n    return generateGeojson(cache.exposures);\n  }, [cache.exposures]);\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      clickedExposure = _useState3[0],\n      setClickedExposure = _useState3[1];\n\n  function getClickedExposure(_x) {\n    return _getClickedExposure.apply(this, arguments);\n  }\n\n  function _getClickedExposure() {\n    _getClickedExposure = Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {\n      var properties, _yield$axios$get, data;\n\n      return _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!(e.features.length == 0)) {\n                _context2.next = 2;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", setClickedExposure(null));\n\n            case 2:\n              properties = e.features[0].properties;\n\n              if (mongoose__WEBPACK_IMPORTED_MODULE_7__[\"Types\"].ObjectId.isValid(properties._id)) {\n                _context2.next = 5;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", setClickedExposure(null));\n\n            case 5:\n              _context2.next = 7;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"/api/exposure/\".concat(properties._id));\n\n            case 7:\n              _yield$axios$get = _context2.sent;\n              data = _yield$axios$get.data;\n              setClickedExposure(data);\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _getClickedExposure.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Container__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: \"h-screen\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"link\", {\n        href: \"https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"h-full pb-12\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n        className: \"text-center\",\n        children: \"Showing all COVID exposure locations in the demo database\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({\n        mapboxApiAccessToken: apiKey,\n        reuseMaps: true,\n        dragRotate: false,\n        width: \"100%\",\n        height: \"100%\",\n        mapStyle: \"mapbox://styles/mapbox/streets-v11\"\n      }, viewport), {}, {\n        onViewportChange: function onViewportChange(vp) {\n          setViewport({\n            longitude: vp.longitude,\n            latitude: vp.latitude,\n            zoom: vp.zoom\n          });\n          findExposures();\n        },\n        ref: mapRef,\n        onClick: getClickedExposure,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"NavigationControl\"], {\n          showZoom: true,\n          showCompass: false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"FullscreenControl\"], {\n          className: \"right-0\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Source\"], {\n          type: \"geojson\",\n          data: geojson,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Layer\"], {\n            type: \"circle\",\n            paint: {\n              \"circle-radius\": 15,\n              \"circle-opacity\": getCircleOpacity(viewport.zoom),\n              \"circle-stroke-opacity\": getCircleOpacity(viewport.zoom),\n              \"circle-stroke-width\": 1,\n              \"circle-color\": \"#fff\"\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Layer\"], {\n            type: \"heatmap\",\n            paint: {\n              \"heatmap-color\": [\"interpolate\", [\"linear\"], [\"heatmap-density\"], 0, \"rgba(0, 0, 255, 0)\", 0.1, \"royalblue\", 0.3, \"cyan\", 0.5, \"lime\", 0.7, \"yellow\", 1, \"red\"],\n              \"heatmap-intensity\": getHeatmapIntensity(viewport.zoom),\n              \"heatmap-opacity\": 0.67,\n              \"heatmap-radius\": 30\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 21\n        }, this), clickedExposure && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_pagewise_heatmap_MoreInfo__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          exposure: clickedExposure,\n          close: function close() {\n            return setClickedExposure(null);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 41\n        }, this)]\n      }), void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Heatmap, \"DDK+Z0LXSnTKoPIQfy4pv7BNHC4=\");\n\n_c = Heatmap;\n\nfunction generateGeojson() {\n  var exposures = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  return {\n    type: \"FeatureCollection\",\n    features: exposures.map(function (e) {\n      return {\n        type: \"Feature\",\n        geometry: {\n          type: \"Point\",\n          coordinates: [e[\"long\"], e.lat]\n        },\n        properties: {\n          _id: e._id\n        }\n      };\n    })\n  };\n}\n/**\n * Gets the intensity of the heatmap. Defaults to 1 when not specified.\n * (Subject to change)\n * https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-heatmap-heatmap-opacity\n *\n * @param zoom the current viewport map zoom\n * @returns the heatmap intensity [0,inf)\n */\n\n\nfunction getHeatmapIntensity(zoom) {\n  var pwDefn = zoom <= 6.3 ? 0.13706 * zoom - 0.16347 : -0.09708 * zoom + 1.32063;\n  return Math.max(pwDefn, 0);\n}\n/**\n * Gets the intensity of the individual exposures. Defaults to 1 when not specified.\n * (Subject to change)\n * https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-circle-circle-opacity\n *\n * @param zoom the current viewport map zoom\n * @returns the heatmap intensity [0,1]\n */\n\n\nfunction getCircleOpacity(zoom) {\n  return Math.max(0, Math.min(1, zoom - 12));\n}\n/**\n * Encodes the map boundary imprecisely.\n * @param map as a reference\n */\n\n\nfunction hashMapRef(map) {\n  if (map.current == null) return \"null\";\n\n  var _map$current$getMap$g = map.current.getMap().getBounds(),\n      _sw = _map$current$getMap$g._sw,\n      _ne = _map$current$getMap$g._ne;\n\n  var bounds = {\n    sw_long: Math.floor(_sw.lng * 10) / 10,\n    sw_lat: Math.floor(_sw.lat * 10) / 10,\n    ne_long: Math.ceil(_ne.lng * 10) / 10,\n    ne_lat: Math.ceil(_ne.lat * 10) / 10\n  };\n  return JSON.stringify(bounds);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Heatmap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hlYXRtYXAudHN4P2JiOGIiXSwibmFtZXMiOlsicmVjZW50Q2FsbFRpbWUiLCJIZWF0bWFwIiwiYXBpS2V5IiwiZXhwb3N1cmVzIiwidXNlU3RhdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb29yZHMiLCJmaW5kRXhwb3N1cmVzIiwibWFwUmVmIiwidXNlUmVmIiwiaW5wdXQiLCJtYXAiLCJlIiwiY2FjaGUiLCJzZXRDYWNoZSIsImdlb2pzb24iLCJ1c2VNZW1vIiwiZ2VuZXJhdGVHZW9qc29uIiwiY2xpY2tlZEV4cG9zdXJlIiwic2V0Q2xpY2tlZEV4cG9zdXJlIiwiZ2V0Q2xpY2tlZEV4cG9zdXJlIiwiZmVhdHVyZXMiLCJsZW5ndGgiLCJwcm9wZXJ0aWVzIiwiVHlwZXMiLCJPYmplY3RJZCIsImlzVmFsaWQiLCJfaWQiLCJheGlvcyIsImdldCIsImRhdGEiLCJ2cCIsImdldENpcmNsZU9wYWNpdHkiLCJnZXRIZWF0bWFwSW50ZW5zaXR5IiwidHlwZSIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJsYXQiLCJwd0RlZm4iLCJNYXRoIiwibWF4IiwibWluIiwiaGFzaE1hcFJlZiIsImN1cnJlbnQiLCJnZXRNYXAiLCJnZXRCb3VuZHMiLCJfc3ciLCJfbmUiLCJib3VuZHMiLCJzd19sb25nIiwiZmxvb3IiLCJsbmciLCJzd19sYXQiLCJuZV9sb25nIiwiY2VpbCIsIm5lX2xhdCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFhQSxJQUFJQSxjQUFjLEdBQUcsSUFBckI7O0FBRWUsU0FBU0MsT0FBVCxP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QVdKLEdBQUcsQ0FBQ0ssR0FBSixHQUFRLEVBQW5CLElBQXlCLEVBRHZCO0FBRVhDLFVBQU0sRUFBRWIsSUFBSSxDQUFDVyxLQUFMLENBQVdKLEdBQUcsQ0FBQ1QsR0FBSixHQUFRLEVBQW5CLElBQXlCLEVBRnRCO0FBR1hnQixXQUFPLEVBQUVkLElBQUksQ0FBQ2UsSUFBTCxDQUFVUCxHQUFHLENBQUNJLEdBQUosR0FBUSxFQUFsQixJQUF3QixFQUh0QjtBQUlYSSxVQUFNLEVBQUVoQixJQUFJLENBQUNlLElBQUwsQ0FBVVAsR0FBRyxDQUFDVixHQUFKLEdBQVEsRUFBbEIsSUFBd0I7QUFKckIsR0FBZjtBQU1BLFNBQU9tQixJQUFJLENBQUNDLFNBQUwsQ0FBZVQsTUFBZixDQUFQO0FBQ0giLCJmaWxlIjoiLi9zcmMvcGFnZXMvaGVhdG1hcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNYXBHTCwge1xuICAgIEZ1bGxzY3JlZW5Db250cm9sLFxuICAgIE5hdmlnYXRpb25Db250cm9sLFxuICAgIExheWVyLFxuICAgIFNvdXJjZSxcbiAgICBNYXBFdmVudFxufSBmcm9tIFwicmVhY3QtbWFwLWdsXCI7XG5pbXBvcnQge1xuICAgIHVzZVN0YXRlLFxuICAgIHVzZVJlZixcbiAgICB1c2VNZW1vLFxuICAgIHVzZUVmZmVjdFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vZGF0YWJhc2UvQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBFeHBvc3VyZSB9IGZyb20gJy4uL2RhdGFiYXNlL0V4cG9zdXJlJztcbmltcG9ydCBrZXlzIGZyb20gXCIuLi8uLi9rZXlzXCI7XG5pbXBvcnQgTW9yZUluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZXdpc2UvaGVhdG1hcC9Nb3JlSW5mb1wiO1xuXG5pbnRlcmZhY2UgVmlld1BvcnQge1xuICAgIGxhdGl0dWRlOiBudW1iZXIsXG4gICAgbG9uZ2l0dWRlOiBudW1iZXIsXG4gICAgem9vbTogbnVtYmVyXG59XG5cbmludGVyZmFjZSBDYWNoZSB7XG4gICAgaW5wdXQ6IGFueSxcbiAgICBleHBvc3VyZXM6IENvb3JkaW5hdGVbXVxufVxuXG5sZXQgcmVjZW50Q2FsbFRpbWUgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWF0bWFwKHsgYXBpS2V5LCBleHBvc3VyZXMgfTogeyBhcGlLZXk6IHN0cmluZywgZXhwb3N1cmVzOiBFeHBvc3VyZVtdIH0pIHtcbiAgICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlPFZpZXdQb3J0Pih7XG4gICAgICAgIGxhdGl0dWRlOiA0NC42NTEwNzAsXG4gICAgICAgIGxvbmdpdHVkZTogLTYzLjU4MjY4NyxcbiAgICAgICAgem9vbTogMTFcbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKCh7IGNvb3JkcyB9KSA9PiB7XG4gICAgICAgICAgICBzZXRWaWV3cG9ydCh7XG4gICAgICAgICAgICAgICAgem9vbTogMTEsXG4gICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNvb3Jkcy5sb25naXR1ZGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZmluZEV4cG9zdXJlcygpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgbWFwUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgW2NhY2hlLCBzZXRDYWNoZV0gPSB1c2VTdGF0ZTxDYWNoZT4oeyBpbnB1dDogbnVsbCwgZXhwb3N1cmVzOiBleHBvc3VyZXMubWFwKChlKSA9PiAoeyAgfSkpIH0pO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZpbmRFeHBvc3VyZXMoKSB7fVxuXG4gICAgY29uc3QgZ2VvanNvbiA9IHVzZU1lbW8oKCkgPT4gZ2VuZXJhdGVHZW9qc29uKGNhY2hlLmV4cG9zdXJlcyksIFtjYWNoZS5leHBvc3VyZXNdKTtcblxuICAgIGNvbnN0IFtjbGlja2VkRXhwb3N1cmUsIHNldENsaWNrZWRFeHBvc3VyZV0gPSB1c2VTdGF0ZTxFeHBvc3VyZSAmIHsgYWxsOiB7XG4gICAgICAgIHN0YXJ0OiBudW1iZXIsXG4gICAgICAgIGVuZDogbnVtYmVyLFxuICAgICAgICBpbnN0cnVjdGlvbnM6IHN0cmluZ1xuICAgIH1bXSB9IHwgbnVsbD4obnVsbCk7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xpY2tlZEV4cG9zdXJlKGU6IE1hcEV2ZW50KSB7XG4gICAgICAgIGlmIChlLmZlYXR1cmVzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHNldENsaWNrZWRFeHBvc3VyZShudWxsKTtcblxuICAgICAgICBjb25zdCB7IHByb3BlcnRpZXMgfSA9IGUuZmVhdHVyZXNbMF07XG4gICAgICAgIGlmICghVHlwZXMuT2JqZWN0SWQuaXNWYWxpZChwcm9wZXJ0aWVzLl9pZCkpXG4gICAgICAgICAgICByZXR1cm4gc2V0Q2xpY2tlZEV4cG9zdXJlKG51bGwpO1xuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2V4cG9zdXJlLyR7cHJvcGVydGllcy5faWR9YCk7XG4gICAgICAgIHNldENsaWNrZWRFeHBvc3VyZShkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImgtc2NyZWVuXCI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPSdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92Mi4yLjAvbWFwYm94LWdsLmNzcycgcmVsPSdzdHlsZXNoZWV0JyAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBwYi0xMlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIFNob3dpbmcgYWxsIENPVklEIGV4cG9zdXJlIGxvY2F0aW9ucyBpbiB0aGUgZGVtbyBkYXRhYmFzZVxuICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgPFJlYWN0TWFwR0wgbWFwYm94QXBpQWNjZXNzVG9rZW49e2FwaUtleX1cbiAgICAgICAgICAgICAgICAgICAgcmV1c2VNYXBzXG4gICAgICAgICAgICAgICAgICAgIGRyYWdSb3RhdGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExXCJcbiAgICAgICAgICAgICAgICAgICAgey4uLnZpZXdwb3J0fVxuICAgICAgICAgICAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXsodnApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXdwb3J0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHZwLmxvbmdpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogdnAubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgem9vbTogdnAuem9vbVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kRXhwb3N1cmVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHJlZj17bWFwUmVmfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtnZXRDbGlja2VkRXhwb3N1cmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dab29tPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbXBhc3M9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RnVsbHNjcmVlbkNvbnRyb2wgY2xhc3NOYW1lPVwicmlnaHQtMFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNvdXJjZSB0eXBlPVwiZ2VvanNvblwiIGRhdGE9e2dlb2pzb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExheWVyIHR5cGU9XCJjaXJjbGVcIiBwYWludD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlLXJhZGl1c1wiOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1vcGFjaXR5XCI6IGdldENpcmNsZU9wYWNpdHkodmlld3BvcnQuem9vbSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGUtc3Ryb2tlLW9wYWNpdHlcIjogZ2V0Q2lyY2xlT3BhY2l0eSh2aWV3cG9ydC56b29tKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1zdHJva2Utd2lkdGhcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1jb2xvclwiOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllciB0eXBlPVwiaGVhdG1hcFwiIHBhaW50PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWF0bWFwLWNvbG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnRlcnBvbGF0ZVwiLCBbXCJsaW5lYXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcImhlYXRtYXAtZGVuc2l0eVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgXCJyZ2JhKDAsIDAsIDI1NSwgMClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4xLCBcInJveWFsYmx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjMsIFwiY3lhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjUsIFwibGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjcsIFwieWVsbG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsIFwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhdG1hcC1pbnRlbnNpdHlcIjogZ2V0SGVhdG1hcEludGVuc2l0eSh2aWV3cG9ydC56b29tKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlYXRtYXAtb3BhY2l0eVwiOiAwLjY3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhdG1hcC1yYWRpdXNcIjogMzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU291cmNlPlxuXG4gICAgICAgICAgICAgICAgICAgIHtjbGlja2VkRXhwb3N1cmUgJiYgPE1vcmVJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvc3VyZT17Y2xpY2tlZEV4cG9zdXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U9eygpID0+IHNldENsaWNrZWRFeHBvc3VyZShudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgPC9SZWFjdE1hcEdMPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJzcmMvZGF0YWJhc2UvZXhwb3N1cmVzLmpzb25cIiwgeyBlbmNvZGluZzogXCJ1dGY4XCIgfSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGFwaUtleToga2V5cy5tYXBib3gubWFwLFxuICAgICAgICAgICAgZXhwb3N1cmVzOiBkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHJldmFsaWRhdGU6IDYwKjYwKjYgLy8gNiBob3Vyc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVHZW9qc29uKGV4cG9zdXJlczogQ29vcmRpbmF0ZVtdID0gW10pOiBHZW9KU09OLkZlYXR1cmVDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgICAgIGZlYXR1cmVzOiBleHBvc3VyZXMubWFwKChlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtlLmxvbmcsIGUubGF0XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICBfaWQ6IGUuX2lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW50ZW5zaXR5IG9mIHRoZSBoZWF0bWFwLiBEZWZhdWx0cyB0byAxIHdoZW4gbm90IHNwZWNpZmllZC5cbiAqIChTdWJqZWN0IHRvIGNoYW5nZSlcbiAqIGh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9zdHlsZS1zcGVjL2xheWVycy8jcGFpbnQtaGVhdG1hcC1oZWF0bWFwLW9wYWNpdHlcbiAqXG4gKiBAcGFyYW0gem9vbSB0aGUgY3VycmVudCB2aWV3cG9ydCBtYXAgem9vbVxuICogQHJldHVybnMgdGhlIGhlYXRtYXAgaW50ZW5zaXR5IFswLGluZilcbiAqL1xuZnVuY3Rpb24gZ2V0SGVhdG1hcEludGVuc2l0eSh6b29tOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHB3RGVmbiA9ICh6b29tIDw9IDYuMylcbiAgICAgICAgPyAoMC4xMzcwNip6b29tIC0gMC4xNjM0NylcbiAgICAgICAgOiAoLTAuMDk3MDgqem9vbSArIDEuMzIwNjMpO1xuICAgIHJldHVybiBNYXRoLm1heChwd0RlZm4sIDApO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGludGVuc2l0eSBvZiB0aGUgaW5kaXZpZHVhbCBleHBvc3VyZXMuIERlZmF1bHRzIHRvIDEgd2hlbiBub3Qgc3BlY2lmaWVkLlxuICogKFN1YmplY3QgdG8gY2hhbmdlKVxuICogaHR0cHM6Ly9kb2NzLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3N0eWxlLXNwZWMvbGF5ZXJzLyNwYWludC1jaXJjbGUtY2lyY2xlLW9wYWNpdHlcbiAqXG4gKiBAcGFyYW0gem9vbSB0aGUgY3VycmVudCB2aWV3cG9ydCBtYXAgem9vbVxuICogQHJldHVybnMgdGhlIGhlYXRtYXAgaW50ZW5zaXR5IFswLDFdXG4gKi9cbmZ1bmN0aW9uIGdldENpcmNsZU9wYWNpdHkoem9vbTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgem9vbSAtIDEyKSk7XG59XG5cbi8qKlxuICogRW5jb2RlcyB0aGUgbWFwIGJvdW5kYXJ5IGltcHJlY2lzZWx5LlxuICogQHBhcmFtIG1hcCBhcyBhIHJlZmVyZW5jZVxuICovXG5mdW5jdGlvbiBoYXNoTWFwUmVmKG1hcDogYW55KTogc3RyaW5nIHtcbiAgICBpZiAobWFwLmN1cnJlbnQgPT0gbnVsbCkgcmV0dXJuIFwibnVsbFwiO1xuXG4gICAgY29uc3QgeyBfc3csIF9uZSB9ID0gbWFwLmN1cnJlbnQuZ2V0TWFwKCkuZ2V0Qm91bmRzKCk7XG4gICAgY29uc3QgYm91bmRzID0ge1xuICAgICAgICBzd19sb25nOiBNYXRoLmZsb29yKF9zdy5sbmcqMTApIC8gMTAsXG4gICAgICAgIHN3X2xhdDogTWF0aC5mbG9vcihfc3cubGF0KjEwKSAvIDEwLFxuICAgICAgICBuZV9sb25nOiBNYXRoLmNlaWwoX25lLmxuZyoxMCkgLyAxMCxcbiAgICAgICAgbmVfbGF0OiBNYXRoLmNlaWwoX25lLmxhdCoxMCkgLyAxMFxuICAgIH07XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGJvdW5kcyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/heatmap.tsx\n");

/***/ })

})