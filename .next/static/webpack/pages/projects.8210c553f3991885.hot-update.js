"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./sections/Projects.js":
/*!******************************!*\
  !*** ./sections/Projects.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_streetlight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/streetlight.png */ \"./assets/images/streetlight.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_data_dummydata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/data/dummydata */ \"./assets/data/dummydata.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\n\n\nconst Projectcard = (param)=>{\n    let { clientname , projectarray  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                initial: \"hidden\",\n                whileInView: \"visible\",\n                viewport: {\n                    once: true\n                },\n                transition: {\n                    duration: 0.8\n                },\n                variants: {\n                    visible: {\n                        opacity: 1,\n                        scale: 1,\n                        x: 0,\n                        y: 0\n                    },\n                    hidden: {\n                        opacity: 0,\n                        scale: 1,\n                        y: 60\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        style: {\n                            color: \"black\",\n                            fontSize: \"2rem\",\n                            marginTop: \"2rem\",\n                            marginBottom: \"2rem\"\n                        },\n                        children: clientname\n                    }, void 0, false, {\n                        fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                        lineNumber: 20,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                    lineNumber: 19,\n                    columnNumber: 3\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                lineNumber: 9,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(3,1fr)\",\n                    textAlign: \"center\"\n                },\n                children: projectarray.map((currentproject)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: \"hidden\",\n                        whileInView: \"visible\",\n                        viewport: {\n                            once: true\n                        },\n                        transition: {\n                            duration: 0.8,\n                            delay: 0.8\n                        },\n                        variants: {\n                            visible: {\n                                opacity: 1,\n                                scale: 1,\n                                x: 0,\n                                y: 0\n                            },\n                            hidden: {\n                                opacity: 0,\n                                scale: 1,\n                                y: 60\n                            }\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"marketplace\",\n                            style: {\n                                width: \"75%\",\n                                height: \"50vh\",\n                                backgroundColor: \"white\",\n                                border: \"1px solid black\",\n                                borderRadius: \"4px\",\n                                marginBottom: \"15%\",\n                                marginLeft: \"15%\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: currentproject.projectimg,\n                                        width: \"50%\",\n                                        height: \"210px\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 7\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 5\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            style: {\n                                                color: \"black\"\n                                            },\n                                            children: currentproject.projecttitle\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            style: {\n                                                color: \"black\",\n                                                fontSize: \"0.9rem\"\n                                            },\n                                            children: currentproject.projectdescription\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 5\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                            lineNumber: 41,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                        lineNumber: 31,\n                        columnNumber: 7\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                lineNumber: 27,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Projectcard;\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: \"30vh\",\n                    textAlign: \"center\",\n                    color: \"black\",\n                    fontSize: \"30px\",\n                    marginTop: \"-5%\",\n                    backgroundColor: \"ThreeDLightShadow\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    initial: \"hidden\",\n                    whileInView: \"visible\",\n                    viewport: {\n                        once: true\n                    },\n                    transition: {\n                        duration: 0.8\n                    },\n                    variants: {\n                        visible: {\n                            opacity: 1,\n                            scale: 1,\n                            x: 0,\n                            y: 0\n                        },\n                        hidden: {\n                            opacity: 0,\n                            scale: 1,\n                            y: 60\n                        }\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        style: {\n                            paddingTop: \"10%\",\n                            color: \"whitesmoke\"\n                        },\n                        children: \"Our Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                        lineNumber: 79,\n                        columnNumber: 5\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                    lineNumber: 69,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                lineNumber: 68,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: _assets_data_dummydata__WEBPACK_IMPORTED_MODULE_4__.projectDetails.map((project)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Projectcard, {\n                        clientname: project.client,\n                        projectarray: project.theirprojects\n                    }, void 0, false, {\n                        fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n                lineNumber: 82,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shushant/Desktop/Recourse-tech-main 2/sections/Projects.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c, _c1;\n$RefreshReg$(_c, \"Projectcard\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Siw0RUFBQzBCO3dCQUFHdkMsT0FBTzs0QkFBQ3dDLFlBQVc7NEJBQU14QixPQUFNO3dCQUFZO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUdsRCw4REFBQ2pCOzBCQUVDTCxzRUFBa0IsQ0FBQytDLENBQUFBLFVBQVM7b0JBQzFCLHFCQUNBLDhEQUFDN0M7d0JBQVlDLFlBQVk0QyxRQUFRQyxNQUFNO3dCQUFFNUMsY0FBYzJDLFFBQVFFLGFBQWE7Ozs7OztnQkFFOUU7Ozs7Ozs7Ozs7OztBQU1OO01BN0JNTDtBQStCTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9Qcm9qZWN0cy5qcz82ZGUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBkZW1vaW1nIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3N0cmVldGxpZ2h0LnBuZ1wiXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHByb2plY3REZXRhaWxzIH0gZnJvbSBcIkAvYXNzZXRzL2RhdGEvZHVtbXlkYXRhXCJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG4gY29uc3QgUHJvamVjdGNhcmQgPSh7Y2xpZW50bmFtZSxwcm9qZWN0YXJyYXl9KT0+e1xuICByZXR1cm4oXG4gIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxuICA8bW90aW9uLmRpdlxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcbiAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjggfX1cbiAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHNjYWxlOiAxLCB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHNjYWxlOiAxLCB5OjYwIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgPGRpdj5cbiAgICAgPGg0IHN0eWxlPXt7Y29sb3I6J2JsYWNrJyxmb250U2l6ZTpcIjJyZW1cIixtYXJnaW5Ub3A6XCIycmVtXCIsbWFyZ2luQm90dG9tOlwiMnJlbVwifX0+XG4gICAgICAgIHtjbGllbnRuYW1lfVxuICAgICAgPC9oND5cbiAgPC9kaXY+XG4gIDwvbW90aW9uLmRpdj5cbiAgXG4gIFxuICA8ZGl2ICBzdHlsZT17e2Rpc3BsYXk6XCJncmlkXCIsZ3JpZFRlbXBsYXRlQ29sdW1uczpcInJlcGVhdCgzLDFmcilcIix0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxuICB7XG4gICAgcHJvamVjdGFycmF5Lm1hcCggY3VycmVudHByb2plY3QgPT57XG4gICAgIHJldHVybiAoXG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcbiAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjggLGRlbGF5OjAuOH19XG4gICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCBzY2FsZTogMSwgeDogMCwgeTogMCB9LFxuICAgICAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCBzY2FsZTogMSx5OjYwIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtldHBsYWNlXCIgc3R5bGU9e3t3aWR0aDpcIjc1JVwiLGhlaWdodDpcIjUwdmhcIixiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLGJvcmRlcjpcIjFweCBzb2xpZCBibGFja1wiLGJvcmRlclJhZGl1czpcIjRweFwiLG1hcmdpbkJvdHRvbTpcIjE1JVwiLG1hcmdpbkxlZnQ6XCIxNSVcIix9fT5cbiAgICA8ZGl2PlxuICAgICAgPGltZyBzcmM9e2N1cnJlbnRwcm9qZWN0LnByb2plY3RpbWd9IHdpZHRoPVwiNTAlXCIgaGVpZ2h0PVwiMjEwcHhcIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxoNCBzdHlsZT17e2NvbG9yOlwiYmxhY2tcIn19PntjdXJyZW50cHJvamVjdC5wcm9qZWN0dGl0bGV9PC9oND5cbiAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCJibGFja1wiLGZvbnRTaXplOlwiMC45cmVtXCJ9fT57Y3VycmVudHByb2plY3QucHJvamVjdGRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgPC9kaXY+XG4gIDwvbW90aW9uLmRpdj5cbiAgICAgKVxuICAgIH1cbiAgICBcbiAgICApXG4gIH1cbiAgXG4gIFxuIFxuICA8L2Rpdj5cbiAgXG4gIDwvZGl2PlxuICApXG4gfVxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiA+XG4gICAgPGRpdiBzdHlsZT17e2hlaWdodDpcIjMwdmhcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixjb2xvcjpcImJsYWNrXCIsZm9udFNpemU6XCIzMHB4XCIsbWFyZ2luVG9wOlwiLTUlXCIsYmFja2dyb3VuZENvbG9yOlwiVGhyZWVETGlnaHRTaGFkb3dcIn19PlxuICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxuICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCB9fVxuICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgc2NhbGU6IDEsIHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgc2NhbGU6IDEseTo2MCB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgIDxoMiBzdHlsZT17e3BhZGRpbmdUb3A6XCIxMCVcIixjb2xvcjpcIndoaXRlc21va2VcIn19Pk91ciBQcm9qZWN0czwvaDI+XG4gICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgPlxuICAgIHtcbiAgICAgIHByb2plY3REZXRhaWxzLm1hcChwcm9qZWN0PT57XG4gICAgICAgIHJldHVybihcbiAgICAgICAgPFByb2plY3RjYXJkIGNsaWVudG5hbWU9e3Byb2plY3QuY2xpZW50fSBwcm9qZWN0YXJyYXk9e3Byb2plY3QudGhlaXJwcm9qZWN0c30vPlxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cbiAgIFxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZGVtb2ltZyIsIkltYWdlIiwicHJvamVjdERldGFpbHMiLCJtb3Rpb24iLCJQcm9qZWN0Y2FyZCIsImNsaWVudG5hbWUiLCJwcm9qZWN0YXJyYXkiLCJkaXYiLCJzdHlsZSIsInRleHRBbGlnbiIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInZhcmlhbnRzIiwidmlzaWJsZSIsIm9wYWNpdHkiLCJzY2FsZSIsIngiLCJ5IiwiaGlkZGVuIiwiaDQiLCJjb2xvciIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXAiLCJjdXJyZW50cHJvamVjdCIsImRlbGF5IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5MZWZ0IiwiaW1nIiwic3JjIiwicHJvamVjdGltZyIsInByb2plY3R0aXRsZSIsInAiLCJwcm9qZWN0ZGVzY3JpcHRpb24iLCJQcm9qZWN0cyIsImgyIiwicGFkZGluZ1RvcCIsInByb2plY3QiLCJjbGllbnQiLCJ0aGVpcnByb2plY3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/Projects.js\n"));

/***/ })

});