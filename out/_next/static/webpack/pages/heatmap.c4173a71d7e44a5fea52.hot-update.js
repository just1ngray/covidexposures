webpackHotUpdate_N_E("pages/heatmap",{

/***/ "./src/pages/heatmap.tsx":
/*!*******************************!*\
  !*** ./src/pages/heatmap.tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Heatmap; });\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.tsx\");\n/* harmony import */ var _components_pagewise_heatmap_MoreInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pagewise/heatmap/MoreInfo */ \"./src/components/pagewise/heatmap/MoreInfo.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/justin/Desktop/covidexposures/src/pages/heatmap.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar recentCallTime = null;\nvar __N_SSG = true;\nfunction Heatmap(_ref) {\n  _s();\n\n  var apiKey = _ref.apiKey,\n      exposures = _ref.exposures;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    latitude: 44.651070,\n    longitude: -63.582687,\n    zoom: 11\n  }),\n      viewport = _useState[0],\n      setViewport = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    navigator.geolocation.getCurrentPosition(function (_ref2) {\n      var coords = _ref2.coords;\n      setViewport({\n        zoom: 11,\n        latitude: coords.latitude,\n        longitude: coords.longitude\n      });\n      findExposures();\n    });\n  }, []);\n  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  exposures[0].coord[\"long\"];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    input: null,\n    exposures: exposures.map(function (e) {\n      return {};\n    })\n  }),\n      cache = _useState2[0],\n      setCache = _useState2[1];\n\n  function findExposures() {\n    return _findExposures.apply(this, arguments);\n  }\n\n  function _findExposures() {\n    _findExposures = Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _findExposures.apply(this, arguments);\n  }\n\n  var geojson = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useMemo\"])(function () {\n    return generateGeojson(cache.exposures);\n  }, [cache.exposures]);\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      clickedExposure = _useState3[0],\n      setClickedExposure = _useState3[1];\n\n  function getClickedExposure(_x) {\n    return _getClickedExposure.apply(this, arguments);\n  }\n\n  function _getClickedExposure() {\n    _getClickedExposure = Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {\n      var properties, _yield$axios$get, data;\n\n      return _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!(e.features.length == 0)) {\n                _context2.next = 2;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", setClickedExposure(null));\n\n            case 2:\n              properties = e.features[0].properties;\n\n              if (mongoose__WEBPACK_IMPORTED_MODULE_7__[\"Types\"].ObjectId.isValid(properties._id)) {\n                _context2.next = 5;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", setClickedExposure(null));\n\n            case 5:\n              _context2.next = 7;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"/api/exposure/\".concat(properties._id));\n\n            case 7:\n              _yield$axios$get = _context2.sent;\n              data = _yield$axios$get.data;\n              setClickedExposure(data);\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _getClickedExposure.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Container__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: \"h-screen\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"link\", {\n        href: \"https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"h-full pb-12\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n        className: \"text-center\",\n        children: \"Showing all COVID exposure locations in the demo database\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({\n        mapboxApiAccessToken: apiKey,\n        reuseMaps: true,\n        dragRotate: false,\n        width: \"100%\",\n        height: \"100%\",\n        mapStyle: \"mapbox://styles/mapbox/streets-v11\"\n      }, viewport), {}, {\n        onViewportChange: function onViewportChange(vp) {\n          setViewport({\n            longitude: vp.longitude,\n            latitude: vp.latitude,\n            zoom: vp.zoom\n          });\n          findExposures();\n        },\n        ref: mapRef,\n        onClick: getClickedExposure,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"NavigationControl\"], {\n          showZoom: true,\n          showCompass: false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"FullscreenControl\"], {\n          className: \"right-0\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Source\"], {\n          type: \"geojson\",\n          data: geojson,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Layer\"], {\n            type: \"circle\",\n            paint: {\n              \"circle-radius\": 15,\n              \"circle-opacity\": getCircleOpacity(viewport.zoom),\n              \"circle-stroke-opacity\": getCircleOpacity(viewport.zoom),\n              \"circle-stroke-width\": 1,\n              \"circle-color\": \"#fff\"\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Layer\"], {\n            type: \"heatmap\",\n            paint: {\n              \"heatmap-color\": [\"interpolate\", [\"linear\"], [\"heatmap-density\"], 0, \"rgba(0, 0, 255, 0)\", 0.1, \"royalblue\", 0.3, \"cyan\", 0.5, \"lime\", 0.7, \"yellow\", 1, \"red\"],\n              \"heatmap-intensity\": getHeatmapIntensity(viewport.zoom),\n              \"heatmap-opacity\": 0.67,\n              \"heatmap-radius\": 30\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 21\n        }, this), clickedExposure && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_pagewise_heatmap_MoreInfo__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          exposure: clickedExposure,\n          close: function close() {\n            return setClickedExposure(null);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 41\n        }, this)]\n      }), void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Heatmap, \"DDK+Z0LXSnTKoPIQfy4pv7BNHC4=\");\n\n_c = Heatmap;\n\nfunction generateGeojson() {\n  var exposures = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  return {\n    type: \"FeatureCollection\",\n    features: exposures.map(function (e) {\n      return {\n        type: \"Feature\",\n        geometry: {\n          type: \"Point\",\n          coordinates: [e[\"long\"], e.lat]\n        },\n        properties: {\n          _id: e._id\n        }\n      };\n    })\n  };\n}\n/**\n * Gets the intensity of the heatmap. Defaults to 1 when not specified.\n * (Subject to change)\n * https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-heatmap-heatmap-opacity\n *\n * @param zoom the current viewport map zoom\n * @returns the heatmap intensity [0,inf)\n */\n\n\nfunction getHeatmapIntensity(zoom) {\n  var pwDefn = zoom <= 6.3 ? 0.13706 * zoom - 0.16347 : -0.09708 * zoom + 1.32063;\n  return Math.max(pwDefn, 0);\n}\n/**\n * Gets the intensity of the individual exposures. Defaults to 1 when not specified.\n * (Subject to change)\n * https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-circle-circle-opacity\n *\n * @param zoom the current viewport map zoom\n * @returns the heatmap intensity [0,1]\n */\n\n\nfunction getCircleOpacity(zoom) {\n  return Math.max(0, Math.min(1, zoom - 12));\n}\n/**\n * Encodes the map boundary imprecisely.\n * @param map as a reference\n */\n\n\nfunction hashMapRef(map) {\n  if (map.current == null) return \"null\";\n\n  var _map$current$getMap$g = map.current.getMap().getBounds(),\n      _sw = _map$current$getMap$g._sw,\n      _ne = _map$current$getMap$g._ne;\n\n  var bounds = {\n    sw_long: Math.floor(_sw.lng * 10) / 10,\n    sw_lat: Math.floor(_sw.lat * 10) / 10,\n    ne_long: Math.ceil(_ne.lng * 10) / 10,\n    ne_lat: Math.ceil(_ne.lat * 10) / 10\n  };\n  return JSON.stringify(bounds);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Heatmap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hlYXRtYXAudHN4P2JiOGIiXSwibmFtZXMiOlsicmVjZW50Q2FsbFRpbWUiLCJIZWF0bWFwIiwiYXBpS2V5IiwiZXhwb3N1cmVzIiwidXNlU3RhdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb29yZHMiLCJmaW5kRXhwb3N1cmVzIiwibWFwUmVmIiwidXNlUmVmIiwiY29vcmQiLCJpbnB1dCIsIm1hcCIsImUiLCJjYWNoZSIsInNldENhY2hlIiwiZ2VvanNvbiIsInVzZU1lbW8iLCJnZW5lcmF0ZUdlb2pzb24iLCJjbGlja2VkRXhwb3N1cmUiLCJzZXRDbGlja2VkRXhwb3N1cmUiLCJnZXRDbGlja2VkRXhwb3N1cmUiLCJmZWF0dXJlcyIsImxlbmd0aCIsInByb3BlcnRpZXMiLCJUeXBlcyIsIk9iamVjdElkIiwiaXNWYWxpZCIsIl9pZCIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsInZwIiwiZ2V0Q2lyY2xlT3BhY2l0eSIsImdldEhlYXRtYXBJbnRlbnNpdHkiLCJ0eXBlIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsImxhdCIsInB3RGVmbiIsIk1hdGgiLCJtYXgiLCJtaW4iLCJoYXNoTWFwUmVmIiwiY3VycmVudCIsImdldE1hcCIsImdldEJvdW5kcyIsIl9zdyIsIl9uZSIsImJvdW5kcyIsInN3X2xvbmciLCJmbG9vciIsImxuZyIsInN3X2xhdCIsIm5lX2xvbmciLCJjZWlsIiwibmVfbGF0IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQWFBLElBQUlBLGNBQWMsR0FBRyxJQUFyQjs7QUFFZSxTQUFT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LE1BQU0sR0FBRztBQUNYQyxXQUFPLEVBQUVWLElBQUksQ0FBQ1csS0FBTCxDQUFXSixHQUFHLENBQUNLLEdBQUosR0FBUSxFQUFuQixJQUF5QixFQUR2QjtBQUVYQyxVQUFNLEVBQUViLElBQUksQ0FBQ1csS0FBTCxDQUFXSixHQUFHLENBQUNULEdBQUosR0FBUSxFQUFuQixJQUF5QixFQUZ0QjtBQUdYZ0IsV0FBTyxFQUFFZCxJQUFJLENBQUNlLElBQUwsQ0FBVVAsR0FBRyxDQUFDSSxHQUFKLEdBQVEsRUFBbEIsSUFBd0IsRUFIdEI7QUFJWEksVUFBTSxFQUFFaEIsSUFBSSxDQUFDZSxJQUFMLENBQVVQLEdBQUcsQ0FBQ1YsR0FBSixHQUFRLEVBQWxCLElBQXdCO0FBSnJCLEdBQWY7QUFNQSxTQUFPbUIsSUFBSSxDQUFDQyxTQUFMLENBQWVULE1BQWYsQ0FBUDtBQUNIIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2hlYXRtYXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFwR0wsIHtcbiAgICBGdWxsc2NyZWVuQ29udHJvbCxcbiAgICBOYXZpZ2F0aW9uQ29udHJvbCxcbiAgICBMYXllcixcbiAgICBTb3VyY2UsXG4gICAgTWFwRXZlbnRcbn0gZnJvbSBcInJlYWN0LW1hcC1nbFwiO1xuaW1wb3J0IHtcbiAgICB1c2VTdGF0ZSxcbiAgICB1c2VSZWYsXG4gICAgdXNlTWVtbyxcbiAgICB1c2VFZmZlY3Rcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2RhdGFiYXNlL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgRXhwb3N1cmUgfSBmcm9tICcuLi9kYXRhYmFzZS9FeHBvc3VyZSc7XG5pbXBvcnQga2V5cyBmcm9tIFwiLi4vLi4va2V5c1wiO1xuaW1wb3J0IE1vcmVJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2V3aXNlL2hlYXRtYXAvTW9yZUluZm9cIjtcblxuaW50ZXJmYWNlIFZpZXdQb3J0IHtcbiAgICBsYXRpdHVkZTogbnVtYmVyLFxuICAgIGxvbmdpdHVkZTogbnVtYmVyLFxuICAgIHpvb206IG51bWJlclxufVxuXG5pbnRlcmZhY2UgQ2FjaGUge1xuICAgIGlucHV0OiBhbnksXG4gICAgZXhwb3N1cmVzOiBDb29yZGluYXRlW11cbn1cblxubGV0IHJlY2VudENhbGxUaW1lID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhdG1hcCh7IGFwaUtleSwgZXhwb3N1cmVzIH06IHsgYXBpS2V5OiBzdHJpbmcsIGV4cG9zdXJlczogRXhwb3N1cmVbXSB9KSB7XG4gICAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZTxWaWV3UG9ydD4oe1xuICAgICAgICBsYXRpdHVkZTogNDQuNjUxMDcwLFxuICAgICAgICBsb25naXR1ZGU6IC02My41ODI2ODcsXG4gICAgICAgIHpvb206IDExXG4gICAgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoeyBjb29yZHMgfSkgPT4ge1xuICAgICAgICAgICAgc2V0Vmlld3BvcnQoe1xuICAgICAgICAgICAgICAgIHpvb206IDExLFxuICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjb29yZHMubG9uZ2l0dWRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZpbmRFeHBvc3VyZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG1hcFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGV4cG9zdXJlc1swXS5jb29yZC5sb25nXG5cbiAgICBjb25zdCBbY2FjaGUsIHNldENhY2hlXSA9IHVzZVN0YXRlPENhY2hlPih7IGlucHV0OiBudWxsLCBleHBvc3VyZXM6IGV4cG9zdXJlcy5tYXAoKGUpID0+ICh7ICB9KSkgfSk7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmluZEV4cG9zdXJlcygpIHt9XG5cbiAgICBjb25zdCBnZW9qc29uID0gdXNlTWVtbygoKSA9PiBnZW5lcmF0ZUdlb2pzb24oY2FjaGUuZXhwb3N1cmVzKSwgW2NhY2hlLmV4cG9zdXJlc10pO1xuXG4gICAgY29uc3QgW2NsaWNrZWRFeHBvc3VyZSwgc2V0Q2xpY2tlZEV4cG9zdXJlXSA9IHVzZVN0YXRlPEV4cG9zdXJlICYgeyBhbGw6IHtcbiAgICAgICAgc3RhcnQ6IG51bWJlcixcbiAgICAgICAgZW5kOiBudW1iZXIsXG4gICAgICAgIGluc3RydWN0aW9uczogc3RyaW5nXG4gICAgfVtdIH0gfCBudWxsPihudWxsKTtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDbGlja2VkRXhwb3N1cmUoZTogTWFwRXZlbnQpIHtcbiAgICAgICAgaWYgKGUuZmVhdHVyZXMubGVuZ3RoID09IDApXG4gICAgICAgICAgICByZXR1cm4gc2V0Q2xpY2tlZEV4cG9zdXJlKG51bGwpO1xuXG4gICAgICAgIGNvbnN0IHsgcHJvcGVydGllcyB9ID0gZS5mZWF0dXJlc1swXTtcbiAgICAgICAgaWYgKCFUeXBlcy5PYmplY3RJZC5pc1ZhbGlkKHByb3BlcnRpZXMuX2lkKSlcbiAgICAgICAgICAgIHJldHVybiBzZXRDbGlja2VkRXhwb3N1cmUobnVsbCk7XG5cbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvZXhwb3N1cmUvJHtwcm9wZXJ0aWVzLl9pZH1gKTtcbiAgICAgICAgc2V0Q2xpY2tlZEV4cG9zdXJlKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiaC1zY3JlZW5cIj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9J2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YyLjIuMC9tYXBib3gtZ2wuY3NzJyByZWw9J3N0eWxlc2hlZXQnIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHBiLTEyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgU2hvd2luZyBhbGwgQ09WSUQgZXhwb3N1cmUgbG9jYXRpb25zIGluIHRoZSBkZW1vIGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgPC9wPlxuXG5cbiAgICAgICAgICAgICAgICA8UmVhY3RNYXBHTCBtYXBib3hBcGlBY2Nlc3NUb2tlbj17YXBpS2V5fVxuICAgICAgICAgICAgICAgICAgICByZXVzZU1hcHNcbiAgICAgICAgICAgICAgICAgICAgZHJhZ1JvdGF0ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12MTFcIlxuICAgICAgICAgICAgICAgICAgICB7Li4udmlld3BvcnR9XG4gICAgICAgICAgICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyh2cCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Vmlld3BvcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogdnAubG9uZ2l0dWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiB2cC5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tOiB2cC56b29tXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmRFeHBvc3VyZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcmVmPXttYXBSZWZ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2dldENsaWNrZWRFeHBvc3VyZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1pvb209e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q29tcGFzcz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGdWxsc2NyZWVuQ29udHJvbCBjbGFzc05hbWU9XCJyaWdodC0wXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8U291cmNlIHR5cGU9XCJnZW9qc29uXCIgZGF0YT17Z2VvanNvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5ZXIgdHlwZT1cImNpcmNsZVwiIHBhaW50PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGUtcmFkaXVzXCI6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlLW9wYWNpdHlcIjogZ2V0Q2lyY2xlT3BhY2l0eSh2aWV3cG9ydC56b29tKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1zdHJva2Utb3BhY2l0eVwiOiBnZXRDaXJjbGVPcGFjaXR5KHZpZXdwb3J0Lnpvb20pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlLXN0cm9rZS13aWR0aFwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlLWNvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPExheWVyIHR5cGU9XCJoZWF0bWFwXCIgcGFpbnQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlYXRtYXAtY29sb3JcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImludGVycG9sYXRlXCIsIFtcImxpbmVhclwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiaGVhdG1hcC1kZW5zaXR5XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCBcInJnYmEoMCwgMCwgMjU1LCAwKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjEsIFwicm95YWxibHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMywgXCJjeWFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNSwgXCJsaW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuNywgXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSwgXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWF0bWFwLWludGVuc2l0eVwiOiBnZXRIZWF0bWFwSW50ZW5zaXR5KHZpZXdwb3J0Lnpvb20pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhdG1hcC1vcGFjaXR5XCI6IDAuNjcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWF0bWFwLXJhZGl1c1wiOiAzMFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Tb3VyY2U+XG5cbiAgICAgICAgICAgICAgICAgICAge2NsaWNrZWRFeHBvc3VyZSAmJiA8TW9yZUluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9zdXJlPXtjbGlja2VkRXhwb3N1cmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZT17KCkgPT4gc2V0Q2xpY2tlZEV4cG9zdXJlKG51bGwpfVxuICAgICAgICAgICAgICAgICAgICAvPn1cbiAgICAgICAgICAgICAgICA8L1JlYWN0TWFwR0w+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhcInNyYy9kYXRhYmFzZS9leHBvc3VyZXMuanNvblwiLCB7IGVuY29kaW5nOiBcInV0ZjhcIiB9KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgYXBpS2V5OiBrZXlzLm1hcGJveC5tYXAsXG4gICAgICAgICAgICBleHBvc3VyZXM6IGRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgcmV2YWxpZGF0ZTogNjAqNjAqNiAvLyA2IGhvdXJzXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUdlb2pzb24oZXhwb3N1cmVzOiBDb29yZGluYXRlW10gPSBbXSk6IEdlb0pTT04uRmVhdHVyZUNvbGxlY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAgICAgICAgZmVhdHVyZXM6IGV4cG9zdXJlcy5tYXAoKGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogW2UubG9uZywgZS5sYXRdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIF9pZDogZS5faWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbnRlbnNpdHkgb2YgdGhlIGhlYXRtYXAuIERlZmF1bHRzIHRvIDEgd2hlbiBub3Qgc3BlY2lmaWVkLlxuICogKFN1YmplY3QgdG8gY2hhbmdlKVxuICogaHR0cHM6Ly9kb2NzLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3N0eWxlLXNwZWMvbGF5ZXJzLyNwYWludC1oZWF0bWFwLWhlYXRtYXAtb3BhY2l0eVxuICpcbiAqIEBwYXJhbSB6b29tIHRoZSBjdXJyZW50IHZpZXdwb3J0IG1hcCB6b29tXG4gKiBAcmV0dXJucyB0aGUgaGVhdG1hcCBpbnRlbnNpdHkgWzAsaW5mKVxuICovXG5mdW5jdGlvbiBnZXRIZWF0bWFwSW50ZW5zaXR5KHpvb206IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgcHdEZWZuID0gKHpvb20gPD0gNi4zKVxuICAgICAgICA/ICgwLjEzNzA2Knpvb20gLSAwLjE2MzQ3KVxuICAgICAgICA6ICgtMC4wOTcwOCp6b29tICsgMS4zMjA2Myk7XG4gICAgcmV0dXJuIE1hdGgubWF4KHB3RGVmbiwgMCk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW50ZW5zaXR5IG9mIHRoZSBpbmRpdmlkdWFsIGV4cG9zdXJlcy4gRGVmYXVsdHMgdG8gMSB3aGVuIG5vdCBzcGVjaWZpZWQuXG4gKiAoU3ViamVjdCB0byBjaGFuZ2UpXG4gKiBodHRwczovL2RvY3MubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvc3R5bGUtc3BlYy9sYXllcnMvI3BhaW50LWNpcmNsZS1jaXJjbGUtb3BhY2l0eVxuICpcbiAqIEBwYXJhbSB6b29tIHRoZSBjdXJyZW50IHZpZXdwb3J0IG1hcCB6b29tXG4gKiBAcmV0dXJucyB0aGUgaGVhdG1hcCBpbnRlbnNpdHkgWzAsMV1cbiAqL1xuZnVuY3Rpb24gZ2V0Q2lyY2xlT3BhY2l0eSh6b29tOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB6b29tIC0gMTIpKTtcbn1cblxuLyoqXG4gKiBFbmNvZGVzIHRoZSBtYXAgYm91bmRhcnkgaW1wcmVjaXNlbHkuXG4gKiBAcGFyYW0gbWFwIGFzIGEgcmVmZXJlbmNlXG4gKi9cbmZ1bmN0aW9uIGhhc2hNYXBSZWYobWFwOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmIChtYXAuY3VycmVudCA9PSBudWxsKSByZXR1cm4gXCJudWxsXCI7XG5cbiAgICBjb25zdCB7IF9zdywgX25lIH0gPSBtYXAuY3VycmVudC5nZXRNYXAoKS5nZXRCb3VuZHMoKTtcbiAgICBjb25zdCBib3VuZHMgPSB7XG4gICAgICAgIHN3X2xvbmc6IE1hdGguZmxvb3IoX3N3LmxuZyoxMCkgLyAxMCxcbiAgICAgICAgc3dfbGF0OiBNYXRoLmZsb29yKF9zdy5sYXQqMTApIC8gMTAsXG4gICAgICAgIG5lX2xvbmc6IE1hdGguY2VpbChfbmUubG5nKjEwKSAvIDEwLFxuICAgICAgICBuZV9sYXQ6IE1hdGguY2VpbChfbmUubGF0KjEwKSAvIDEwXG4gICAgfTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYm91bmRzKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/heatmap.tsx\n");

/***/ })

})