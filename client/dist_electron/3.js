exports.ids = [3];
exports.modules = {

/***/ "../server/src/controllers/address.controller.js":
/*!*******************************************************!*\
  !*** ../server/src/controllers/address.controller.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ \"../node_modules/yup/es/index.js\");\n/* harmony import */ var _models_Address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Address */ \"../server/src/models/Address.js\");\n/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/errors */ \"../server/src/utils/errors.js\");\n\r\n\r\n\r\n\r\nlet addressController = {\r\n  add: async (req, res) => {\r\n    try {\r\n      const schema = yup__WEBPACK_IMPORTED_MODULE_0__[\"object\"]().shape({\r\n        city: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().required(),\r\n        state: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().required(),\r\n        neighborhood: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().required(),\r\n        country: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().required(),\r\n      });\r\n\r\n      if (!(await schema.isValid(req.body)))\r\n        return res.status(400).json({ error: _utils_errors__WEBPACK_IMPORTED_MODULE_2__[\"Errors\"].VALIDATION_FAILS });\r\n\r\n      const addressExists = await _models_Address__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\r\n        where: { ...req.body },\r\n      });\r\n\r\n      if (addressExists)\r\n        return res.status(400).json({ error: _utils_errors__WEBPACK_IMPORTED_MODULE_2__[\"Errors\"].ADDRESS_ALREADY_EXISTS });\r\n\r\n      const address = await _models_Address__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\r\n\r\n      return res.status(200).json(address);\r\n    } catch (error) {\r\n      console.log(error);\r\n      return res.status(500).json({ error: _utils_errors__WEBPACK_IMPORTED_MODULE_2__[\"Errors\"].SERVER_ERROR });\r\n    }\r\n  },\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (addressController);\r\n\n\n//# sourceURL=webpack:///../server/src/controllers/address.controller.js?");

/***/ }),

/***/ "../server/src/routes/address.routes.js":
/*!**********************************************!*\
  !*** ../server/src/routes/address.routes.js ***!
  \**********************************************/
/*! exports provided: addressRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addressRoutes\", function() { return addressRoutes; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"../node_modules/express/index.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_address_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/address.controller */ \"../server/src/controllers/address.controller.js\");\n\r\n\r\n\r\nconst addressRoutes = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\r\naddressRoutes.post(\"/address\", _controllers_address_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///../server/src/routes/address.routes.js?");

/***/ }),

/***/ "../server/src/utils/errors.js":
/*!*************************************!*\
  !*** ../server/src/utils/errors.js ***!
  \*************************************/
/*! exports provided: Errors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Errors\", function() { return Errors; });\nconst Errors = {\r\n  ADDRESS_ALREADY_EXISTS: {\r\n    code: \"ADDRESS_ALREADY_EXISTS\",\r\n    message: \"Address already exists\",\r\n  },\r\n  NONEXISTENT_ADDRESS: {\r\n    code: \"NONEXISTENT_ADDRESS\",\r\n    message: \"Address not found\",\r\n  },\r\n  USER_ALREADY_EXISTS: {\r\n    code: \"USER_ALREADY_EXISTS\",\r\n    message: \"User already exists\",\r\n  },\r\n  WRONG_PASSWORD: {\r\n    code: \"WRONG_PASSWORD\",\r\n    message: \"Password does not match\",\r\n  },\r\n  NONEXISTENT_USER: {\r\n    code: \"NONEXISTENT_USER\",\r\n    message: \"User not found\",\r\n  },\r\n  VALIDATION_FAILS: {\r\n    code: \"VALIDATION_FAILS\",\r\n    message: \"Validation fails\",\r\n  },\r\n  SERVER_ERROR: {\r\n    code: \"SERVER_ERROR\",\r\n    message: \"Internal server error\",\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack:///../server/src/utils/errors.js?");

/***/ })

};;