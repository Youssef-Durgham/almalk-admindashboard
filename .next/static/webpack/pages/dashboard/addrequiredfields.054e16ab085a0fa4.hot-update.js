"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/addrequiredfields",{

/***/ "./pages/dashboard/addrequiredfields.js":
/*!**********************************************!*\
  !*** ./pages/dashboard/addrequiredfields.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddRequiredField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction AddRequiredField() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [nameError, setNameError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [requiredFields, setRequiredFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newErrors, setNewErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const userToken = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"token\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!userToken) {\n            router.push(\"/\");\n        }\n    }, []);\n    const handleNameChange = (event)=>{\n        setName(event.target.value);\n        setNameError(null);\n        setNewErrors(null);\n    };\n    const handleAddFieldClick = ()=>{\n        setRequiredFields([\n            ...requiredFields,\n            \"\"\n        ]);\n    };\n    const handleFieldChange = (event, index)=>{\n        const newRequiredFields = [\n            ...requiredFields\n        ];\n        newRequiredFields[index] = event.target.value;\n        setRequiredFields(newRequiredFields);\n        setNewErrors(null);\n    };\n    const handleRemoveFieldClick = (indexToRemove)=>{\n        const newRequiredFields = requiredFields.filter((_, index)=>index !== indexToRemove);\n        setRequiredFields(newRequiredFields);\n        // const newErrors = errors.filter((_, index) => index !== indexToRemove);\n        // setNewErrors(newErrors);\n        setNewErrors(null);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (name.trim() === \"\") {\n            setNameError(\"Please Enter The Category Name\");\n            return;\n        }\n        const fieldsWithValues = requiredFields.filter((field)=>field.trim() !== \"\");\n        const fieldsWithNoValues = requiredFields.filter((field)=>field.trim() === \"\");\n        if (fieldsWithNoValues.length >= 1) {\n            setNewErrors(\"Please Enter The value of all fields you add or remove that one you do'nt need it\");\n            return;\n        }\n        if (!fieldsWithValues.length >= 1) {\n            setNewErrors(\"At least one field is required\");\n            return;\n        }\n        const data = {\n            name,\n            fieldName: fieldsWithValues\n        };\n        const postData = async ()=>{\n            try {\n                const res = await fetch(\"http://ap.almalk.org:3000/category/required-fields\", {\n                    method: \"POST\",\n                    headers: {\n                        \"content-type\": \"application/json\",\n                        \"x-access-token\": JSON.stringify(userToken)\n                    },\n                    body: JSON.stringify(data)\n                });\n                if (res.status === 401) {\n                    console.log(\"run 2 401\");\n                }\n                router.push(\"/dashboard/categories\");\n            } catch (error) {\n                console.error(\"error\", error);\n                console.log(\"run 3\");\n            }\n        };\n        postData();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                lineNumber: 100,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"max-w-md my-[100px] mobile:w-[90%] rounded-md border-1 bg-gray-800 text-white p-10 shadow-md mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block font-bold mb-2 text-white\",\n                                htmlFor: \"name\",\n                                children: \"Category Name:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                                lineNumber: 103,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                value: name,\n                                onChange: handleNameChange,\n                                className: \" appearance-none py-3 px-3 text-gray-700 leading-tight focus:shadow-outline focus:border-2 w-full border-gray-500 p-3 rounded-md focus:border-[#E77600] focus:shadow-md focus:outline-none text-left\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                                lineNumber: 106,\n                                columnNumber: 9\n                            }, this),\n                            nameError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-500 text-xs italic\",\n                                children: \"Name is required\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                        lineNumber: 102,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-white font-bold mb-2\",\n                                htmlFor: \"requiredFields\",\n                                children: \"Required Fields:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                                lineNumber: 118,\n                                columnNumber: 9\n                            }, this),\n                            requiredFields.map((field, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center mb-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            value: field,\n                                            onChange: (event)=>handleFieldChange(event, index),\n                                            className: \" appearance-none focus:border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline border-gray-500 p-3 focus:border-[#E77600] focus:shadow-md focus:outline-none text-left\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            className: \"ml-2 text-red-500\",\n                                            onClick: ()=>handleRemoveFieldClick(index),\n                                            children: \"Remove\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                                            lineNumber: 132,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 11\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-full text-gray-900 font-bold\",\n                                onClick: handleAddFieldClick,\n                                children: \"Add Field\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                                lineNumber: 141,\n                                columnNumber: 9\n                            }, this),\n                            newErrors && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-500 text-xs italic\",\n                                children: newErrors\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                                lineNumber: 149,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                        lineNumber: 117,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-[#DB9E43] hover:bg-[#c98e37] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline\",\n                        children: \"Add Category\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                        lineNumber: 152,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Projects\\\\almalk-admindashboard\\\\pages\\\\dashboard\\\\addrequiredfields.js\",\n                lineNumber: 101,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AddRequiredField, \"NIFNJSqC5bKWMBt9sho/WfsErkE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = AddRequiredField;\nvar _c;\n$RefreshReg$(_c, \"AddRequiredField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvYWRkcmVxdWlyZWRmaWVsZHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ1o7QUFDWTtBQUNKO0FBRXpCLFNBQVNLLG1CQUFtQjs7SUFDekMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DLE1BQU0sQ0FBQ1MsZ0JBQWdCQyxrQkFBa0IsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUN2RCxNQUFNLENBQUNXLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUMsSUFBSTtJQUMvQyxNQUFNYSxZQUFZWixxREFBVyxDQUFDO0lBQzlCLE1BQU1jLFNBQVNaLHNEQUFTQTtJQUV4QkosZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUcsQ0FBQ2MsV0FBVTtZQUNaRSxPQUFPQyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwsTUFBTUMsbUJBQW1CLENBQUNDLFFBQVU7UUFDbENaLFFBQVFZLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztRQUMxQlosYUFBYSxJQUFJO1FBQ2pCSSxhQUFhLElBQUk7SUFDbkI7SUFFQSxNQUFNUyxzQkFBc0IsSUFBTTtRQUNoQ1gsa0JBQWtCO2VBQUlEO1lBQWdCO1NBQUc7SUFDM0M7SUFFQSxNQUFNYSxvQkFBb0IsQ0FBQ0osT0FBT0ssUUFBVTtRQUMxQyxNQUFNQyxvQkFBb0I7ZUFBSWY7U0FBZTtRQUM3Q2UsaUJBQWlCLENBQUNELE1BQU0sR0FBR0wsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO1FBQzdDVixrQkFBa0JjO1FBQ2xCWixhQUFhLElBQUk7SUFDbkI7SUFFQSxNQUFNYSx5QkFBeUIsQ0FBQ0MsZ0JBQWtCO1FBQ2hELE1BQU1GLG9CQUFvQmYsZUFBZWtCLE1BQU0sQ0FDN0MsQ0FBQ0MsR0FBR0wsUUFBVUEsVUFBVUc7UUFFMUJoQixrQkFBa0JjO1FBQ2xCLDBFQUEwRTtRQUMxRSwyQkFBMkI7UUFDM0JaLGFBQWEsSUFBSTtJQUNuQjtJQUVBLE1BQU1pQixlQUFlLENBQUNYLFFBQVU7UUFDOUJBLE1BQU1ZLGNBQWM7UUFDcEIsSUFBSXpCLEtBQUswQixJQUFJLE9BQU8sSUFBSTtZQUN0QnZCLGFBQWE7WUFDYjtRQUNGLENBQUM7UUFFRCxNQUFNd0IsbUJBQW1CdkIsZUFBZWtCLE1BQU0sQ0FBQyxDQUFDTSxRQUFVQSxNQUFNRixJQUFJLE9BQU87UUFDM0UsTUFBTUcscUJBQXFCekIsZUFBZWtCLE1BQU0sQ0FBQyxDQUFDTSxRQUFVQSxNQUFNRixJQUFJLE9BQU87UUFFN0UsSUFBSUcsbUJBQW1CQyxNQUFNLElBQUksR0FBRztZQUNsQ3ZCLGFBQWE7WUFDYjtRQUNGLENBQUM7UUFFRCxJQUFJLENBQUNvQixpQkFBaUJHLE1BQU0sSUFBSSxHQUFHO1lBQ2pDdkIsYUFBYTtZQUNiO1FBQ0YsQ0FBQztRQUVELE1BQU13QixPQUFPO1lBQ1gvQjtZQUNBZ0MsV0FBV0w7UUFDYjtRQUVBLE1BQU1NLFdBQVcsVUFBWTtZQUMzQixJQUFJO2dCQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxzREFBc0Q7b0JBQzVFQyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjt3QkFDaEIsa0JBQWtCQyxLQUFLQyxTQUFTLENBQUMvQjtvQkFDbkM7b0JBQ0FnQyxNQUFNRixLQUFLQyxTQUFTLENBQUNSO2dCQUN2QjtnQkFFQSxJQUFJRyxJQUFJTyxNQUFNLEtBQUssS0FBSztvQkFDdEJDLFFBQVFDLEdBQUcsQ0FBQztnQkFDZCxDQUFDO2dCQUNEakMsT0FBT0MsSUFBSSxDQUFDO1lBQ2QsRUFBRSxPQUFPaUMsT0FBTztnQkFDZEYsUUFBUUUsS0FBSyxDQUFDLFNBQVNBO2dCQUN2QkYsUUFBUUMsR0FBRyxDQUFDO1lBQ2Q7UUFDRjtRQUVBVjtJQUNGO0lBR0EscUJBQ0U7OzBCQUNBLDhEQUFDcEMsMERBQU1BOzs7OzswQkFDUCw4REFBQ2dEO2dCQUFLQyxVQUFVdEI7Z0JBQWN1QixXQUFVOztrQ0FDdEMsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQU1GLFdBQVU7Z0NBQW1DRyxTQUFROzBDQUFPOzs7Ozs7MENBR25FLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSHRDLE9BQU9mO2dDQUNQc0QsVUFBVTFDO2dDQUNWbUMsV0FBVTs7Ozs7OzRCQUVYN0MsMkJBQ0MsOERBQUNxRDtnQ0FBRVIsV0FBVTswQ0FBOEI7Ozs7Ozs7Ozs7OztrQ0FHL0MsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQU1GLFdBQVU7Z0NBQWtDRyxTQUFROzBDQUFpQjs7Ozs7OzRCQUczRTlDLGVBQWVvRCxHQUFHLENBQUMsQ0FBQzVCLE9BQU9WLHNCQUMxQiw4REFBQzhCO29DQUFnQkQsV0FBVTs7c0RBQ3pCLDhEQUFDSTs0Q0FDQ0MsTUFBSzs0Q0FDTHJDLE9BQU9hOzRDQUNQMEIsVUFBVSxDQUFDekMsUUFBVUksa0JBQWtCSixPQUFPSzs0Q0FDOUM2QixXQUFVOzs7Ozs7c0RBS1osOERBQUNVOzRDQUNDTCxNQUFLOzRDQUNMTCxXQUFVOzRDQUNWVyxTQUFTLElBQU10Qyx1QkFBdUJGO3NEQUN2Qzs7Ozs7OzttQ0FkT0E7Ozs7OzBDQW1CWiw4REFBQ3VDO2dDQUNDTCxNQUFLO2dDQUNMTCxXQUFVO2dDQUNWVyxTQUFTMUM7MENBQ1Y7Ozs7Ozs0QkFHQVYsMkJBQ0gsOERBQUNpRDtnQ0FBRVIsV0FBVTswQ0FBK0J6Qzs7Ozs7Ozs7Ozs7O2tDQUdoRCw4REFBQ21EO3dCQUNDTCxNQUFLO3dCQUNMTCxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7OztBQU1ILENBQUM7R0EzSnVCaEQ7O1FBT1BELGtEQUFTQTs7O0tBUEZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC9hZGRyZXF1aXJlZGZpZWxkcy5qcz9hN2VjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcidcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRSZXF1aXJlZEZpZWxkKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYW1lRXJyb3IsIHNldE5hbWVFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgW3JlcXVpcmVkRmllbGRzLCBzZXRSZXF1aXJlZEZpZWxkc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25ld0Vycm9ycywgc2V0TmV3RXJyb3JzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighdXNlclRva2VuKXtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0TmFtZUVycm9yKG51bGwpXHJcbiAgICBzZXROZXdFcnJvcnMobnVsbClcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRGaWVsZENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0UmVxdWlyZWRGaWVsZHMoWy4uLnJlcXVpcmVkRmllbGRzLCBcIlwiXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmllbGRDaGFuZ2UgPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBuZXdSZXF1aXJlZEZpZWxkcyA9IFsuLi5yZXF1aXJlZEZpZWxkc107XHJcbiAgICBuZXdSZXF1aXJlZEZpZWxkc1tpbmRleF0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRSZXF1aXJlZEZpZWxkcyhuZXdSZXF1aXJlZEZpZWxkcyk7XHJcbiAgICBzZXROZXdFcnJvcnMobnVsbClcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVGaWVsZENsaWNrID0gKGluZGV4VG9SZW1vdmUpID0+IHtcclxuICAgIGNvbnN0IG5ld1JlcXVpcmVkRmllbGRzID0gcmVxdWlyZWRGaWVsZHMuZmlsdGVyKFxyXG4gICAgICAoXywgaW5kZXgpID0+IGluZGV4ICE9PSBpbmRleFRvUmVtb3ZlXHJcbiAgICApO1xyXG4gICAgc2V0UmVxdWlyZWRGaWVsZHMobmV3UmVxdWlyZWRGaWVsZHMpO1xyXG4gICAgLy8gY29uc3QgbmV3RXJyb3JzID0gZXJyb3JzLmZpbHRlcigoXywgaW5kZXgpID0+IGluZGV4ICE9PSBpbmRleFRvUmVtb3ZlKTtcclxuICAgIC8vIHNldE5ld0Vycm9ycyhuZXdFcnJvcnMpO1xyXG4gICAgc2V0TmV3RXJyb3JzKG51bGwpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKG5hbWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHNldE5hbWVFcnJvcihcIlBsZWFzZSBFbnRlciBUaGUgQ2F0ZWdvcnkgTmFtZVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgZmllbGRzV2l0aFZhbHVlcyA9IHJlcXVpcmVkRmllbGRzLmZpbHRlcigoZmllbGQpID0+IGZpZWxkLnRyaW0oKSAhPT0gXCJcIik7XHJcbiAgICBjb25zdCBmaWVsZHNXaXRoTm9WYWx1ZXMgPSByZXF1aXJlZEZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC50cmltKCkgPT09IFwiXCIpO1xyXG4gIFxyXG4gICAgaWYgKGZpZWxkc1dpdGhOb1ZhbHVlcy5sZW5ndGggPj0gMSkge1xyXG4gICAgICBzZXROZXdFcnJvcnMoXCJQbGVhc2UgRW50ZXIgVGhlIHZhbHVlIG9mIGFsbCBmaWVsZHMgeW91IGFkZCBvciByZW1vdmUgdGhhdCBvbmUgeW91IGRvJ250IG5lZWQgaXRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICAgIGlmICghZmllbGRzV2l0aFZhbHVlcy5sZW5ndGggPj0gMSkge1xyXG4gICAgICBzZXROZXdFcnJvcnMoXCJBdCBsZWFzdCBvbmUgZmllbGQgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGZpZWxkTmFtZTogZmllbGRzV2l0aFZhbHVlcyxcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBwb3N0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9hcC5hbG1hbGsub3JnOjMwMDAvY2F0ZWdvcnkvcmVxdWlyZWQtZmllbGRzXCIsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6IEpTT04uc3RyaW5naWZ5KHVzZXJUb2tlbiksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJydW4gMiA0MDFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZC9jYXRlZ29yaWVzXCIpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJydW4gM1wiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIHBvc3REYXRhKCk7XHJcbiAgfTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8TmF2YmFyLz5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm1heC13LW1kIG15LVsxMDBweF0gbW9iaWxlOnctWzkwJV0gcm91bmRlZC1tZCBib3JkZXItMSBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHAtMTAgc2hhZG93LW1kIG14LWF1dG9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHRleHQtd2hpdGVcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgIGZvbnQtYm9sZCBtYi0yIHRleHQtd2hpdGVcIiBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgQ2F0ZWdvcnkgTmFtZTpcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgYXBwZWFyYW5jZS1ub25lIHB5LTMgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgIGZvY3VzOnNoYWRvdy1vdXRsaW5lICAgZm9jdXM6Ym9yZGVyLTIgdy1mdWxsICBib3JkZXItZ3JheS01MDAgcC0zIHJvdW5kZWQtbWQgIGZvY3VzOmJvcmRlci1bI0U3NzYwMF0gZm9jdXM6c2hhZG93LW1kIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWxlZnRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge25hbWVFcnJvciAmJiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC14cyBpdGFsaWNcIj5OYW1lIGlzIHJlcXVpcmVkPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC13aGl0ZSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJyZXF1aXJlZEZpZWxkc1wiPlxyXG4gICAgICAgICAgUmVxdWlyZWQgRmllbGRzOlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAge3JlcXVpcmVkRmllbGRzLm1hcCgoZmllbGQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTJcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmaWVsZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVGaWVsZENoYW5nZShldmVudCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBhcHBlYXJhbmNlLW5vbmUgZm9jdXM6Ym9yZGVyLTIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCAgZm9jdXM6c2hhZG93LW91dGxpbmUgYm9yZGVyLWdyYXktNTAwIHAtMyAgZm9jdXM6Ym9yZGVyLVsjRTc3NjAwXSBmb2N1czpzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKiB7ZXJyb3JzW2luZGV4XSAmJiAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQteHMgaXRhbGljIG1sLTJcIj57ZXJyb3JzW2luZGV4XX08L3A+XHJcbiAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUZpZWxkQ2xpY2soaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTQwMCBweS0yIHB4LTQgcm91bmRlZC1mdWxsIHRleHQtZ3JheS05MDAgZm9udC1ib2xkXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZEZpZWxkQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIEZpZWxkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge25ld0Vycm9ycyAmJiAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXhzIGl0YWxpY1wiPntuZXdFcnJvcnN9PC9wPlxyXG4gICAgKX1cclxuICA8L2Rpdj5cclxuICA8YnV0dG9uXHJcbiAgICB0eXBlPVwic3VibWl0XCJcclxuICAgIGNsYXNzTmFtZT1cImJnLVsjREI5RTQzXSBob3ZlcjpiZy1bI2M5OGUzN10gIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICA+XHJcbiAgICBBZGQgQ2F0ZWdvcnlcclxuICA8L2J1dHRvbj5cclxuPC9mb3JtPlxyXG48Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29va2llcyIsIk5hdmJhciIsInVzZVJvdXRlciIsIkFkZFJlcXVpcmVkRmllbGQiLCJuYW1lIiwic2V0TmFtZSIsIm5hbWVFcnJvciIsInNldE5hbWVFcnJvciIsInJlcXVpcmVkRmllbGRzIiwic2V0UmVxdWlyZWRGaWVsZHMiLCJuZXdFcnJvcnMiLCJzZXROZXdFcnJvcnMiLCJ1c2VyVG9rZW4iLCJnZXQiLCJyb3V0ZXIiLCJwdXNoIiwiaGFuZGxlTmFtZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBZGRGaWVsZENsaWNrIiwiaGFuZGxlRmllbGRDaGFuZ2UiLCJpbmRleCIsIm5ld1JlcXVpcmVkRmllbGRzIiwiaGFuZGxlUmVtb3ZlRmllbGRDbGljayIsImluZGV4VG9SZW1vdmUiLCJmaWx0ZXIiLCJfIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiZmllbGRzV2l0aFZhbHVlcyIsImZpZWxkIiwiZmllbGRzV2l0aE5vVmFsdWVzIiwibGVuZ3RoIiwiZGF0YSIsImZpZWxkTmFtZSIsInBvc3REYXRhIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImJvZHkiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicCIsIm1hcCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard/addrequiredfields.js\n"));

/***/ })

});