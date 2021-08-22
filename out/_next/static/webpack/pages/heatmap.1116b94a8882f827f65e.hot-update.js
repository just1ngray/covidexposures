webpackHotUpdate_N_E("pages/heatmap",{

/***/ "./src/pages/heatmap.tsx":
/*!*******************************!*\
  !*** ./src/pages/heatmap.tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Heatmap; });\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.tsx\");\n/* harmony import */ var _components_pagewise_heatmap_MoreInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pagewise/heatmap/MoreInfo */ \"./src/components/pagewise/heatmap/MoreInfo.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/justin/Desktop/covidexposures/src/pages/heatmap.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar recentCallTime = null;\nvar __N_SSG = true;\nfunction Heatmap(_ref) {\n  _s();\n\n  var apiKey = _ref.apiKey,\n      exposures = _ref.exposures;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    latitude: 44.651070,\n    longitude: -63.582687,\n    zoom: 11\n  }),\n      viewport = _useState[0],\n      setViewport = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    navigator.geolocation.getCurrentPosition(function (_ref2) {\n      var coords = _ref2.coords;\n      setViewport({\n        zoom: 11,\n        latitude: coords.latitude,\n        longitude: coords.longitude\n      });\n      findExposures();\n    });\n  }, []);\n  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    input: null,\n    exposures: exposures.map(function (e) {\n      return {\n        \"long\": e.coord[\"long\"],\n        lat: e.coord.lat,\n        _id: e.coord._id\n      };\n    })\n  }),\n      cache = _useState2[0],\n      setCache = _useState2[1];\n\n  function findExposures() {\n    return _findExposures.apply(this, arguments);\n  }\n\n  function _findExposures() {\n    _findExposures = Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _findExposures.apply(this, arguments);\n  }\n\n  var geojson = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useMemo\"])(function () {\n    return generateGeojson(cache.exposures);\n  }, [cache.exposures]);\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      clickedExposure = _useState3[0],\n      setClickedExposure = _useState3[1];\n\n  function getClickedExposure(_x) {\n    return _getClickedExposure.apply(this, arguments);\n  }\n\n  function _getClickedExposure() {\n    _getClickedExposure = Object(_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {\n      var properties, _yield$axios$get, data;\n\n      return _Users_justin_Desktop_covidexposures_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!(e.features.length == 0)) {\n                _context2.next = 2;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", setClickedExposure(null));\n\n            case 2:\n              properties = e.features[0].properties;\n\n              if (mongoose__WEBPACK_IMPORTED_MODULE_7__[\"Types\"].ObjectId.isValid(properties._id)) {\n                _context2.next = 5;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", setClickedExposure(null));\n\n            case 5:\n              exposures.findIndex();\n              _context2.next = 8;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"/api/exposure/\".concat(properties._id));\n\n            case 8:\n              _yield$axios$get = _context2.sent;\n              data = _yield$axios$get.data;\n              setClickedExposure(data);\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _getClickedExposure.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Container__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: \"h-screen\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"link\", {\n        href: \"https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"h-full pb-12\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n        className: \"text-center\",\n        children: \"Showing all COVID exposure locations in the demo database\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({\n        mapboxApiAccessToken: apiKey,\n        reuseMaps: true,\n        dragRotate: false,\n        width: \"100%\",\n        height: \"100%\",\n        mapStyle: \"mapbox://styles/mapbox/streets-v11\"\n      }, viewport), {}, {\n        onViewportChange: function onViewportChange(vp) {\n          setViewport({\n            longitude: vp.longitude,\n            latitude: vp.latitude,\n            zoom: vp.zoom\n          });\n          findExposures();\n        },\n        ref: mapRef,\n        onClick: getClickedExposure,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"NavigationControl\"], {\n          showZoom: true,\n          showCompass: false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"FullscreenControl\"], {\n          className: \"right-0\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Source\"], {\n          type: \"geojson\",\n          data: geojson,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Layer\"], {\n            type: \"circle\",\n            paint: {\n              \"circle-radius\": 15,\n              \"circle-opacity\": getCircleOpacity(viewport.zoom),\n              \"circle-stroke-opacity\": getCircleOpacity(viewport.zoom),\n              \"circle-stroke-width\": 1,\n              \"circle-color\": \"#fff\"\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"Layer\"], {\n            type: \"heatmap\",\n            paint: {\n              \"heatmap-color\": [\"interpolate\", [\"linear\"], [\"heatmap-density\"], 0, \"rgba(0, 0, 255, 0)\", 0.1, \"royalblue\", 0.3, \"cyan\", 0.5, \"lime\", 0.7, \"yellow\", 1, \"red\"],\n              \"heatmap-intensity\": getHeatmapIntensity(viewport.zoom),\n              \"heatmap-opacity\": 0.67,\n              \"heatmap-radius\": 30\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 21\n        }, this), clickedExposure && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_pagewise_heatmap_MoreInfo__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          exposure: clickedExposure,\n          close: function close() {\n            return setClickedExposure(null);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 41\n        }, this)]\n      }), void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Heatmap, \"GCmIGAkPSQQ+9H7RVHEkS8g48LM=\");\n\n_c = Heatmap;\n\nfunction generateGeojson() {\n  var exposures = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  return {\n    type: \"FeatureCollection\",\n    features: exposures.map(function (e) {\n      return {\n        type: \"Feature\",\n        geometry: {\n          type: \"Point\",\n          coordinates: [e[\"long\"], e.lat]\n        },\n        properties: {\n          _id: e._id\n        }\n      };\n    })\n  };\n}\n/**\n * Gets the intensity of the heatmap. Defaults to 1 when not specified.\n * (Subject to change)\n * https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-heatmap-heatmap-opacity\n *\n * @param zoom the current viewport map zoom\n * @returns the heatmap intensity [0,inf)\n */\n\n\nfunction getHeatmapIntensity(zoom) {\n  var pwDefn = zoom <= 6.3 ? 0.13706 * zoom - 0.16347 : -0.09708 * zoom + 1.32063;\n  return Math.max(pwDefn, 0);\n}\n/**\n * Gets the intensity of the individual exposures. Defaults to 1 when not specified.\n * (Subject to change)\n * https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-circle-circle-opacity\n *\n * @param zoom the current viewport map zoom\n * @returns the heatmap intensity [0,1]\n */\n\n\nfunction getCircleOpacity(zoom) {\n  return Math.max(0, Math.min(1, zoom - 12));\n}\n/**\n * Encodes the map boundary imprecisely.\n * @param map as a reference\n */\n\n\nfunction hashMapRef(map) {\n  if (map.current == null) return \"null\";\n\n  var _map$current$getMap$g = map.current.getMap().getBounds(),\n      _sw = _map$current$getMap$g._sw,\n      _ne = _map$current$getMap$g._ne;\n\n  var bounds = {\n    sw_long: Math.floor(_sw.lng * 10) / 10,\n    sw_lat: Math.floor(_sw.lat * 10) / 10,\n    ne_long: Math.ceil(_ne.lng * 10) / 10,\n    ne_lat: Math.ceil(_ne.lat * 10) / 10\n  };\n  return JSON.stringify(bounds);\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Heatmap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hlYXRtYXAudHN4P2JiOGIiXSwibmFtZXMiOlsicmVjZW50Q2FsbFRpbWUiLCJIZWF0bWFwIiwiYXBpS2V5IiwiZXhwb3N1cmVzIiwidXNlU3RhdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJ2aWV3cG9ydCIsInNldFZpZXdwb3J0IiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb29yZHMiLCJmaW5kRXhwb3N1cmVzIiwibWFwUmVmIiwidXNlUmVmIiwiaW5wdXQiLCJtYXAiLCJlIiwiY29vcmQiLCJsYXQiLCJfaWQiLCJjYWNoZSIsInNldENhY2hlIiwiZ2VvanNvbiIsInVzZU1lbW8iLCJnZW5lcmF0ZUdlb2pzb24iLCJjbGlja2VkRXhwb3N1cmUiLCJzZXRDbGlja2VkRXhwb3N1cmUiLCJnZXRDbGlja2VkRXhwb3N1cmUiLCJmZWF0dXJlcyIsImxlbmd0aCIsInByb3BlcnRpZXMiLCJUeXBlcyIsIk9iamVjdElkIiwiaXNWYWxpZCIsImZpbmRJbmRleCIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsInZwIiwiZ2V0Q2lyY2xlT3BhY2l0eSIsImdldEhlYXRtYXBJbnRlbnNpdHkiLCJ0eXBlIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsInB3RGVmbiIsIk1hdGgiLCJtYXgiLCJtaW4iLCJoYXNoTWFwUmVmIiwiY3VycmVudCIsImdldE1hcCIsImdldEJvdW5kcyIsIl9zdyIsIl9uZSIsImJvdW5kcyIsInN3X2xvbmciLCJmbG9vciIsImxuZyIsInN3X2xhdCIsIm5lX2xvbmciLCJjZWlsIiwibmVfbGF0IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQWFBLElBQUlBLGNBQWMsR0FBRyxJQUFy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R2JsQyxHQUFHLENBQUNrQyxPQUFKLENBQVlDLE1BQVosR0FBcUJDLFNBQXJCLEVBSGE7QUFBQSxNQUcxQkMsR0FIMEIseUJBRzFCQSxHQUgwQjtBQUFBLE1BR3JCQyxHQUhxQix5QkFHckJBLEdBSHFCOztBQUlsQyxNQUFNQyxNQUFNLEdBQUc7QUFDWEMsV0FBTyxFQUFFVixJQUFJLENBQUNXLEtBQUwsQ0FBV0osR0FBRyxDQUFDSyxHQUFKLEdBQVEsRUFBbkIsSUFBeUIsRUFEdkI7QUFFWEMsVUFBTSxFQUFFYixJQUFJLENBQUNXLEtBQUwsQ0FBV0osR0FBRyxDQUFDbEMsR0FBSixHQUFRLEVBQW5CLElBQXlCLEVBRnRCO0FBR1h5QyxXQUFPLEVBQUVkLElBQUksQ0FBQ2UsSUFBTCxDQUFVUCxHQUFHLENBQUNJLEdBQUosR0FBUSxFQUFsQixJQUF3QixFQUh0QjtBQUlYSSxVQUFNLEVBQUVoQixJQUFJLENBQUNlLElBQUwsQ0FBVVAsR0FBRyxDQUFDbkMsR0FBSixHQUFRLEVBQWxCLElBQXdCO0FBSnJCLEdBQWY7QUFNQSxTQUFPNEMsSUFBSSxDQUFDQyxTQUFMLENBQWVULE1BQWYsQ0FBUDtBQUNIIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2hlYXRtYXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFwR0wsIHtcbiAgICBGdWxsc2NyZWVuQ29udHJvbCxcbiAgICBOYXZpZ2F0aW9uQ29udHJvbCxcbiAgICBMYXllcixcbiAgICBTb3VyY2UsXG4gICAgTWFwRXZlbnRcbn0gZnJvbSBcInJlYWN0LW1hcC1nbFwiO1xuaW1wb3J0IHtcbiAgICB1c2VTdGF0ZSxcbiAgICB1c2VSZWYsXG4gICAgdXNlTWVtbyxcbiAgICB1c2VFZmZlY3Rcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBUeXBlcyB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2RhdGFiYXNlL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgRXhwb3N1cmUgfSBmcm9tICcuLi9kYXRhYmFzZS9FeHBvc3VyZSc7XG5pbXBvcnQga2V5cyBmcm9tIFwiLi4vLi4va2V5c1wiO1xuaW1wb3J0IE1vcmVJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2V3aXNlL2hlYXRtYXAvTW9yZUluZm9cIjtcblxuaW50ZXJmYWNlIFZpZXdQb3J0IHtcbiAgICBsYXRpdHVkZTogbnVtYmVyLFxuICAgIGxvbmdpdHVkZTogbnVtYmVyLFxuICAgIHpvb206IG51bWJlclxufVxuXG5pbnRlcmZhY2UgQ2FjaGUge1xuICAgIGlucHV0OiBhbnksXG4gICAgZXhwb3N1cmVzOiBDb29yZGluYXRlW11cbn1cblxubGV0IHJlY2VudENhbGxUaW1lID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhdG1hcCh7IGFwaUtleSwgZXhwb3N1cmVzIH06IHsgYXBpS2V5OiBzdHJpbmcsIGV4cG9zdXJlczogRXhwb3N1cmVbXSB9KSB7XG4gICAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZTxWaWV3UG9ydD4oe1xuICAgICAgICBsYXRpdHVkZTogNDQuNjUxMDcwLFxuICAgICAgICBsb25naXR1ZGU6IC02My41ODI2ODcsXG4gICAgICAgIHpvb206IDExXG4gICAgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoeyBjb29yZHMgfSkgPT4ge1xuICAgICAgICAgICAgc2V0Vmlld3BvcnQoe1xuICAgICAgICAgICAgICAgIHpvb206IDExLFxuICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBjb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBjb29yZHMubG9uZ2l0dWRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZpbmRFeHBvc3VyZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG1hcFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IFtjYWNoZSwgc2V0Q2FjaGVdID0gdXNlU3RhdGU8Q2FjaGU+KHsgaW5wdXQ6IG51bGwsIGV4cG9zdXJlczogZXhwb3N1cmVzLm1hcCgoZSkgPT4gKHtcbiAgICAgICAgbG9uZzogZS5jb29yZC5sb25nLFxuICAgICAgICBsYXQ6IGUuY29vcmQubGF0LFxuICAgICAgICBfaWQ6IGUuY29vcmQuX2lkXG4gICAgfSkpIH0pO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZpbmRFeHBvc3VyZXMoKSB7fVxuXG4gICAgY29uc3QgZ2VvanNvbiA9IHVzZU1lbW8oKCkgPT4gZ2VuZXJhdGVHZW9qc29uKGNhY2hlLmV4cG9zdXJlcyksIFtjYWNoZS5leHBvc3VyZXNdKTtcblxuICAgIGNvbnN0IFtjbGlja2VkRXhwb3N1cmUsIHNldENsaWNrZWRFeHBvc3VyZV0gPSB1c2VTdGF0ZTxFeHBvc3VyZSAmIHsgYWxsOiB7XG4gICAgICAgIHN0YXJ0OiBudW1iZXIsXG4gICAgICAgIGVuZDogbnVtYmVyLFxuICAgICAgICBpbnN0cnVjdGlvbnM6IHN0cmluZ1xuICAgIH1bXSB9IHwgbnVsbD4obnVsbCk7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xpY2tlZEV4cG9zdXJlKGU6IE1hcEV2ZW50KSB7XG4gICAgICAgIGlmIChlLmZlYXR1cmVzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHNldENsaWNrZWRFeHBvc3VyZShudWxsKTtcblxuICAgICAgICBjb25zdCB7IHByb3BlcnRpZXMgfSA9IGUuZmVhdHVyZXNbMF07XG4gICAgICAgIGlmICghVHlwZXMuT2JqZWN0SWQuaXNWYWxpZChwcm9wZXJ0aWVzLl9pZCkpXG4gICAgICAgICAgICByZXR1cm4gc2V0Q2xpY2tlZEV4cG9zdXJlKG51bGwpO1xuXG4gICAgICAgIGV4cG9zdXJlcy5maW5kSW5kZXgoKVxuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2V4cG9zdXJlLyR7cHJvcGVydGllcy5faWR9YCk7XG4gICAgICAgIHNldENsaWNrZWRFeHBvc3VyZShkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImgtc2NyZWVuXCI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPSdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92Mi4yLjAvbWFwYm94LWdsLmNzcycgcmVsPSdzdHlsZXNoZWV0JyAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBwYi0xMlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIFNob3dpbmcgYWxsIENPVklEIGV4cG9zdXJlIGxvY2F0aW9ucyBpbiB0aGUgZGVtbyBkYXRhYmFzZVxuICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgPFJlYWN0TWFwR0wgbWFwYm94QXBpQWNjZXNzVG9rZW49e2FwaUtleX1cbiAgICAgICAgICAgICAgICAgICAgcmV1c2VNYXBzXG4gICAgICAgICAgICAgICAgICAgIGRyYWdSb3RhdGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExXCJcbiAgICAgICAgICAgICAgICAgICAgey4uLnZpZXdwb3J0fVxuICAgICAgICAgICAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXsodnApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXdwb3J0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHZwLmxvbmdpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogdnAubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgem9vbTogdnAuem9vbVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5kRXhwb3N1cmVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHJlZj17bWFwUmVmfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtnZXRDbGlja2VkRXhwb3N1cmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dab29tPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvbXBhc3M9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RnVsbHNjcmVlbkNvbnRyb2wgY2xhc3NOYW1lPVwicmlnaHQtMFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNvdXJjZSB0eXBlPVwiZ2VvanNvblwiIGRhdGE9e2dlb2pzb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExheWVyIHR5cGU9XCJjaXJjbGVcIiBwYWludD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlLXJhZGl1c1wiOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1vcGFjaXR5XCI6IGdldENpcmNsZU9wYWNpdHkodmlld3BvcnQuem9vbSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGUtc3Ryb2tlLW9wYWNpdHlcIjogZ2V0Q2lyY2xlT3BhY2l0eSh2aWV3cG9ydC56b29tKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1zdHJva2Utd2lkdGhcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1jb2xvclwiOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXllciB0eXBlPVwiaGVhdG1hcFwiIHBhaW50PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWF0bWFwLWNvbG9yXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnRlcnBvbGF0ZVwiLCBbXCJsaW5lYXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcImhlYXRtYXAtZGVuc2l0eVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgXCJyZ2JhKDAsIDAsIDI1NSwgMClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4xLCBcInJveWFsYmx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjMsIFwiY3lhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjUsIFwibGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjcsIFwieWVsbG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsIFwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhdG1hcC1pbnRlbnNpdHlcIjogZ2V0SGVhdG1hcEludGVuc2l0eSh2aWV3cG9ydC56b29tKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlYXRtYXAtb3BhY2l0eVwiOiAwLjY3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhdG1hcC1yYWRpdXNcIjogMzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU291cmNlPlxuXG4gICAgICAgICAgICAgICAgICAgIHtjbGlja2VkRXhwb3N1cmUgJiYgPE1vcmVJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvc3VyZT17Y2xpY2tlZEV4cG9zdXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U9eygpID0+IHNldENsaWNrZWRFeHBvc3VyZShudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgPC9SZWFjdE1hcEdMPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCJzcmMvZGF0YWJhc2UvZXhwb3N1cmVzLmpzb25cIiwgeyBlbmNvZGluZzogXCJ1dGY4XCIgfSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGFwaUtleToga2V5cy5tYXBib3gubWFwLFxuICAgICAgICAgICAgZXhwb3N1cmVzOiBkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHJldmFsaWRhdGU6IDYwKjYwKjYgLy8gNiBob3Vyc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVHZW9qc29uKGV4cG9zdXJlczogQ29vcmRpbmF0ZVtdID0gW10pOiBHZW9KU09OLkZlYXR1cmVDb2xsZWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgICAgIGZlYXR1cmVzOiBleHBvc3VyZXMubWFwKChlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUG9pbnRcIixcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtlLmxvbmcsIGUubGF0XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICBfaWQ6IGUuX2lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW50ZW5zaXR5IG9mIHRoZSBoZWF0bWFwLiBEZWZhdWx0cyB0byAxIHdoZW4gbm90IHNwZWNpZmllZC5cbiAqIChTdWJqZWN0IHRvIGNoYW5nZSlcbiAqIGh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9zdHlsZS1zcGVjL2xheWVycy8jcGFpbnQtaGVhdG1hcC1oZWF0bWFwLW9wYWNpdHlcbiAqXG4gKiBAcGFyYW0gem9vbSB0aGUgY3VycmVudCB2aWV3cG9ydCBtYXAgem9vbVxuICogQHJldHVybnMgdGhlIGhlYXRtYXAgaW50ZW5zaXR5IFswLGluZilcbiAqL1xuZnVuY3Rpb24gZ2V0SGVhdG1hcEludGVuc2l0eSh6b29tOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHB3RGVmbiA9ICh6b29tIDw9IDYuMylcbiAgICAgICAgPyAoMC4xMzcwNip6b29tIC0gMC4xNjM0NylcbiAgICAgICAgOiAoLTAuMDk3MDgqem9vbSArIDEuMzIwNjMpO1xuICAgIHJldHVybiBNYXRoLm1heChwd0RlZm4sIDApO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGludGVuc2l0eSBvZiB0aGUgaW5kaXZpZHVhbCBleHBvc3VyZXMuIERlZmF1bHRzIHRvIDEgd2hlbiBub3Qgc3BlY2lmaWVkLlxuICogKFN1YmplY3QgdG8gY2hhbmdlKVxuICogaHR0cHM6Ly9kb2NzLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3N0eWxlLXNwZWMvbGF5ZXJzLyNwYWludC1jaXJjbGUtY2lyY2xlLW9wYWNpdHlcbiAqXG4gKiBAcGFyYW0gem9vbSB0aGUgY3VycmVudCB2aWV3cG9ydCBtYXAgem9vbVxuICogQHJldHVybnMgdGhlIGhlYXRtYXAgaW50ZW5zaXR5IFswLDFdXG4gKi9cbmZ1bmN0aW9uIGdldENpcmNsZU9wYWNpdHkoem9vbTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgem9vbSAtIDEyKSk7XG59XG5cbi8qKlxuICogRW5jb2RlcyB0aGUgbWFwIGJvdW5kYXJ5IGltcHJlY2lzZWx5LlxuICogQHBhcmFtIG1hcCBhcyBhIHJlZmVyZW5jZVxuICovXG5mdW5jdGlvbiBoYXNoTWFwUmVmKG1hcDogYW55KTogc3RyaW5nIHtcbiAgICBpZiAobWFwLmN1cnJlbnQgPT0gbnVsbCkgcmV0dXJuIFwibnVsbFwiO1xuXG4gICAgY29uc3QgeyBfc3csIF9uZSB9ID0gbWFwLmN1cnJlbnQuZ2V0TWFwKCkuZ2V0Qm91bmRzKCk7XG4gICAgY29uc3QgYm91bmRzID0ge1xuICAgICAgICBzd19sb25nOiBNYXRoLmZsb29yKF9zdy5sbmcqMTApIC8gMTAsXG4gICAgICAgIHN3X2xhdDogTWF0aC5mbG9vcihfc3cubGF0KjEwKSAvIDEwLFxuICAgICAgICBuZV9sb25nOiBNYXRoLmNlaWwoX25lLmxuZyoxMCkgLyAxMCxcbiAgICAgICAgbmVfbGF0OiBNYXRoLmNlaWwoX25lLmxhdCoxMCkgLyAxMFxuICAgIH07XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGJvdW5kcyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/heatmap.tsx\n");

/***/ })

})