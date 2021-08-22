webpackHotUpdate_N_E("pages/heatmap",{

/***/ "./src/pages/heatmap.tsx":
/*!*******************************!*\
  !*** ./src/pages/heatmap.tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Heatmap; });\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.tsx\");\n/* harmony import */ var _components_pagewise_heatmap_MoreInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/pagewise/heatmap/MoreInfo */ \"./src/components/pagewise/heatmap/MoreInfo.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/justin/Desktop/covidexposures/src/pages/heatmap.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar recentCallTime = null;\nvar __N_SSG = true;\nfunction Heatmap(_ref) {\n  _s();\n\n  var apiKey = _ref.apiKey,\n      exposures = _ref.exposures;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    latitude: 44.651070,\n    longitude: -63.582687,\n    zoom: 11\n  }),\n      viewport = _useState[0],\n      setViewport = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    navigator.geolocation.getCurrentPosition(function (_ref2) {\n      var coords = _ref2.coords;\n      setViewport({\n        zoom: 11,\n        latitude: coords.latitude,\n        longitude: coords.longitude\n      });\n      findExposures();\n    });\n  }, []);\n  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    input: null,\n    exposures: exposures.map(function (e) {\n      return {\n        \"long\": e.coord[\"long\"],\n        lat: e.coord.lat,\n        _id: e.coord._id\n      };\n    })\n  }),\n      cache = _useState2[0],\n      setCache = _useState2[1];\n\n  function findExposures() {\n    return _findExposures.apply(this, arguments);\n  }\n\n  function _findExposures() {\n    _findExposures = Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _findExposures.apply(this, arguments);\n  }\n\n  var geojson = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useMemo\"])(function () {\n    return generateGeojson(cache.exposures);\n  }, [cache.exposures]);\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      clickedExposure = _useState3[0],\n      setClickedExposure = _useState3[1];\n\n  function getClickedExposure(_x) {\n    return _getClickedExposure.apply(this, arguments);\n  }\n\n  function _getClickedExposure() {\n    _getClickedExposure = Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {\n      var properties;\n      return _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!(e.features.length == 0)) {\n                _context2.next = 2;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", setClickedExposure(null));\n\n            case 2:\n              properties = e.features[0].properties;\n\n              if (mongoose__WEBPACK_IMPORTED_MODULE_6__[\"Types\"].ObjectId.isValid(properties._id)) {\n                _context2.next = 5;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", setClickedExposure(null));\n\n            case 5:\n              setClickedExposure(exposures[exposures.findIndex(function (e) {\n                return e._id == properties._id;\n              })]);\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _getClickedExposure.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Container__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: \"h-screen\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"link\", {\n        href: \"https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"h-full pb-12\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n        className: \"text-center\",\n        children: \"Showing all COVID exposure locations in the demo database\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({\n        mapboxApiAccessToken: apiKey,\n        reuseMaps: true,\n        dragRotate: false,\n        width: \"100%\",\n        height: \"100%\",\n        mapStyle: \"mapbox://styles/mapbox/streets-v11\"\n      }, viewport), {}, {\n        onViewportChange: function onViewportChange(vp) {\n          setViewport({\n            longitude: vp.longitude,\n            latitude: vp.latitude,\n            zoom: vp.zoom\n          });\n          findExposures();\n        },\n        ref: mapRef,\n        onClick: getClickedExposure,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"NavigationControl\"], {\n          showZoom: true,\n          showCompass: false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"FullscreenControl\"], {\n          className: \"right-0\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Source\"], {\n          type: \"geojson\",\n          data: geojson,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Layer\"], {\n            type: \"circle\",\n            paint: {\n              \"circle-radius\": 15,\n              \"circle-opacity\": getCircleOpacity(viewport.zoom),\n              \"circle-stroke-opacity\": getCircleOpacity(viewport.zoom),\n              \"circle-stroke-width\": 1,\n              \"circle-color\": \"#fff\"\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Layer\"], {\n            type: \"heatmap\",\n            paint: {\n              \"heatmap-color\": [\"interpolate\", [\"linear\"], [\"heatmap-density\"], 0, \"rgba(0, 0, 255, 0)\", 0.1, \"royalblue\", 0.3, \"cyan\", 0.5, \"lime\", 0.7, \"yellow\", 1, \"red\"],\n              \"heatmap-intensity\": getHeatmapIntensity(viewport.zoom),\n              \"heatmap-opacity\": 0.67,\n              \"heatmap-radius\": 30\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 21\n        }, this), clickedExposure && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_pagewise_heatmap_MoreInfo__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          exposure: clickedExposure,\n          close: function close() {\n            return setClickedExposure(null);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 141,\n          columnNumber: 41\n        }, this)]\n      }), void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Heatmap, \"GCmIGAkPSQQ+9H7RVHEkS8g48LM=\");\n\n_c = Heatmap;\n\nfunction generateGeojson() {\n  var exposures = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  return {\n    type: \"FeatureCollection\",\n    features: exposures.map(function (e) {\n      return {\n        type: \"Feature\",\n        geometry: {\n          type: \"Point\",\n          coordinates: [e[\"long\"], e.lat]\n        },\n        properties: {\n          _id: e._id\n        }\n      };\n    })\n  };\n}\n/**\n * Gets the intensity of the heatmap. Defaults to 1 when not specified.\n * (Subject to change)\n * https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-heatmap-heatmap-opacity\n *\n * @param zoom the current viewport map zoom\n * @returns the heatmap intensity [0,inf)\n */\n\n\nfunction getHeatmapIntensity(zoom) {\n  var pwDefn = zoom <= 6.3 ? 0.13706 * zoom - 0.16347 : -0.09708 * zoom + 1.32063;\n  return Math.max(pwDefn, 0);\n}\n/**\n * Gets the intensity of the individual exposures. Defaults to 1 when not specified.\n * (Subject to change)\n * https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-circle-circle-opacity\n *\n * @param zoom the current viewport map zoom\n * @returns the heatmap intensity [0,1]\n */\n\n\nfunction getCircleOpacity(zoom) {\n  return Math.max(0, Math.min(1, zoom - 12));\n}\n/**\n * Encodes the map boundary imprecisely.\n * @param map as a reference\n */\n\n\nfunction hashMapRef(map) {\n  if (map.current == null) return \"null\";\n\n  var _map$current$getMap$g = map.current.getMap().getBounds(),\n      _sw = _map$current$getMap$g._sw,\n      _ne = _map$current$getMap$g._ne;\n\n  var bounds = {\n    sw_long: Math.floor(_sw.lng * 10) / 10,\n    sw_lat: Math.floor(_sw.lat * 10) / 10,\n    ne_long: Math.ceil(_ne.lng * 10) / 10,\n    ne_lat: Math.ceil(_ne.lat * 10) / 10\n  };\n  return JSON.stringify(bounds);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Heatmap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hlYXRtYXAudHN4P2JiOGIiXSwibmFtZXMiOlsicmVjZW50Q2FsbFRpbWUiLCJIZWF0bWFwIiwiYXBpS2V5IiwiZXhwb3N1cmVzIiwidXNlU3RhdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb29yZHMiLCJmaW5kRXhwb3N1cmVzIiwibWFwUmVmIiwidXNlUmVmIiwiaW5wdXQiLCJtYXAiLCJlIiwiY29vcmQiLCJsYXQiLCJfaWQiLCJjYWNoZSIsInNldENhY2hlIiwiZ2VvanNvbiIsInVzZU1lbW8iLCJnZW5lcmF0ZUdlb2pzb24iLCJjbGlja2VkRXhwb3N1cmUiLCJzZXRDbGlja2VkRXhwb3N1cmUiLCJnZXRDbGlja2VkRXhwb3N1cmUiLCJmZWF0dXJlcyIsImxlbmd0aCIsInByb3BlcnRpZXMiLCJUeXBlcyIsIk9iamVjdElkIiwiaXNWYWxpZCIsImZpbmRJbmRleCIsInZwIiwiZ2V0Q2lyY2xlT3BhY2l0eSIsImdldEhlYXRtYXBJbnRlbnNpdHkiLCJ0eXBlIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsInB3RGVmbiIsIk1hdGgiLCJtYXgiLCJtaW4iLCJoYXNoTWFwUmVmIiwiY3VycmVudCIsImdldE1hcCIsImdldEJvdW5kcyIsIl9zdyIsIl9uZSIsImJvdW5kcyIsInN3X2xvbmciLCJmbG9vciIsImxuZyIsInN3X2xhdCIsIm5lX2xvbmciLCJjZWlsIiwibmVfbGF0IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQU9BO0FBQ0E7QUFFQTtBQUlBO0FBYUEsSUFBSUEsY0FBYyxHQUFHLElBQXJCOztBQUVlLFNBQVNDLE9BQVQsT0FBbUY7QUFB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ckIsRUFIYTtBQUFBLE1BRzFCQyxHQUgwQix5QkFHMUJBLEdBSDBCO0FBQUEsTUFHckJDLEdBSHFCLHlCQUdyQkEsR0FIcUI7O0FBSWxDLE1BQU1DLE1BQU0sR0FBRztBQUNYQyxXQUFPLEVBQUVWLElBQUksQ0FBQ1csS0FBTCxDQUFXSixHQUFHLENBQUNLLEdBQUosR0FBUSxFQUFuQixJQUF5QixFQUR2QjtBQUVYQyxVQUFNLEVBQUViLElBQUksQ0FBQ1csS0FBTCxDQUFXSixHQUFHLENBQUMvQixHQUFKLEdBQVEsRUFBbkIsSUFBeUIsRUFGdEI7QUFHWHNDLFdBQU8sRUFBRWQsSUFBSSxDQUFDZSxJQUFMLENBQVVQLEdBQUcsQ0FBQ0ksR0FBSixHQUFRLEVBQWxCLElBQXdCLEVBSHRCO0FBSVhJLFVBQU0sRUFBRWhCLElBQUksQ0FBQ2UsSUFBTCxDQUFVUCxHQUFHLENBQUNoQyxHQUFKLEdBQVEsRUFBbEIsSUFBd0I7QUFKckIsR0FBZjtBQU1BLFNBQU95QyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsTUFBZixDQUFQO0FBQ0giLCJmaWxlIjoiLi9zcmMvcGFnZXMvaGVhdG1hcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNYXBHTCwge1xuICAgIEZ1bGxzY3JlZW5Db250cm9sLFxuICAgIE5hdmlnYXRpb25Db250cm9sLFxuICAgIExheWVyLFxuICAgIFNvdXJjZSxcbiAgICBNYXBFdmVudFxufSBmcm9tIFwicmVhY3QtbWFwLWdsXCI7XG5pbXBvcnQge1xuICAgIHVzZVN0YXRlLFxuICAgIHVzZVJlZixcbiAgICB1c2VNZW1vLFxuICAgIHVzZUVmZmVjdFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vZGF0YWJhc2UvQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBFeHBvc3VyZSB9IGZyb20gJy4uL2RhdGFiYXNlL0V4cG9zdXJlJztcbmltcG9ydCBrZXlzIGZyb20gXCIuLi8uLi9rZXlzXCI7XG5pbXBvcnQgTW9yZUluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvcGFnZXdpc2UvaGVhdG1hcC9Nb3JlSW5mb1wiO1xuXG5pbnRlcmZhY2UgVmlld1BvcnQge1xuICAgIGxhdGl0dWRlOiBudW1iZXIsXG4gICAgbG9uZ2l0dWRlOiBudW1iZXIsXG4gICAgem9vbTogbnVtYmVyXG59XG5cbmludGVyZmFjZSBDYWNoZSB7XG4gICAgaW5wdXQ6IGFueSxcbiAgICBleHBvc3VyZXM6IENvb3JkaW5hdGVbXVxufVxuXG5sZXQgcmVjZW50Q2FsbFRpbWUgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWF0bWFwKHsgYXBpS2V5LCBleHBvc3VyZXMgfTogeyBhcGlLZXk6IHN0cmluZywgZXhwb3N1cmVzOiBFeHBvc3VyZVtdIH0pIHtcbiAgICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlPFZpZXdQb3J0Pih7XG4gICAgICAgIGxhdGl0dWRlOiA0NC42NTEwNzAsXG4gICAgICAgIGxvbmdpdHVkZTogLTYzLjU4MjY4NyxcbiAgICAgICAgem9vbTogMTFcbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKCh7IGNvb3JkcyB9KSA9PiB7XG4gICAgICAgICAgICBzZXRWaWV3cG9ydCh7XG4gICAgICAgICAgICAgICAgem9vbTogMTEsXG4gICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGNvb3Jkcy5sb25naXR1ZGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZmluZEV4cG9zdXJlcygpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgbWFwUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgY29uc3QgW2NhY2hlLCBzZXRDYWNoZV0gPSB1c2VTdGF0ZTxDYWNoZT4oeyBpbnB1dDogbnVsbCwgZXhwb3N1cmVzOiBleHBvc3VyZXMubWFwKChlKSA9PiAoe1xuICAgICAgICBsb25nOiBlLmNvb3JkLmxvbmcsXG4gICAgICAgIGxhdDogZS5jb29yZC5sYXQsXG4gICAgICAgIF9pZDogZS5jb29yZC5faWRcbiAgICB9KSkgfSk7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmluZEV4cG9zdXJlcygpIHt9XG5cbiAgICBjb25zdCBnZW9qc29uID0gdXNlTWVtbygoKSA9PiBnZW5lcmF0ZUdlb2pzb24oY2FjaGUuZXhwb3N1cmVzKSwgW2NhY2hlLmV4cG9zdXJlc10pO1xuXG4gICAgY29uc3QgW2NsaWNrZWRFeHBvc3VyZSwgc2V0Q2xpY2tlZEV4cG9zdXJlXSA9IHVzZVN0YXRlPEV4cG9zdXJlICYgeyBhbGw6IHtcbiAgICAgICAgc3RhcnQ6IG51bWJlcixcbiAgICAgICAgZW5kOiBudW1iZXIsXG4gICAgICAgIGluc3RydWN0aW9uczogc3RyaW5nXG4gICAgfVtdIH0gfCBudWxsPihudWxsKTtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDbGlja2VkRXhwb3N1cmUoZTogTWFwRXZlbnQpIHtcbiAgICAgICAgaWYgKGUuZmVhdHVyZXMubGVuZ3RoID09IDApXG4gICAgICAgICAgICByZXR1cm4gc2V0Q2xpY2tlZEV4cG9zdXJlKG51bGwpO1xuXG4gICAgICAgIGNvbnN0IHsgcHJvcGVydGllcyB9ID0gZS5mZWF0dXJlc1swXTtcbiAgICAgICAgaWYgKCFUeXBlcy5PYmplY3RJZC5pc1ZhbGlkKHByb3BlcnRpZXMuX2lkKSlcbiAgICAgICAgICAgIHJldHVybiBzZXRDbGlja2VkRXhwb3N1cmUobnVsbCk7XG5cbiAgICAgICAgc2V0Q2xpY2tlZEV4cG9zdXJlKGV4cG9zdXJlc1tleHBvc3VyZXMuZmluZEluZGV4KChlKSA9PiBlLl9pZCA9PSBwcm9wZXJ0aWVzLl9pZCldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImgtc2NyZWVuXCI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPSdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92Mi4yLjAvbWFwYm94LWdsLmNzcycgcmVsPSdzdHlsZXNoZWV0JyAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBwYi0xMlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIFNob3dpbmcgYWxsIENPVklEIGV4cG9zdXJlIGxvY2F0aW9ucyBpbiB0aGUgZGVtbyBkYXRhYmFzZVxuICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgPFJlYWN0TWFwR0wgbWFwYm94QXBpQWNjZXNzVG9rZW49e2FwaUtleX1cbiAgICAgICAgICAgICAgICAgICAgcmV1c2VNYXBzXG4gICAgICAgICAgICAgICAgICAgIGRyYWdSb3RhdGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExXCJcbiAgICAgICAgICAgICAgICAgICAgey4uLnZpZXdwb3J0fVxuICAgICAgICAgICAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXsodnApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXdwb3J0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHZwLmxvbmdpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogdnAubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgem9vbTogdnAuem9vbVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kRXhwb3N1cmVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHJlZj17bWFwUmVmfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtnZXRDbGlja2VkRXhwb3N1cmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dab29tPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbXBhc3M9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RnVsbHNjcmVlbkNvbnRyb2wgY2xhc3NOYW1lPVwicmlnaHQtMFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNvdXJjZSB0eXBlPVwiZ2VvanNvblwiIGRhdGE9e2dlb2pzb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExheWVyIHR5cGU9XCJjaXJjbGVcIiBwYWludD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlLXJhZGl1c1wiOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1vcGFjaXR5XCI6IGdldENpcmNsZU9wYWNpdHkodmlld3BvcnQuem9vbSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGUtc3Ryb2tlLW9wYWNpdHlcIjogZ2V0Q2lyY2xlT3BhY2l0eSh2aWV3cG9ydC56b29tKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1zdHJva2Utd2lkdGhcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1jb2xvclwiOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllciB0eXBlPVwiaGVhdG1hcFwiIHBhaW50PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWF0bWFwLWNvbG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnRlcnBvbGF0ZVwiLCBbXCJsaW5lYXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcImhlYXRtYXAtZGVuc2l0eVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgXCJyZ2JhKDAsIDAsIDI1NSwgMClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4xLCBcInJveWFsYmx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjMsIFwiY3lhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjUsIFwibGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjcsIFwieWVsbG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsIFwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhdG1hcC1pbnRlbnNpdHlcIjogZ2V0SGVhdG1hcEludGVuc2l0eSh2aWV3cG9ydC56b29tKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlYXRtYXAtb3BhY2l0eVwiOiAwLjY3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhdG1hcC1yYWRpdXNcIjogMzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU291cmNlPlxuXG4gICAgICAgICAgICAgICAgICAgIHtjbGlja2VkRXhwb3N1cmUgJiYgPE1vcmVJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvc3VyZT17Y2xpY2tlZEV4cG9zdXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U9eygpID0+IHNldENsaWNrZWRFeHBvc3VyZShudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgPC9SZWFjdE1hcEdMPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJzcmMvZGF0YWJhc2UvZXhwb3N1cmVzLmpzb25cIiwgeyBlbmNvZGluZzogXCJ1dGY4XCIgfSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGFwaUtleToga2V5cy5tYXBib3gubWFwLFxuICAgICAgICAgICAgZXhwb3N1cmVzOiBkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHJldmFsaWRhdGU6IDYwKjYwKjYgLy8gNiBob3Vyc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVHZW9qc29uKGV4cG9zdXJlczogQ29vcmRpbmF0ZVtdID0gW10pOiBHZW9KU09OLkZlYXR1cmVDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgICAgIGZlYXR1cmVzOiBleHBvc3VyZXMubWFwKChlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtlLmxvbmcsIGUubGF0XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICBfaWQ6IGUuX2lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW50ZW5zaXR5IG9mIHRoZSBoZWF0bWFwLiBEZWZhdWx0cyB0byAxIHdoZW4gbm90IHNwZWNpZmllZC5cbiAqIChTdWJqZWN0IHRvIGNoYW5nZSlcbiAqIGh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9zdHlsZS1zcGVjL2xheWVycy8jcGFpbnQtaGVhdG1hcC1oZWF0bWFwLW9wYWNpdHlcbiAqXG4gKiBAcGFyYW0gem9vbSB0aGUgY3VycmVudCB2aWV3cG9ydCBtYXAgem9vbVxuICogQHJldHVybnMgdGhlIGhlYXRtYXAgaW50ZW5zaXR5IFswLGluZilcbiAqL1xuZnVuY3Rpb24gZ2V0SGVhdG1hcEludGVuc2l0eSh6b29tOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHB3RGVmbiA9ICh6b29tIDw9IDYuMylcbiAgICAgICAgPyAoMC4xMzcwNip6b29tIC0gMC4xNjM0NylcbiAgICAgICAgOiAoLTAuMDk3MDgqem9vbSArIDEuMzIwNjMpO1xuICAgIHJldHVybiBNYXRoLm1heChwd0RlZm4sIDApO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGludGVuc2l0eSBvZiB0aGUgaW5kaXZpZHVhbCBleHBvc3VyZXMuIERlZmF1bHRzIHRvIDEgd2hlbiBub3Qgc3BlY2lmaWVkLlxuICogKFN1YmplY3QgdG8gY2hhbmdlKVxuICogaHR0cHM6Ly9kb2NzLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3N0eWxlLXNwZWMvbGF5ZXJzLyNwYWludC1jaXJjbGUtY2lyY2xlLW9wYWNpdHlcbiAqXG4gKiBAcGFyYW0gem9vbSB0aGUgY3VycmVudCB2aWV3cG9ydCBtYXAgem9vbVxuICogQHJldHVybnMgdGhlIGhlYXRtYXAgaW50ZW5zaXR5IFswLDFdXG4gKi9cbmZ1bmN0aW9uIGdldENpcmNsZU9wYWNpdHkoem9vbTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgem9vbSAtIDEyKSk7XG59XG5cbi8qKlxuICogRW5jb2RlcyB0aGUgbWFwIGJvdW5kYXJ5IGltcHJlY2lzZWx5LlxuICogQHBhcmFtIG1hcCBhcyBhIHJlZmVyZW5jZVxuICovXG5mdW5jdGlvbiBoYXNoTWFwUmVmKG1hcDogYW55KTogc3RyaW5nIHtcbiAgICBpZiAobWFwLmN1cnJlbnQgPT0gbnVsbCkgcmV0dXJuIFwibnVsbFwiO1xuXG4gICAgY29uc3QgeyBfc3csIF9uZSB9ID0gbWFwLmN1cnJlbnQuZ2V0TWFwKCkuZ2V0Qm91bmRzKCk7XG4gICAgY29uc3QgYm91bmRzID0ge1xuICAgICAgICBzd19sb25nOiBNYXRoLmZsb29yKF9zdy5sbmcqMTApIC8gMTAsXG4gICAgICAgIHN3X2xhdDogTWF0aC5mbG9vcihfc3cubGF0KjEwKSAvIDEwLFxuICAgICAgICBuZV9sb25nOiBNYXRoLmNlaWwoX25lLmxuZyoxMCkgLyAxMCxcbiAgICAgICAgbmVfbGF0OiBNYXRoLmNlaWwoX25lLmxhdCoxMCkgLyAxMFxuICAgIH07XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGJvdW5kcyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/heatmap.tsx\n");

/***/ })

})