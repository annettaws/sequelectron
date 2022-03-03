exports.ids = [1];
exports.modules = {

/***/ "../server/src/controllers/login.controller.js":
/*!*****************************************************!*\
  !*** ../server/src/controllers/login.controller.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User */ \"../server/src/models/User.js\");\n/* harmony import */ var _services_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/jwt.service */ \"../server/src/services/jwt.service.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"../node_modules/yup/es/index.js\");\n/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/errors */ \"../server/src/utils/errors.js\");\n\r\n\r\n\r\n\r\n\r\nlet loginController = {\r\n  login: async (req, res) => {\r\n    try {\r\n      const schema = yup__WEBPACK_IMPORTED_MODULE_2__[\"object\"]().shape({\r\n        email: yup__WEBPACK_IMPORTED_MODULE_2__[\"string\"]().email().required(),\r\n        password: yup__WEBPACK_IMPORTED_MODULE_2__[\"string\"]().required(),\r\n      });\r\n\r\n      if (!(await schema.isValid(req.body)))\r\n        return res.status(400).json({ error: _utils_errors__WEBPACK_IMPORTED_MODULE_3__[\"Errors\"].VALIDATION_FAILS });\r\n\r\n      let { email, password } = req.body;\r\n\r\n      const user = await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({ where: { email } });\r\n\r\n      if (!user)\r\n        return res.status(400).send({ error: _utils_errors__WEBPACK_IMPORTED_MODULE_3__[\"Errors\"].NONEXISTENT_USER });\r\n\r\n      if (!(await user.checkPassword(password)))\r\n        return res.status(401).send({ error: _utils_errors__WEBPACK_IMPORTED_MODULE_3__[\"Errors\"].WRONG_PASSWORD });\r\n      console.log(user.id);\r\n      const token = _services_jwt_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].jwtSign(user.id);\r\n      return res.status(200).json({ user, token });\r\n    } catch (error) {\r\n      console.log(error);\r\n      return res.status(500).json({ error: _utils_errors__WEBPACK_IMPORTED_MODULE_3__[\"Errors\"].SERVER_ERROR });\r\n    }\r\n  },\r\n\r\n  logout: async (req, res) => {\r\n    try {\r\n      _services_jwt_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].jwtBlacklistToken(_services_jwt_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].jwtGetToken(req));\r\n\r\n      res.status(200).json({ msg: \"Authorized\" });\r\n    } catch (error) {\r\n      console.log(error);\r\n      return res.status(500).json({ error: _utils_errors__WEBPACK_IMPORTED_MODULE_3__[\"Errors\"].SERVER_ERROR });\r\n    }\r\n  },\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (loginController);\r\n\n\n//# sourceURL=webpack:///../server/src/controllers/login.controller.js?");

/***/ }),

/***/ "../server/src/middlewares/auth.middleware.js":
/*!****************************************************!*\
  !*** ../server/src/middlewares/auth.middleware.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_jwt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/jwt.service */ \"../server/src/services/jwt.service.js\");\n\r\n\r\nconst authMiddleware = async (req, res, next) => {\r\n  try {\r\n    if (process.env.SERVER_JWT === \"false\") return next();\r\n\r\n    const token = _services_jwt_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"].jwtGetToken(req);\r\n\r\n    const decoded = _services_jwt_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"].jwtVerify(token);\r\n\r\n    req.userId = decoded;\r\n\r\n    return next();\r\n  } catch (error) {\r\n    console.log(\"[EXPRESS] Unauthorized error with JWT validation \\n\", error);\r\n    res.status(401).json({ error: \"Token invalid\" });\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (authMiddleware);\r\n\n\n//# sourceURL=webpack:///../server/src/middlewares/auth.middleware.js?");

/***/ }),

/***/ "../server/src/routes/login.routes.js":
/*!********************************************!*\
  !*** ../server/src/routes/login.routes.js ***!
  \********************************************/
/*! exports provided: loginRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRoutes\", function() { return loginRoutes; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"../node_modules/express/index.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_login_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/login.controller */ \"../server/src/controllers/login.controller.js\");\n/* harmony import */ var _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/auth.middleware */ \"../server/src/middlewares/auth.middleware.js\");\n\r\n\r\n\r\n\r\n\r\nconst loginRoutes = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\r\n\r\nloginRoutes.post(\"/login\", _controllers_login_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].login);\r\nloginRoutes.get(\"/logout\", _middlewares_auth_middleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _controllers_login_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].logout);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///../server/src/routes/login.routes.js?");

/***/ }),

/***/ "../server/src/services/jwt.service.js":
/*!*********************************************!*\
  !*** ../server/src/services/jwt.service.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"../node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nlet jwtidCounter = 0;\r\nlet blacklist = [];\r\n\r\nconst JwtService = {\r\n  jwtSign: (_payload) => {\r\n    try {\r\n      if (process.env.SERVER_JWT !== \"true\")\r\n        throw new Error(\"[JWT] Fastify JWT flag is not setted\");\r\n\r\n      console.log(\"[JWT] Generating fastify JWT sign\");\r\n\r\n      const payload = JSON.parse(JSON.stringify(_payload));\r\n\r\n      jwtidCounter = jwtidCounter + 1;\r\n      return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign({ payload }, process.env.SERVER_JWT_SECRET, {\r\n        expiresIn: Number(process.env.SERVER_JWT_TIMEOUT),\r\n        jwtid: jwtidCounter + \"\",\r\n      });\r\n    } catch (error) {\r\n      console.log(\"[JWT] Error during fastify JWT sign\");\r\n      throw error;\r\n    }\r\n  },\r\n\r\n  jwtGetToken: (request) => {\r\n    try {\r\n      if (process.env.SERVER_JWT !== \"true\")\r\n        throw new Error(\"[JWT] JWT flag is not setted\");\r\n      if (\r\n        !request.headers.authorization ||\r\n        request.headers.authorization.split(\" \")[0] !== \"Bearer\"\r\n      )\r\n        throw new Error(\"[JWT] JWT token not provided\");\r\n\r\n      return request.headers.authorization.split(\" \")[1];\r\n    } catch (error) {\r\n      console.log(\"[JWT] Error getting JWT token\");\r\n      throw error;\r\n    }\r\n  },\r\n\r\n  jwtVerify: (token) => {\r\n    try {\r\n      if (process.env.SERVER_JWT !== \"true\")\r\n        throw new Error(\"[JWT] JWT flag is not setted\");\r\n\r\n      return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(\r\n        token,\r\n        process.env.SERVER_JWT_SECRET,\r\n        (err, decoded) => {\r\n          blacklist.forEach((element) => {\r\n            if (\r\n              element.jti === decoded.jti &&\r\n              element.iat === decoded.iat &&\r\n              element.exp === decoded.exp\r\n            )\r\n              throw err;\r\n          });\r\n\r\n          console.log(decoded);\r\n          if (err != null) throw err;\r\n          return decoded.payload;\r\n        }\r\n      );\r\n    } catch (error) {\r\n      console.log(\"[JWT] Error getting JWT token\");\r\n      throw error;\r\n    }\r\n  },\r\n\r\n  jwtBlacklistToken: (token) => {\r\n    try {\r\n      while (\r\n        blacklist.length &&\r\n        moment__WEBPACK_IMPORTED_MODULE_1___default()().diff(\"1970-01-01 00:00:00Z\", \"seconds\") > blacklist[0].exp\r\n      ) {\r\n        console.log(\r\n          `[JWT] Removing from blacklist timed out JWT with id ${blacklist[0].jti}`\r\n        );\r\n        blacklist.shift();\r\n      }\r\n      const { jti, exp, iat } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.decode(token);\r\n      console.log(`[JWT] Adding JWT ${token} with id ${jti} to blacklist`);\r\n      blacklist.push({ jti, exp, iat });\r\n    } catch (error) {\r\n      console.log(\"[JWT] Error blacklisting fastify JWT token\");\r\n      throw error;\r\n    }\r\n  },\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (JwtService);\r\n\n\n//# sourceURL=webpack:///../server/src/services/jwt.service.js?");

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