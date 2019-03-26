"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var clipboard_1 = __importDefault(require("clipboard"));
function onEmptyClick(e) {
    e.stopPropagation();
}
function ReactClipboardFunctionComponent(props) {
    var rc = react_1.useRef(null);
    react_1.useEffect(function () {
        if (props.text) {
            var clipboard_2 = new clipboard_1.default(rc.current, {
                text: function () {
                    return props.text;
                }
            });
            clipboard_2.on("success", function (e) {
                var onCopy = props.onCopy;
                if (onCopy) {
                    onCopy();
                }
            });
            clipboard_2.on("error", function (e) {
                var onError = props.onError;
                if (onError) {
                    onError();
                }
            });
            rc.current.click();
            return function () {
                clipboard_2.destroy();
            };
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: rc, onClick: onEmptyClick }),
        props.children));
}
exports.default = ReactClipboardFunctionComponent;
