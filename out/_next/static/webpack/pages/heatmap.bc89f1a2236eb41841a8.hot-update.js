webpackHotUpdate_N_E("pages/heatmap",{

/***/ "./src/pages/heatmap.tsx":
/*!*******************************!*\
  !*** ./src/pages/heatmap.tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Heatmap; });\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.tsx\");\n/* harmony import */ var _components_pagewise_heatmap_MoreInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pagewise/heatmap/MoreInfo */ \"./src/components/pagewise/heatmap/MoreInfo.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/justin/Desktop/covidexposures/src/pages/heatmap.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar recentCallTime = null;\nvar __N_SSG = true;\nfunction Heatmap(_ref) {\n  _s();\n\n  var apiKey = _ref.apiKey,\n      exposures = _ref.exposures;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    latitude: 44.651070,\n    longitude: -63.582687,\n    zoom: 11\n  }),\n      viewport = _useState[0],\n      setViewport = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    navigator.geolocation.getCurrentPosition(function (_ref2) {\n      var coords = _ref2.coords;\n      setViewport({\n        zoom: 11,\n        latitude: coords.latitude,\n        longitude: coords.longitude\n      });\n      findExposures();\n    });\n  }, []);\n  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  exposures[0][\"const\"][(cache, setCache)] = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    input: null,\n    exposures: exposures.map(function (e) {\n      return {};\n    })\n  });\n\n  function findExposures() {\n    return _findExposures.apply(this, arguments);\n  }\n\n  function _findExposures() {\n    _findExposures = Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _findExposures.apply(this, arguments);\n  }\n\n  var geojson = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useMemo\"])(function () {\n    return generateGeojson(cache.exposures);\n  }, [cache.exposures]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      clickedExposure = _useState2[0],\n      setClickedExposure = _useState2[1];\n\n  function getClickedExposure(_x) {\n    return _getClickedExposure.apply(this, arguments);\n  }\n\n  function _getClickedExposure() {\n    _getClickedExposure = Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {\n      var properties, _yield$axios$get, data;\n\n      return _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!(e.features.length == 0)) {\n                _context2.next = 2;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", setClickedExposure(null));\n\n            case 2:\n              properties = e.features[0].properties;\n\n              if (mongoose__WEBPACK_IMPORTED_MODULE_7__[\"Types\"].ObjectId.isValid(properties._id)) {\n                _context2.next = 5;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", setClickedExposure(null));\n\n            case 5:\n              _context2.next = 7;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"/api/exposure/\".concat(properties._id));\n\n            case 7:\n              _yield$axios$get = _context2.sent;\n              data = _yield$axios$get.data;\n              setClickedExposure(data);\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _getClickedExposure.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Container__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: \"h-screen\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"link\", {\n        href: \"https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"h-full pb-12\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n        className: \"text-center\",\n        children: \"Showing all COVID exposure locations in the demo database\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({\n        mapboxApiAccessToken: apiKey,\n        reuseMaps: true,\n        dragRotate: false,\n        width: \"100%\",\n        height: \"100%\",\n        mapStyle: \"mapbox://styles/mapbox/streets-v11\"\n      }, viewport), {}, {\n        onViewportChange: function onViewportChange(vp) {\n          setViewport({\n            longitude: vp.longitude,\n            latitude: vp.latitude,\n            zoom: vp.zoom\n          });\n          findExposures();\n        },\n        ref: mapRef,\n        onClick: getClickedExposure,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"NavigationControl\"], {\n          showZoom: true,\n          showCompass: false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"FullscreenControl\"], {\n          className: \"right-0\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Source\"], {\n          type: \"geojson\",\n          data: geojson,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Layer\"], {\n            type: \"circle\",\n            paint: {\n              \"circle-radius\": 15,\n              \"circle-opacity\": getCircleOpacity(viewport.zoom),\n              \"circle-stroke-opacity\": getCircleOpacity(viewport.zoom),\n              \"circle-stroke-width\": 1,\n              \"circle-color\": \"#fff\"\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Layer\"], {\n            type: \"heatmap\",\n            paint: {\n              \"heatmap-color\": [\"interpolate\", [\"linear\"], [\"heatmap-density\"], 0, \"rgba(0, 0, 255, 0)\", 0.1, \"royalblue\", 0.3, \"cyan\", 0.5, \"lime\", 0.7, \"yellow\", 1, \"red\"],\n              \"heatmap-intensity\": getHeatmapIntensity(viewport.zoom),\n              \"heatmap-opacity\": 0.67,\n              \"heatmap-radius\": 30\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 21\n        }, this), clickedExposure && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_pagewise_heatmap_MoreInfo__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          exposure: clickedExposure,\n          close: function close() {\n            return setClickedExposure(null);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 41\n        }, this)]\n      }), void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Heatmap, \"U5/YVV9UWg1HNOjYWUelS1/lyJs=\");\n\n_c = Heatmap;\n\nfunction generateGeojson() {\n  var exposures = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  return {\n    type: \"FeatureCollection\",\n    features: exposures.map(function (e) {\n      return {\n        type: \"Feature\",\n        geometry: {\n          type: \"Point\",\n          coordinates: [e[\"long\"], e.lat]\n        },\n        properties: {\n          _id: e._id\n        }\n      };\n    })\n  };\n}\n/**\n * Gets the intensity of the heatmap. Defaults to 1 when not specified.\n * (Subject to change)\n * https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-heatmap-heatmap-opacity\n *\n * @param zoom the current viewport map zoom\n * @returns the heatmap intensity [0,inf)\n */\n\n\nfunction getHeatmapIntensity(zoom) {\n  var pwDefn = zoom <= 6.3 ? 0.13706 * zoom - 0.16347 : -0.09708 * zoom + 1.32063;\n  return Math.max(pwDefn, 0);\n}\n/**\n * Gets the intensity of the individual exposures. Defaults to 1 when not specified.\n * (Subject to change)\n * https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-circle-circle-opacity\n *\n * @param zoom the current viewport map zoom\n * @returns the heatmap intensity [0,1]\n */\n\n\nfunction getCircleOpacity(zoom) {\n  return Math.max(0, Math.min(1, zoom - 12));\n}\n/**\n * Encodes the map boundary imprecisely.\n * @param map as a reference\n */\n\n\nfunction hashMapRef(map) {\n  if (map.current == null) return \"null\";\n\n  var _map$current$getMap$g = map.current.getMap().getBounds(),\n      _sw = _map$current$getMap$g._sw,\n      _ne = _map$current$getMap$g._ne;\n\n  var bounds = {\n    sw_long: Math.floor(_sw.lng * 10) / 10,\n    sw_lat: Math.floor(_sw.lat * 10) / 10,\n    ne_long: Math.ceil(_ne.lng * 10) / 10,\n    ne_lat: Math.ceil(_ne.lat * 10) / 10\n  };\n  return JSON.stringify(bounds);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Heatmap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hlYXRtYXAudHN4P2JiOGIiXSwibmFtZXMiOlsicmVjZW50Q2FsbFRpbWUiLCJIZWF0bWFwIiwiYXBpS2V5IiwiZXhwb3N1cmVzIiwidXNlU3RhdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb29yZHMiLCJmaW5kRXhwb3N1cmVzIiwibWFwUmVmIiwidXNlUmVmIiwiY2FjaGUiLCJzZXRDYWNoZSIsImlucHV0IiwibWFwIiwiZSIsImdlb2pzb24iLCJ1c2VNZW1vIiwiZ2VuZXJhdGVHZW9qc29uIiwiY2xpY2tlZEV4cG9zdXJlIiwic2V0Q2xpY2tlZEV4cG9zdXJlIiwiZ2V0Q2xpY2tlZEV4cG9zdXJlIiwiZmVhdHVyZXMiLCJsZW5ndGgiLCJwcm9wZXJ0aWVzIiwiVHlwZXMiLCJPYmplY3RJZCIsImlzVmFsaWQiLCJfaWQiLCJheGlvcyIsImdldCIsImRhdGEiLCJ2cCIsImdldENpcmNsZU9wYWNpdHkiLCJnZXRIZWF0bWFwSW50ZW5zaXR5IiwidHlwZSIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJsYXQiLCJwd0RlZm4iLCJNYXRoIiwibWF4IiwibWluIiwiaGFzaE1hcFJlZiIsImN1cnJlbnQiLCJnZXRNYXAiLCJnZXRCb3VuZHMiLCJfc3ciLCJfbmUiLCJib3VuZHMiLCJzd19sb25nIiwiZmxvb3IiLCJsbmciLCJzd19sYXQiLCJuZV9sb25nIiwiY2VpbCIsIm5lX2xhdCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFhQSxJQUFJQSxjQUFjLEdBQUcsSUFBckI7O0FBRWUsU0FBU0MsT0FBVCxP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SixHQUFHLENBQUNLLEdBQUosR0FBUSxFQUFuQixJQUF5QixFQUR2QjtBQUVYQyxVQUFNLEVBQUViLElBQUksQ0FBQ1csS0FBTCxDQUFXSixHQUFHLENBQUNULEdBQUosR0FBUSxFQUFuQixJQUF5QixFQUZ0QjtBQUdYZ0IsV0FBTyxFQUFFZCxJQUFJLENBQUNlLElBQUwsQ0FBVVAsR0FBRyxDQUFDSSxHQUFKLEdBQVEsRUFBbEIsSUFBd0IsRUFIdEI7QUFJWEksVUFBTSxFQUFFaEIsSUFBSSxDQUFDZSxJQUFMLENBQVVQLEdBQUcsQ0FBQ1YsR0FBSixHQUFRLEVBQWxCLElBQXdCO0FBSnJCLEdBQWY7QUFNQSxTQUFPbUIsSUFBSSxDQUFDQyxTQUFMLENBQWVULE1BQWYsQ0FBUDtBQUNIIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2hlYXRtYXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFwR0wsIHtcbiAgICBGdWxsc2NyZWVuQ29udHJvbCxcbiAgICBOYXZpZ2F0aW9uQ29udHJvbCxcbiAgICBMYXllcixcbiAgICBTb3VyY2UsXG4gICAgTWFwRXZlbnRcbn0gZnJvbSBcInJlYWN0LW1hcC1nbFwiO1xuaW1wb3J0IHtcbiAgICB1c2VTdGF0ZSxcbiAgICB1c2VSZWYsXG4gICAgdXNlTWVtbyxcbiAgICB1c2VFZmZlY3Rcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2RhdGFiYXNlL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgRXhwb3N1cmUgfSBmcm9tICcuLi9kYXRhYmFzZS9FeHBvc3VyZSc7XG5pbXBvcnQga2V5cyBmcm9tIFwiLi4vLi4va2V5c1wiO1xuaW1wb3J0IE1vcmVJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2V3aXNlL2hlYXRtYXAvTW9yZUluZm9cIjtcblxuaW50ZXJmYWNlIFZpZXdQb3J0IHtcbiAgICBsYXRpdHVkZTogbnVtYmVyLFxuICAgIGxvbmdpdHVkZTogbnVtYmVyLFxuICAgIHpvb206IG51bWJlclxufVxuXG5pbnRlcmZhY2UgQ2FjaGUge1xuICAgIGlucHV0OiBhbnksXG4gICAgZXhwb3N1cmVzOiBDb29yZGluYXRlW11cbn1cblxubGV0IHJlY2VudENhbGxUaW1lID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhdG1hcCh7IGFwaUtleSwgZXhwb3N1cmVzIH06IHsgYXBpS2V5OiBzdHJpbmcsIGV4cG9zdXJlczogRXhwb3N1cmVbXSB9KSB7XG4gICAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZTxWaWV3UG9ydD4oe1xuICAgICAgICBsYXRpdHVkZTogNDQuNjUxMDcwLFxuICAgICAgICBsb25naXR1ZGU6IC02My41ODI2ODcsXG4gICAgICAgIHpvb206IDExXG4gICAgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoeyBjb29yZHMgfSkgPT4ge1xuICAgICAgICAgICAgc2V0Vmlld3BvcnQoe1xuICAgICAgICAgICAgICAgIHpvb206IDExLFxuICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjb29yZHMubG9uZ2l0dWRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZpbmRFeHBvc3VyZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG1hcFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGV4cG9zdXJlc1swXS5cblxuICAgIGNvbnN0IFtjYWNoZSwgc2V0Q2FjaGVdID0gdXNlU3RhdGU8Q2FjaGU+KHsgaW5wdXQ6IG51bGwsIGV4cG9zdXJlczogZXhwb3N1cmVzLm1hcCgoZSkgPT4gKHsgIH0pKSB9KTtcbiAgICBhc3luYyBmdW5jdGlvbiBmaW5kRXhwb3N1cmVzKCkge31cblxuICAgIGNvbnN0IGdlb2pzb24gPSB1c2VNZW1vKCgpID0+IGdlbmVyYXRlR2VvanNvbihjYWNoZS5leHBvc3VyZXMpLCBbY2FjaGUuZXhwb3N1cmVzXSk7XG5cbiAgICBjb25zdCBbY2xpY2tlZEV4cG9zdXJlLCBzZXRDbGlja2VkRXhwb3N1cmVdID0gdXNlU3RhdGU8RXhwb3N1cmUgJiB7IGFsbDoge1xuICAgICAgICBzdGFydDogbnVtYmVyLFxuICAgICAgICBlbmQ6IG51bWJlcixcbiAgICAgICAgaW5zdHJ1Y3Rpb25zOiBzdHJpbmdcbiAgICB9W10gfSB8IG51bGw+KG51bGwpO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENsaWNrZWRFeHBvc3VyZShlOiBNYXBFdmVudCkge1xuICAgICAgICBpZiAoZS5mZWF0dXJlcy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgIHJldHVybiBzZXRDbGlja2VkRXhwb3N1cmUobnVsbCk7XG5cbiAgICAgICAgY29uc3QgeyBwcm9wZXJ0aWVzIH0gPSBlLmZlYXR1cmVzWzBdO1xuICAgICAgICBpZiAoIVR5cGVzLk9iamVjdElkLmlzVmFsaWQocHJvcGVydGllcy5faWQpKVxuICAgICAgICAgICAgcmV0dXJuIHNldENsaWNrZWRFeHBvc3VyZShudWxsKTtcblxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9leHBvc3VyZS8ke3Byb3BlcnRpZXMuX2lkfWApO1xuICAgICAgICBzZXRDbGlja2VkRXhwb3N1cmUoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJoLXNjcmVlblwiPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj0naHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjIuMi4wL21hcGJveC1nbC5jc3MnIHJlbD0nc3R5bGVzaGVldCcgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgcGItMTJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICBTaG93aW5nIGFsbCBDT1ZJRCBleHBvc3VyZSBsb2NhdGlvbnMgaW4gdGhlIGRlbW8gZGF0YWJhc2VcbiAgICAgICAgICAgICAgICA8L3A+XG5cblxuICAgICAgICAgICAgICAgIDxSZWFjdE1hcEdMIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXthcGlLZXl9XG4gICAgICAgICAgICAgICAgICAgIHJldXNlTWFwc1xuICAgICAgICAgICAgICAgICAgICBkcmFnUm90YXRlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMVwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi52aWV3cG9ydH1cbiAgICAgICAgICAgICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17KHZwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWaWV3cG9ydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiB2cC5sb25naXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IHZwLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb206IHZwLnpvb21cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluZEV4cG9zdXJlcygpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICByZWY9e21hcFJlZn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Z2V0Q2xpY2tlZEV4cG9zdXJlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Wm9vbT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb21wYXNzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZ1bGxzY3JlZW5Db250cm9sIGNsYXNzTmFtZT1cInJpZ2h0LTBcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxTb3VyY2UgdHlwZT1cImdlb2pzb25cIiBkYXRhPXtnZW9qc29ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllciB0eXBlPVwiY2lyY2xlXCIgcGFpbnQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1yYWRpdXNcIjogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGUtb3BhY2l0eVwiOiBnZXRDaXJjbGVPcGFjaXR5KHZpZXdwb3J0Lnpvb20pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlLXN0cm9rZS1vcGFjaXR5XCI6IGdldENpcmNsZU9wYWNpdHkodmlld3BvcnQuem9vbSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGUtc3Ryb2tlLXdpZHRoXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGUtY29sb3JcIjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5ZXIgdHlwZT1cImhlYXRtYXBcIiBwYWludD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhdG1hcC1jb2xvclwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW50ZXJwb2xhdGVcIiwgW1wibGluZWFyXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJoZWF0bWFwLWRlbnNpdHlcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsIFwicmdiYSgwLCAwLCAyNTUsIDApXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMSwgXCJyb3lhbGJsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4zLCBcImN5YW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC41LCBcImxpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC43LCBcInllbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLCBcInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlYXRtYXAtaW50ZW5zaXR5XCI6IGdldEhlYXRtYXBJbnRlbnNpdHkodmlld3BvcnQuem9vbSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWF0bWFwLW9wYWNpdHlcIjogMC42NyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlYXRtYXAtcmFkaXVzXCI6IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1NvdXJjZT5cblxuICAgICAgICAgICAgICAgICAgICB7Y2xpY2tlZEV4cG9zdXJlICYmIDxNb3JlSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3N1cmU9e2NsaWNrZWRFeHBvc3VyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlPXsoKSA9PiBzZXRDbGlja2VkRXhwb3N1cmUobnVsbCl9XG4gICAgICAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgICAgIDwvUmVhY3RNYXBHTD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwic3JjL2RhdGFiYXNlL2V4cG9zdXJlcy5qc29uXCIsIHsgZW5jb2Rpbmc6IFwidXRmOFwiIH0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBhcGlLZXk6IGtleXMubWFwYm94Lm1hcCxcbiAgICAgICAgICAgIGV4cG9zdXJlczogZGF0YVxuICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOiA2MCo2MCo2IC8vIDYgaG91cnNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlR2VvanNvbihleHBvc3VyZXM6IENvb3JkaW5hdGVbXSA9IFtdKTogR2VvSlNPTi5GZWF0dXJlQ29sbGVjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICAgICAgICBmZWF0dXJlczogZXhwb3N1cmVzLm1hcCgoZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbZS5sb25nLCBlLmxhdF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgX2lkOiBlLl9pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGludGVuc2l0eSBvZiB0aGUgaGVhdG1hcC4gRGVmYXVsdHMgdG8gMSB3aGVuIG5vdCBzcGVjaWZpZWQuXG4gKiAoU3ViamVjdCB0byBjaGFuZ2UpXG4gKiBodHRwczovL2RvY3MubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvc3R5bGUtc3BlYy9sYXllcnMvI3BhaW50LWhlYXRtYXAtaGVhdG1hcC1vcGFjaXR5XG4gKlxuICogQHBhcmFtIHpvb20gdGhlIGN1cnJlbnQgdmlld3BvcnQgbWFwIHpvb21cbiAqIEByZXR1cm5zIHRoZSBoZWF0bWFwIGludGVuc2l0eSBbMCxpbmYpXG4gKi9cbmZ1bmN0aW9uIGdldEhlYXRtYXBJbnRlbnNpdHkoem9vbTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBwd0RlZm4gPSAoem9vbSA8PSA2LjMpXG4gICAgICAgID8gKDAuMTM3MDYqem9vbSAtIDAuMTYzNDcpXG4gICAgICAgIDogKC0wLjA5NzA4Knpvb20gKyAxLjMyMDYzKTtcbiAgICByZXR1cm4gTWF0aC5tYXgocHdEZWZuLCAwKTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbnRlbnNpdHkgb2YgdGhlIGluZGl2aWR1YWwgZXhwb3N1cmVzLiBEZWZhdWx0cyB0byAxIHdoZW4gbm90IHNwZWNpZmllZC5cbiAqIChTdWJqZWN0IHRvIGNoYW5nZSlcbiAqIGh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9zdHlsZS1zcGVjL2xheWVycy8jcGFpbnQtY2lyY2xlLWNpcmNsZS1vcGFjaXR5XG4gKlxuICogQHBhcmFtIHpvb20gdGhlIGN1cnJlbnQgdmlld3BvcnQgbWFwIHpvb21cbiAqIEByZXR1cm5zIHRoZSBoZWF0bWFwIGludGVuc2l0eSBbMCwxXVxuICovXG5mdW5jdGlvbiBnZXRDaXJjbGVPcGFjaXR5KHpvb206IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHpvb20gLSAxMikpO1xufVxuXG4vKipcbiAqIEVuY29kZXMgdGhlIG1hcCBib3VuZGFyeSBpbXByZWNpc2VseS5cbiAqIEBwYXJhbSBtYXAgYXMgYSByZWZlcmVuY2VcbiAqL1xuZnVuY3Rpb24gaGFzaE1hcFJlZihtYXA6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKG1hcC5jdXJyZW50ID09IG51bGwpIHJldHVybiBcIm51bGxcIjtcblxuICAgIGNvbnN0IHsgX3N3LCBfbmUgfSA9IG1hcC5jdXJyZW50LmdldE1hcCgpLmdldEJvdW5kcygpO1xuICAgIGNvbnN0IGJvdW5kcyA9IHtcbiAgICAgICAgc3dfbG9uZzogTWF0aC5mbG9vcihfc3cubG5nKjEwKSAvIDEwLFxuICAgICAgICBzd19sYXQ6IE1hdGguZmxvb3IoX3N3LmxhdCoxMCkgLyAxMCxcbiAgICAgICAgbmVfbG9uZzogTWF0aC5jZWlsKF9uZS5sbmcqMTApIC8gMTAsXG4gICAgICAgIG5lX2xhdDogTWF0aC5jZWlsKF9uZS5sYXQqMTApIC8gMTBcbiAgICB9O1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShib3VuZHMpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/heatmap.tsx\n");

/***/ })

})