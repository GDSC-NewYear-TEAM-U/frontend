"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/components/atom.ts":
/*!**********************************!*\
  !*** ./pages/components/atom.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginData\": () => (/* binding */ LoginData),\n/* harmony export */   \"goodsData\": () => (/* binding */ goodsData)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n\nconst goodsData = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"goodsName\",\n    default: {\n        goodsType: \"\",\n        info: \"\",\n        image: \"\"\n    }\n});\nconst LoginData = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"loginData\",\n    default: \"\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2F0b20udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QjtBQUV2QixNQUFNQyxZQUFZRCw0Q0FBSUEsQ0FBQztJQUM1QkUsS0FBSztJQUNMQyxTQUFTO1FBQ1BDLFdBQVc7UUFDWEMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7QUFDRixHQUFHO0FBRUksTUFBTUMsWUFBWVAsNENBQUlBLENBQUM7SUFDNUJFLEtBQUs7SUFDTEMsU0FBUztBQUNYLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFsbC1wcm9qZWN0Ly4vcGFnZXMvY29tcG9uZW50cy9hdG9tLnRzPzM0YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcblxuZXhwb3J0IGNvbnN0IGdvb2RzRGF0YSA9IGF0b20oe1xuICBrZXk6IFwiZ29vZHNOYW1lXCIsXG4gIGRlZmF1bHQ6IHtcbiAgICBnb29kc1R5cGU6IFwiXCIsXG4gICAgaW5mbzogXCJcIixcbiAgICBpbWFnZTogXCJcIixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgTG9naW5EYXRhID0gYXRvbSh7XG4gIGtleTogXCJsb2dpbkRhdGFcIixcbiAgZGVmYXVsdDogXCJcIixcbn0pO1xuIl0sIm5hbWVzIjpbImF0b20iLCJnb29kc0RhdGEiLCJrZXkiLCJkZWZhdWx0IiwiZ29vZHNUeXBlIiwiaW5mbyIsImltYWdlIiwiTG9naW5EYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/atom.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/sl */ \"react-icons/sl\");\n/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_sl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_atom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/atom */ \"./pages/components/atom.ts\");\n\n\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"pages__Container\",\n    componentId: \"sc-b47be696-0\"\n})`\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 430px;\r\n  height: 100vh;\r\n  background: linear-gradient(\r\n    0deg,\r\n    rgba(255, 88, 154, 1) 0%,\r\n    rgba(255, 129, 86, 1) 100%\r\n  );\r\n`;\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"pages__Content\",\n    componentId: \"sc-b47be696-1\"\n})`\r\n  margin: 220px 70px 0px 70px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n`;\nconst MainImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"pages__MainImage\",\n    componentId: \"sc-b47be696-2\"\n})`\r\n  width: 225px;\r\n  height: 225px;\r\n  font-size: 185px;\r\n  color: white;\r\n`;\nconst MainText = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"pages__MainText\",\n    componentId: \"sc-b47be696-3\"\n})`\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  color:white;\r\n  position: absolute;\r\n  top: 440px;\r\n  left 0px;\r\n  right: 0px; \r\n`;\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"pages__Text\",\n    componentId: \"sc-b47be696-4\"\n})`\r\n  font-size: 16px;\r\n  color: white;\r\n  margin-top: 40px;\r\n`;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({\n    displayName: \"pages__Button\",\n    componentId: \"sc-b47be696-5\"\n})`\r\n  margin-top: 35px;\r\n  border: 0;\r\n  background-color: white;\r\n  width: 232px;\r\n  height: 45px;\r\n  border-radius: 116px;\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n  color: #ff589a;\r\n  cursor: pointer;\r\n  :hover {\r\n    background-color: #dddddd;\r\n  }\r\n`;\nconst Button2 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({\n    displayName: \"pages__Button2\",\n    componentId: \"sc-b47be696-6\"\n})`\r\n  margin-top: 10px;\r\n  border: 2px solid white;\r\n  width: 232px;\r\n  height: 45px;\r\n  border-radius: 116px;\r\n  font-weight: 500;\r\n  font-size: 18px;\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  cursor: pointer;\r\n  :hover {\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n  }\r\n`;\nfunction Home() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [user, setUser] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_components_atom__WEBPACK_IMPORTED_MODULE_6__.LoginData);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        console.log(router.asPath);\n        router.asPath != \"/\" && setUser(router.asPath);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainImage, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_sl__WEBPACK_IMPORTED_MODULE_3__.SlPresent, {}, void 0, false, {\n                            fileName: \"/Users/dongjae/Desktop/frontend 2/pages/index.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dongjae/Desktop/frontend 2/pages/index.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainText, {\n                        children: \"기쁨펀치\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dongjae/Desktop/frontend 2/pages/index.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                        children: \"내 연인은 어떤 선물을 받고 싶을까?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dongjae/Desktop/frontend 2/pages/index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        onClick: ()=>router.push(\"/question\"),\n                        children: \"시작하기\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dongjae/Desktop/frontend 2/pages/index.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this),\n                    user == \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button2, {\n                        onClick: ()=>router.push(\"/login\"),\n                        children: \"로그인\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dongjae/Desktop/frontend 2/pages/index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button2, {\n                        onClick: ()=>{\n                            setUser(\"\");\n                            router.push(`/`);\n                        },\n                        children: \"로그아웃\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dongjae/Desktop/frontend 2/pages/index.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dongjae/Desktop/frontend 2/pages/index.tsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/dongjae/Desktop/frontend 2/pages/index.tsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN3QztBQUNEO0FBQ0k7QUFDQztBQUNlO0FBQ2I7QUFFOUMsTUFBTU0sWUFBWUwsdUVBQVU7OztFQUFBLENBQUM7QUFZN0IsTUFBTU8sVUFBVVA7OztFQUFVLENBQUM7QUFPM0IsTUFBTVEsWUFBWVIsT0FBT00sR0FBRzs7O0VBQUEsQ0FBQztBQU83Qjs7O0VBQTJCLENBQUM7QUFVNUIsTUFBTUksT0FBT1YsT0FBT00sR0FBRzs7O0VBQUEsQ0FBQztBQU14QixNQUFNSyxTQUFTWCxPQUFPWTs7O0VBQU0sQ0FBQztBQWdCN0IsTUFBTUMsVUFBVWIsT0FBT1ksTUFBTTs7O0VBQUEsQ0FBQztBQWdCOUIsZUFBZTtJQUNiLE1BQU1HLFNBQVNoQjtJQUNmLE1BQU0sQ0FBQ2lCOztRQUVMRSxRQUFRQyxDQUFBQSx1RUFBaUI7UUFDekJKLE9BQU9LLE1BQU0sSUFBSSxPQUFPSDtJQUMxQixHQUFHLEVBQUU7SUFDTDtrQkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVFLRCxRQUFROzs7Ozs7Ozs7OzRCQU1IRCxPQUFPTzs7Ozs7Ozt5RUFLWjs7Ozs7Ozs7Ozs7OztBQUtYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFsbC1wcm9qZWN0Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgU2xQcmVzZW50IH0gZnJvbSBcInJlYWN0LWljb25zL3NsXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUsIHVzZVNldFJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgeyBMb2dpbkRhdGEgfSBmcm9tIFwiLi9jb21wb25lbnRzL2F0b21cIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNDMwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAwZGVnLFxyXG4gICAgcmdiYSgyNTUsIDg4LCAxNTQsIDEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDEyOSwgODYsIDEpIDEwMCVcclxuICApO1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAyMjBweCA3MHB4IDBweCA3MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAyMjVweDtcclxuICBoZWlnaHQ6IDIyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTg1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblRleHQgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ0MHB4O1xyXG4gIGxlZnQgMHB4O1xyXG4gIHJpZ2h0OiAwcHg7IFxyXG5gO1xyXG5cclxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMjMycHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDExNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjZmY1ODlhO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b24yID0gc3R5bGVkLmJ1dHRvbmBcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIHdpZHRoOiAyMzJweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VSZWNvaWxTdGF0ZShMb2dpbkRhdGEpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIuYXNQYXRoKTtcclxuICAgIHJvdXRlci5hc1BhdGggIT0gXCIvXCIgJiYgc2V0VXNlcihyb3V0ZXIuYXNQYXRoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICA8TWFpbkltYWdlPlxyXG4gICAgICAgICAgICA8U2xQcmVzZW50IC8+XHJcbiAgICAgICAgICA8L01haW5JbWFnZT5cclxuICAgICAgICAgIDxNYWluVGV4dD7quLDsgajtjoDsuZg8L01haW5UZXh0PlxyXG4gICAgICAgICAgPFRleHQ+64K0IOyXsOyduOydgCDslrTrlqQg7ISg66y87J2EIOuwm+qzoCDsi7bsnYTquYw/PC9UZXh0PlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9xdWVzdGlvblwiKX0+7Iuc7J6R7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgICAgICB7dXNlciA9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICA8QnV0dG9uMiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpblwiKX0+66Gc6re47J24PC9CdXR0b24yPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEJ1dHRvbjJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9gKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg66Gc6re47JWE7JuDXHJcbiAgICAgICAgICAgIDwvQnV0dG9uMj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInN0eWxlZCIsIlNsUHJlc2VudCIsInVzZUVmZmVjdCIsInVzZVJlY29pbFN0YXRlIiwiTG9naW5EYXRhIiwiQ29udGFpbmVyIiwiZGl2IiwiQ29udGVudCIsIk1haW5JbWFnZSIsIk1haW5UZXh0IiwiVGV4dCIsIkJ1dHRvbiIsImJ1dHRvbiIsIkJ1dHRvbjIiLCJIb21lIiwicm91dGVyIiwidXNlciIsInNldFVzZXIiLCJjb25zb2xlIiwibG9nIiwiYXNQYXRoIiwib25DbGljayIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-icons/sl":
/*!*********************************!*\
  !*** external "react-icons/sl" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/sl");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();