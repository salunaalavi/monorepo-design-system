import styleInject from '../../../node_modules/style-inject/dist/style-inject.es.js';

var css_248z = ".styles-module_root__Xsw1F {\r\n  display: block;\r\n  position: relative;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.styles-module_root__Xsw1F input {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  opacity: 0;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n\r\n.styles-module_root__Xsw1F span {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.styles-module_root__Xsw1F span::after {\r\n  position: absolute;\r\n  display: none;\r\n  content: \"\";\r\n}\r\n\r\n.styles-module_root__Xsw1F input:checked ~ span::after {\r\n  display: block;\r\n}\r\n\r\n.styles-module_root__Xsw1F span::after {\r\n  border: 1px solid white;\r\n  -webkit-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}";
var styles = {"root":"styles-module_root__Xsw1F"};
styleInject(css_248z);

export { styles as default };
