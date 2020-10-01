"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var ModalModern = function ModalModern(req) {
  return "<div div class=\"modal-modern\" >\n                <label for=\"modal-1\">\n                    <div class=\"modal-trigger\">".concat(req.text, "</div>\n                </label>\n                <input class=\"modal-state\" id=\"modal-1\" type=\"checkbox\" />\n                <div class=\"modal-fade-screen\">\n                    <div class=\"modal-inner\">\n                        <div class=\"modal-close\" for=\"modal-1\"></div>\n                        <h1>").concat(req.modal_text, "</h1>\n                        <p class=\"modal-intro\">").concat(req.modal_intro, "</p>\n                        <p class=\"modal-content\">").concat(req.modal_content, "</p>\n                    </div>\n                </div>\n            </div>");
};

var _default = ModalModern;
exports["default"] = _default;