webpackHotUpdate("cms",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js?!./src/components/Nav.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--12-oneOf-1-1!./node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src??ref--12-oneOf-1-2!./src/components/Nav.css ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".Nav {\n  background: var(--primary);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  border-bottom: 1px solid var(--lightGrey);\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.025);\n          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.025);\n}\n\n.Nav--Container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 6rem;\n}\n\n.Nav--Links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.Nav--Links > * + * {\n  margin-left: 1rem;\n}\n\n.Nav .Logo {\n  margin-right: 3rem;\n  position: relative;\n}\n\n.Nav--MenuButton {\n  display: none !important;\n}\n\n.NavLink {\n  padding: 0.5rem 1rem;\n  display: block;\n  font-weight: 500;\n  -webkit-transition: color 0.2s, border-bottom-color 0.2s;\n  transition: color 0.2s, border-bottom-color 0.2s;\n  color: rgb(223, 223, 223);\n  text-decoration: none;\n  border-bottom: 2px solid;\n  border-bottom-color: transparent;\n}\n\n.NavLink:hover,\n.NavLink.active,\n.NavLink:focus {\n  border-bottom-color: currentColor;\n}\n\n.Nav--Group {\n  position: relative;\n  cursor: pointer;\n}\n\n.Nav--GroupParent {\n  padding-right: 3rem;\n}\n\n.Nav--GroupParent::after {\n  content: '';\n  position: absolute;\n  top: calc(50% - 0.2rem);\n  right: 1rem;\n  border-bottom: 2px solid var(--darkGrey);\n  border-right: 2px solid var(--darkGrey);\n  display: block;\n  height: 0.8rem;\n  width: 0.8rem;\n  -webkit-transition: 0.3s ease all;\n  transition: 0.3s ease all;\n  -webkit-transform: translateY(-50%) rotate(45deg);\n          transform: translateY(-50%) rotate(45deg);\n}\n\n.Nav--GroupLinks {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: auto;\n  background: white;\n  /* opacity: 0; */\n  max-height: 0;\n  overflow: hidden;\n  -webkit-transition: 0.3s ease all;\n  transition: 0.3s ease all;\n}\n\n.Nav--Group.active .Nav--GroupLinks {\n  max-height: 100vh;\n  opacity: 1;\n  -webkit-transition: 0.6s ease all;\n  transition: 0.6s ease all;\n}\n\n.Nav--Group.active .Nav--GroupParent::after {\n  top: calc(50% + 0.2rem);\n  -webkit-transform: translateY(-50%) rotate(-135deg);\n          transform: translateY(-50%) rotate(-135deg);\n}\n\n.Nav--GroupLink {\n  display: block;\n  position: relative;\n  width: 15rem;\n}\n\n@media (max-width: 600px) {\n  .Nav--Container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n\n  .Nav--MenuButton {\n    display: block !important;\n    margin-left: auto;\n    z-index: 1;\n  }\n  .Nav .Logo {\n    z-index: 1;\n  }\n\n  .Nav--Links {\n    display: none;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: fixed;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: white;\n    -webkit-animation: Nav--Links 0.2s ease;\n            animation: Nav--Links 0.2s ease;\n  }\n\n  .Nav--Links > * + * {\n    margin-left: 0;\n    margin-top: 1rem;\n  }\n\n  .Nav-active .Nav--Links {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n\n  .Nav-active .NavLink {\n    -webkit-animation: Nav--Link 0.3s ease-out;\n            animation: Nav--Link 0.3s ease-out;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n  }\n\n  .Nav .NavLink {\n    font-size: 2.5rem;\n    font-weight: 300;\n  }\n\n  .Nav .NavLink:nth-of-type(2) {\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s;\n  }\n  .Nav .NavLink:nth-of-type(3) {\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s;\n  }\n  .Nav .NavLink:nth-of-type(4) {\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s;\n  }\n  .Nav .NavLink:nth-of-type(5) {\n    -webkit-animation-delay: 0.4s;\n            animation-delay: 0.4s;\n  }\n  .Nav .NavLink:nth-of-type(6) {\n    -webkit-animation-delay: 0.5s;\n            animation-delay: 0.5s;\n  }\n  .Nav .NavLink:nth-of-type(7) {\n    -webkit-animation-delay: 0.6s;\n            animation-delay: 0.6s;\n  }\n  .Nav .NavLink:nth-of-type(8) {\n    -webkit-animation-delay: 0.7s;\n            animation-delay: 0.7s;\n  }\n  .Nav .NavLink:nth-of-type(7) {\n    -webkit-animation-delay: 0.6s;\n            animation-delay: 0.6s;\n  }\n\n  .Nav--GroupLinks {\n    position: relative;\n    text-align: center;\n  }\n\n  .Nav--GroupLinks .NavLink {\n    font-size: 1.5rem;\n    width: auto;\n  }\n}\n\n@-webkit-keyframes Nav--Link {\n  from {\n    -webkit-transform: translate(0rem, 1rem);\n            transform: translate(0rem, 1rem);\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n\n@keyframes Nav--Link {\n  from {\n    -webkit-transform: translate(0rem, 1rem);\n            transform: translate(0rem, 1rem);\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n}\n\n@-webkit-keyframes Nav--Links {\n  from {\n    opacity: 0;\n  }\n}\n\n@keyframes Nav--Links {\n  from {\n    opacity: 0;\n  }\n}\n", "", {"version":3,"sources":["/Users/Tristen/Desktop/dev/UTDallasRugby.github.io/src/components/Nav.css"],"names":[],"mappings":"AAAA;EACE,2BAA0B;EAC1B,yBAAgB;EAAhB,iBAAgB;EAChB,OAAM;EACN,WAAU;EACV,0CAAyC;EACzC,mDAA0C;UAA1C,2CAA0C;CAC5C;;AAEA;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,0BAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,aAAY;CACd;;AAEA;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,uBAAqB;MAArB,oBAAqB;UAArB,sBAAqB;EACrB,yBAAuB;MAAvB,sBAAuB;UAAvB,wBAAuB;EACvB,+BAAmB;EAAnB,8BAAmB;MAAnB,wBAAmB;UAAnB,oBAAmB;CACrB;;AAEA;EACE,kBAAiB;CACnB;;AAEA;EACE,mBAAkB;EAClB,mBAAkB;CACpB;;AAEA;EACE,yBAAwB;CAC1B;;AAEA;EACE,qBAAoB;EACpB,eAAc;EACd,iBAAgB;EAChB,yDAAgD;EAAhD,iDAAgD;EAChD,0BAAyB;EACzB,sBAAqB;EACrB,yBAAwB;EACxB,iCAAgC;CAClC;;AAEA;;;EAGE,kCAAiC;CACnC;;AAEA;EACE,mBAAkB;EAClB,gBAAe;CACjB;;AAEA;EACE,oBAAmB;CACrB;;AAEA;EACE,YAAW;EACX,mBAAkB;EAClB,wBAAuB;EACvB,YAAW;EACX,yCAAwC;EACxC,wCAAuC;EACvC,eAAc;EACd,eAAc;EACd,cAAa;EACb,kCAAyB;EAAzB,0BAAyB;EACzB,kDAAyC;UAAzC,0CAAyC;CAC3C;;AAEA;EACE,mBAAkB;EAClB,UAAS;EACT,QAAO;EACP,YAAW;EACX,kBAAiB;EACjB,iBAAgB;EAChB,cAAa;EACb,iBAAgB;EAChB,kCAAyB;EAAzB,0BAAyB;CAC3B;;AAEA;EACE,kBAAiB;EACjB,WAAU;EACV,kCAAyB;EAAzB,0BAAyB;CAC3B;;AAEA;EACE,wBAAuB;EACvB,oDAA2C;UAA3C,4CAA2C;CAC7C;;AAEA;EACE,eAAc;EACd,mBAAkB;EAClB,aAAY;CACd;;AAEA;EACE;IACE,qBAAa;IAAb,qBAAa;IAAb,cAAa;GACf;;EAEA;IACE,0BAAyB;IACzB,kBAAiB;IACjB,WAAU;GACZ;EACA;IACE,WAAU;GACZ;;EAEA;IACE,cAAa;IACb,0BAAmB;QAAnB,uBAAmB;YAAnB,oBAAmB;IACnB,6BAAsB;IAAtB,8BAAsB;QAAtB,2BAAsB;YAAtB,uBAAsB;IACtB,gBAAe;IACf,yBAAuB;QAAvB,sBAAuB;YAAvB,wBAAuB;IACvB,OAAM;IACN,QAAO;IACP,SAAQ;IACR,UAAS;IACT,kBAAiB;IACjB,wCAA+B;YAA/B,gCAA+B;GACjC;;EAEA;IACE,eAAc;IACd,iBAAgB;GAClB;;EAEA;IACE,qBAAa;IAAb,qBAAa;IAAb,cAAa;GACf;;EAEA;IACE,2CAAkC;YAAlC,mCAAkC;IAClC,kCAAyB;YAAzB,0BAAyB;GAC3B;;EAEA;IACE,kBAAiB;IACjB,iBAAgB;GAClB;;EAEA;IACE,8BAAqB;YAArB,sBAAqB;GACvB;EACA;IACE,8BAAqB;YAArB,sBAAqB;GACvB;EACA;IACE,8BAAqB;YAArB,sBAAqB;GACvB;EACA;IACE,8BAAqB;YAArB,sBAAqB;GACvB;EACA;IACE,8BAAqB;YAArB,sBAAqB;GACvB;EACA;IACE,8BAAqB;YAArB,sBAAqB;GACvB;EACA;IACE,8BAAqB;YAArB,sBAAqB;GACvB;EACA;IACE,8BAAqB;YAArB,sBAAqB;GACvB;;EAEA;IACE,mBAAkB;IAClB,mBAAkB;GACpB;;EAEA;IACE,kBAAiB;IACjB,YAAW;GACb;CACF;;AAEA;EACE;IACE,yCAAgC;YAAhC,iCAAgC;IAChC,WAAU;GACZ;EACA;IACE,WAAU;IACV,mCAA0B;YAA1B,2BAA0B;GAC5B;CACF;;AATA;EACE;IACE,yCAAgC;YAAhC,iCAAgC;IAChC,WAAU;GACZ;EACA;IACE,WAAU;IACV,mCAA0B;YAA1B,2BAA0B;GAC5B;CACF;;AAEA;EACE;IACE,WAAU;GACZ;CACF;;AAJA;EACE;IACE,WAAU;GACZ;CACF","file":"Nav.css","sourcesContent":[".Nav {\n  background: var(--primary);\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  border-bottom: 1px solid var(--lightGrey);\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.025);\n}\n\n.Nav--Container {\n  display: flex;\n  align-items: center;\n  height: 6rem;\n}\n\n.Nav--Links {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  flex-direction: row;\n}\n\n.Nav--Links > * + * {\n  margin-left: 1rem;\n}\n\n.Nav .Logo {\n  margin-right: 3rem;\n  position: relative;\n}\n\n.Nav--MenuButton {\n  display: none !important;\n}\n\n.NavLink {\n  padding: 0.5rem 1rem;\n  display: block;\n  font-weight: 500;\n  transition: color 0.2s, border-bottom-color 0.2s;\n  color: rgb(223, 223, 223);\n  text-decoration: none;\n  border-bottom: 2px solid;\n  border-bottom-color: transparent;\n}\n\n.NavLink:hover,\n.NavLink.active,\n.NavLink:focus {\n  border-bottom-color: currentColor;\n}\n\n.Nav--Group {\n  position: relative;\n  cursor: pointer;\n}\n\n.Nav--GroupParent {\n  padding-right: 3rem;\n}\n\n.Nav--GroupParent::after {\n  content: '';\n  position: absolute;\n  top: calc(50% - 0.2rem);\n  right: 1rem;\n  border-bottom: 2px solid var(--darkGrey);\n  border-right: 2px solid var(--darkGrey);\n  display: block;\n  height: 0.8rem;\n  width: 0.8rem;\n  transition: 0.3s ease all;\n  transform: translateY(-50%) rotate(45deg);\n}\n\n.Nav--GroupLinks {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: auto;\n  background: white;\n  /* opacity: 0; */\n  max-height: 0;\n  overflow: hidden;\n  transition: 0.3s ease all;\n}\n\n.Nav--Group.active .Nav--GroupLinks {\n  max-height: 100vh;\n  opacity: 1;\n  transition: 0.6s ease all;\n}\n\n.Nav--Group.active .Nav--GroupParent::after {\n  top: calc(50% + 0.2rem);\n  transform: translateY(-50%) rotate(-135deg);\n}\n\n.Nav--GroupLink {\n  display: block;\n  position: relative;\n  width: 15rem;\n}\n\n@media (max-width: 600px) {\n  .Nav--Container {\n    display: flex;\n  }\n\n  .Nav--MenuButton {\n    display: block !important;\n    margin-left: auto;\n    z-index: 1;\n  }\n  .Nav .Logo {\n    z-index: 1;\n  }\n\n  .Nav--Links {\n    display: none;\n    align-items: center;\n    flex-direction: column;\n    position: fixed;\n    justify-content: center;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: white;\n    animation: Nav--Links 0.2s ease;\n  }\n\n  .Nav--Links > * + * {\n    margin-left: 0;\n    margin-top: 1rem;\n  }\n\n  .Nav-active .Nav--Links {\n    display: flex;\n  }\n\n  .Nav-active .NavLink {\n    animation: Nav--Link 0.3s ease-out;\n    animation-fill-mode: both;\n  }\n\n  .Nav .NavLink {\n    font-size: 2.5rem;\n    font-weight: 300;\n  }\n\n  .Nav .NavLink:nth-of-type(2) {\n    animation-delay: 0.1s;\n  }\n  .Nav .NavLink:nth-of-type(3) {\n    animation-delay: 0.2s;\n  }\n  .Nav .NavLink:nth-of-type(4) {\n    animation-delay: 0.3s;\n  }\n  .Nav .NavLink:nth-of-type(5) {\n    animation-delay: 0.4s;\n  }\n  .Nav .NavLink:nth-of-type(6) {\n    animation-delay: 0.5s;\n  }\n  .Nav .NavLink:nth-of-type(7) {\n    animation-delay: 0.6s;\n  }\n  .Nav .NavLink:nth-of-type(8) {\n    animation-delay: 0.7s;\n  }\n  .Nav .NavLink:nth-of-type(7) {\n    animation-delay: 0.6s;\n  }\n\n  .Nav--GroupLinks {\n    position: relative;\n    text-align: center;\n  }\n\n  .Nav--GroupLinks .NavLink {\n    font-size: 1.5rem;\n    width: auto;\n  }\n}\n\n@keyframes Nav--Link {\n  from {\n    transform: translate(0rem, 1rem);\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes Nav--Links {\n  from {\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

})
//# sourceMappingURL=cms.2552c750885297bb8f4e.hot-update.js.map