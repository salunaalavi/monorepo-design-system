import styleInject from './node_modules/style-inject/dist/style-inject.es.js';

var css_248z = ".styles-module_root__C1pV2 {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  font-weight: 600;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.styles-module_root__C1pV2 input {\n  position: absolute;\n  cursor: pointer;\n  opacity: 0;\n  height: 0;\n  width: 0;\n}\n.styles-module_root__C1pV2 span {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.styles-module_root__C1pV2 span::after {\n  position: absolute;\n  display: none;\n  content: \"\";\n}\n.styles-module_root__C1pV2 input:checked ~ span::after {\n  display: block;\n}\n.styles-module_root__C1pV2 span::after {\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}";
var styles = {"root":"styles-module_root__C1pV2"};
styleInject(css_248z);

export { styles as default };
