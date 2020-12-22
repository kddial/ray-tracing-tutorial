(this["webpackJsonpray-tracing-tutorial"] = this["webpackJsonpray-tracing-tutorial"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html,\nbody {\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n}\n\n#root {\n  width: 100%;\n  height: 100%;\n}\n\n.canvas-container {\n  width: 100%;\n  height: 100%;\n  background: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ncanvas {\n  width: 100%;\n  max-width: 512px;\n  image-rendering: optimizeSpeed;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: -webkit-optimize-contrast;\n  image-rendering: -o-crisp-edges;\n  image-rendering: optimize-contrast;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n  -ms-interpolation-mode: nearest-neighbor;\n}\n\n.game-info {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 250px;\n  height: 100px;\n  background: white;\n  font-family: monospace;\n  font-size: 12px;\n}\n\np {\n  margin: 0;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;;EAEE,YAAY;EACZ,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,8BAA8B;EAC9B,iCAAiC;EACjC,0CAA0C;EAC1C,+BAA+B;EAC/B,kCAAkC;EAClC,4BAA4B;EAC5B,0BAA0B;EAC1B,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,SAAS;AACX","sourcesContent":["html,\nbody {\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n}\n\n#root {\n  width: 100%;\n  height: 100%;\n}\n\n.canvas-container {\n  width: 100%;\n  height: 100%;\n  background: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ncanvas {\n  width: 100%;\n  max-width: 512px;\n  image-rendering: optimizeSpeed;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: -webkit-optimize-contrast;\n  image-rendering: -o-crisp-edges;\n  image-rendering: optimize-contrast;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n  -ms-interpolation-mode: nearest-neighbor;\n}\n\n.game-info {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 250px;\n  height: 100px;\n  background: white;\n  font-family: monospace;\n  font-size: 12px;\n}\n\np {\n  margin: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/app-main.tsx":
/*!**************************!*\
  !*** ./src/app-main.tsx ***!
  \**************************/
/*! exports provided: WIDTH, HEIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDTH", function() { return WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT", function() { return HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppMain; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step */ "./src/step.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/kevindial/Workspace/ray-tracing-tutorial/src/app-main.tsx",
    _s = __webpack_require__.$Refresh$.signature();

// @ts-nocheck

 // Configuration

const WIDTH = 256; // should match in kernalFunction

const HEIGHT = 256;
function AppMain() {
  _s();

  const canvasRef1 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const [isLocked, setIsLocked] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [uiCameraAngleX, setUICameraAngleX] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const [uiCameraAngleY, setUICameraAngleY] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const [uiCameraOrigin, setUICameraOrigin] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0, 0, 0]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (canvasRef1.current != null) {
      const canvas = canvasRef1.current || {};
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      const kernal = Object(_step__WEBPACK_IMPORTED_MODULE_2__["setup"])(canvas, setIsLocked);
      Object(_step__WEBPACK_IMPORTED_MODULE_2__["step"])(kernal, setUICameraAngleX, setUICameraAngleY, setUICameraOrigin);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "canvas-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
      id: "canvas1",
      ref: canvasRef1,
      style: {
        border: isLocked ? 'none' : '3px solid yellow'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "game-info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Canvas locked: ", isLocked ? 'true' : 'false']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Camera AngleX: ", uiCameraAngleX]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Camera AngleY: ", uiCameraAngleY]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Camera Origin: ", stringifyVectors(uiCameraOrigin)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(AppMain, "rbK9cQ7UIf+mDY0sqHAIbpYB+kY=");

_c = AppMain;

function stringifyVectors(vec) {
  return `${roundTwoDec(vec[0])}, ${roundTwoDec(vec[1])}, ${roundTwoDec(vec[2])}`;
}

function roundTwoDec(floatNum) {
  return Math.round(floatNum * 100) / 100;
}

var _c;

__webpack_require__.$Refresh$.register(_c, "AppMain");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/canvas-main-gpu.tsx":
/*!*********************************!*\
  !*** ./src/canvas-main-gpu.tsx ***!
  \*********************************/
/*! exports provided: canvasMainGpu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasMainGpu", function() { return canvasMainGpu; });
/* harmony import */ var _app_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-main */ "./src/app-main.tsx");
/* harmony import */ var gpu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gpu.js */ "./node_modules/gpu.js/dist/gpu-browser.js");
/* harmony import */ var gpu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gpu_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vector_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector-functions */ "./src/vector-functions.tsx");
/* harmony import */ var _ray_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ray-functions */ "./src/ray-functions.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

// @ts-nocheck




function canvasMainGpu(canvasRef) {
  const gpu = new gpu_js__WEBPACK_IMPORTED_MODULE_1__["GPU"]({
    mode: 'gpu',
    // mode: 'cpu', // debug in cpu mode
    canvas: canvasRef
  });
  _vector_functions__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(vecFuncDefinition => {
    gpu.addFunction(...vecFuncDefinition);
  });
  _ray_functions__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(rayFunc => {
    gpu.addFunction(rayFunc);
  });
  const kernal = gpu.createKernel(kernalFunction, {
    output: [_app_main__WEBPACK_IMPORTED_MODULE_0__["WIDTH"], _app_main__WEBPACK_IMPORTED_MODULE_0__["HEIGHT"]],
    graphical: true
  });
  return kernal;
}

function kernalFunction(cameraOriginRaw, cameraAngleX, cameraAngleY, sphereEntities, numSphereEntities) {
  // constants
  const PI = 3.1415926535897932385; // canvas

  const canvasWidth = 256;
  const canvasHeight = 256; // camera

  const viewportHeight = 2;
  const viewportWidth = 2;
  const focalLength = 2; // camera

  const cameraOrigin = [cameraOriginRaw[0], cameraOriginRaw[1], cameraOriginRaw[2]];
  const cRadiansX = cameraAngleX * PI / 180;
  const cRadiansY = cameraAngleY * PI / 180;
  const cameraDirection = [Math.cos(cRadiansX), Math.sin(cRadiansY), Math.sin(cRadiansX)]; // x,y,x => u,v,w

  const vup = [0, 1, 0]; // vector up in the y-axis

  const w = vecUnit(cameraDirection);
  const u = vecCross(vup, w);
  const v = vecCross(w, u);
  const cameraHorizontal = vecMultiplyNum(u, viewportWidth);
  const cameraVertical = vecMultiplyNum(v, viewportHeight);
  let lowerLeftCameraOrigin = vecSubtract(cameraOrigin, vecDivideNum(cameraHorizontal, 2));
  lowerLeftCameraOrigin = vecSubtract(lowerLeftCameraOrigin, vecDivideNum(cameraVertical, 2));
  const lowerLeftCameraPlane = vecSubtract(lowerLeftCameraOrigin, vecMultiplyNum(w, focalLength)); // rays

  const i = this.thread.x;
  const j = this.thread.y;
  const s = vecMultiplyNum(cameraHorizontal, i / (canvasWidth - 1));
  const t = vecMultiplyNum(cameraVertical, j / (canvasHeight - 1));
  const rayDirection = vecSubtract(vecAdd(vecAdd(lowerLeftCameraPlane, s), t), cameraOrigin); // cycle through sphere entities

  let nearestSphereT = -1;
  let nearestSphereCenter = [0, 0, 0];

  for (let ii = 0; ii < numSphereEntities; ii++) {
    const sphereRadius = sphereEntities[ii][0];
    const sphereCenter = [sphereEntities[ii][1], sphereEntities[ii][2], sphereEntities[ii][3]];
    const t = hitSphere(cameraOrigin, rayDirection, sphereCenter, sphereRadius);

    if (t > 0) {
      if (nearestSphereT === -1 || nearestSphereT !== -1 && t < nearestSphereT) {
        nearestSphereT = t;
        nearestSphereCenter = sphereCenter;
      }
    }
  }

  const canvasColor = rayColor(cameraOrigin, rayDirection, nearestSphereT, nearestSphereCenter);
  this.color(canvasColor[0], canvasColor[1], canvasColor[2]);
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-main */ "./src/app-main.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/kevindial/Workspace/ray-tracing-tutorial/src/index.tsx";




react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_main__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById('root'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/key-press.tsx":
/*!***************************!*\
  !*** ./src/key-press.tsx ***!
  \***************************/
/*! exports provided: keyPress, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyPress", function() { return keyPress; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const keyPress = {};

function keyUpListener(event) {
  const eventKey = event.key.toLowerCase();
  keyPress[eventKey] = 0;
}

function keyDownListener(event) {
  const eventKey = event.key.toLowerCase();
  keyPress[eventKey] = Date.now();
}

window.addEventListener('keydown', keyDownListener, false);
window.addEventListener('keyup', keyUpListener, false);
/* harmony default export */ __webpack_exports__["default"] = (keyPress);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/ray-functions.tsx":
/*!*******************************!*\
  !*** ./src/ray-functions.tsx ***!
  \*******************************/
/*! exports provided: rayAt, hitSphere, raySkyColor, rayColor, rayFunctions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayAt", function() { return rayAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitSphere", function() { return hitSphere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raySkyColor", function() { return raySkyColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayColor", function() { return rayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayFunctions", function() { return rayFunctions; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

// @ts-nocheck
// can refer for hitSphere or hitTriangle
// https://github.com/evanw/lightgl.js/blob/master/src/raytracer.js
function rayAt(rayOrigin, rayDirection, t) {
  return vecAdd(vecMultiplyNum(rayDirection, t), rayOrigin);
}
function hitSphere(rayOrigin, rayDirection, sphereCenter, radius) {
  const offsetCenter = vecSubtract(rayOrigin, sphereCenter);
  const a = vecLengthSquared(rayDirection);
  const halfB = vecDot(offsetCenter, rayDirection);
  const c = vecLengthSquared(offsetCenter) - radius * radius;
  const discriminant = halfB * halfB - a * c;

  if (discriminant < 0) {
    return -1;
  } else {
    return (-halfB - Math.sqrt(discriminant)) / a;
  }
}
function raySkyColor(rayDirection) {
  const unit_direction = vecUnit(rayDirection);
  const t = 0.5 * (unit_direction[1] + 1);
  const color1 = vecMultiplyNum([1, 1, 1], 1 - t);
  const color2 = vecMultiplyNum([0.5, 0.7, 1.0], t);
  return vecAdd(color1, color2);
}
function rayColor(rayOrigin, rayDirection, sphereT, sphereCenter) {
  if (sphereT > 0) {
    const normal = vecUnit(vecSubtract(rayAt(rayOrigin, rayDirection, sphereT), sphereCenter));
    return vecMultiplyNum(vecAddNum(normal, 1), 0.5);
  }

  return raySkyColor(rayDirection);
}
const rayFunctions = [rayAt, hitSphere, raySkyColor, rayColor];
/* harmony default export */ __webpack_exports__["default"] = (rayFunctions);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/step.tsx":
/*!**********************!*\
  !*** ./src/step.tsx ***!
  \**********************/
/*! exports provided: setup, step */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "step", function() { return step; });
/* harmony import */ var _canvas_main_gpu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas-main-gpu */ "./src/canvas-main-gpu.tsx");
/* harmony import */ var _key_press__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key-press */ "./src/key-press.tsx");
/* harmony import */ var _vector_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector-functions */ "./src/vector-functions.tsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const moveMultiplier = 0.1;
const mouseSensitivity = 0.5;
let mouseX = 0;
let mouseY = 0;
let cameraAngleX = 0; // in degrees

let cameraAngleY = 0; // in degrees

let cameraOrigin = [2, 0.5, 2];
const sphereEntities = [// radius, center x, y, z
[0.5, -10, 0, -4]];

function createSpheresOnAxis() {
  const radius = 0.05;
  const distBetween = 0.1;
  const num = 10;

  for (let i = 0; i < num; i++) {
    sphereEntities.push([radius, i * distBetween, 0, 0]);
    sphereEntities.push([radius, 0, i * distBetween, 0]);
    sphereEntities.push([radius, 0, 0, i * distBetween]);
  }
}

createSpheresOnAxis();
function setup(canvas, setIsLocked) {
  // mouse lock
  canvas.onclick = () => {
    canvas.requestPointerLock();
  };

  function lockChangeAlert() {
    if (document.pointerLockElement === canvas) {
      setIsLocked(true);
      console.log('locked');
      document.addEventListener('mousemove', updatePosition, false);
    } else {
      setIsLocked(false);
      console.log('unlocked');
      document.removeEventListener('mousemove', updatePosition, false);
    }
  }

  document.addEventListener('pointerlockchange', lockChangeAlert, false);
  const kernal = Object(_canvas_main_gpu__WEBPACK_IMPORTED_MODULE_0__["canvasMainGpu"])(canvas);
  return kernal;
}

function updatePosition(e) {
  mouseX += e.movementX * mouseSensitivity;
  mouseY += e.movementY * mouseSensitivity;
}

function step(kernal, setUICameraAngleX, setUICameraAngleY, setUICameraOrigin) {
  function step() {
    // update camera
    cameraAngleX = (cameraAngleX + mouseX) % 360;
    cameraAngleY = mathClamp(cameraAngleY + mouseY, -45, 45);
    mouseX = 0;
    mouseY = 0;
    cameraOrigin = Object(_vector_functions__WEBPACK_IMPORTED_MODULE_2__["vecAdd"])(cameraOrigin, Object(_vector_functions__WEBPACK_IMPORTED_MODULE_2__["vecMultiplyNum"])(getMoveVector(), moveMultiplier)); // render graphics

    kernal(cameraOrigin, cameraAngleX, cameraAngleY, sphereEntities, sphereEntities.length); // set game info for React UI

    setUICameraAngleX(cameraAngleX);
    setUICameraAngleY(cameraAngleY);
    setUICameraOrigin(cameraOrigin);
    window.requestAnimationFrame(step);
  }

  step();
}

function mathClamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

function getMoveVector() {
  // camera origin angle is facing -x
  // in clockwise order, -x, -z, x, z  === W N E S
  // forward is -x
  // backward is +x
  // left is +z
  // right is -z
  let moveVector = [0, 0, 0];
  const x = 0;
  const z = 2;

  if (_key_press__WEBPACK_IMPORTED_MODULE_1__["default"]['w']) {
    moveVector[x] = -1;
  }

  if (_key_press__WEBPACK_IMPORTED_MODULE_1__["default"]['s']) {
    moveVector[x] = 1;
  }

  if (_key_press__WEBPACK_IMPORTED_MODULE_1__["default"]['a']) {
    moveVector[z] = 1;
  }

  if (_key_press__WEBPACK_IMPORTED_MODULE_1__["default"]['d']) {
    moveVector[z] = -1;
  }

  moveVector = Object(_vector_functions__WEBPACK_IMPORTED_MODULE_2__["vecUnit"])(moveVector); // rotate moveVector by cameraAngleX in counter-clockwise rotation
  // x' = x·cosθ - y·sinθ
  // y' = x·sinθ + y·cosθ
  // in our 3d space looking from birds-eye view, x-axis is x and z-axis is y.

  const oldX = moveVector[x];
  const oldZ = moveVector[z];
  const theta = cameraAngleX * Math.PI / 180;
  const newX = oldX * Math.cos(theta) - oldZ * Math.sin(theta);
  const newZ = oldX * Math.sin(theta) + oldZ * Math.cos(theta);
  return [newX, 0, newZ];
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/vector-functions.tsx":
/*!**********************************!*\
  !*** ./src/vector-functions.tsx ***!
  \**********************************/
/*! exports provided: vecNegative, vecAdd, vecAddNum, vecSubtract, vecSubtractNum, vecMultiply, vecMultiplyNum, vecDivide, vecDivideNum, vecEquals, vecDot, vecCross, vecLength, vecLengthSquared, vecUnit, vecMin, vecMax, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecNegative", function() { return vecNegative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecAdd", function() { return vecAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecAddNum", function() { return vecAddNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecSubtract", function() { return vecSubtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecSubtractNum", function() { return vecSubtractNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecMultiply", function() { return vecMultiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecMultiplyNum", function() { return vecMultiplyNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecDivide", function() { return vecDivide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecDivideNum", function() { return vecDivideNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecEquals", function() { return vecEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecDot", function() { return vecDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecCross", function() { return vecCross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecLength", function() { return vecLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecLengthSquared", function() { return vecLengthSquared; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecUnit", function() { return vecUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecMin", function() { return vecMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vecMax", function() { return vecMax; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

// Inspo: https://github.com/evanw/lightgl.js/blob/master/src/vector.js
function vecNegative(vec) {
  return [-vec[0], -vec[1], -vec[2]];
}
function vecAdd(vec1, vec2) {
  return [vec1[0] + vec2[0], vec1[1] + vec2[1], vec1[2] + vec2[2]];
}
function vecAddNum(vec1, num) {
  return [vec1[0] + num, vec1[1] + num, vec1[2] + num];
}
function vecSubtract(vec1, vec2) {
  return [vec1[0] - vec2[0], vec1[1] - vec2[1], vec1[2] - vec2[2]];
}
function vecSubtractNum(vec1, num) {
  return [vec1[0] - num, vec1[1] - num, vec1[2] - num];
}
function vecMultiply(vec1, vec2) {
  return [vec1[0] * vec2[0], vec1[1] * vec2[1], vec1[2] * vec2[2]];
}
function vecMultiplyNum(vec1, num) {
  return [vec1[0] * num, vec1[1] * num, vec1[2] * num];
}
function vecDivide(vec1, vec2) {
  return [vec1[0] / vec2[0], vec1[1] / vec2[1], vec1[2] / vec2[2]];
}
function vecDivideNum(vec1, num) {
  return [vec1[0] / num, vec1[1] / num, vec1[2] / num];
}
function vecEquals(vec1, vec2) {
  return vec1[0] === vec2[0] && vec1[1] === vec2[1] && vec1[2] === vec2[2] ? 1 : 0;
}
function vecDot(vec1, vec2) {
  return vec1[0] * vec2[0] + vec1[1] * vec2[1] + vec1[2] * vec2[2];
}
function vecCross(vec1, vec2) {
  const x = 0;
  const y = 1;
  const z = 2;
  return [vec1[y] * vec2[z] - vec1[z] * vec2[y], vec1[z] * vec2[x] - vec1[x] * vec2[z], vec1[x] * vec2[y] - vec1[y] * vec2[x]];
}
function vecLength(vec) {
  const dot = vec[0] * vec[0] + vec[1] * vec[1] + vec[2] * vec[2];
  return Math.sqrt(dot);
}
function vecLengthSquared(vec) {
  const dot = vec[0] * vec[0] + vec[1] * vec[1] + vec[2] * vec[2];
  return dot;
}
function vecUnit(vec) {
  const dot = vec[0] * vec[0] + vec[1] * vec[1] + vec[2] * vec[2];
  let length = Math.sqrt(dot);

  if (length === 0) {
    length = 1;
  }

  return [vec[0] / length, vec[1] / length, vec[2] / length];
}
function vecMin(vec) {
  return Math.min(Math.min(vec[0], vec[1]), vec[2]);
}
function vecMax(vec) {
  return Math.max(Math.max(vec[0], vec[1]), vec[2]);
} // export function vecToAngles() {
//   return {
//     theta: Math.atan2(this.z, this.x),
//     phi: Math.asin(this.y / this.length()),
//   };
// }
// export function vecAngleTo(a: Vector) {
//   return Math.acos(this.dot(a) / (this.length() * a.length()));
// }

const returnTypeArray3 = func => {
  return [func, {
    returnType: 'Array(3)'
  }];
};

const createFuncDefinition = (func, argumentTypes, returnType) => {
  return [func, {
    argumentTypes,
    returnType: returnType
  }];
};

const returnTypeNumber = func => {
  return [func, {
    returnType: 'Number'
  }];
};

const vectorFunctions = [returnTypeArray3(vecNegative), returnTypeArray3(vecAdd), returnTypeArray3(vecAddNum), createFuncDefinition(vecSubtract, {
  vec1: 'Array(3)',
  vec2: 'Array(3)'
}, 'Array(3)'), returnTypeArray3(vecSubtractNum), returnTypeArray3(vecMultiply), returnTypeArray3(vecMultiplyNum), returnTypeArray3(vecDivide), createFuncDefinition(vecDivideNum, {
  vec1: 'Array(3)',
  num: 'Number'
}, 'Array(3)'), returnTypeNumber(vecEquals), createFuncDefinition(vecDot, {
  vec1: 'Array(3)',
  vec2: 'Array(3)'
}, 'Number'), returnTypeArray3(vecCross), createFuncDefinition(vecLength, {
  vec: 'Array(3)'
}, 'Number'), createFuncDefinition(vecLengthSquared, {
  vec: 'Array(3)'
}, 'Number'), createFuncDefinition(vecUnit, {
  vec: 'Array(3)'
}, 'Array(3)'), returnTypeNumber(vecMin), returnTypeNumber(vecMax)];
/* harmony default export */ __webpack_exports__["default"] = (vectorFunctions);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kevindial/Workspace/ray-tracing-tutorial/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/kevindial/Workspace/ray-tracing-tutorial/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/kevindial/Workspace/ray-tracing-tutorial/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/kevindial/Workspace/ray-tracing-tutorial/src/index.tsx */"./src/index.tsx");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map