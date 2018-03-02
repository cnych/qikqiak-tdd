(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/* eslint-disable no-underscore-dangle */
exports.default = /* JSX */{

  /**
   * Create a native DOM node from JSX's intermediate representation
   *
   * @param {string} tag - Tag name
   * @param {?Object} properties - Properties
   * @param {Array<string | number | { __html: string } | Array<HTMLElement>>}
   *   children - Child nodes
   * @return {HTMLElement} Native DOM node
   */
  createElement: function createElement(tag, properties) {
    var el = document.createElement(tag);

    /* Set all properties */
    if (properties) Array.prototype.forEach.call(Object.keys(properties), function (attr) {
      el.setAttribute(attr, properties[attr]);
    });

    /* Iterate child nodes */
    var iterateChildNodes = function iterateChildNodes(nodes) {
      Array.prototype.forEach.call(nodes, function (node) {

        /* Directly append text content */
        if (typeof node === "string" || typeof node === "number") {
          el.textContent += node;

          /* Recurse, if we got an array */
        } else if (Array.isArray(node)) {
          iterateChildNodes(node);

          /* Append raw HTML */
        } else if (typeof node.__html !== "undefined") {
          el.innerHTML += node.__html;

          /* Append regular nodes */
        } else if (node instanceof Node) {
          el.appendChild(node);
        }
      });
    };

    /* Iterate child nodes and return element */

    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    iterateChildNodes(children);
    return el;
  }
};
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var index = typeof fetch=='function' ? fetch.bind() : function(url, options) {
	options = options || {};
	return new Promise( function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials=='include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body);

		function response() {
			var keys = [],
				all = [],
				headers = {},
				header;

			request.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, function (m, key, value) {
				keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? (header + "," + value) : value;
			});

			return {
				ok: (request.status/200|0) == 1,		// 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function () { return Promise.resolve(request.responseText); },
				json: function () { return Promise.resolve(request.responseText).then(JSON.parse); },
				blob: function () { return Promise.resolve(new Blob([request.response])); },
				headers: {
					keys: function () { return keys; },
					entries: function () { return all; },
					get: function (n) { return headers[n.toLowerCase()]; },
					has: function (n) { return n.toLowerCase() in headers; }
				}
			};
		}
	});
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=unfetch.es.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Listener = function () {

  /**
   * Generic event listener
   *
   * @constructor
   *
   * @property {(Array<EventTarget>)} els_ - Event targets
   * @property {Object} handler_- Event handlers
   * @property {Array<string>} events_ - Event names
   * @property {Function} update_ - Update handler
   *
   * @param {?(string|EventTarget|NodeList<EventTarget>)} els -
   *   Selector or Event targets
   * @param {(string|Array<string>)} events - Event names
   * @param {(Object|Function)} handler - Handler to be invoked
   */
  function Listener(els, events, handler) {
    var _this = this;

    _classCallCheck(this, Listener);

    this.els_ = Array.prototype.slice.call(typeof els === "string" ? document.querySelectorAll(els) : [].concat(els));

    /* Set handler as function or directly as object */
    this.handler_ = typeof handler === "function" ? { update: handler } : handler;

    /* Initialize event names and update handler */
    this.events_ = [].concat(events);
    this.update_ = function (ev) {
      return _this.handler_.update(ev);
    };
  }

  /**
   * Register listener for all relevant events
   */


  Listener.prototype.listen = function listen() {
    var _this2 = this;

    this.els_.forEach(function (el) {
      _this2.events_.forEach(function (event) {
        el.addEventListener(event, _this2.update_, false);
      });
    });

    /* Execute setup handler, if implemented */
    if (typeof this.handler_.setup === "function") this.handler_.setup();
  };

  /**
   * Unregister listener for all relevant events
   */


  Listener.prototype.unlisten = function unlisten() {
    var _this3 = this;

    this.els_.forEach(function (el) {
      _this3.events_.forEach(function (event) {
        el.removeEventListener(event, _this3.update_);
      });
    });

    /* Execute reset handler, if implemented */
    if (typeof this.handler_.reset === "function") this.handler_.reset();
  };

  return Listener;
}();

exports.default = Listener;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;
exports.app = undefined;

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

var _promisePolyfill = __webpack_require__(14);

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

var _clipboard = __webpack_require__(18);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _fastclick = __webpack_require__(26);

var _fastclick2 = _interopRequireDefault(_fastclick);

var _Material = __webpack_require__(27);

var _Material2 = _interopRequireDefault(_Material);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

window.Promise = window.Promise || _promisePolyfill2.default;

/* ----------------------------------------------------------------------------
 * Dependencies
 * ------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------
 * Polyfills
 * ------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Return the meta tag value for the given key
 *
 * @param {string} key - Meta name
 *
 * @return {string} Meta content value
 */
var translate = function translate(key) {
  var meta = document.getElementsByName("lang:" + key)[0];
  if (!(meta instanceof HTMLMetaElement)) throw new ReferenceError();
  return meta.content;
};

/* ----------------------------------------------------------------------------
 * Application
 * ------------------------------------------------------------------------- */

/**
 * Initialize Material for MkDocs
 *
 * @param {Object} config - Configuration
 */
function initialize(config) {
  // eslint-disable-line func-style

  /* Initialize Modernizr and FastClick */
  new _Material2.default.Event.Listener(document, "DOMContentLoaded", function () {
    if (!(document.body instanceof HTMLElement)) throw new ReferenceError();

    /* Attach FastClick to mitigate 300ms delay on touch devices */
    _fastclick2.default.attach(document.body);

    /* Test for iOS */
    Modernizr.addTest("ios", function () {
      return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
    });

    /* Wrap all data tables for better overflow scrolling */
    var tables = document.querySelectorAll("table:not([class])"); // TODO: this is JSX, we should rename the file
    Array.prototype.forEach.call(tables, function (table) {
      var wrap = JSX.createElement(
        "div",
        { "class": "md-typeset__scrollwrap" },
        JSX.createElement("div", { "class": "md-typeset__table" })
      );
      if (table.nextSibling) {
        table.parentNode.insertBefore(wrap, table.nextSibling);
      } else {
        table.parentNode.appendChild(wrap);
      }
      wrap.children[0].appendChild(table);
    });

    /* Clipboard integration */
    if (_clipboard2.default.isSupported()) {
      var blocks = document.querySelectorAll(".codehilite > pre, pre > code");
      Array.prototype.forEach.call(blocks, function (block, index) {
        var id = "__code_" + index;

        /* Create button with message container */
        var button = JSX.createElement(
          "button",
          { "class": "md-clipboard", title: translate("clipboard.copy"),
            "data-clipboard-target": "#" + id + " pre, #" + id + " code" },
          JSX.createElement("span", { "class": "md-clipboard__message" })
        );

        /* Link to block and insert button */
        var parent = block.parentNode;
        parent.id = id;
        parent.insertBefore(button, block);
      });

      /* Initialize Clipboard listener */
      var copy = new _clipboard2.default(".md-clipboard");

      /* Success handler */
      copy.on("success", function (action) {
        var message = action.trigger.querySelector(".md-clipboard__message");
        if (!(message instanceof HTMLElement)) throw new ReferenceError();

        /* Clear selection and reset debounce logic */
        action.clearSelection();
        if (message.dataset.mdTimer) clearTimeout(parseInt(message.dataset.mdTimer, 10));

        /* Set message indicating success and show it */
        message.classList.add("md-clipboard__message--active");
        message.innerHTML = translate("clipboard.copied");

        /* Hide message after two seconds */
        message.dataset.mdTimer = setTimeout(function () {
          message.classList.remove("md-clipboard__message--active");
          message.dataset.mdTimer = "";
        }, 2000).toString();
      });
    }

    /* Polyfill details/summary functionality */
    if (!Modernizr.details) {
      var _blocks = document.querySelectorAll("details > summary");
      Array.prototype.forEach.call(_blocks, function (summary) {
        summary.addEventListener("click", function (ev) {
          var details = ev.target.parentNode;
          if (details.hasAttribute("open")) {
            details.removeAttribute("open");
          } else {
            details.setAttribute("open", "");
          }
        });
      });
    }

    /* Open details after anchor jump */
    var details = function details() {
      if (document.location.hash) {
        var el = document.getElementById(document.location.hash.substring(1));
        if (!el) return;

        /* Walk up as long as we're not in a details tag */
        var parent = el.parentNode;
        while (parent && !(parent instanceof HTMLDetailsElement)) {
          parent = parent.parentNode;
        } /* If there's a details tag, open it */
        if (parent && !parent.open) {
          parent.open = true;

          /* Force reload, so the viewport repositions */
          var loc = location.hash;
          location.hash = " ";
          location.hash = loc;
        }
      }
    };
    window.addEventListener("hashchange", details);
    details();

    /* Force 1px scroll offset to trigger overflow scrolling */
    if (Modernizr.ios) {
      var scrollable = document.querySelectorAll("[data-md-scrollfix]");
      Array.prototype.forEach.call(scrollable, function (item) {
        item.addEventListener("touchstart", function () {
          var top = item.scrollTop;

          /* We're at the top of the container */
          if (top === 0) {
            item.scrollTop = 1;

            /* We're at the bottom of the container */
          } else if (top + item.offsetHeight === item.scrollHeight) {
            item.scrollTop = top - 1;
          }
        });
      });
    }
  }).listen();

  /* Component: header shadow toggle */
  new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Header.Shadow("[data-md-component=container]", "[data-md-component=header]")).listen();

  /* Component: header title toggle */
  new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Header.Title("[data-md-component=title]", ".md-typeset h1")).listen();

  /* Component: hero visibility toggle */
  if (document.querySelector("[data-md-component=hero]")) new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Tabs.Toggle("[data-md-component=hero]")).listen();

  /* Component: tabs visibility toggle */
  if (document.querySelector("[data-md-component=tabs]")) new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Tabs.Toggle("[data-md-component=tabs]")).listen();

  /* Component: sidebar with navigation */
  new _Material2.default.Event.MatchMedia("(min-width: 1220px)", new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Sidebar.Position("[data-md-component=navigation]", "[data-md-component=header]")));

  /* Component: sidebar with table of contents (missing on 404 page) */
  if (document.querySelector("[data-md-component=toc]")) new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener(window, ["scroll", "resize", "orientationchange"], new _Material2.default.Sidebar.Position("[data-md-component=toc]", "[data-md-component=header]")));

  /* Component: link blurring for table of contents */
  new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener(window, "scroll", new _Material2.default.Nav.Blur("[data-md-component=toc] [href]")));

  /* Component: collapsible elements for navigation */
  var collapsibles = document.querySelectorAll("[data-md-component=collapsible]");
  Array.prototype.forEach.call(collapsibles, function (collapse) {
    new _Material2.default.Event.MatchMedia("(min-width: 1220px)", new _Material2.default.Event.Listener(collapse.previousElementSibling, "click", new _Material2.default.Nav.Collapse(collapse)));
  });

  /* Component: active pane monitor for iOS scrolling fixes */
  new _Material2.default.Event.MatchMedia("(max-width: 1219px)", new _Material2.default.Event.Listener("[data-md-component=navigation] [data-md-toggle]", "change", new _Material2.default.Nav.Scrolling("[data-md-component=navigation] nav")));

  /* Initialize search, if available */
  if (document.querySelector("[data-md-component=search]")) {

    /* Component: search body lock for mobile */
    new _Material2.default.Event.MatchMedia("(max-width: 959px)", new _Material2.default.Event.Listener("[data-md-toggle=search]", "change", new _Material2.default.Search.Lock("[data-md-toggle=search]")));

    /* Component: search results */
    new _Material2.default.Event.Listener("[data-md-component=query]", ["focus", "keyup", "change"], new _Material2.default.Search.Result("[data-md-component=result]", function () {
      return fetch(config.url.base + "/" + (config.version < "0.17" ? "mkdocs" : "search") + "/search_index.json", {
        credentials: "same-origin"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.docs.map(function (doc) {
          doc.location = config.url.base + doc.location;
          return doc;
        });
      });
    })).listen();

    /* Listener: focus input after form reset */
    new _Material2.default.Event.Listener("[data-md-component=reset]", "click", function () {
      setTimeout(function () {
        var query = document.querySelector("[data-md-component=query]");
        if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
        query.focus();
      }, 10);
    }).listen();

    /* Listener: focus input after opening search */
    new _Material2.default.Event.Listener("[data-md-toggle=search]", "change", function (ev) {
      setTimeout(function (toggle) {
        if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
        if (toggle.checked) {
          var query = document.querySelector("[data-md-component=query]");
          if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
          query.focus();
        }
      }, 400, ev.target);
    }).listen();

    /* Listener: open search on focus */
    new _Material2.default.Event.MatchMedia("(min-width: 960px)", new _Material2.default.Event.Listener("[data-md-component=query]", "focus", function () {
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (!toggle.checked) {
        toggle.checked = true;
        toggle.dispatchEvent(new CustomEvent("change"));
      }
    }));

    /* Listener: keyboard handlers */ // eslint-disable-next-line complexity
    new _Material2.default.Event.Listener(window, "keydown", function (ev) {
      // TODO: split up into component to reduce complexity
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      var query = document.querySelector("[data-md-component=query]");
      if (!(query instanceof HTMLInputElement)) throw new ReferenceError();

      /* Abort if meta key (macOS) or ctrl key (Windows) is pressed */
      if (ev.metaKey || ev.ctrlKey) return;

      /* Search is open */
      if (toggle.checked) {

        /* Enter: prevent form submission */
        if (ev.keyCode === 13) {
          if (query === document.activeElement) {
            ev.preventDefault();

            /* Go to current active/focused link */
            var focus = document.querySelector("[data-md-component=search] [href][data-md-state=active]");
            if (focus instanceof HTMLLinkElement) {
              window.location = focus.getAttribute("href");

              /* Close search */
              toggle.checked = false;
              toggle.dispatchEvent(new CustomEvent("change"));
              query.blur();
            }
          }

          /* Escape or Tab: close search */
        } else if (ev.keyCode === 9 || ev.keyCode === 27) {
          toggle.checked = false;
          toggle.dispatchEvent(new CustomEvent("change"));
          query.blur();

          /* Horizontal arrows and backspace: focus input */
        } else if ([8, 37, 39].indexOf(ev.keyCode) !== -1) {
          if (query !== document.activeElement) query.focus();

          /* Vertical arrows: select previous or next search result */
        } else if ([38, 40].indexOf(ev.keyCode) !== -1) {
          var key = ev.keyCode;

          /* Retrieve all results */
          var links = Array.prototype.slice.call(document.querySelectorAll("[data-md-component=query], [data-md-component=search] [href]"));

          /* Retrieve current active/focused result */
          var _focus = links.find(function (link) {
            if (!(link instanceof HTMLElement)) throw new ReferenceError();
            return link.dataset.mdState === "active";
          });
          if (_focus) _focus.dataset.mdState = "";

          /* Calculate index depending on direction, add length to form ring */
          var index = Math.max(0, (links.indexOf(_focus) + links.length + (key === 38 ? -1 : +1)) % links.length);

          /* Set active state and focus */
          if (links[index]) {
            links[index].dataset.mdState = "active";
            links[index].focus();
          }

          /* Prevent scrolling of page */
          ev.preventDefault();
          ev.stopPropagation();

          /* Return false prevents the cursor position from changing */
          return false;
        }

        /* Search is closed and we're not inside a form */
      } else if (document.activeElement && !document.activeElement.form) {

        /* F/S: Open search if not in input field */
        if (ev.keyCode === 70 || ev.keyCode === 83) {
          query.focus();
          ev.preventDefault();
        }
      }
    }).listen();

    /* Listener: focus query if in search is open and character is typed */
    new _Material2.default.Event.Listener(window, "keypress", function () {
      var toggle = document.querySelector("[data-md-toggle=search]");
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {
        var query = document.querySelector("[data-md-component=query]");
        if (!(query instanceof HTMLInputElement)) throw new ReferenceError();
        if (query !== document.activeElement) query.focus();
      }
    }).listen();
  }

  /* Listener: handle tabbing context for better accessibility */
  new _Material2.default.Event.Listener(document.body, "keydown", function (ev) {
    if (ev.keyCode === 9) {
      var labels = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[for]:not([tabindex])");
      Array.prototype.forEach.call(labels, function (label) {
        if (label.offsetHeight) label.tabIndex = 0;
      });
    }
  }).listen();

  /* Listener: reset tabbing behavior */
  new _Material2.default.Event.Listener(document.body, "mousedown", function () {
    var labels = document.querySelectorAll("[data-md-component=navigation] .md-nav__link[tabindex]");
    Array.prototype.forEach.call(labels, function (label) {
      label.removeAttribute("tabIndex");
    });
  }).listen();

  document.body.addEventListener("click", function () {
    if (document.body.dataset.mdState === "tabbing") document.body.dataset.mdState = "";
  });

  /* Listener: close drawer when anchor links are clicked */
  new _Material2.default.Event.MatchMedia("(max-width: 959px)", new _Material2.default.Event.Listener("[data-md-component=navigation] [href^='#']", "click", function () {
    var toggle = document.querySelector("[data-md-toggle=drawer]");
    if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
    if (toggle.checked) {
      toggle.checked = false;
      toggle.dispatchEvent(new CustomEvent("change"));
    }
  }))

  /* Retrieve facts for the given repository type */
  ;(function () {
    var el = document.querySelector("[data-md-source]");
    if (!el) return _promisePolyfill2.default.resolve([]);else if (!(el instanceof HTMLAnchorElement)) throw new ReferenceError();
    switch (el.dataset.mdSource) {
      case "github":
        return new _Material2.default.Source.Adapter.GitHub(el).fetch();
      default:
        return _promisePolyfill2.default.resolve([]);
    }

    /* Render repository information */
  })().then(function (facts) {
    var sources = document.querySelectorAll("[data-md-source]");
    Array.prototype.forEach.call(sources, function (source) {
      new _Material2.default.Source.Repository(source).initialize(facts);
    });
  });
}

/* ----------------------------------------------------------------------------
 * Exports
 * ------------------------------------------------------------------------- */

/* Provide this for downward compatibility for now */
var app = {
  initialize: initialize
};

exports.app = app;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/bitbucket.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/github.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/icons/gitlab.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

try {
    var ce = new window.CustomEvent('test');
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
        // IE has problems with .preventDefault() on custom events
        // http://stackoverflow.com/questions/23349191
        throw new Error('Could not prevent default');
    }
} catch(e) {
  var CustomEvent = function(event, params) {
    var evt, origPrevent;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };

    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    origPrevent = evt.preventDefault;
    evt.preventDefault = function () {
      origPrevent.call(this);
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function () {
            return true;
          }
        });
      } catch(e) {
        this.defaultPrevented = true;
      }
    };
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent; // expose definition to window
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

if (!window.fetch) window.fetch = __webpack_require__(2).default || __webpack_require__(2);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = function(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
};

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

module.exports = Promise;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15).setImmediate))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(16);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(17)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(19), __webpack_require__(21), __webpack_require__(22)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    container: this.container,
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(20)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                this.container.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    this.container.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    this.container.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(23);
var delegate = __webpack_require__(24);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(25);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return FastClick;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Event = __webpack_require__(28);

var _Event2 = _interopRequireDefault(_Event);

var _Header = __webpack_require__(30);

var _Header2 = _interopRequireDefault(_Header);

var _Nav = __webpack_require__(33);

var _Nav2 = _interopRequireDefault(_Nav);

var _Search = __webpack_require__(37);

var _Search2 = _interopRequireDefault(_Search);

var _Sidebar = __webpack_require__(43);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Source = __webpack_require__(45);

var _Source2 = _interopRequireDefault(_Source);

var _Tabs = __webpack_require__(51);

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Event: _Event2.default,
  Header: _Header2.default,
  Nav: _Nav2.default,
  Search: _Search2.default,
  Sidebar: _Sidebar2.default,
  Source: _Source2.default,
  Tabs: _Tabs2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(3);

var _Listener2 = _interopRequireDefault(_Listener);

var _MatchMedia = __webpack_require__(29);

var _MatchMedia2 = _interopRequireDefault(_MatchMedia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Listener: _Listener2.default,
  MatchMedia: _MatchMedia2.default
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Listener = __webpack_require__(3);

var _Listener2 = _interopRequireDefault(_Listener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

// eslint-disable-line no-unused-vars

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var MatchMedia =

/**
 * Media query listener
 *
 * This class listens for state changes of media queries and automatically
 * switches the given listeners on or off.
 *
 * @constructor
 *
 * @property {Function} handler_ - Media query event handler
 *
 * @param {string} query - Media query to test for
 * @param {Listener} listener - Event listener
 */
function MatchMedia(query, listener) {
  _classCallCheck(this, MatchMedia);

  this.handler_ = function (mq) {
    if (mq.matches) listener.listen();else listener.unlisten();
  };

  /* Initialize media query listener */
  var media = window.matchMedia(query);
  media.addListener(this.handler_);

  /* Always check at initialization */
  this.handler_(media);
};

exports.default = MatchMedia;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Shadow = __webpack_require__(31);

var _Shadow2 = _interopRequireDefault(_Shadow);

var _Title = __webpack_require__(32);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Shadow: _Shadow2.default,
  Title: _Title2.default
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Shadow = function () {

  /**
   * Show or hide header shadow depending on page y-offset
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Content container
   * @property {HTMLElement} header_ - Header
   * @property {number} height_ - Offset height of previous nodes
   * @property {boolean} active_ - Header shadow state
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLElement)} header - Selector or HTML element
   */
  function Shadow(el, header) {
    _classCallCheck(this, Shadow);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement) || !(ref.parentNode instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref.parentNode;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize height and state */
    this.height_ = 0;
    this.active_ = false;
  }

  /**
   * Calculate total height of previous nodes
   */


  Shadow.prototype.setup = function setup() {
    var current = this.el_;
    while (current = current.previousElementSibling) {
      if (!(current instanceof HTMLElement)) throw new ReferenceError();
      this.height_ += current.offsetHeight;
    }
    this.update();
  };

  /**
   * Update shadow state
   *
   * @param {Event} ev - Event
   */


  Shadow.prototype.update = function update(ev) {
    if (ev && (ev.type === "resize" || ev.type === "orientationchange")) {
      this.height_ = 0;
      this.setup();
    } else {
      var active = window.pageYOffset >= this.height_;
      if (active !== this.active_) this.header_.dataset.mdState = (this.active_ = active) ? "shadow" : "";
    }
  };

  /**
   * Reset shadow state
   */


  Shadow.prototype.reset = function reset() {
    this.header_.dataset.mdState = "";
    this.height_ = 0;
    this.active_ = false;
  };

  return Shadow;
}();

exports.default = Shadow;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Title = function () {

  /**
   * Swap header title topics when header is scrolled past
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Element
   * @property {HTMLElement} header_ - Header
   * @property {boolean} active_ - Title state
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLHeadingElement)} header - Selector or HTML element
   */
  function Title(el, header) {
    _classCallCheck(this, Title);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLHeadingElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize state */
    this.active_ = false;
  }

  /**
   * Setup title state
   */


  Title.prototype.setup = function setup() {
    var _this = this;

    Array.prototype.forEach.call(this.el_.children, function (node) {
      // TODO: use childNodes here for IE?
      node.style.width = _this.el_.offsetWidth - 20 + "px";
    });
  };

  /**
   * Update title state
   *
   * @param {Event} ev - Event
   */


  Title.prototype.update = function update(ev) {
    var _this2 = this;

    var active = window.pageYOffset >= this.header_.offsetTop;
    if (active !== this.active_) this.el_.dataset.mdState = (this.active_ = active) ? "active" : "";

    /* Hack: induce ellipsis on topics */
    if (ev.type === "resize" || ev.type === "orientationchange") {
      Array.prototype.forEach.call(this.el_.children, function (node) {
        node.style.width = _this2.el_.offsetWidth - 20 + "px";
      });
    }
  };

  /**
   * Reset title state
   */


  Title.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.width = "";
    this.active_ = false;
  };

  return Title;
}();

exports.default = Title;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Blur = __webpack_require__(34);

var _Blur2 = _interopRequireDefault(_Blur);

var _Collapse = __webpack_require__(35);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Scrolling = __webpack_require__(36);

var _Scrolling2 = _interopRequireDefault(_Scrolling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Blur: _Blur2.default,
  Collapse: _Collapse2.default,
  Scrolling: _Scrolling2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Blur = function () {

  /**
   * Blur links within the table of contents above current page y-offset
   *
   * @constructor
   *
   * @property {NodeList<HTMLElement>} els_ - Table of contents links
   * @property {Array<HTMLElement>} anchors_ - Referenced anchor nodes
   * @property {number} index_ - Current link index
   * @property {number} offset_ - Current page y-offset
   * @property {boolean} dir_ - Scroll direction change
   *
   * @param {(string|NodeList<HTMLElement>)} els - Selector or HTML elements
   */
  function Blur(els) {
    _classCallCheck(this, Blur);

    this.els_ = typeof els === "string" ? document.querySelectorAll(els) : els;

    /* Initialize index and page y-offset */
    this.index_ = 0;
    this.offset_ = window.pageYOffset;

    /* Necessary state to correctly reset the index */
    this.dir_ = false;

    /* Index anchor node offsets for fast lookup */
    this.anchors_ = [].reduce.call(this.els_, function (anchors, el) {
      return anchors.concat(document.getElementById(el.hash.substring(1)) || []);
    }, []);
  }

  /**
   * Initialize blur states
   */


  Blur.prototype.setup = function setup() {
    this.update();
  };

  /**
   * Update blur states
   *
   * Deduct the static offset of the header (56px) and sidebar offset (24px),
   * see _permalinks.scss for more information.
   */


  Blur.prototype.update = function update() {
    var offset = window.pageYOffset;
    var dir = this.offset_ - offset < 0;

    /* Hack: reset index if direction changed to catch very fast scrolling,
       because otherwise we would have to register a timer and that sucks */
    if (this.dir_ !== dir) this.index_ = dir ? this.index_ = 0 : this.index_ = this.els_.length - 1;

    /* Exit when there are no anchors */
    if (this.anchors_.length === 0) return;

    /* Scroll direction is down */
    if (this.offset_ <= offset) {
      for (var i = this.index_ + 1; i < this.els_.length; i++) {
        if (this.anchors_[i].offsetTop - (56 + 24) <= offset) {
          if (i > 0) this.els_[i - 1].dataset.mdState = "blur";
          this.index_ = i;
        } else {
          break;
        }
      }

      /* Scroll direction is up */
    } else {
      for (var _i = this.index_; _i >= 0; _i--) {
        if (this.anchors_[_i].offsetTop - (56 + 24) > offset) {
          if (_i > 0) this.els_[_i - 1].dataset.mdState = "";
        } else {
          this.index_ = _i;
          break;
        }
      }
    }

    /* Remember current offset and direction for next iteration */
    this.offset_ = offset;
    this.dir_ = dir;
  };

  /**
   * Reset blur states
   */


  Blur.prototype.reset = function reset() {
    Array.prototype.forEach.call(this.els_, function (el) {
      el.dataset.mdState = "";
    });

    /* Reset index and page y-offset */
    this.index_ = 0;
    this.offset_ = window.pageYOffset;
  };

  return Blur;
}();

exports.default = Blur;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Collapse = function () {

  /**
   * Expand or collapse navigation on toggle
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Navigation list
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Collapse(el) {
    _classCallCheck(this, Collapse);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Initialize overflow and display for accessibility
   */


  Collapse.prototype.setup = function setup() {
    var current = this.el_.getBoundingClientRect().height;

    /* Hidden links should not be focusable, so hide them when the navigation
       is collapsed and set overflow so the outline is not cut off */
    this.el_.style.display = current ? "block" : "none";
    this.el_.style.overflow = current ? "visible" : "hidden";
  };

  /**
   * Animate expand and collapse smoothly
   *
   * Internet Explorer 11 is very slow at recognizing changes on the dataset
   * which results in the menu not expanding or collapsing properly. THerefore,
   * for reasons of compatibility, the attribute accessors are used.
   */


  Collapse.prototype.update = function update() {
    var _this = this;

    var current = this.el_.getBoundingClientRect().height;

    /* Reset overflow to CSS defaults */
    this.el_.style.display = "block";
    this.el_.style.overflow = "";

    /* Expanded, so collapse */
    if (current) {
      this.el_.style.maxHeight = current + "px";
      requestAnimationFrame(function () {
        _this.el_.setAttribute("data-md-state", "animate");
        _this.el_.style.maxHeight = "0px";
      });

      /* Collapsed, so expand */
    } else {
      this.el_.setAttribute("data-md-state", "expand");
      this.el_.style.maxHeight = "";

      /* Read height and unset pseudo-toggled state */
      var height = this.el_.getBoundingClientRect().height;
      this.el_.removeAttribute("data-md-state");

      /* Set initial state and animate */
      this.el_.style.maxHeight = "0px";
      requestAnimationFrame(function () {
        _this.el_.setAttribute("data-md-state", "animate");
        _this.el_.style.maxHeight = height + "px";
      });
    }

    /* Remove state on end of transition */
    var end = function end(ev) {
      var target = ev.target;
      if (!(target instanceof HTMLElement)) throw new ReferenceError();

      /* Reset height and state */
      target.removeAttribute("data-md-state");
      target.style.maxHeight = "";

      /* Hidden links should not be focusable, so hide them when the navigation
         is collapsed and set overflow so the outline is not cut off */
      target.style.display = current ? "none" : "block";
      target.style.overflow = current ? "hidden" : "visible";

      /* Only fire once, so directly remove event listener */
      target.removeEventListener("transitionend", end);
    };
    this.el_.addEventListener("transitionend", end, false);
  };

  /**
   * Reset height and pseudo-toggled state
   */


  Collapse.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.maxHeight = "";
    this.el_.style.display = "";
    this.el_.style.overflow = "";
  };

  return Collapse;
}();

exports.default = Collapse;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Scrolling = function () {

  /**
   * Set overflow scrolling on the current active pane (for iOS)
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Primary navigation
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Scrolling(el) {
    _classCallCheck(this, Scrolling);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Setup panes
   */


  Scrolling.prototype.setup = function setup() {

    /* Initially set overflow scrolling on main pane */
    var main = this.el_.children[this.el_.children.length - 1];
    main.style.webkitOverflowScrolling = "touch";

    /* Find all toggles and check which one is active */
    var toggles = this.el_.querySelectorAll("[data-md-toggle]");
    Array.prototype.forEach.call(toggles, function (toggle) {
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {

        /* Find corresponding navigational pane */
        var pane = toggle.nextElementSibling;
        if (!(pane instanceof HTMLElement)) throw new ReferenceError();
        while (pane.tagName !== "NAV" && pane.nextElementSibling) {
          pane = pane.nextElementSibling;
        } /* Check references */
        if (!(toggle.parentNode instanceof HTMLElement) || !(toggle.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

        /* Find current and parent list elements */
        var parent = toggle.parentNode.parentNode;
        var target = pane.children[pane.children.length - 1];

        /* Always reset all lists when transitioning */
        parent.style.webkitOverflowScrolling = "";
        target.style.webkitOverflowScrolling = "touch";
      }
    });
  };

  /**
   * Update active panes
   *
   * @param {Event} ev - Change event
   */


  Scrolling.prototype.update = function update(ev) {
    var target = ev.target;
    if (!(target instanceof HTMLElement)) throw new ReferenceError();

    /* Find corresponding navigational pane */
    var pane = target.nextElementSibling;
    if (!(pane instanceof HTMLElement)) throw new ReferenceError();
    while (pane.tagName !== "NAV" && pane.nextElementSibling) {
      pane = pane.nextElementSibling;
    } /* Check references */
    if (!(target.parentNode instanceof HTMLElement) || !(target.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

    /* Find parent and active panes */
    var parent = target.parentNode.parentNode;
    var active = pane.children[pane.children.length - 1];

    /* Always reset all lists when transitioning */
    parent.style.webkitOverflowScrolling = "";
    active.style.webkitOverflowScrolling = "";

    /* Set overflow scrolling on parent pane */
    if (!target.checked) {
      var end = function end() {
        if (pane instanceof HTMLElement) {
          parent.style.webkitOverflowScrolling = "touch";
          pane.removeEventListener("transitionend", end);
        }
      };
      pane.addEventListener("transitionend", end, false);
    }

    /* Set overflow scrolling on active pane */
    if (target.checked) {
      var _end = function _end() {
        if (pane instanceof HTMLElement) {
          active.style.webkitOverflowScrolling = "touch";
          pane.removeEventListener("transitionend", _end);
        }
      };
      pane.addEventListener("transitionend", _end, false);
    }
  };

  /**
   * Reset panes
   */


  Scrolling.prototype.reset = function reset() {

    /* Reset overflow scrolling on main pane */
    this.el_.children[1].style.webkitOverflowScrolling = "";

    /* Find all toggles and check which one is active */
    var toggles = this.el_.querySelectorAll("[data-md-toggle]");
    Array.prototype.forEach.call(toggles, function (toggle) {
      if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
      if (toggle.checked) {

        /* Find corresponding navigational pane */
        var pane = toggle.nextElementSibling;
        if (!(pane instanceof HTMLElement)) throw new ReferenceError();
        while (pane.tagName !== "NAV" && pane.nextElementSibling) {
          pane = pane.nextElementSibling;
        } /* Check references */
        if (!(toggle.parentNode instanceof HTMLElement) || !(toggle.parentNode.parentNode instanceof HTMLElement)) throw new ReferenceError();

        /* Find parent and active panes */
        var parent = toggle.parentNode.parentNode;
        var active = pane.children[pane.children.length - 1];

        /* Always reset all lists when transitioning */
        parent.style.webkitOverflowScrolling = "";
        active.style.webkitOverflowScrolling = "";
      }
    });
  };

  return Scrolling;
}();

exports.default = Scrolling;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Lock = __webpack_require__(38);

var _Lock2 = _interopRequireDefault(_Lock);

var _Result = __webpack_require__(39);

var _Result2 = _interopRequireDefault(_Result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Lock: _Lock2.default,
  Result: _Result2.default
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Lock = function () {

  /**
   * Lock body for full-screen search modal
   *
   * @constructor
   *
   * @property {HTMLInputElement} el_ - Lock toggle
   * @property {HTMLElement} lock_ - Element to lock (document body)
   * @property {number} offset_ - Current page y-offset
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Lock(el) {
    _classCallCheck(this, Lock);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLInputElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve element to lock (= body) */
    if (!document.body) throw new ReferenceError();
    this.lock_ = document.body;
  }

  /**
   * Setup locked state
   */


  Lock.prototype.setup = function setup() {
    this.update();
  };

  /**
   * Update locked state
   */


  Lock.prototype.update = function update() {
    var _this = this;

    /* Entering search mode */
    if (this.el_.checked) {
      this.offset_ = window.pageYOffset;

      /* Scroll to top after transition, to omit flickering */
      setTimeout(function () {
        window.scrollTo(0, 0);

        /* Lock body after finishing transition */
        if (_this.el_.checked) {
          _this.lock_.dataset.mdState = "lock";
        }
      }, 400);

      /* Exiting search mode */
    } else {
      this.lock_.dataset.mdState = "";

      /* Scroll to former position, but wait for 100ms to prevent flashes on
         iOS. A short timeout seems to do the trick */
      setTimeout(function () {
        if (typeof _this.offset_ !== "undefined") window.scrollTo(0, _this.offset_);
      }, 100);
    }
  };

  /**
   * Reset locked state and page y-offset
   */


  Lock.prototype.reset = function reset() {
    if (this.lock_.dataset.mdState === "lock") window.scrollTo(0, this.offset_);
    this.lock_.dataset.mdState = "";
  };

  return Lock;
}();

exports.default = Lock;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;

var _escapeStringRegexp = __webpack_require__(40);

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

var _exposeLoaderLunrLunr = __webpack_require__(41);

var _exposeLoaderLunrLunr2 = _interopRequireDefault(_exposeLoaderLunrLunr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Truncate a string after the given number of character
 *
 * This is not a reasonable approach, since the summaries kind of suck. It
 * would be better to create something more intelligent, highlighting the
 * search occurrences and making a better summary out of it.
 *
 * @param {string} string - String to be truncated
 * @param {number} n - Number of characters
 * @return {string} Truncated string
 */
var truncate = function truncate(string, n) {
  var i = n;
  if (string.length > i) {
    while (string[i] !== " " && --i > 0) {}
    return string.substring(0, i) + "...";
  }
  return string;
};

/**
 * Return the meta tag value for the given key
 *
 * @param {string} key - Meta name
 *
 * @return {string} Meta content value
 */
var translate = function translate(key) {
  var meta = document.getElementsByName("lang:" + key)[0];
  if (!(meta instanceof HTMLMetaElement)) throw new ReferenceError();
  return meta.content;
};

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Result = function () {

  /**
   * Perform search and update results on keyboard events
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Search result container
   * @property {(Array<Object>|Function)} data_ - Raw document data
   * @property {Object} docs_ - Indexed documents
   * @property {HTMLElement} meta_ - Search meta information
   * @property {HTMLElement} list_ - Search result list
   * @property {Array<string>} lang_ - Search languages
   * @property {Object} message_ - Search result messages
   * @property {Object} index_ - Search index
   * @property {Array<Function>} stack_ - Search result stack
   * @property {string} value_ - Last input value
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(Array<Object>|Function)} data - Function providing data or array
   */
  function Result(el, data) {
    _classCallCheck(this, Result);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve metadata and list element */

    var _Array$prototype$slic = Array.prototype.slice.call(this.el_.children),
        meta = _Array$prototype$slic[0],
        list = _Array$prototype$slic[1];

    /* Set data, metadata and list elements */


    this.data_ = data;
    this.meta_ = meta;
    this.list_ = list;

    /* Load messages for metadata display */
    this.message_ = {
      placeholder: this.meta_.textContent,
      none: translate("search.result.none"),
      one: translate("search.result.one"),
      other: translate("search.result.other")

      /* Override tokenizer separator, if given */
    };var tokenizer = translate("search.tokenizer");
    if (tokenizer.length) _exposeLoaderLunrLunr2.default.tokenizer.separator = tokenizer;

    /* Load search languages */
    this.lang_ = translate("search.language").split(",").filter(Boolean).map(function (lang) {
      return lang.trim();
    });
  }

  /**
   * Update search results
   *
   * @param {Event} ev - Input or focus event
   */


  Result.prototype.update = function update(ev) {
    var _this = this;

    /* Initialize index, if this has not be done yet */
    if (ev.type === "focus" && !this.index_) {

      /* Initialize index */
      var init = function init(data) {

        /* Preprocess and index sections and documents */
        _this.docs_ = data.reduce(function (docs, doc) {
          var _doc$location$split = doc.location.split("#"),
              path = _doc$location$split[0],
              hash = _doc$location$split[1];

          /* Associate section with parent document */


          if (hash) {
            doc.parent = docs.get(path);

            /* Override page title with document title if first section */
            if (doc.parent && !doc.parent.done) {
              doc.parent.title = doc.title;
              doc.parent.text = doc.text;
              doc.parent.done = true;
            }
          }

          /* Some cleanup on the text */
          doc.text = doc.text.replace(/\n/g, " ") /* Remove newlines */
          .replace(/\s+/g, " ") /* Compact whitespace */
          .replace(/\s+([,.:;!?])/g, /* Correct punctuation */
          function (_, char) {
            return char;
          });

          /* Index sections and documents, but skip top-level headline */
          if (!doc.parent || doc.parent.title !== doc.title) docs.set(doc.location, doc);
          return docs;
        }, new Map());

        /* eslint-disable no-invalid-this */
        var docs = _this.docs_,
            lang = _this.lang_;

        /* Create stack and index */
        _this.stack_ = [];
        _this.index_ = (0, _exposeLoaderLunrLunr2.default)(function () {
          var _pipeline,
              _this2 = this;

          var filters = {
            "search.pipeline.trimmer": _exposeLoaderLunrLunr2.default.trimmer,
            "search.pipeline.stopwords": _exposeLoaderLunrLunr2.default.stopWordFilter

            /* Disable stop words filter and trimmer, if desired */
          };var pipeline = Object.keys(filters).reduce(function (result, name) {
            if (!translate(name).match(/^false$/i)) result.push(filters[name]);
            return result;
          }, []);

          /* Remove stemmer, as it cripples search experience */
          this.pipeline.reset();
          if (pipeline) (_pipeline = this.pipeline).add.apply(_pipeline, pipeline);

          /* Set up alternate search languages */
          if (lang.length === 1 && lang[0] !== "en" && _exposeLoaderLunrLunr2.default[lang[0]]) {
            this.use(_exposeLoaderLunrLunr2.default[lang[0]]);
          } else if (lang.length > 1) {
            this.use(_exposeLoaderLunrLunr2.default.multiLanguage.apply(_exposeLoaderLunrLunr2.default, lang));
          }

          /* Index fields */
          this.field("title", { boost: 10 });
          this.field("text");
          this.ref("location");

          /* Index documents */
          docs.forEach(function (doc) {
            return _this2.add(doc);
          });
        });

        /* Register event handler for lazy rendering */
        var container = _this.el_.parentNode;
        if (!(container instanceof HTMLElement)) throw new ReferenceError();
        container.addEventListener("scroll", function () {
          while (_this.stack_.length && container.scrollTop + container.offsetHeight >= container.scrollHeight - 16) {
            _this.stack_.splice(0, 10).forEach(function (render) {
              return render();
            });
          }
        });
      };
      /* eslint-enable no-invalid-this */

      /* Initialize index after short timeout to account for transition */
      setTimeout(function () {
        return typeof _this.data_ === "function" ? _this.data_().then(init) : init(_this.data_);
      }, 250);

      /* Execute search on new input event */
    } else if (ev.type === "focus" || ev.type === "keyup") {
      var target = ev.target;
      if (!(target instanceof HTMLInputElement)) throw new ReferenceError();

      /* Abort early, if index is not build or input hasn't changed */
      if (!this.index_ || target.value === this.value_) return;

      /* Clear current list */
      while (this.list_.firstChild) {
        this.list_.removeChild(this.list_.firstChild);
      } /* Abort early, if search input is empty */
      this.value_ = target.value;
      if (this.value_.length === 0) {
        this.meta_.textContent = this.message_.placeholder;
        return;
      }

      /* Perform search on index and group sections by document */
      var result = this.index_

      /* Append trailing wildcard to all terms for prefix querying */
      .query(function (query) {
        _this.value_.toLowerCase().split(" ").filter(Boolean).forEach(function (term) {
          query.term(term, { wildcard: _exposeLoaderLunrLunr2.default.Query.wildcard.TRAILING });
        });
      })

      /* Process query results */
      .reduce(function (items, item) {
        var doc = _this.docs_.get(item.ref);
        if (doc.parent) {
          var ref = doc.parent.location;
          items.set(ref, (items.get(ref) || []).concat(item));
        } else {
          var _ref = doc.location;
          items.set(_ref, items.get(_ref) || []);
        }
        return items;
      }, new Map());

      /* Assemble regular expressions for matching */
      var query = (0, _escapeStringRegexp2.default)(this.value_.trim()).replace(new RegExp(_exposeLoaderLunrLunr2.default.tokenizer.separator, "img"), "|");
      var match = new RegExp("(^|" + _exposeLoaderLunrLunr2.default.tokenizer.separator + ")(" + query + ")", "img");
      var highlight = function highlight(_, separator, token) {
        return separator + "<em>" + token + "</em>";
      };

      /* Reset stack and render results */
      this.stack_ = [];
      result.forEach(function (items, ref) {
        var _stack_;

        var doc = _this.docs_.get(ref);

        /* Render article */
        var article = JSX.createElement(
          "li",
          { "class": "md-search-result__item" },
          JSX.createElement(
            "a",
            { href: doc.location, title: doc.title,
              "class": "md-search-result__link", tabindex: "-1" },
            JSX.createElement(
              "article",
              { "class": "md-search-result__article md-search-result__article--document" },
              JSX.createElement(
                "h1",
                { "class": "md-search-result__title" },
                { __html: doc.title.replace(match, highlight) }
              ),
              doc.text.length ? JSX.createElement(
                "p",
                { "class": "md-search-result__teaser" },
                { __html: doc.text.replace(match, highlight) }
              ) : {}
            )
          )
        );

        /* Render sections for article */
        var sections = items.map(function (item) {
          return function () {
            var section = _this.docs_.get(item.ref);
            article.appendChild(JSX.createElement(
              "a",
              { href: section.location, title: section.title,
                "class": "md-search-result__link", "data-md-rel": "anchor",
                tabindex: "-1" },
              JSX.createElement(
                "article",
                { "class": "md-search-result__article" },
                JSX.createElement(
                  "h1",
                  { "class": "md-search-result__title" },
                  { __html: section.title.replace(match, highlight) }
                ),
                section.text.length ? JSX.createElement(
                  "p",
                  { "class": "md-search-result__teaser" },
                  { __html: truncate(section.text.replace(match, highlight), 400)
                  }
                ) : {}
              )
            ));
          };
        });

        /* Push articles and section renderers onto stack */
        (_stack_ = _this.stack_).push.apply(_stack_, [function () {
          return _this.list_.appendChild(article);
        }].concat(sections));
      });

      /* Gradually add results as long as the height of the container grows */
      var container = this.el_.parentNode;
      if (!(container instanceof HTMLElement)) throw new ReferenceError();
      while (this.stack_.length && container.offsetHeight >= container.scrollHeight - 16) {
        this.stack_.shift()();
      } /* Bind click handlers for anchors */
      var anchors = this.list_.querySelectorAll("[data-md-rel=anchor]");
      Array.prototype.forEach.call(anchors, function (anchor) {
        ["click", "keydown"].forEach(function (action) {
          anchor.addEventListener(action, function (ev2) {
            if (action === "keydown" && ev2.keyCode !== 13) return;

            /* Close search */
            var toggle = document.querySelector("[data-md-toggle=search]");
            if (!(toggle instanceof HTMLInputElement)) throw new ReferenceError();
            if (toggle.checked) {
              toggle.checked = false;
              toggle.dispatchEvent(new CustomEvent("change"));
            }

            /* Hack: prevent default, as the navigation needs to be delayed due
               to the search body lock on mobile */
            ev2.preventDefault();
            setTimeout(function () {
              document.location.href = anchor.href;
            }, 100);
          });
        });
      });

      /* Update search metadata */
      switch (result.size) {
        case 0:
          this.meta_.textContent = this.message_.none;
          break;
        case 1:
          this.meta_.textContent = this.message_.one;
          break;
        default:
          this.meta_.textContent = this.message_.other.replace("#", result.size);
      }
    }
  };

  return Result;
}();

exports.default = Result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["lunr"] = __webpack_require__(42);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.1.5
 * Copyright (C) 2017 Oliver Nightingale
 * @license MIT
 */

;(function(){

/**
 * A convenience function for configuring and constructing
 * a new lunr Index.
 *
 * A lunr.Builder instance is created and the pipeline setup
 * with a trimmer, stop word filter and stemmer.
 *
 * This builder object is yielded to the configuration function
 * that is passed as a parameter, allowing the list of fields
 * and other builder parameters to be customised.
 *
 * All documents _must_ be added within the passed config function.
 *
 * @example
 * var idx = lunr(function () {
 *   this.field('title')
 *   this.field('body')
 *   this.ref('id')
 *
 *   documents.forEach(function (doc) {
 *     this.add(doc)
 *   }, this)
 * })
 *
 * @see {@link lunr.Builder}
 * @see {@link lunr.Pipeline}
 * @see {@link lunr.trimmer}
 * @see {@link lunr.stopWordFilter}
 * @see {@link lunr.stemmer}
 * @namespace {function} lunr
 */
var lunr = function (config) {
  var builder = new lunr.Builder

  builder.pipeline.add(
    lunr.trimmer,
    lunr.stopWordFilter,
    lunr.stemmer
  )

  builder.searchPipeline.add(
    lunr.stemmer
  )

  config.call(builder, builder)
  return builder.build()
}

lunr.version = "2.1.5"
/*!
 * lunr.utils
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A namespace containing utils for the rest of the lunr library
 */
lunr.utils = {}

/**
 * Print a warning message to the console.
 *
 * @param {String} message The message to be printed.
 * @memberOf Utils
 */
lunr.utils.warn = (function (global) {
  /* eslint-disable no-console */
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message)
    }
  }
  /* eslint-enable no-console */
})(this)

/**
 * Convert an object to a string.
 *
 * In the case of `null` and `undefined` the function returns
 * the empty string, in all other cases the result of calling
 * `toString` on the passed object is returned.
 *
 * @param {Any} obj The object to convert to a string.
 * @return {String} string representation of the passed object.
 * @memberOf Utils
 */
lunr.utils.asString = function (obj) {
  if (obj === void 0 || obj === null) {
    return ""
  } else {
    return obj.toString()
  }
}
lunr.FieldRef = function (docRef, fieldName, stringValue) {
  this.docRef = docRef
  this.fieldName = fieldName
  this._stringValue = stringValue
}

lunr.FieldRef.joiner = "/"

lunr.FieldRef.fromString = function (s) {
  var n = s.indexOf(lunr.FieldRef.joiner)

  if (n === -1) {
    throw "malformed field ref string"
  }

  var fieldRef = s.slice(0, n),
      docRef = s.slice(n + 1)

  return new lunr.FieldRef (docRef, fieldRef, s)
}

lunr.FieldRef.prototype.toString = function () {
  if (this._stringValue == undefined) {
    this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef
  }

  return this._stringValue
}
/**
 * A function to calculate the inverse document frequency for
 * a posting. This is shared between the builder and the index
 *
 * @private
 * @param {object} posting - The posting for a given term
 * @param {number} documentCount - The total number of documents.
 */
lunr.idf = function (posting, documentCount) {
  var documentsWithTerm = 0

  for (var fieldName in posting) {
    if (fieldName == '_index') continue // Ignore the term index, its not a field
    documentsWithTerm += Object.keys(posting[fieldName]).length
  }

  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5)

  return Math.log(1 + Math.abs(x))
}

/**
 * A token wraps a string representation of a token
 * as it is passed through the text processing pipeline.
 *
 * @constructor
 * @param {string} [str=''] - The string token being wrapped.
 * @param {object} [metadata={}] - Metadata associated with this token.
 */
lunr.Token = function (str, metadata) {
  this.str = str || ""
  this.metadata = metadata || {}
}

/**
 * Returns the token string that is being wrapped by this object.
 *
 * @returns {string}
 */
lunr.Token.prototype.toString = function () {
  return this.str
}

/**
 * A token update function is used when updating or optionally
 * when cloning a token.
 *
 * @callback lunr.Token~updateFunction
 * @param {string} str - The string representation of the token.
 * @param {Object} metadata - All metadata associated with this token.
 */

/**
 * Applies the given function to the wrapped string token.
 *
 * @example
 * token.update(function (str, metadata) {
 *   return str.toUpperCase()
 * })
 *
 * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.update = function (fn) {
  this.str = fn(this.str, this.metadata)
  return this
}

/**
 * Creates a clone of this token. Optionally a function can be
 * applied to the cloned token.
 *
 * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.clone = function (fn) {
  fn = fn || function (s) { return s }
  return new lunr.Token (fn(this.str, this.metadata), this.metadata)
}
/*!
 * lunr.tokenizer
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A function for splitting a string into tokens ready to be inserted into
 * the search index. Uses `lunr.tokenizer.separator` to split strings, change
 * the value of this property to change how strings are split into tokens.
 *
 * This tokenizer will convert its parameter to a string by calling `toString` and
 * then will split this string on the character in `lunr.tokenizer.separator`.
 * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
 *
 * @static
 * @param {?(string|object|object[])} obj - The object to convert into tokens
 * @returns {lunr.Token[]}
 */
lunr.tokenizer = function (obj) {
  if (obj == null || obj == undefined) {
    return []
  }

  if (Array.isArray(obj)) {
    return obj.map(function (t) {
      return new lunr.Token(lunr.utils.asString(t).toLowerCase())
    })
  }

  var str = obj.toString().trim().toLowerCase(),
      len = str.length,
      tokens = []

  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
    var char = str.charAt(sliceEnd),
        sliceLength = sliceEnd - sliceStart

    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {

      if (sliceLength > 0) {
        tokens.push(
          new lunr.Token (str.slice(sliceStart, sliceEnd), {
            position: [sliceStart, sliceLength],
            index: tokens.length
          })
        )
      }

      sliceStart = sliceEnd + 1
    }

  }

  return tokens
}

/**
 * The separator used to split a string into tokens. Override this property to change the behaviour of
 * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
 *
 * @static
 * @see lunr.tokenizer
 */
lunr.tokenizer.separator = /[\s\-]+/
/*!
 * lunr.Pipeline
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.Pipelines maintain an ordered list of functions to be applied to all
 * tokens in documents entering the search index and queries being ran against
 * the index.
 *
 * An instance of lunr.Index created with the lunr shortcut will contain a
 * pipeline with a stop word filter and an English language stemmer. Extra
 * functions can be added before or after either of these functions or these
 * default functions can be removed.
 *
 * When run the pipeline will call each function in turn, passing a token, the
 * index of that token in the original list of all tokens and finally a list of
 * all the original tokens.
 *
 * The output of functions in the pipeline will be passed to the next function
 * in the pipeline. To exclude a token from entering the index the function
 * should return undefined, the rest of the pipeline will not be called with
 * this token.
 *
 * For serialisation of pipelines to work, all functions used in an instance of
 * a pipeline should be registered with lunr.Pipeline. Registered functions can
 * then be loaded. If trying to load a serialised pipeline that uses functions
 * that are not registered an error will be thrown.
 *
 * If not planning on serialising the pipeline then registering pipeline functions
 * is not necessary.
 *
 * @constructor
 */
lunr.Pipeline = function () {
  this._stack = []
}

lunr.Pipeline.registeredFunctions = Object.create(null)

/**
 * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
 * string as well as all known metadata. A pipeline function can mutate the token string
 * or mutate (or add) metadata for a given token.
 *
 * A pipeline function can indicate that the passed token should be discarded by returning
 * null. This token will not be passed to any downstream pipeline functions and will not be
 * added to the index.
 *
 * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
 * to any downstream pipeline functions and all will returned tokens will be added to the index.
 *
 * Any number of pipeline functions may be chained together using a lunr.Pipeline.
 *
 * @interface lunr.PipelineFunction
 * @param {lunr.Token} token - A token from the document being processed.
 * @param {number} i - The index of this token in the complete list of tokens for this document/field.
 * @param {lunr.Token[]} tokens - All tokens for this document/field.
 * @returns {(?lunr.Token|lunr.Token[])}
 */

/**
 * Register a function with the pipeline.
 *
 * Functions that are used in the pipeline should be registered if the pipeline
 * needs to be serialised, or a serialised pipeline needs to be loaded.
 *
 * Registering a function does not add it to a pipeline, functions must still be
 * added to instances of the pipeline for them to be used when running a pipeline.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @param {String} label - The label to register this function with
 */
lunr.Pipeline.registerFunction = function (fn, label) {
  if (label in this.registeredFunctions) {
    lunr.utils.warn('Overwriting existing registered function: ' + label)
  }

  fn.label = label
  lunr.Pipeline.registeredFunctions[fn.label] = fn
}

/**
 * Warns if the function is not registered as a Pipeline function.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @private
 */
lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
  var isRegistered = fn.label && (fn.label in this.registeredFunctions)

  if (!isRegistered) {
    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn)
  }
}

/**
 * Loads a previously serialised pipeline.
 *
 * All functions to be loaded must already be registered with lunr.Pipeline.
 * If any function from the serialised data has not been registered then an
 * error will be thrown.
 *
 * @param {Object} serialised - The serialised pipeline to load.
 * @returns {lunr.Pipeline}
 */
lunr.Pipeline.load = function (serialised) {
  var pipeline = new lunr.Pipeline

  serialised.forEach(function (fnName) {
    var fn = lunr.Pipeline.registeredFunctions[fnName]

    if (fn) {
      pipeline.add(fn)
    } else {
      throw new Error('Cannot load unregistered function: ' + fnName)
    }
  })

  return pipeline
}

/**
 * Adds new functions to the end of the pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.
 */
lunr.Pipeline.prototype.add = function () {
  var fns = Array.prototype.slice.call(arguments)

  fns.forEach(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)
    this._stack.push(fn)
  }, this)
}

/**
 * Adds a single function after a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.after = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  pos = pos + 1
  this._stack.splice(pos, 0, newFn)
}

/**
 * Adds a single function before a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.before = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  this._stack.splice(pos, 0, newFn)
}

/**
 * Removes a function from the pipeline.
 *
 * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.
 */
lunr.Pipeline.prototype.remove = function (fn) {
  var pos = this._stack.indexOf(fn)
  if (pos == -1) {
    return
  }

  this._stack.splice(pos, 1)
}

/**
 * Runs the current list of functions that make up the pipeline against the
 * passed tokens.
 *
 * @param {Array} tokens The tokens to run through the pipeline.
 * @returns {Array}
 */
lunr.Pipeline.prototype.run = function (tokens) {
  var stackLength = this._stack.length

  for (var i = 0; i < stackLength; i++) {
    var fn = this._stack[i]

    tokens = tokens.reduce(function (memo, token, j) {
      var result = fn(token, j, tokens)

      if (result === void 0 || result === '') return memo

      return memo.concat(result)
    }, [])
  }

  return tokens
}

/**
 * Convenience method for passing a string through a pipeline and getting
 * strings out. This method takes care of wrapping the passed string in a
 * token and mapping the resulting tokens back to strings.
 *
 * @param {string} str - The string to pass through the pipeline.
 * @returns {string[]}
 */
lunr.Pipeline.prototype.runString = function (str) {
  var token = new lunr.Token (str)

  return this.run([token]).map(function (t) {
    return t.toString()
  })
}

/**
 * Resets the pipeline by removing any existing processors.
 *
 */
lunr.Pipeline.prototype.reset = function () {
  this._stack = []
}

/**
 * Returns a representation of the pipeline ready for serialisation.
 *
 * Logs a warning if the function has not been registered.
 *
 * @returns {Array}
 */
lunr.Pipeline.prototype.toJSON = function () {
  return this._stack.map(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)

    return fn.label
  })
}
/*!
 * lunr.Vector
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A vector is used to construct the vector space of documents and queries. These
 * vectors support operations to determine the similarity between two documents or
 * a document and a query.
 *
 * Normally no parameters are required for initializing a vector, but in the case of
 * loading a previously dumped vector the raw elements can be provided to the constructor.
 *
 * For performance reasons vectors are implemented with a flat array, where an elements
 * index is immediately followed by its value. E.g. [index, value, index, value]. This
 * allows the underlying array to be as sparse as possible and still offer decent
 * performance when being used for vector calculations.
 *
 * @constructor
 * @param {Number[]} [elements] - The flat list of element index and element value pairs.
 */
lunr.Vector = function (elements) {
  this._magnitude = 0
  this.elements = elements || []
}


/**
 * Calculates the position within the vector to insert a given index.
 *
 * This is used internally by insert and upsert. If there are duplicate indexes then
 * the position is returned as if the value for that index were to be updated, but it
 * is the callers responsibility to check whether there is a duplicate at that index
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @returns {Number}
 */
lunr.Vector.prototype.positionForIndex = function (index) {
  // For an empty vector the tuple can be inserted at the beginning
  if (this.elements.length == 0) {
    return 0
  }

  var start = 0,
      end = this.elements.length / 2,
      sliceLength = end - start,
      pivotPoint = Math.floor(sliceLength / 2),
      pivotIndex = this.elements[pivotPoint * 2]

  while (sliceLength > 1) {
    if (pivotIndex < index) {
      start = pivotPoint
    }

    if (pivotIndex > index) {
      end = pivotPoint
    }

    if (pivotIndex == index) {
      break
    }

    sliceLength = end - start
    pivotPoint = start + Math.floor(sliceLength / 2)
    pivotIndex = this.elements[pivotPoint * 2]
  }

  if (pivotIndex == index) {
    return pivotPoint * 2
  }

  if (pivotIndex > index) {
    return pivotPoint * 2
  }

  if (pivotIndex < index) {
    return (pivotPoint + 1) * 2
  }
}

/**
 * Inserts an element at an index within the vector.
 *
 * Does not allow duplicates, will throw an error if there is already an entry
 * for this index.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 */
lunr.Vector.prototype.insert = function (insertIdx, val) {
  this.upsert(insertIdx, val, function () {
    throw "duplicate index"
  })
}

/**
 * Inserts or updates an existing index within the vector.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 * @param {function} fn - A function that is called for updates, the existing value and the
 * requested value are passed as arguments
 */
lunr.Vector.prototype.upsert = function (insertIdx, val, fn) {
  this._magnitude = 0
  var position = this.positionForIndex(insertIdx)

  if (this.elements[position] == insertIdx) {
    this.elements[position + 1] = fn(this.elements[position + 1], val)
  } else {
    this.elements.splice(position, 0, insertIdx, val)
  }
}

/**
 * Calculates the magnitude of this vector.
 *
 * @returns {Number}
 */
lunr.Vector.prototype.magnitude = function () {
  if (this._magnitude) return this._magnitude

  var sumOfSquares = 0,
      elementsLength = this.elements.length

  for (var i = 1; i < elementsLength; i += 2) {
    var val = this.elements[i]
    sumOfSquares += val * val
  }

  return this._magnitude = Math.sqrt(sumOfSquares)
}

/**
 * Calculates the dot product of this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The vector to compute the dot product with.
 * @returns {Number}
 */
lunr.Vector.prototype.dot = function (otherVector) {
  var dotProduct = 0,
      a = this.elements, b = otherVector.elements,
      aLen = a.length, bLen = b.length,
      aVal = 0, bVal = 0,
      i = 0, j = 0

  while (i < aLen && j < bLen) {
    aVal = a[i], bVal = b[j]
    if (aVal < bVal) {
      i += 2
    } else if (aVal > bVal) {
      j += 2
    } else if (aVal == bVal) {
      dotProduct += a[i + 1] * b[j + 1]
      i += 2
      j += 2
    }
  }

  return dotProduct
}

/**
 * Calculates the cosine similarity between this vector and another
 * vector.
 *
 * @param {lunr.Vector} otherVector - The other vector to calculate the
 * similarity with.
 * @returns {Number}
 */
lunr.Vector.prototype.similarity = function (otherVector) {
  return this.dot(otherVector) / (this.magnitude() * otherVector.magnitude())
}

/**
 * Converts the vector to an array of the elements within the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toArray = function () {
  var output = new Array (this.elements.length / 2)

  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
    output[j] = this.elements[i]
  }

  return output
}

/**
 * A JSON serializable representation of the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toJSON = function () {
  return this.elements
}
/* eslint-disable */
/*!
 * lunr.stemmer
 * Copyright (C) 2017 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */

/**
 * lunr.stemmer is an english language stemmer, this is a JavaScript
 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token - The string to stem
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stemmer = (function(){
  var step2list = {
      "ational" : "ate",
      "tional" : "tion",
      "enci" : "ence",
      "anci" : "ance",
      "izer" : "ize",
      "bli" : "ble",
      "alli" : "al",
      "entli" : "ent",
      "eli" : "e",
      "ousli" : "ous",
      "ization" : "ize",
      "ation" : "ate",
      "ator" : "ate",
      "alism" : "al",
      "iveness" : "ive",
      "fulness" : "ful",
      "ousness" : "ous",
      "aliti" : "al",
      "iviti" : "ive",
      "biliti" : "ble",
      "logi" : "log"
    },

    step3list = {
      "icate" : "ic",
      "ative" : "",
      "alize" : "al",
      "iciti" : "ic",
      "ical" : "ic",
      "ful" : "",
      "ness" : ""
    },

    c = "[^aeiou]",          // consonant
    v = "[aeiouy]",          // vowel
    C = c + "[^aeiouy]*",    // consonant sequence
    V = v + "[aeiou]*",      // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v;                   // vowel in stem

  var re_mgr0 = new RegExp(mgr0);
  var re_mgr1 = new RegExp(mgr1);
  var re_meq1 = new RegExp(meq1);
  var re_s_v = new RegExp(s_v);

  var re_1a = /^(.+?)(ss|i)es$/;
  var re2_1a = /^(.+?)([^s])s$/;
  var re_1b = /^(.+?)eed$/;
  var re2_1b = /^(.+?)(ed|ing)$/;
  var re_1b_2 = /.$/;
  var re2_1b_2 = /(at|bl|iz)$/;
  var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
  var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var re_1c = /^(.+?[^aeiou])y$/;
  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
  var re2_4 = /^(.+?)(s|t)(ion)$/;

  var re_5 = /^(.+?)e$/;
  var re_5_1 = /ll$/;
  var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var porterStemmer = function porterStemmer(w) {
    var stem,
      suffix,
      firstch,
      re,
      re2,
      re3,
      re4;

    if (w.length < 3) { return w; }

    firstch = w.substr(0,1);
    if (firstch == "y") {
      w = firstch.toUpperCase() + w.substr(1);
    }

    // Step 1a
    re = re_1a
    re2 = re2_1a;

    if (re.test(w)) { w = w.replace(re,"$1$2"); }
    else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }

    // Step 1b
    re = re_1b;
    re2 = re2_1b;
    if (re.test(w)) {
      var fp = re.exec(w);
      re = re_mgr0;
      if (re.test(fp[1])) {
        re = re_1b_2;
        w = w.replace(re,"");
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1];
      re2 = re_s_v;
      if (re2.test(stem)) {
        w = stem;
        re2 = re2_1b_2;
        re3 = re3_1b_2;
        re4 = re4_1b_2;
        if (re2.test(w)) { w = w + "e"; }
        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,""); }
        else if (re4.test(w)) { w = w + "e"; }
      }
    }

    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
    re = re_1c;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      w = stem + "i";
    }

    // Step 2
    re = re_2;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step2list[suffix];
      }
    }

    // Step 3
    re = re_3;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step3list[suffix];
      }
    }

    // Step 4
    re = re_4;
    re2 = re2_4;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      if (re.test(stem)) {
        w = stem;
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1] + fp[2];
      re2 = re_mgr1;
      if (re2.test(stem)) {
        w = stem;
      }
    }

    // Step 5
    re = re_5;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      re2 = re_meq1;
      re3 = re3_5;
      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
        w = stem;
      }
    }

    re = re_5_1;
    re2 = re_mgr1;
    if (re.test(w) && re2.test(w)) {
      re = re_1b_2;
      w = w.replace(re,"");
    }

    // and turn initial Y back to y

    if (firstch == "y") {
      w = firstch.toLowerCase() + w.substr(1);
    }

    return w;
  };

  return function (token) {
    return token.update(porterStemmer);
  }
})();

lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')
/*!
 * lunr.stopWordFilter
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
 * list of stop words.
 *
 * The built in lunr.stopWordFilter is built using this generator and can be used
 * to generate custom stopWordFilters for applications or non English languages.
 *
 * @param {Array} token The token to pass through the filter
 * @returns {lunr.PipelineFunction}
 * @see lunr.Pipeline
 * @see lunr.stopWordFilter
 */
lunr.generateStopWordFilter = function (stopWords) {
  var words = stopWords.reduce(function (memo, stopWord) {
    memo[stopWord] = stopWord
    return memo
  }, {})

  return function (token) {
    if (token && words[token.toString()] !== token.toString()) return token
  }
}

/**
 * lunr.stopWordFilter is an English language stop word list filter, any words
 * contained in the list will not be passed through the filter.
 *
 * This is intended to be used in the Pipeline. If the token does not pass the
 * filter then undefined will be returned.
 *
 * @implements {lunr.PipelineFunction}
 * @params {lunr.Token} token - A token to check for being a stop word.
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stopWordFilter = lunr.generateStopWordFilter([
  'a',
  'able',
  'about',
  'across',
  'after',
  'all',
  'almost',
  'also',
  'am',
  'among',
  'an',
  'and',
  'any',
  'are',
  'as',
  'at',
  'be',
  'because',
  'been',
  'but',
  'by',
  'can',
  'cannot',
  'could',
  'dear',
  'did',
  'do',
  'does',
  'either',
  'else',
  'ever',
  'every',
  'for',
  'from',
  'get',
  'got',
  'had',
  'has',
  'have',
  'he',
  'her',
  'hers',
  'him',
  'his',
  'how',
  'however',
  'i',
  'if',
  'in',
  'into',
  'is',
  'it',
  'its',
  'just',
  'least',
  'let',
  'like',
  'likely',
  'may',
  'me',
  'might',
  'most',
  'must',
  'my',
  'neither',
  'no',
  'nor',
  'not',
  'of',
  'off',
  'often',
  'on',
  'only',
  'or',
  'other',
  'our',
  'own',
  'rather',
  'said',
  'say',
  'says',
  'she',
  'should',
  'since',
  'so',
  'some',
  'than',
  'that',
  'the',
  'their',
  'them',
  'then',
  'there',
  'these',
  'they',
  'this',
  'tis',
  'to',
  'too',
  'twas',
  'us',
  'wants',
  'was',
  'we',
  'were',
  'what',
  'when',
  'where',
  'which',
  'while',
  'who',
  'whom',
  'why',
  'will',
  'with',
  'would',
  'yet',
  'you',
  'your'
])

lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')
/*!
 * lunr.trimmer
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.trimmer is a pipeline function for trimming non word
 * characters from the beginning and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token The token to pass through the filter
 * @returns {lunr.Token}
 * @see lunr.Pipeline
 */
lunr.trimmer = function (token) {
  return token.update(function (s) {
    return s.replace(/^\W+/, '').replace(/\W+$/, '')
  })
}

lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')
/*!
 * lunr.TokenSet
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * A token set is used to store the unique list of all tokens
 * within an index. Token sets are also used to represent an
 * incoming query to the index, this query token set and index
 * token set are then intersected to find which tokens to look
 * up in the inverted index.
 *
 * A token set can hold multiple tokens, as in the case of the
 * index token set, or it can hold a single token as in the
 * case of a simple query token set.
 *
 * Additionally token sets are used to perform wildcard matching.
 * Leading, contained and trailing wildcards are supported, and
 * from this edit distance matching can also be provided.
 *
 * Token sets are implemented as a minimal finite state automata,
 * where both common prefixes and suffixes are shared between tokens.
 * This helps to reduce the space used for storing the token set.
 *
 * @constructor
 */
lunr.TokenSet = function () {
  this.final = false
  this.edges = {}
  this.id = lunr.TokenSet._nextId
  lunr.TokenSet._nextId += 1
}

/**
 * Keeps track of the next, auto increment, identifier to assign
 * to a new tokenSet.
 *
 * TokenSets require a unique identifier to be correctly minimised.
 *
 * @private
 */
lunr.TokenSet._nextId = 1

/**
 * Creates a TokenSet instance from the given sorted array of words.
 *
 * @param {String[]} arr - A sorted array of strings to create the set from.
 * @returns {lunr.TokenSet}
 * @throws Will throw an error if the input array is not sorted.
 */
lunr.TokenSet.fromArray = function (arr) {
  var builder = new lunr.TokenSet.Builder

  for (var i = 0, len = arr.length; i < len; i++) {
    builder.insert(arr[i])
  }

  builder.finish()
  return builder.root
}

/**
 * Creates a token set from a query clause.
 *
 * @private
 * @param {Object} clause - A single clause from lunr.Query.
 * @param {string} clause.term - The query clause term.
 * @param {number} [clause.editDistance] - The optional edit distance for the term.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromClause = function (clause) {
  if ('editDistance' in clause) {
    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)
  } else {
    return lunr.TokenSet.fromString(clause.term)
  }
}

/**
 * Creates a token set representing a single string with a specified
 * edit distance.
 *
 * Insertions, deletions, substitutions and transpositions are each
 * treated as an edit distance of 1.
 *
 * Increasing the allowed edit distance will have a dramatic impact
 * on the performance of both creating and intersecting these TokenSets.
 * It is advised to keep the edit distance less than 3.
 *
 * @param {string} str - The string to create the token set from.
 * @param {number} editDistance - The allowed edit distance to match.
 * @returns {lunr.Vector}
 */
lunr.TokenSet.fromFuzzyString = function (str, editDistance) {
  var root = new lunr.TokenSet

  var stack = [{
    node: root,
    editsRemaining: editDistance,
    str: str
  }]

  while (stack.length) {
    var frame = stack.pop()

    // no edit
    if (frame.str.length > 0) {
      var char = frame.str.charAt(0),
          noEditNode

      if (char in frame.node.edges) {
        noEditNode = frame.node.edges[char]
      } else {
        noEditNode = new lunr.TokenSet
        frame.node.edges[char] = noEditNode
      }

      if (frame.str.length == 1) {
        noEditNode.final = true
      } else {
        stack.push({
          node: noEditNode,
          editsRemaining: frame.editsRemaining,
          str: frame.str.slice(1)
        })
      }
    }

    // deletion
    // can only do a deletion if we have enough edits remaining
    // and if there are characters left to delete in the string
    if (frame.editsRemaining > 0 && frame.str.length > 1) {
      var char = frame.str.charAt(1),
          deletionNode

      if (char in frame.node.edges) {
        deletionNode = frame.node.edges[char]
      } else {
        deletionNode = new lunr.TokenSet
        frame.node.edges[char] = deletionNode
      }

      if (frame.str.length <= 2) {
        deletionNode.final = true
      } else {
        stack.push({
          node: deletionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str.slice(2)
        })
      }
    }

    // deletion
    // just removing the last character from the str
    if (frame.editsRemaining > 0 && frame.str.length == 1) {
      frame.node.final = true
    }

    // substitution
    // can only do a substitution if we have enough edits remaining
    // and if there are characters left to substitute
    if (frame.editsRemaining > 0 && frame.str.length >= 1) {
      if ("*" in frame.node.edges) {
        var substitutionNode = frame.node.edges["*"]
      } else {
        var substitutionNode = new lunr.TokenSet
        frame.node.edges["*"] = substitutionNode
      }

      if (frame.str.length == 1) {
        substitutionNode.final = true
      } else {
        stack.push({
          node: substitutionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str.slice(1)
        })
      }
    }

    // insertion
    // can only do insertion if there are edits remaining
    if (frame.editsRemaining > 0) {
      if ("*" in frame.node.edges) {
        var insertionNode = frame.node.edges["*"]
      } else {
        var insertionNode = new lunr.TokenSet
        frame.node.edges["*"] = insertionNode
      }

      if (frame.str.length == 0) {
        insertionNode.final = true
      } else {
        stack.push({
          node: insertionNode,
          editsRemaining: frame.editsRemaining - 1,
          str: frame.str
        })
      }
    }

    // transposition
    // can only do a transposition if there are edits remaining
    // and there are enough characters to transpose
    if (frame.editsRemaining > 0 && frame.str.length > 1) {
      var charA = frame.str.charAt(0),
          charB = frame.str.charAt(1),
          transposeNode

      if (charB in frame.node.edges) {
        transposeNode = frame.node.edges[charB]
      } else {
        transposeNode = new lunr.TokenSet
        frame.node.edges[charB] = transposeNode
      }

      if (frame.str.length == 1) {
        transposeNode.final = true
      } else {
        stack.push({
          node: transposeNode,
          editsRemaining: frame.editsRemaining - 1,
          str: charA + frame.str.slice(2)
        })
      }
    }
  }

  return root
}

/**
 * Creates a TokenSet from a string.
 *
 * The string may contain one or more wildcard characters (*)
 * that will allow wildcard matching when intersecting with
 * another TokenSet.
 *
 * @param {string} str - The string to create a TokenSet from.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromString = function (str) {
  var node = new lunr.TokenSet,
      root = node,
      wildcardFound = false

  /*
   * Iterates through all characters within the passed string
   * appending a node for each character.
   *
   * As soon as a wildcard character is found then a self
   * referencing edge is introduced to continually match
   * any number of any characters.
   */
  for (var i = 0, len = str.length; i < len; i++) {
    var char = str[i],
        final = (i == len - 1)

    if (char == "*") {
      wildcardFound = true
      node.edges[char] = node
      node.final = final

    } else {
      var next = new lunr.TokenSet
      next.final = final

      node.edges[char] = next
      node = next

      // TODO: is this needed anymore?
      if (wildcardFound) {
        node.edges["*"] = root
      }
    }
  }

  return root
}

/**
 * Converts this TokenSet into an array of strings
 * contained within the TokenSet.
 *
 * @returns {string[]}
 */
lunr.TokenSet.prototype.toArray = function () {
  var words = []

  var stack = [{
    prefix: "",
    node: this
  }]

  while (stack.length) {
    var frame = stack.pop(),
        edges = Object.keys(frame.node.edges),
        len = edges.length

    if (frame.node.final) {
      words.push(frame.prefix)
    }

    for (var i = 0; i < len; i++) {
      var edge = edges[i]

      stack.push({
        prefix: frame.prefix.concat(edge),
        node: frame.node.edges[edge]
      })
    }
  }

  return words
}

/**
 * Generates a string representation of a TokenSet.
 *
 * This is intended to allow TokenSets to be used as keys
 * in objects, largely to aid the construction and minimisation
 * of a TokenSet. As such it is not designed to be a human
 * friendly representation of the TokenSet.
 *
 * @returns {string}
 */
lunr.TokenSet.prototype.toString = function () {
  // NOTE: Using Object.keys here as this.edges is very likely
  // to enter 'hash-mode' with many keys being added
  //
  // avoiding a for-in loop here as it leads to the function
  // being de-optimised (at least in V8). From some simple
  // benchmarks the performance is comparable, but allowing
  // V8 to optimize may mean easy performance wins in the future.

  if (this._str) {
    return this._str
  }

  var str = this.final ? '1' : '0',
      labels = Object.keys(this.edges).sort(),
      len = labels.length

  for (var i = 0; i < len; i++) {
    var label = labels[i],
        node = this.edges[label]

    str = str + label + node.id
  }

  return str
}

/**
 * Returns a new TokenSet that is the intersection of
 * this TokenSet and the passed TokenSet.
 *
 * This intersection will take into account any wildcards
 * contained within the TokenSet.
 *
 * @param {lunr.TokenSet} b - An other TokenSet to intersect with.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.prototype.intersect = function (b) {
  var output = new lunr.TokenSet,
      frame = undefined

  var stack = [{
    qNode: b,
    output: output,
    node: this
  }]

  while (stack.length) {
    frame = stack.pop()

    // NOTE: As with the #toString method, we are using
    // Object.keys and a for loop instead of a for-in loop
    // as both of these objects enter 'hash' mode, causing
    // the function to be de-optimised in V8
    var qEdges = Object.keys(frame.qNode.edges),
        qLen = qEdges.length,
        nEdges = Object.keys(frame.node.edges),
        nLen = nEdges.length

    for (var q = 0; q < qLen; q++) {
      var qEdge = qEdges[q]

      for (var n = 0; n < nLen; n++) {
        var nEdge = nEdges[n]

        if (nEdge == qEdge || qEdge == '*') {
          var node = frame.node.edges[nEdge],
              qNode = frame.qNode.edges[qEdge],
              final = node.final && qNode.final,
              next = undefined

          if (nEdge in frame.output.edges) {
            // an edge already exists for this character
            // no need to create a new node, just set the finality
            // bit unless this node is already final
            next = frame.output.edges[nEdge]
            next.final = next.final || final

          } else {
            // no edge exists yet, must create one
            // set the finality bit and insert it
            // into the output
            next = new lunr.TokenSet
            next.final = final
            frame.output.edges[nEdge] = next
          }

          stack.push({
            qNode: qNode,
            output: next,
            node: node
          })
        }
      }
    }
  }

  return output
}
lunr.TokenSet.Builder = function () {
  this.previousWord = ""
  this.root = new lunr.TokenSet
  this.uncheckedNodes = []
  this.minimizedNodes = {}
}

lunr.TokenSet.Builder.prototype.insert = function (word) {
  var node,
      commonPrefix = 0

  if (word < this.previousWord) {
    throw new Error ("Out of order word insertion")
  }

  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
    if (word[i] != this.previousWord[i]) break
    commonPrefix++
  }

  this.minimize(commonPrefix)

  if (this.uncheckedNodes.length == 0) {
    node = this.root
  } else {
    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child
  }

  for (var i = commonPrefix; i < word.length; i++) {
    var nextNode = new lunr.TokenSet,
        char = word[i]

    node.edges[char] = nextNode

    this.uncheckedNodes.push({
      parent: node,
      char: char,
      child: nextNode
    })

    node = nextNode
  }

  node.final = true
  this.previousWord = word
}

lunr.TokenSet.Builder.prototype.finish = function () {
  this.minimize(0)
}

lunr.TokenSet.Builder.prototype.minimize = function (downTo) {
  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
    var node = this.uncheckedNodes[i],
        childKey = node.child.toString()

    if (childKey in this.minimizedNodes) {
      node.parent.edges[node.char] = this.minimizedNodes[childKey]
    } else {
      // Cache the key for this node since
      // we know it can't change anymore
      node.child._str = childKey

      this.minimizedNodes[childKey] = node.child
    }

    this.uncheckedNodes.pop()
  }
}
/*!
 * lunr.Index
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * An index contains the built index of all documents and provides a query interface
 * to the index.
 *
 * Usually instances of lunr.Index will not be created using this constructor, instead
 * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
 * used to load previously built and serialized indexes.
 *
 * @constructor
 * @param {Object} attrs - The attributes of the built search index.
 * @param {Object} attrs.invertedIndex - An index of term/field to document reference.
 * @param {Object<string, lunr.Vector>} attrs.documentVectors - Document vectors keyed by document reference.
 * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.
 * @param {string[]} attrs.fields - The names of indexed document fields.
 * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.
 */
lunr.Index = function (attrs) {
  this.invertedIndex = attrs.invertedIndex
  this.fieldVectors = attrs.fieldVectors
  this.tokenSet = attrs.tokenSet
  this.fields = attrs.fields
  this.pipeline = attrs.pipeline
}

/**
 * A result contains details of a document matching a search query.
 * @typedef {Object} lunr.Index~Result
 * @property {string} ref - The reference of the document this result represents.
 * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.
 * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.
 */

/**
 * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
 * query language which itself is parsed into an instance of lunr.Query.
 *
 * For programmatically building queries it is advised to directly use lunr.Query, the query language
 * is best used for human entered text rather than program generated text.
 *
 * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
 * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
 * or 'world', though those that contain both will rank higher in the results.
 *
 * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
 * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
 * wildcards will increase the number of documents that will be found but can also have a negative
 * impact on query performance, especially with wildcards at the beginning of a term.
 *
 * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
 * hello in the title field will match this query. Using a field not present in the index will lead
 * to an error being thrown.
 *
 * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
 * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
 * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
 * Avoid large values for edit distance to improve query performance.
 *
 * To escape special characters the backslash character '\' can be used, this allows searches to include
 * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
 * of attempting to apply a boost of 2 to the search term "foo".
 *
 * @typedef {string} lunr.Index~QueryString
 * @example <caption>Simple single term query</caption>
 * hello
 * @example <caption>Multiple term query</caption>
 * hello world
 * @example <caption>term scoped to a field</caption>
 * title:hello
 * @example <caption>term with a boost of 10</caption>
 * hello^10
 * @example <caption>term with an edit distance of 2</caption>
 * hello~2
 */

/**
 * Performs a search against the index using lunr query syntax.
 *
 * Results will be returned sorted by their score, the most relevant results
 * will be returned first.
 *
 * For more programmatic querying use lunr.Index#query.
 *
 * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.
 * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.search = function (queryString) {
  return this.query(function (query) {
    var parser = new lunr.QueryParser(queryString, query)
    parser.parse()
  })
}

/**
 * A query builder callback provides a query object to be used to express
 * the query to perform on the index.
 *
 * @callback lunr.Index~queryBuilder
 * @param {lunr.Query} query - The query object to build up.
 * @this lunr.Query
 */

/**
 * Performs a query against the index using the yielded lunr.Query object.
 *
 * If performing programmatic queries against the index, this method is preferred
 * over lunr.Index#search so as to avoid the additional query parsing overhead.
 *
 * A query object is yielded to the supplied function which should be used to
 * express the query to be run against the index.
 *
 * Note that although this function takes a callback parameter it is _not_ an
 * asynchronous operation, the callback is just yielded a query object to be
 * customized.
 *
 * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.query = function (fn) {
  // for each query clause
  // * process terms
  // * expand terms from token set
  // * find matching documents and metadata
  // * get document vectors
  // * score documents

  var query = new lunr.Query(this.fields),
      matchingFields = Object.create(null),
      queryVectors = Object.create(null),
      termFieldCache = Object.create(null)

  fn.call(query, query)

  for (var i = 0; i < query.clauses.length; i++) {
    /*
     * Unless the pipeline has been disabled for this term, which is
     * the case for terms with wildcards, we need to pass the clause
     * term through the search pipeline. A pipeline returns an array
     * of processed terms. Pipeline functions may expand the passed
     * term, which means we may end up performing multiple index lookups
     * for a single query term.
     */
    var clause = query.clauses[i],
        terms = null

    if (clause.usePipeline) {
      terms = this.pipeline.runString(clause.term)
    } else {
      terms = [clause.term]
    }

    for (var m = 0; m < terms.length; m++) {
      var term = terms[m]

      /*
       * Each term returned from the pipeline needs to use the same query
       * clause object, e.g. the same boost and or edit distance. The
       * simplest way to do this is to re-use the clause object but mutate
       * its term property.
       */
      clause.term = term

      /*
       * From the term in the clause we create a token set which will then
       * be used to intersect the indexes token set to get a list of terms
       * to lookup in the inverted index
       */
      var termTokenSet = lunr.TokenSet.fromClause(clause),
          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray()

      for (var j = 0; j < expandedTerms.length; j++) {
        /*
         * For each term get the posting and termIndex, this is required for
         * building the query vector.
         */
        var expandedTerm = expandedTerms[j],
            posting = this.invertedIndex[expandedTerm],
            termIndex = posting._index

        for (var k = 0; k < clause.fields.length; k++) {
          /*
           * For each field that this query term is scoped by (by default
           * all fields are in scope) we need to get all the document refs
           * that have this term in that field.
           *
           * The posting is the entry in the invertedIndex for the matching
           * term from above.
           */
          var field = clause.fields[k],
              fieldPosting = posting[field],
              matchingDocumentRefs = Object.keys(fieldPosting),
              termField = expandedTerm + "/" + field

          /*
           * To support field level boosts a query vector is created per
           * field. This vector is populated using the termIndex found for
           * the term and a unit value with the appropriate boost applied.
           *
           * If the query vector for this field does not exist yet it needs
           * to be created.
           */
          if (queryVectors[field] === undefined) {
            queryVectors[field] = new lunr.Vector
          }

          /*
           * Using upsert because there could already be an entry in the vector
           * for the term we are working with. In that case we just add the scores
           * together.
           */
          queryVectors[field].upsert(termIndex, 1 * clause.boost, function (a, b) { return a + b })

          /**
           * If we've already seen this term, field combo then we've already collected
           * the matching documents and metadata, no need to go through all that again
           */
          if (termFieldCache[termField]) {
            continue
          }

          for (var l = 0; l < matchingDocumentRefs.length; l++) {
            /*
             * All metadata for this term/field/document triple
             * are then extracted and collected into an instance
             * of lunr.MatchData ready to be returned in the query
             * results
             */
            var matchingDocumentRef = matchingDocumentRefs[l],
                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),
                metadata = fieldPosting[matchingDocumentRef],
                fieldMatch

            if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {
              matchingFields[matchingFieldRef] = new lunr.MatchData (expandedTerm, field, metadata)
            } else {
              fieldMatch.add(expandedTerm, field, metadata)
            }

          }

          termFieldCache[termField] = true
        }
      }
    }
  }

  var matchingFieldRefs = Object.keys(matchingFields),
      results = [],
      matches = Object.create(null)

  for (var i = 0; i < matchingFieldRefs.length; i++) {
    /*
     * Currently we have document fields that match the query, but we
     * need to return documents. The matchData and scores are combined
     * from multiple fields belonging to the same document.
     *
     * Scores are calculated by field, using the query vectors created
     * above, and combined into a final document score using addition.
     */
    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),
        docRef = fieldRef.docRef,
        fieldVector = this.fieldVectors[fieldRef],
        score = queryVectors[fieldRef.fieldName].similarity(fieldVector),
        docMatch

    if ((docMatch = matches[docRef]) !== undefined) {
      docMatch.score += score
      docMatch.matchData.combine(matchingFields[fieldRef])
    } else {
      var match = {
        ref: docRef,
        score: score,
        matchData: matchingFields[fieldRef]
      }
      matches[docRef] = match
      results.push(match)
    }
  }

  /*
   * Sort the results objects by score, highest first.
   */
  return results.sort(function (a, b) {
    return b.score - a.score
  })
}

/**
 * Prepares the index for JSON serialization.
 *
 * The schema for this JSON blob will be described in a
 * separate JSON schema file.
 *
 * @returns {Object}
 */
lunr.Index.prototype.toJSON = function () {
  var invertedIndex = Object.keys(this.invertedIndex)
    .sort()
    .map(function (term) {
      return [term, this.invertedIndex[term]]
    }, this)

  var fieldVectors = Object.keys(this.fieldVectors)
    .map(function (ref) {
      return [ref, this.fieldVectors[ref].toJSON()]
    }, this)

  return {
    version: lunr.version,
    fields: this.fields,
    fieldVectors: fieldVectors,
    invertedIndex: invertedIndex,
    pipeline: this.pipeline.toJSON()
  }
}

/**
 * Loads a previously serialized lunr.Index
 *
 * @param {Object} serializedIndex - A previously serialized lunr.Index
 * @returns {lunr.Index}
 */
lunr.Index.load = function (serializedIndex) {
  var attrs = {},
      fieldVectors = {},
      serializedVectors = serializedIndex.fieldVectors,
      invertedIndex = {},
      serializedInvertedIndex = serializedIndex.invertedIndex,
      tokenSetBuilder = new lunr.TokenSet.Builder,
      pipeline = lunr.Pipeline.load(serializedIndex.pipeline)

  if (serializedIndex.version != lunr.version) {
    lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'")
  }

  for (var i = 0; i < serializedVectors.length; i++) {
    var tuple = serializedVectors[i],
        ref = tuple[0],
        elements = tuple[1]

    fieldVectors[ref] = new lunr.Vector(elements)
  }

  for (var i = 0; i < serializedInvertedIndex.length; i++) {
    var tuple = serializedInvertedIndex[i],
        term = tuple[0],
        posting = tuple[1]

    tokenSetBuilder.insert(term)
    invertedIndex[term] = posting
  }

  tokenSetBuilder.finish()

  attrs.fields = serializedIndex.fields

  attrs.fieldVectors = fieldVectors
  attrs.invertedIndex = invertedIndex
  attrs.tokenSet = tokenSetBuilder.root
  attrs.pipeline = pipeline

  return new lunr.Index(attrs)
}
/*!
 * lunr.Builder
 * Copyright (C) 2017 Oliver Nightingale
 */

/**
 * lunr.Builder performs indexing on a set of documents and
 * returns instances of lunr.Index ready for querying.
 *
 * All configuration of the index is done via the builder, the
 * fields to index, the document reference, the text processing
 * pipeline and document scoring parameters are all set on the
 * builder before indexing.
 *
 * @constructor
 * @property {string} _ref - Internal reference to the document reference field.
 * @property {string[]} _fields - Internal reference to the document fields to index.
 * @property {object} invertedIndex - The inverted index maps terms to document fields.
 * @property {object} documentTermFrequencies - Keeps track of document term frequencies.
 * @property {object} documentLengths - Keeps track of the length of documents added to the index.
 * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.
 * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.
 * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.
 * @property {number} documentCount - Keeps track of the total number of documents indexed.
 * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
 * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
 * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.
 * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.
 */
lunr.Builder = function () {
  this._ref = "id"
  this._fields = []
  this.invertedIndex = Object.create(null)
  this.fieldTermFrequencies = {}
  this.fieldLengths = {}
  this.tokenizer = lunr.tokenizer
  this.pipeline = new lunr.Pipeline
  this.searchPipeline = new lunr.Pipeline
  this.documentCount = 0
  this._b = 0.75
  this._k1 = 1.2
  this.termIndex = 0
  this.metadataWhitelist = []
}

/**
 * Sets the document field used as the document reference. Every document must have this field.
 * The type of this field in the document should be a string, if it is not a string it will be
 * coerced into a string by calling toString.
 *
 * The default ref is 'id'.
 *
 * The ref should _not_ be changed during indexing, it should be set before any documents are
 * added to the index. Changing it during indexing can lead to inconsistent results.
 *
 * @param {string} ref - The name of the reference field in the document.
 */
lunr.Builder.prototype.ref = function (ref) {
  this._ref = ref
}

/**
 * Adds a field to the list of document fields that will be indexed. Every document being
 * indexed should have this field. Null values for this field in indexed documents will
 * not cause errors but will limit the chance of that document being retrieved by searches.
 *
 * All fields should be added before adding documents to the index. Adding fields after
 * a document has been indexed will have no effect on already indexed documents.
 *
 * @param {string} field - The name of a field to index in all documents.
 */
lunr.Builder.prototype.field = function (field) {
  this._fields.push(field)
}

/**
 * A parameter to tune the amount of field length normalisation that is applied when
 * calculating relevance scores. A value of 0 will completely disable any normalisation
 * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
 * will be clamped to the range 0 - 1.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.b = function (number) {
  if (number < 0) {
    this._b = 0
  } else if (number > 1) {
    this._b = 1
  } else {
    this._b = number
  }
}

/**
 * A parameter that controls the speed at which a rise in term frequency results in term
 * frequency saturation. The default value is 1.2. Setting this to a higher value will give
 * slower saturation levels, a lower value will result in quicker saturation.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.k1 = function (number) {
  this._k1 = number
}

/**
 * Adds a document to the index.
 *
 * Before adding fields to the index the index should have been fully setup, with the document
 * ref and all fields to index already having been specified.
 *
 * The document must have a field name as specified by the ref (by default this is 'id') and
 * it should have all fields defined for indexing, though null or undefined values will not
 * cause errors.
 *
 * @param {object} doc - The document to add to the index.
 */
lunr.Builder.prototype.add = function (doc) {
  var docRef = doc[this._ref]

  this.documentCount += 1

  for (var i = 0; i < this._fields.length; i++) {
    var fieldName = this._fields[i],
        field = doc[fieldName],
        tokens = this.tokenizer(field),
        terms = this.pipeline.run(tokens),
        fieldRef = new lunr.FieldRef (docRef, fieldName),
        fieldTerms = Object.create(null)

    this.fieldTermFrequencies[fieldRef] = fieldTerms
    this.fieldLengths[fieldRef] = 0

    // store the length of this field for this document
    this.fieldLengths[fieldRef] += terms.length

    // calculate term frequencies for this field
    for (var j = 0; j < terms.length; j++) {
      var term = terms[j]

      if (fieldTerms[term] == undefined) {
        fieldTerms[term] = 0
      }

      fieldTerms[term] += 1

      // add to inverted index
      // create an initial posting if one doesn't exist
      if (this.invertedIndex[term] == undefined) {
        var posting = Object.create(null)
        posting["_index"] = this.termIndex
        this.termIndex += 1

        for (var k = 0; k < this._fields.length; k++) {
          posting[this._fields[k]] = Object.create(null)
        }

        this.invertedIndex[term] = posting
      }

      // add an entry for this term/fieldName/docRef to the invertedIndex
      if (this.invertedIndex[term][fieldName][docRef] == undefined) {
        this.invertedIndex[term][fieldName][docRef] = Object.create(null)
      }

      // store all whitelisted metadata about this token in the
      // inverted index
      for (var l = 0; l < this.metadataWhitelist.length; l++) {
        var metadataKey = this.metadataWhitelist[l],
            metadata = term.metadata[metadataKey]

        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {
          this.invertedIndex[term][fieldName][docRef][metadataKey] = []
        }

        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)
      }
    }

  }
}

/**
 * Calculates the average document length for this index
 *
 * @private
 */
lunr.Builder.prototype.calculateAverageFieldLengths = function () {

  var fieldRefs = Object.keys(this.fieldLengths),
      numberOfFields = fieldRefs.length,
      accumulator = {},
      documentsWithField = {}

  for (var i = 0; i < numberOfFields; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName

    documentsWithField[field] || (documentsWithField[field] = 0)
    documentsWithField[field] += 1

    accumulator[field] || (accumulator[field] = 0)
    accumulator[field] += this.fieldLengths[fieldRef]
  }

  for (var i = 0; i < this._fields.length; i++) {
    var field = this._fields[i]
    accumulator[field] = accumulator[field] / documentsWithField[field]
  }

  this.averageFieldLength = accumulator
}

/**
 * Builds a vector space model of every document using lunr.Vector
 *
 * @private
 */
lunr.Builder.prototype.createFieldVectors = function () {
  var fieldVectors = {},
      fieldRefs = Object.keys(this.fieldTermFrequencies),
      fieldRefsLength = fieldRefs.length,
      termIdfCache = Object.create(null)

  for (var i = 0; i < fieldRefsLength; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName,
        fieldLength = this.fieldLengths[fieldRef],
        fieldVector = new lunr.Vector,
        termFrequencies = this.fieldTermFrequencies[fieldRef],
        terms = Object.keys(termFrequencies),
        termsLength = terms.length

    for (var j = 0; j < termsLength; j++) {
      var term = terms[j],
          tf = termFrequencies[term],
          termIndex = this.invertedIndex[term]._index,
          idf, score, scoreWithPrecision

      if (termIdfCache[term] === undefined) {
        idf = lunr.idf(this.invertedIndex[term], this.documentCount)
        termIdfCache[term] = idf
      } else {
        idf = termIdfCache[term]
      }

      score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[field])) + tf)
      scoreWithPrecision = Math.round(score * 1000) / 1000
      // Converts 1.23456789 to 1.234.
      // Reducing the precision so that the vectors take up less
      // space when serialised. Doing it now so that they behave
      // the same before and after serialisation. Also, this is
      // the fastest approach to reducing a number's precision in
      // JavaScript.

      fieldVector.insert(termIndex, scoreWithPrecision)
    }

    fieldVectors[fieldRef] = fieldVector
  }

  this.fieldVectors = fieldVectors
}

/**
 * Creates a token set of all tokens in the index using lunr.TokenSet
 *
 * @private
 */
lunr.Builder.prototype.createTokenSet = function () {
  this.tokenSet = lunr.TokenSet.fromArray(
    Object.keys(this.invertedIndex).sort()
  )
}

/**
 * Builds the index, creating an instance of lunr.Index.
 *
 * This completes the indexing process and should only be called
 * once all documents have been added to the index.
 *
 * @returns {lunr.Index}
 */
lunr.Builder.prototype.build = function () {
  this.calculateAverageFieldLengths()
  this.createFieldVectors()
  this.createTokenSet()

  return new lunr.Index({
    invertedIndex: this.invertedIndex,
    fieldVectors: this.fieldVectors,
    tokenSet: this.tokenSet,
    fields: this._fields,
    pipeline: this.searchPipeline
  })
}

/**
 * Applies a plugin to the index builder.
 *
 * A plugin is a function that is called with the index builder as its context.
 * Plugins can be used to customise or extend the behaviour of the index
 * in some way. A plugin is just a function, that encapsulated the custom
 * behaviour that should be applied when building the index.
 *
 * The plugin function will be called with the index builder as its argument, additional
 * arguments can also be passed when calling use. The function will be called
 * with the index builder as its context.
 *
 * @param {Function} plugin The plugin to apply.
 */
lunr.Builder.prototype.use = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  args.unshift(this)
  fn.apply(this, args)
}
/**
 * Contains and collects metadata about a matching document.
 * A single instance of lunr.MatchData is returned as part of every
 * lunr.Index~Result.
 *
 * @constructor
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 * @property {object} metadata - A cloned collection of metadata associated with this document.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData = function (term, field, metadata) {
  var clonedMetadata = Object.create(null),
      metadataKeys = Object.keys(metadata)

  // Cloning the metadata to prevent the original
  // being mutated during match data combination.
  // Metadata is kept in an array within the inverted
  // index so cloning the data can be done with
  // Array#slice
  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]
    clonedMetadata[key] = metadata[key].slice()
  }

  this.metadata = Object.create(null)
  this.metadata[term] = Object.create(null)
  this.metadata[term][field] = clonedMetadata
}

/**
 * An instance of lunr.MatchData will be created for every term that matches a
 * document. However only one instance is required in a lunr.Index~Result. This
 * method combines metadata from another instance of lunr.MatchData with this
 * objects metadata.
 *
 * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData.prototype.combine = function (otherMatchData) {
  var terms = Object.keys(otherMatchData.metadata)

  for (var i = 0; i < terms.length; i++) {
    var term = terms[i],
        fields = Object.keys(otherMatchData.metadata[term])

    if (this.metadata[term] == undefined) {
      this.metadata[term] = Object.create(null)
    }

    for (var j = 0; j < fields.length; j++) {
      var field = fields[j],
          keys = Object.keys(otherMatchData.metadata[term][field])

      if (this.metadata[term][field] == undefined) {
        this.metadata[term][field] = Object.create(null)
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k]

        if (this.metadata[term][field][key] == undefined) {
          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key]
        } else {
          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])
        }

      }
    }
  }
}

/**
 * Add metadata for a term/field pair to this instance of match data.
 *
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 */
lunr.MatchData.prototype.add = function (term, field, metadata) {
  if (!(term in this.metadata)) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = metadata
    return
  }

  if (!(field in this.metadata[term])) {
    this.metadata[term][field] = metadata
    return
  }

  var metadataKeys = Object.keys(metadata)

  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]

    if (key in this.metadata[term][field]) {
      this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key])
    } else {
      this.metadata[term][field][key] = metadata[key]
    }
  }
}
/**
 * A lunr.Query provides a programmatic way of defining queries to be performed
 * against a {@link lunr.Index}.
 *
 * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
 * so the query object is pre-initialized with the right index fields.
 *
 * @constructor
 * @property {lunr.Query~Clause[]} clauses - An array of query clauses.
 * @property {string[]} allFields - An array of all available fields in a lunr.Index.
 */
lunr.Query = function (allFields) {
  this.clauses = []
  this.allFields = allFields
}

/**
 * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.
 *
 * This allows wildcards to be added to the beginning and end of a term without having to manually do any string
 * concatenation.
 *
 * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.
 *
 * @constant
 * @default
 * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour
 * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists
 * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with trailing wildcard</caption>
 * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })
 * @example <caption>query term with leading and trailing wildcard</caption>
 * query.term('foo', {
 *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
 * })
 */
lunr.Query.wildcard = new String ("*")
lunr.Query.wildcard.NONE = 0
lunr.Query.wildcard.LEADING = 1
lunr.Query.wildcard.TRAILING = 2

/**
 * A single clause in a {@link lunr.Query} contains a term and details on how to
 * match that term against a {@link lunr.Index}.
 *
 * @typedef {Object} lunr.Query~Clause
 * @property {string[]} fields - The fields in an index this clause should be matched against.
 * @property {number} [boost=1] - Any boost that should be applied when matching this clause.
 * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.
 * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.
 * @property {number} [wildcard=0] - Whether the term should have wildcards appended or prepended.
 */

/**
 * Adds a {@link lunr.Query~Clause} to this query.
 *
 * Unless the clause contains the fields to be matched all fields will be matched. In addition
 * a default boost of 1 is applied to the clause.
 *
 * @param {lunr.Query~Clause} clause - The clause to add to this query.
 * @see lunr.Query~Clause
 * @returns {lunr.Query}
 */
lunr.Query.prototype.clause = function (clause) {
  if (!('fields' in clause)) {
    clause.fields = this.allFields
  }

  if (!('boost' in clause)) {
    clause.boost = 1
  }

  if (!('usePipeline' in clause)) {
    clause.usePipeline = true
  }

  if (!('wildcard' in clause)) {
    clause.wildcard = lunr.Query.wildcard.NONE
  }

  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {
    clause.term = "*" + clause.term
  }

  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {
    clause.term = "" + clause.term + "*"
  }

  this.clauses.push(clause)

  return this
}

/**
 * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
 * to the list of clauses that make up this query.
 *
 * @param {string} term - The term to add to the query.
 * @param {Object} [options] - Any additional properties to add to the query clause.
 * @returns {lunr.Query}
 * @see lunr.Query#clause
 * @see lunr.Query~Clause
 * @example <caption>adding a single term to a query</caption>
 * query.term("foo")
 * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
 * query.term("foo", {
 *   fields: ["title"],
 *   boost: 10,
 *   wildcard: lunr.Query.wildcard.TRAILING
 * })
 */
lunr.Query.prototype.term = function (term, options) {
  var clause = options || {}
  clause.term = term

  this.clause(clause)

  return this
}
lunr.QueryParseError = function (message, start, end) {
  this.name = "QueryParseError"
  this.message = message
  this.start = start
  this.end = end
}

lunr.QueryParseError.prototype = new Error
lunr.QueryLexer = function (str) {
  this.lexemes = []
  this.str = str
  this.length = str.length
  this.pos = 0
  this.start = 0
  this.escapeCharPositions = []
}

lunr.QueryLexer.prototype.run = function () {
  var state = lunr.QueryLexer.lexText

  while (state) {
    state = state(this)
  }
}

lunr.QueryLexer.prototype.sliceString = function () {
  var subSlices = [],
      sliceStart = this.start,
      sliceEnd = this.pos

  for (var i = 0; i < this.escapeCharPositions.length; i++) {
    sliceEnd = this.escapeCharPositions[i]
    subSlices.push(this.str.slice(sliceStart, sliceEnd))
    sliceStart = sliceEnd + 1
  }

  subSlices.push(this.str.slice(sliceStart, this.pos))
  this.escapeCharPositions.length = 0

  return subSlices.join('')
}

lunr.QueryLexer.prototype.emit = function (type) {
  this.lexemes.push({
    type: type,
    str: this.sliceString(),
    start: this.start,
    end: this.pos
  })

  this.start = this.pos
}

lunr.QueryLexer.prototype.escapeCharacter = function () {
  this.escapeCharPositions.push(this.pos - 1)
  this.pos += 1
}

lunr.QueryLexer.prototype.next = function () {
  if (this.pos >= this.length) {
    return lunr.QueryLexer.EOS
  }

  var char = this.str.charAt(this.pos)
  this.pos += 1
  return char
}

lunr.QueryLexer.prototype.width = function () {
  return this.pos - this.start
}

lunr.QueryLexer.prototype.ignore = function () {
  if (this.start == this.pos) {
    this.pos += 1
  }

  this.start = this.pos
}

lunr.QueryLexer.prototype.backup = function () {
  this.pos -= 1
}

lunr.QueryLexer.prototype.acceptDigitRun = function () {
  var char, charCode

  do {
    char = this.next()
    charCode = char.charCodeAt(0)
  } while (charCode > 47 && charCode < 58)

  if (char != lunr.QueryLexer.EOS) {
    this.backup()
  }
}

lunr.QueryLexer.prototype.more = function () {
  return this.pos < this.length
}

lunr.QueryLexer.EOS = 'EOS'
lunr.QueryLexer.FIELD = 'FIELD'
lunr.QueryLexer.TERM = 'TERM'
lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'
lunr.QueryLexer.BOOST = 'BOOST'

lunr.QueryLexer.lexField = function (lexer) {
  lexer.backup()
  lexer.emit(lunr.QueryLexer.FIELD)
  lexer.ignore()
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexTerm = function (lexer) {
  if (lexer.width() > 1) {
    lexer.backup()
    lexer.emit(lunr.QueryLexer.TERM)
  }

  lexer.ignore()

  if (lexer.more()) {
    return lunr.QueryLexer.lexText
  }
}

lunr.QueryLexer.lexEditDistance = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexBoost = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.BOOST)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexEOS = function (lexer) {
  if (lexer.width() > 0) {
    lexer.emit(lunr.QueryLexer.TERM)
  }
}

// This matches the separator used when tokenising fields
// within a document. These should match otherwise it is
// not possible to search for some tokens within a document.
//
// It is possible for the user to change the separator on the
// tokenizer so it _might_ clash with any other of the special
// characters already used within the search string, e.g. :.
//
// This means that it is possible to change the separator in
// such a way that makes some words unsearchable using a search
// string.
lunr.QueryLexer.termSeparator = lunr.tokenizer.separator

lunr.QueryLexer.lexText = function (lexer) {
  while (true) {
    var char = lexer.next()

    if (char == lunr.QueryLexer.EOS) {
      return lunr.QueryLexer.lexEOS
    }

    // Escape character is '\'
    if (char.charCodeAt(0) == 92) {
      lexer.escapeCharacter()
      continue
    }

    if (char == ":") {
      return lunr.QueryLexer.lexField
    }

    if (char == "~") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexEditDistance
    }

    if (char == "^") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexBoost
    }

    if (char.match(lunr.QueryLexer.termSeparator)) {
      return lunr.QueryLexer.lexTerm
    }
  }
}

lunr.QueryParser = function (str, query) {
  this.lexer = new lunr.QueryLexer (str)
  this.query = query
  this.currentClause = {}
  this.lexemeIdx = 0
}

lunr.QueryParser.prototype.parse = function () {
  this.lexer.run()
  this.lexemes = this.lexer.lexemes

  var state = lunr.QueryParser.parseFieldOrTerm

  while (state) {
    state = state(this)
  }

  return this.query
}

lunr.QueryParser.prototype.peekLexeme = function () {
  return this.lexemes[this.lexemeIdx]
}

lunr.QueryParser.prototype.consumeLexeme = function () {
  var lexeme = this.peekLexeme()
  this.lexemeIdx += 1
  return lexeme
}

lunr.QueryParser.prototype.nextClause = function () {
  var completedClause = this.currentClause
  this.query.clause(completedClause)
  this.currentClause = {}
}

lunr.QueryParser.parseFieldOrTerm = function (parser) {
  var lexeme = parser.peekLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.type) {
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expected either a field or a term, found " + lexeme.type

      if (lexeme.str.length >= 1) {
        errorMessage += " with value '" + lexeme.str + "'"
      }

      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }
}

lunr.QueryParser.parseField = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  if (parser.query.allFields.indexOf(lexeme.str) == -1) {
    var possibleFields = parser.query.allFields.map(function (f) { return "'" + f + "'" }).join(', '),
        errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields

    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.fields = [lexeme.str]

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseTerm = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  parser.currentClause.term = lexeme.str.toLowerCase()

  if (lexeme.str.indexOf("*") != -1) {
    parser.currentClause.usePipeline = false
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseEditDistance = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var editDistance = parseInt(lexeme.str, 10)

  if (isNaN(editDistance)) {
    var errorMessage = "edit distance must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.editDistance = editDistance

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseBoost = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var boost = parseInt(lexeme.str, 10)

  if (isNaN(boost)) {
    var errorMessage = "boost must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.boost = boost

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

  /**
   * export the module via AMD, CommonJS or as a browser global
   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
   */
  ;(function (root, factory) {
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } else if (typeof exports === 'object') {
      /**
       * Node. Does not work with strict CommonJS, but
       * only CommonJS-like enviroments that support module.exports,
       * like Node.
       */
      module.exports = factory()
    } else {
      // Browser globals (root is window)
      root.lunr = factory()
    }
  }(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return lunr
  }))
})();


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Position = __webpack_require__(44);

var _Position2 = _interopRequireDefault(_Position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Position: _Position2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Position = function () {

  /**
   * Set sidebars to locked state and limit height to parent node
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Sidebar
   * @property {HTMLElement} parent_ - Sidebar container
   * @property {HTMLElement} header_ - Header
   * @property {number} height_ - Current sidebar height
   * @property {number} offset_ - Current page y-offset
   * @property {boolean} pad_ - Pad when header is fixed
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   * @param {(string|HTMLElement)} header - Selector or HTML element
   */
  function Position(el, header) {
    _classCallCheck(this, Position);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement) || !(ref.parentNode instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
    this.parent_ = ref.parentNode;

    /* Retrieve header */
    ref = typeof header === "string" ? document.querySelector(header) : header;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.header_ = ref;

    /* Initialize current height and test whether header is fixed */
    this.height_ = 0;
    this.pad_ = window.getComputedStyle(this.header_).position === "fixed";
  }

  /**
   * Initialize sidebar state
   */


  Position.prototype.setup = function setup() {
    var top = Array.prototype.reduce.call(this.parent_.children, function (offset, child) {
      return Math.max(offset, child.offsetTop);
    }, 0);

    /* Set lock offset for element with largest top offset */
    this.offset_ = top - (this.pad_ ? this.header_.offsetHeight : 0);
    this.update();
  };

  /**
   * Update locked state and height
   *
   * The inner height of the window (= the visible area) is the maximum
   * possible height for the stretching sidebar. This height must be deducted
   * by the height of the fixed header (56px). Depending on the page y-offset,
   * the top offset of the sidebar must be taken into account, as well as the
   * case where the window is scrolled beyond the sidebar container.
   *
   * @param {Event?} ev - Event
   */


  Position.prototype.update = function update(ev) {
    var offset = window.pageYOffset;
    var visible = window.innerHeight;

    /* Update offset, in case window is resized */
    if (ev && ev.type === "resize") this.setup();

    /* Set bounds of sidebar container - must be calculated on every run, as
       the height of the content might change due to loading images etc. */
    var bounds = {
      top: this.pad_ ? this.header_.offsetHeight : 0,
      bottom: this.parent_.offsetTop + this.parent_.offsetHeight

      /* Calculate new offset and height */
    };var height = visible - bounds.top - Math.max(0, this.offset_ - offset) - Math.max(0, offset + visible - bounds.bottom);

    /* If height changed, update element */
    if (height !== this.height_) this.el_.style.height = (this.height_ = height) + "px";

    /* Sidebar should be locked, as we're below parent offset */
    if (offset >= this.offset_) {
      if (this.el_.dataset.mdState !== "lock") this.el_.dataset.mdState = "lock";

      /* Sidebar should be unlocked, if locked */
    } else if (this.el_.dataset.mdState === "lock") {
      this.el_.dataset.mdState = "";
    }
  };

  /**
   * Reset locked state and height
   */


  Position.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.el_.style.height = "";
    this.height_ = 0;
  };

  return Position;
}();

exports.default = Position;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Adapter = __webpack_require__(46);

var _Adapter2 = _interopRequireDefault(_Adapter);

var _Repository = __webpack_require__(50);

var _Repository2 = _interopRequireDefault(_Repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

exports.default = {
  Adapter: _Adapter2.default,
  Repository: _Repository2.default
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _GitHub = __webpack_require__(47);

var _GitHub2 = _interopRequireDefault(_GitHub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  GitHub: _GitHub2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Abstract2 = __webpack_require__(48);

var _Abstract3 = _interopRequireDefault(_Abstract2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * deal in the Software without restriction, including without limitation the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IN THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var GitHub = function (_Abstract) {
  _inherits(GitHub, _Abstract);

  /**
   * Retrieve repository information from GitHub
   *
   * @constructor
   *
   * @property {string} name_ - Name of the repository
   *
   * @param {(string|HTMLAnchorElement)} el - Selector or HTML element
   */
  function GitHub(el) {
    _classCallCheck(this, GitHub);

    /* Extract user (and repository name) from URL, as we have to query for all
       repositories, to omit 404 errors for private repositories */
    var _this = _possibleConstructorReturn(this, _Abstract.call(this, el));

    var matches = /^.+github\.com\/([^/]+)\/?([^/]+)?.*$/.exec(_this.base_);
    if (matches && matches.length === 3) {
      var user = matches[1],
          name = matches[2];

      /* Initialize base URL and repository name */

      _this.base_ = "https://api.github.com/users/" + user + "/repos";
      _this.name_ = name;
    }
    return _this;
  }

  /**
   * Fetch relevant repository information from GitHub
   *
   * @return {Promise<Array<string>>} Promise returning an array of facts
   */


  GitHub.prototype.fetch_ = function fetch_() {
    var _this2 = this;

    var paginate = function paginate() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      return fetch(_this2.base_ + "?per_page=30&page=" + page).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (!(data instanceof Array)) throw new TypeError();

        /* Display number of stars and forks, if repository is given */
        if (_this2.name_) {
          var repo = data.find(function (item) {
            return item.name === _this2.name_;
          });
          if (!repo && data.length === 30) return paginate(page + 1);

          /* If we found a repo, extract the facts */
          return repo ? [_this2.format_(repo.stargazers_count) + " Stars", _this2.format_(repo.forks_count) + " Forks"] : [];

          /* Display number of repositories, otherwise */
        } else {
          return [data.length + " Repositories"];
        }
      });
    };

    /* Paginate through repos */
    return paginate();
  };

  return GitHub;
}(_Abstract3.default);

exports.default = GitHub;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsCookie = __webpack_require__(49);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
                                                                                                                                                           *
                                                                                                                                                           * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                           * of this software and associated documentation files (the "Software"), to
                                                                                                                                                           * deal in the Software without restriction, including without limitation the
                                                                                                                                                           * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
                                                                                                                                                           * sell copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                           * furnished to do so, subject to the following conditions:
                                                                                                                                                           *
                                                                                                                                                           * The above copyright notice and this permission notice shall be included in
                                                                                                                                                           * all copies or substantial portions of the Software.
                                                                                                                                                           *
                                                                                                                                                           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                           * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                                                                                                                                                           * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                                                                                                                                           * IN THE SOFTWARE.
                                                                                                                                                           */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Abstract = function () {

  /**
   * Retrieve repository information
   *
   * @constructor
   *
   * @property {HTMLAnchorElement} el_ - Link to repository
   * @property {string} base_ - API base URL
   * @property {number} salt_ - Unique identifier
   *
   * @param {(string|HTMLAnchorElement)} el - Selector or HTML element
   */
  function Abstract(el) {
    _classCallCheck(this, Abstract);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLAnchorElement)) throw new ReferenceError();
    this.el_ = ref;

    /* Retrieve base URL */
    this.base_ = this.el_.href;
    this.salt_ = this.hash_(this.base_);
  }

  /**
   * Retrieve data from Cookie or fetch from respective API
   *
   * @return {Promise<Array<string>>} Promise that returns an array of facts
   */


  Abstract.prototype.fetch = function fetch() {
    var _this = this;

    return new Promise(function (resolve) {
      var cached = _jsCookie2.default.getJSON(_this.salt_ + ".cache-source");
      if (typeof cached !== "undefined") {
        resolve(cached);

        /* If the data is not cached in a cookie, invoke fetch and set
           a cookie that automatically expires in 15 minutes */
      } else {
        _this.fetch_().then(function (data) {
          _jsCookie2.default.set(_this.salt_ + ".cache-source", data, { expires: 1 / 96 });
          resolve(data);
        });
      }
    });
  };

  /**
   * Abstract private function that fetches relevant repository information
   *
   * @abstract
   */


  Abstract.prototype.fetch_ = function fetch_() {
    throw new Error("fetch_(): Not implemented");
  };

  /**
   * Format a number with suffix
   *
   * @param {number} number - Number to format
   * @return {string} Formatted number
   */


  Abstract.prototype.format_ = function format_(number) {
    if (number > 10000) return (number / 1000).toFixed(0) + "k";else if (number > 1000) return (number / 1000).toFixed(1) + "k";
    return "" + number;
  };

  /**
   * Simple hash function
   *
   * Taken from http://stackoverflow.com/a/7616484/1065584
   *
   * @param {string} str - Input string
   * @return {number} Hashed string
   */


  Abstract.prototype.hash_ = function hash_(str) {
    var hash = 0;
    if (str.length === 0) return hash;
    for (var i = 0, len = str.length; i < len; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  return Abstract;
}();

exports.default = Abstract;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(JSX) {

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Repository = function () {

  /**
   * Render repository information
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Repository information
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Repository(el) {
    _classCallCheck(this, Repository);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof HTMLElement)) throw new ReferenceError();
    this.el_ = ref;
  }

  /**
   * Initialize the repository
   *
   * @param {Array<string>} facts - Facts to be rendered
   */


  Repository.prototype.initialize = function initialize(facts) {
    if (facts.length && this.el_.children.length) this.el_.children[this.el_.children.length - 1].appendChild(JSX.createElement(
      "ul",
      { "class": "md-source__facts" },
      facts.map(function (fact) {
        return JSX.createElement(
          "li",
          { "class": "md-source__fact" },
          fact
        );
      })
    ));

    /* Finish rendering with animation */
    this.el_.dataset.mdState = "done";
  };

  return Repository;
}();

exports.default = Repository;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Toggle = __webpack_require__(52);

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ----------------------------------------------------------------------------
 * Module
 * ------------------------------------------------------------------------- */

exports.default = {
  Toggle: _Toggle2.default
}; /*
    * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
    *
    * Permission is hereby granted, free of charge, to any person obtaining a copy
    * of this software and associated documentation files (the "Software"), to
    * deal in the Software without restriction, including without limitation the
    * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    * sell copies of the Software, and to permit persons to whom the Software is
    * furnished to do so, subject to the following conditions:
    *
    * The above copyright notice and this permission notice shall be included in
    * all copies or substantial portions of the Software.
    *
    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    * IN THE SOFTWARE.
    */

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

var Toggle = function () {

  /**
   * Toggle tabs visibility depending on page y-offset
   *
   * @constructor
   *
   * @property {HTMLElement} el_ - Content container
   * @property {number} offset_ - Toggle page-y offset
   * @property {boolean} active_ - Tabs visibility
   *
   * @param {(string|HTMLElement)} el - Selector or HTML element
   */
  function Toggle(el) {
    _classCallCheck(this, Toggle);

    var ref = typeof el === "string" ? document.querySelector(el) : el;
    if (!(ref instanceof Node)) throw new ReferenceError();
    this.el_ = ref;

    /* Initialize offset and state */
    this.active_ = false;
  }

  /**
   * Update visibility
   */


  Toggle.prototype.update = function update() {
    var active = window.pageYOffset >= this.el_.children[0].offsetTop + (5 - 48); // TODO: quick hack to enable same handling for hero
    if (active !== this.active_) this.el_.dataset.mdState = (this.active_ = active) ? "hidden" : "";
  };

  /**
   * Reset visibility
   */


  Toggle.prototype.reset = function reset() {
    this.el_.dataset.mdState = "";
    this.active_ = false;
  };

  return Toggle;
}();

exports.default = Toggle;

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmI3YWVlNWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9wcm92aWRlcnMvanN4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuZmV0Y2gvZGlzdC91bmZldGNoLmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC9MaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2JpdGJ1Y2tldC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9naXRsYWIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLXBhbGV0dGUuc2Nzcz80OWI0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jdXN0b20tZXZlbnQtcG9seWZpbGwvY3VzdG9tLWV2ZW50LXBvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bmZldGNoL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9taXNlLXBvbHlmaWxsL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGlwYm9hcmQvbGliL2NsaXBib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkL2xpYi9jbGlwYm9hcmQtYWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZWxlY3Qvc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29kLWxpc3RlbmVyL3NyYy9saXN0ZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2QtbGlzdGVuZXIvc3JjL2lzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWxlZ2F0ZS9zcmMvZGVsZWdhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9jbG9zZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYXN0Y2xpY2svbGliL2Zhc3RjbGljay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC9NYXRjaE1lZGlhLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci9TaGFkb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvQmx1ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvTmF2L0NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvU2Nyb2xsaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9Mb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TZWFyY2gvUmVzdWx0LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXNjYXBlLXN0cmluZy1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qcy1leHBvc2VkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdW5yL2x1bnIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NpZGViYXIvUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9BZGFwdGVyL0dpdEh1Yi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvQWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvUmVwb3NpdG9yeS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1RhYnMvVG9nZ2xlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJ0YWciLCJwcm9wZXJ0aWVzIiwiZWwiLCJkb2N1bWVudCIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJPYmplY3QiLCJrZXlzIiwic2V0QXR0cmlidXRlIiwiYXR0ciIsIml0ZXJhdGVDaGlsZE5vZGVzIiwibm9kZXMiLCJub2RlIiwidGV4dENvbnRlbnQiLCJpc0FycmF5IiwiX19odG1sIiwiaW5uZXJIVE1MIiwiTm9kZSIsImFwcGVuZENoaWxkIiwiY2hpbGRyZW4iLCJMaXN0ZW5lciIsImVscyIsImV2ZW50cyIsImhhbmRsZXIiLCJlbHNfIiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uY2F0IiwiaGFuZGxlcl8iLCJ1cGRhdGUiLCJldmVudHNfIiwidXBkYXRlXyIsImV2IiwibGlzdGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2V0dXAiLCJ1bmxpc3RlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldCIsIndpbmRvdyIsIlByb21pc2UiLCJ0cmFuc2xhdGUiLCJtZXRhIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJrZXkiLCJIVE1MTWV0YUVsZW1lbnQiLCJSZWZlcmVuY2VFcnJvciIsImNvbnRlbnQiLCJpbml0aWFsaXplIiwiY29uZmlnIiwiRXZlbnQiLCJib2R5IiwiSFRNTEVsZW1lbnQiLCJhdHRhY2giLCJNb2Rlcm5penIiLCJhZGRUZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJ0YWJsZXMiLCJ3cmFwIiwidGFibGUiLCJuZXh0U2libGluZyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJpc1N1cHBvcnRlZCIsImJsb2NrcyIsImJsb2NrIiwiaW5kZXgiLCJpZCIsImJ1dHRvbiIsInBhcmVudCIsImNvcHkiLCJvbiIsIm1lc3NhZ2UiLCJhY3Rpb24iLCJ0cmlnZ2VyIiwicXVlcnlTZWxlY3RvciIsImNsZWFyU2VsZWN0aW9uIiwiZGF0YXNldCIsIm1kVGltZXIiLCJjbGVhclRpbWVvdXQiLCJwYXJzZUludCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJ0b1N0cmluZyIsImRldGFpbHMiLCJzdW1tYXJ5IiwidGFyZ2V0IiwiaGFzQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwibG9jYXRpb24iLCJoYXNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJzdHJpbmciLCJIVE1MRGV0YWlsc0VsZW1lbnQiLCJvcGVuIiwibG9jIiwiaW9zIiwic2Nyb2xsYWJsZSIsIml0ZW0iLCJ0b3AiLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJIZWFkZXIiLCJTaGFkb3ciLCJUaXRsZSIsIlRhYnMiLCJUb2dnbGUiLCJNYXRjaE1lZGlhIiwiU2lkZWJhciIsIlBvc2l0aW9uIiwiTmF2IiwiQmx1ciIsImNvbGxhcHNpYmxlcyIsImNvbGxhcHNlIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIkNvbGxhcHNlIiwiU2Nyb2xsaW5nIiwiU2VhcmNoIiwiTG9jayIsIlJlc3VsdCIsImZldGNoIiwidXJsIiwiYmFzZSIsInZlcnNpb24iLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZG9jcyIsIm1hcCIsImRvYyIsInF1ZXJ5IiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwidG9nZ2xlIiwiY2hlY2tlZCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwia2V5Q29kZSIsImFjdGl2ZUVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkhUTUxMaW5rRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImJsdXIiLCJpbmRleE9mIiwibGlua3MiLCJmaW5kIiwibGluayIsIm1kU3RhdGUiLCJNYXRoIiwibWF4IiwibGVuZ3RoIiwic3RvcFByb3BhZ2F0aW9uIiwiZm9ybSIsImxhYmVscyIsImxhYmVsIiwidGFiSW5kZXgiLCJyZXNvbHZlIiwiSFRNTEFuY2hvckVsZW1lbnQiLCJtZFNvdXJjZSIsIlNvdXJjZSIsIkFkYXB0ZXIiLCJHaXRIdWIiLCJzb3VyY2VzIiwiUmVwb3NpdG9yeSIsInNvdXJjZSIsImZhY3RzIiwiYXBwIiwibGlzdGVuZXIiLCJtcSIsIm1hdGNoZXMiLCJtZWRpYSIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsImhlYWRlciIsInJlZiIsImVsXyIsImhlYWRlcl8iLCJoZWlnaHRfIiwiYWN0aXZlXyIsImN1cnJlbnQiLCJ0eXBlIiwiYWN0aXZlIiwicGFnZVlPZmZzZXQiLCJIVE1MSGVhZGluZ0VsZW1lbnQiLCJzdHlsZSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRUb3AiLCJpbmRleF8iLCJvZmZzZXRfIiwiZGlyXyIsImFuY2hvcnNfIiwicmVkdWNlIiwiYW5jaG9ycyIsIm9mZnNldCIsImRpciIsImkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJlbmQiLCJtYWluIiwid2Via2l0T3ZlcmZsb3dTY3JvbGxpbmciLCJ0b2dnbGVzIiwicGFuZSIsIm5leHRFbGVtZW50U2libGluZyIsInRhZ05hbWUiLCJsb2NrXyIsInNjcm9sbFRvIiwidHJ1bmNhdGUiLCJzdHJpbmciLCJuIiwibGlzdCIsImRhdGFfIiwibWV0YV8iLCJsaXN0XyIsIm1lc3NhZ2VfIiwicGxhY2Vob2xkZXIiLCJub25lIiwib25lIiwib3RoZXIiLCJ0b2tlbml6ZXIiLCJzZXBhcmF0b3IiLCJsYW5nXyIsInNwbGl0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImxhbmciLCJ0cmltIiwiaW5pdCIsImRvY3NfIiwicGF0aCIsImdldCIsImRvbmUiLCJ0aXRsZSIsInRleHQiLCJyZXBsYWNlIiwiXyIsImNoYXIiLCJzZXQiLCJNYXAiLCJzdGFja18iLCJmaWx0ZXJzIiwidHJpbW1lciIsInN0b3BXb3JkRmlsdGVyIiwicGlwZWxpbmUiLCJyZXN1bHQiLCJuYW1lIiwicHVzaCIsInVzZSIsIm11bHRpTGFuZ3VhZ2UiLCJmaWVsZCIsImJvb3N0IiwiY29udGFpbmVyIiwic3BsaWNlIiwicmVuZGVyIiwidmFsdWUiLCJ2YWx1ZV8iLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJ0b0xvd2VyQ2FzZSIsInRlcm0iLCJ3aWxkY2FyZCIsIlF1ZXJ5IiwiVFJBSUxJTkciLCJpdGVtcyIsIlJlZ0V4cCIsImhpZ2hsaWdodCIsInRva2VuIiwiYXJ0aWNsZSIsInNlY3Rpb25zIiwic2VjdGlvbiIsInNoaWZ0IiwiYW5jaG9yIiwiZXYyIiwiaHJlZiIsInNpemUiLCJwYXJlbnRfIiwicGFkXyIsImdldENvbXB1dGVkU3R5bGUiLCJwb3NpdGlvbiIsImNoaWxkIiwidmlzaWJsZSIsImlubmVySGVpZ2h0IiwiYm91bmRzIiwiYm90dG9tIiwiZXhlYyIsImJhc2VfIiwidXNlciIsIm5hbWVfIiwiZmV0Y2hfIiwicGFnaW5hdGUiLCJwYWdlIiwiVHlwZUVycm9yIiwicmVwbyIsImZvcm1hdF8iLCJzdGFyZ2F6ZXJzX2NvdW50IiwiZm9ya3NfY291bnQiLCJBYnN0cmFjdCIsInNhbHRfIiwiaGFzaF8iLCJjYWNoZWQiLCJnZXRKU09OIiwiZXhwaXJlcyIsIkVycm9yIiwibnVtYmVyIiwidG9GaXhlZCIsInN0ciIsImxlbiIsImNoYXJDb2RlQXQiLCJmYWN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOzs7O0FBSUE7a0JBQ2UsU0FBVTs7QUFFdkI7Ozs7Ozs7OztBQVNBQSxlQVh1Qix5QkFXVEMsR0FYUyxFQVdKQyxVQVhJLEVBV3FCO0FBQzFDLFFBQU1DLEtBQUtDLFNBQVNKLGFBQVQsQ0FBdUJDLEdBQXZCLENBQVg7O0FBRUE7QUFDQSxRQUFJQyxVQUFKLEVBQ0VHLE1BQU1DLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixDQUE2QkMsT0FBT0MsSUFBUCxDQUFZUixVQUFaLENBQTdCLEVBQXNELGdCQUFRO0FBQzVEQyxTQUFHUSxZQUFILENBQWdCQyxJQUFo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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7Ozs7Ozs7QUMzQ0E7Ozs7Ozs7O29EQ0FBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLCtDQUErQyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsMkNBQTJDO0FBQzlELG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxFOzs7Ozs7QUM5TUQ7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksT0FBTyxZQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRDs7O0FBR0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEMsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQyxZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFlBQVksWUFBWTtBQUN4QixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2QkFBNkI7QUFDekMsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVksV0FBVztBQUN2QixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixXQUFXLFdBQVc7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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O0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIscUNBQXFDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtFQUFrRSx1QkFBdUI7QUFDekY7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QVN2SixPQUFPd0osV0FBUCxJQUNiLEtBQUtQLEdBQUwsQ0FBU3RLLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUJrTCxTQUFyQixJQUFrQyxJQUFJLEVBQXRDLENBREYsQ0FETyxDQUVxRTtBQUM1RSxRQUFJTixXQUFXLEtBQUtILE9BQXBCLEVBQ0UsS0FBS0gsR0FBTCxDQUFTekcsT0FBVCxDQUFpQjZFLE9BQWpCLEdBQTJCLENBQUMsS0FBSytCLE9BQUwsR0FBZUcsTUFBaEIsSUFBMEIsUUFBMUIsR0FBcUMsRUFBaEU7QUFDSCxHOztBQUVEOzs7OzttQkFHQXhKLEssb0JBQVE7QUFDTixTQUFLa0osR0FBTCxDQUFTekcsT0FBVCxDQUFpQjZFLE9BQWpCLEdBQTJCLEVBQTNCO0FBQ0EsU0FBSytCLE9BQUwsR0FBZSxLQUFmO0FBQ0QsRzs7Ozs7a0JBekNrQjVFLE0iLCJmaWxlIjoiYXNzZXRzL2phdmFzY3JpcHRzL2FwcGxpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmI3YWVlNWIiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE1vZHVsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuZXhwb3J0IGRlZmF1bHQgLyogSlNYICovIHtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmF0aXZlIERPTSBub2RlIGZyb20gSlNYJ3MgaW50ZXJtZWRpYXRlIHJlcHJlc2VudGF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgLSBUYWcgbmFtZVxuICAgKiBAcGFyYW0gez9PYmplY3R9IHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nIHwgbnVtYmVyIHwgeyBfX2h0bWw6IHN0cmluZyB9IHwgQXJyYXk8SFRNTEVsZW1lbnQ+Pn1cbiAgICogICBjaGlsZHJlbiAtIENoaWxkIG5vZGVzXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBOYXRpdmUgRE9NIG5vZGVcbiAgICovXG4gIGNyZWF0ZUVsZW1lbnQodGFnLCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbikge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXG5cbiAgICAvKiBTZXQgYWxsIHByb3BlcnRpZXMgKi9cbiAgICBpZiAocHJvcGVydGllcylcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoT2JqZWN0LmtleXMocHJvcGVydGllcyksIGF0dHIgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgcHJvcGVydGllc1thdHRyXSlcbiAgICAgIH0pXG5cbiAgICAvKiBJdGVyYXRlIGNoaWxkIG5vZGVzICovXG4gICAgY29uc3QgaXRlcmF0ZUNoaWxkTm9kZXMgPSBub2RlcyA9PiB7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVzLCBub2RlID0+IHtcblxuICAgICAgICAvKiBEaXJlY3RseSBhcHBlbmQgdGV4dCBjb250ZW50ICovXG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIG5vZGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBlbC50ZXh0Q29udGVudCArPSBub2RlXG5cbiAgICAgICAgLyogUmVjdXJzZSwgaWYgd2UgZ290IGFuIGFycmF5ICovXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgICAgIGl0ZXJhdGVDaGlsZE5vZGVzKG5vZGUpXG5cbiAgICAgICAgLyogQXBwZW5kIHJhdyBIVE1MICovXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUuX19odG1sICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgZWwuaW5uZXJIVE1MICs9IG5vZGUuX19odG1sXG5cbiAgICAgICAgLyogQXBwZW5kIHJlZ3VsYXIgbm9kZXMgKi9cbiAgICAgICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKG5vZGUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyogSXRlcmF0ZSBjaGlsZCBub2RlcyBhbmQgcmV0dXJuIGVsZW1lbnQgKi9cbiAgICBpdGVyYXRlQ2hpbGROb2RlcyhjaGlsZHJlbilcbiAgICByZXR1cm4gZWxcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9wcm92aWRlcnMvanN4LmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpbmRleCA9IHR5cGVvZiBmZXRjaD09J2Z1bmN0aW9uJyA/IGZldGNoLmJpbmQoKSA6IGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdHJlcXVlc3Qub3BlbihvcHRpb25zLm1ldGhvZCB8fCAnZ2V0JywgdXJsKTtcblxuXHRcdGZvciAodmFyIGkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG5cdFx0XHRyZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoaSwgb3B0aW9ucy5oZWFkZXJzW2ldKTtcblx0XHR9XG5cblx0XHRyZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHM9PSdpbmNsdWRlJztcblxuXHRcdHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVzb2x2ZShyZXNwb25zZSgpKTtcblx0XHR9O1xuXG5cdFx0cmVxdWVzdC5vbmVycm9yID0gcmVqZWN0O1xuXG5cdFx0cmVxdWVzdC5zZW5kKG9wdGlvbnMuYm9keSk7XG5cblx0XHRmdW5jdGlvbiByZXNwb25zZSgpIHtcblx0XHRcdHZhciBrZXlzID0gW10sXG5cdFx0XHRcdGFsbCA9IFtdLFxuXHRcdFx0XHRoZWFkZXJzID0ge30sXG5cdFx0XHRcdGhlYWRlcjtcblxuXHRcdFx0cmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5yZXBsYWNlKC9eKC4qPyk6XFxzKihbXFxzXFxTXSo/KSQvZ20sIGZ1bmN0aW9uIChtLCBrZXksIHZhbHVlKSB7XG5cdFx0XHRcdGtleXMucHVzaChrZXkgPSBrZXkudG9Mb3dlckNhc2UoKSk7XG5cdFx0XHRcdGFsbC5wdXNoKFtrZXksIHZhbHVlXSk7XG5cdFx0XHRcdGhlYWRlciA9IGhlYWRlcnNba2V5XTtcblx0XHRcdFx0aGVhZGVyc1trZXldID0gaGVhZGVyID8gKGhlYWRlciArIFwiLFwiICsgdmFsdWUpIDogdmFsdWU7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0b2s6IChyZXF1ZXN0LnN0YXR1cy8yMDB8MCkgPT0gMSxcdFx0Ly8gMjAwLTI5OVxuXHRcdFx0XHRzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuXHRcdFx0XHRzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG5cdFx0XHRcdHVybDogcmVxdWVzdC5yZXNwb25zZVVSTCxcblx0XHRcdFx0Y2xvbmU6IHJlc3BvbnNlLFxuXHRcdFx0XHR0ZXh0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpOyB9LFxuXHRcdFx0XHRqc29uOiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpLnRoZW4oSlNPTi5wYXJzZSk7IH0sXG5cdFx0XHRcdGJsb2I6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbcmVxdWVzdC5yZXNwb25zZV0pKTsgfSxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdGtleXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGtleXM7IH0sXG5cdFx0XHRcdFx0ZW50cmllczogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWxsOyB9LFxuXHRcdFx0XHRcdGdldDogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIGhlYWRlcnNbbi50b0xvd2VyQ2FzZSgpXTsgfSxcblx0XHRcdFx0XHRoYXM6IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuLnRvTG93ZXJDYXNlKCkgaW4gaGVhZGVyczsgfVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuZmV0Y2guZXMuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91bmZldGNoL2Rpc3QvdW5mZXRjaC5lcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RlbmVyIHtcblxuICAvKipcbiAgICogR2VuZXJpYyBldmVudCBsaXN0ZW5lclxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHByb3BlcnR5IHsoQXJyYXk8RXZlbnRUYXJnZXQ+KX0gZWxzXyAtIEV2ZW50IHRhcmdldHNcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGhhbmRsZXJfLSBFdmVudCBoYW5kbGVyc1xuICAgKiBAcHJvcGVydHkge0FycmF5PHN0cmluZz59IGV2ZW50c18gLSBFdmVudCBuYW1lc1xuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB1cGRhdGVfIC0gVXBkYXRlIGhhbmRsZXJcbiAgICpcbiAgICogQHBhcmFtIHs/KHN0cmluZ3xFdmVudFRhcmdldHxOb2RlTGlzdDxFdmVudFRhcmdldD4pfSBlbHMgLVxuICAgKiAgIFNlbGVjdG9yIG9yIEV2ZW50IHRhcmdldHNcbiAgICogQHBhcmFtIHsoc3RyaW5nfEFycmF5PHN0cmluZz4pfSBldmVudHMgLSBFdmVudCBuYW1lc1xuICAgKiBAcGFyYW0geyhPYmplY3R8RnVuY3Rpb24pfSBoYW5kbGVyIC0gSGFuZGxlciB0byBiZSBpbnZva2VkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbHMsIGV2ZW50cywgaGFuZGxlcikge1xuICAgIHRoaXMuZWxzXyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgICAgKHR5cGVvZiBlbHMgPT09IFwic3RyaW5nXCIpXG4gICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbHMpXG4gICAgICAgIDogW10uY29uY2F0KGVscykpXG5cbiAgICAvKiBTZXQgaGFuZGxlciBhcyBmdW5jdGlvbiBvciBkaXJlY3RseSBhcyBvYmplY3QgKi9cbiAgICB0aGlzLmhhbmRsZXJfID0gdHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyB7IHVwZGF0ZTogaGFuZGxlciB9XG4gICAgICA6IGhhbmRsZXJcblxuICAgIC8qIEluaXRpYWxpemUgZXZlbnQgbmFtZXMgYW5kIHVwZGF0ZSBoYW5kbGVyICovXG4gICAgdGhpcy5ldmVudHNfID0gW10uY29uY2F0KGV2ZW50cylcbiAgICB0aGlzLnVwZGF0ZV8gPSBldiA9PiB0aGlzLmhhbmRsZXJfLnVwZGF0ZShldilcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBsaXN0ZW5lciBmb3IgYWxsIHJlbGV2YW50IGV2ZW50c1xuICAgKi9cbiAgbGlzdGVuKCkge1xuICAgIHRoaXMuZWxzXy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIHRoaXMuZXZlbnRzXy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdGhpcy51cGRhdGVfLCBmYWxzZSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8qIEV4ZWN1dGUgc2V0dXAgaGFuZGxlciwgaWYgaW1wbGVtZW50ZWQgKi9cbiAgICBpZiAodHlwZW9mIHRoaXMuaGFuZGxlcl8uc2V0dXAgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIHRoaXMuaGFuZGxlcl8uc2V0dXAoKVxuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXIgbGlzdGVuZXIgZm9yIGFsbCByZWxldmFudCBldmVudHNcbiAgICovXG4gIHVubGlzdGVuKCkge1xuICAgIHRoaXMuZWxzXy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIHRoaXMuZXZlbnRzXy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgdGhpcy51cGRhdGVfKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLyogRXhlY3V0ZSByZXNldCBoYW5kbGVyLCBpZiBpbXBsZW1lbnRlZCAqL1xuICAgIGlmICh0eXBlb2YgdGhpcy5oYW5kbGVyXy5yZXNldCA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgdGhpcy5oYW5kbGVyXy5yZXNldCgpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC9MaXN0ZW5lci5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IFwiLi4vaW1hZ2VzL2ljb25zL2JpdGJ1Y2tldC5zdmdcIlxuaW1wb3J0IFwiLi4vaW1hZ2VzL2ljb25zL2dpdGh1Yi5zdmdcIlxuaW1wb3J0IFwiLi4vaW1hZ2VzL2ljb25zL2dpdGxhYi5zdmdcIlxuXG5pbXBvcnQgXCIuLi9zdHlsZXNoZWV0cy9hcHBsaWNhdGlvbi5zY3NzXCJcbmltcG9ydCBcIi4uL3N0eWxlc2hlZXRzL2FwcGxpY2F0aW9uLXBhbGV0dGUuc2Nzc1wiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBvbHlmaWxsc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5pbXBvcnQgXCJjdXN0b20tZXZlbnQtcG9seWZpbGxcIlxuaW1wb3J0IFwidW5mZXRjaC9wb2x5ZmlsbFwiXG5cbmltcG9ydCBQcm9taXNlIGZyb20gXCJwcm9taXNlLXBvbHlmaWxsXCJcbndpbmRvdy5Qcm9taXNlID0gd2luZG93LlByb21pc2UgfHwgUHJvbWlzZVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEZXBlbmRlbmNpZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuaW1wb3J0IENsaXBib2FyZCBmcm9tIFwiY2xpcGJvYXJkXCJcbmltcG9ydCBGYXN0Q2xpY2sgZnJvbSBcImZhc3RjbGlja1wiXG5cbmltcG9ydCBNYXRlcmlhbCBmcm9tIFwiLi9jb21wb25lbnRzL01hdGVyaWFsXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogUmV0dXJuIHRoZSBtZXRhIHRhZyB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBNZXRhIG5hbWVcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9IE1ldGEgY29udGVudCB2YWx1ZVxuICovXG5jb25zdCB0cmFuc2xhdGUgPSBrZXkgPT4ge1xuICBjb25zdCBtZXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoYGxhbmc6JHtrZXl9YClbMF1cbiAgaWYgKCEobWV0YSBpbnN0YW5jZW9mIEhUTUxNZXRhRWxlbWVudCkpXG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gIHJldHVybiBtZXRhLmNvbnRlbnRcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQXBwbGljYXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBJbml0aWFsaXplIE1hdGVyaWFsIGZvciBNa0RvY3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gQ29uZmlndXJhdGlvblxuICovXG5mdW5jdGlvbiBpbml0aWFsaXplKGNvbmZpZykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtc3R5bGVcblxuICAvKiBJbml0aWFsaXplIE1vZGVybml6ciBhbmQgRmFzdENsaWNrICovXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihkb2N1bWVudCwgXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBpZiAoIShkb2N1bWVudC5ib2R5IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG5cbiAgICAvKiBBdHRhY2ggRmFzdENsaWNrIHRvIG1pdGlnYXRlIDMwMG1zIGRlbGF5IG9uIHRvdWNoIGRldmljZXMgKi9cbiAgICBGYXN0Q2xpY2suYXR0YWNoKGRvY3VtZW50LmJvZHkpXG5cbiAgICAvKiBUZXN0IGZvciBpT1MgKi9cbiAgICBNb2Rlcm5penIuYWRkVGVzdChcImlvc1wiLCAoKSA9PiB7XG4gICAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBhZHxpUGhvbmV8aVBvZCkvZylcbiAgICB9KVxuXG4gICAgLyogV3JhcCBhbGwgZGF0YSB0YWJsZXMgZm9yIGJldHRlciBvdmVyZmxvdyBzY3JvbGxpbmcgKi9cbiAgICBjb25zdCB0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGU6bm90KFtjbGFzc10pXCIpICAgICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIEpTWCwgd2Ugc2hvdWxkIHJlbmFtZSB0aGUgZmlsZVxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGFibGVzLCB0YWJsZSA9PiB7XG4gICAgICBjb25zdCB3cmFwID0gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdHlwZXNldF9fc2Nyb2xsd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC10eXBlc2V0X190YWJsZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIGlmICh0YWJsZS5uZXh0U2libGluZykge1xuICAgICAgICB0YWJsZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwLCB0YWJsZS5uZXh0U2libGluZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYmxlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQod3JhcClcbiAgICAgIH1cbiAgICAgIHdyYXAuY2hpbGRyZW5bMF0uYXBwZW5kQ2hpbGQodGFibGUpXG4gICAgfSlcblxuICAgIC8qIENsaXBib2FyZCBpbnRlZ3JhdGlvbiAqL1xuICAgIGlmIChDbGlwYm9hcmQuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2RlaGlsaXRlID4gcHJlLCBwcmUgPiBjb2RlXCIpXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJsb2NrcywgKGJsb2NrLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGBfX2NvZGVfJHtpbmRleH1gXG5cbiAgICAgICAgLyogQ3JlYXRlIGJ1dHRvbiB3aXRoIG1lc3NhZ2UgY29udGFpbmVyICovXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWQtY2xpcGJvYXJkXCIgdGl0bGU9e3RyYW5zbGF0ZShcImNsaXBib2FyZC5jb3B5XCIpfVxuICAgICAgICAgICAgZGF0YS1jbGlwYm9hcmQtdGFyZ2V0PXtgIyR7aWR9IHByZSwgIyR7aWR9IGNvZGVgfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWQtY2xpcGJvYXJkX19tZXNzYWdlXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApXG5cbiAgICAgICAgLyogTGluayB0byBibG9jayBhbmQgaW5zZXJ0IGJ1dHRvbiAqL1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBibG9jay5wYXJlbnROb2RlXG4gICAgICAgIHBhcmVudC5pZCA9IGlkXG4gICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoYnV0dG9uLCBibG9jaylcbiAgICAgIH0pXG5cbiAgICAgIC8qIEluaXRpYWxpemUgQ2xpcGJvYXJkIGxpc3RlbmVyICovXG4gICAgICBjb25zdCBjb3B5ID0gbmV3IENsaXBib2FyZChcIi5tZC1jbGlwYm9hcmRcIilcblxuICAgICAgLyogU3VjY2VzcyBoYW5kbGVyICovXG4gICAgICBjb3B5Lm9uKFwic3VjY2Vzc1wiLCBhY3Rpb24gPT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYWN0aW9uLnRyaWdnZXIucXVlcnlTZWxlY3RvcihcIi5tZC1jbGlwYm9hcmRfX21lc3NhZ2VcIilcbiAgICAgICAgaWYgKCEobWVzc2FnZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcblxuICAgICAgICAvKiBDbGVhciBzZWxlY3Rpb24gYW5kIHJlc2V0IGRlYm91bmNlIGxvZ2ljICovXG4gICAgICAgIGFjdGlvbi5jbGVhclNlbGVjdGlvbigpXG4gICAgICAgIGlmIChtZXNzYWdlLmRhdGFzZXQubWRUaW1lcilcbiAgICAgICAgICBjbGVhclRpbWVvdXQocGFyc2VJbnQobWVzc2FnZS5kYXRhc2V0Lm1kVGltZXIsIDEwKSlcblxuICAgICAgICAvKiBTZXQgbWVzc2FnZSBpbmRpY2F0aW5nIHN1Y2Nlc3MgYW5kIHNob3cgaXQgKi9cbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibWQtY2xpcGJvYXJkX19tZXNzYWdlLS1hY3RpdmVcIilcbiAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSB0cmFuc2xhdGUoXCJjbGlwYm9hcmQuY29waWVkXCIpXG5cbiAgICAgICAgLyogSGlkZSBtZXNzYWdlIGFmdGVyIHR3byBzZWNvbmRzICovXG4gICAgICAgIG1lc3NhZ2UuZGF0YXNldC5tZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwibWQtY2xpcGJvYXJkX19tZXNzYWdlLS1hY3RpdmVcIilcbiAgICAgICAgICBtZXNzYWdlLmRhdGFzZXQubWRUaW1lciA9IFwiXCJcbiAgICAgICAgfSwgMjAwMCkudG9TdHJpbmcoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiBQb2x5ZmlsbCBkZXRhaWxzL3N1bW1hcnkgZnVuY3Rpb25hbGl0eSAqL1xuICAgIGlmICghTW9kZXJuaXpyLmRldGFpbHMpIHtcbiAgICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkZXRhaWxzID4gc3VtbWFyeVwiKVxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChibG9ja3MsIHN1bW1hcnkgPT4ge1xuICAgICAgICBzdW1tYXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldiA9PiB7XG4gICAgICAgICAgY29uc3QgZGV0YWlscyA9IGV2LnRhcmdldC5wYXJlbnROb2RlXG4gICAgICAgICAgaWYgKGRldGFpbHMuaGFzQXR0cmlidXRlKFwib3BlblwiKSkge1xuICAgICAgICAgICAgZGV0YWlscy5yZW1vdmVBdHRyaWJ1dGUoXCJvcGVuXCIpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKFwib3BlblwiLCBcIlwiKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyogT3BlbiBkZXRhaWxzIGFmdGVyIGFuY2hvciBqdW1wICovXG4gICAgY29uc3QgZGV0YWlscyA9ICgpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9jdW1lbnQubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpXG4gICAgICAgIGlmICghZWwpXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgLyogV2FsayB1cCBhcyBsb25nIGFzIHdlJ3JlIG5vdCBpbiBhIGRldGFpbHMgdGFnICovXG4gICAgICAgIGxldCBwYXJlbnQgPSBlbC5wYXJlbnROb2RlXG4gICAgICAgIHdoaWxlIChwYXJlbnQgJiYgIShwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRGV0YWlsc0VsZW1lbnQpKVxuICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG5cbiAgICAgICAgLyogSWYgdGhlcmUncyBhIGRldGFpbHMgdGFnLCBvcGVuIGl0ICovXG4gICAgICAgIGlmIChwYXJlbnQgJiYgIXBhcmVudC5vcGVuKSB7XG4gICAgICAgICAgcGFyZW50Lm9wZW4gPSB0cnVlXG5cbiAgICAgICAgICAvKiBGb3JjZSByZWxvYWQsIHNvIHRoZSB2aWV3cG9ydCByZXBvc2l0aW9ucyAqL1xuICAgICAgICAgIGNvbnN0IGxvYyA9IGxvY2F0aW9uLmhhc2hcbiAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gXCIgXCJcbiAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gbG9jXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGRldGFpbHMpXG4gICAgZGV0YWlscygpXG5cbiAgICAvKiBGb3JjZSAxcHggc2Nyb2xsIG9mZnNldCB0byB0cmlnZ2VyIG92ZXJmbG93IHNjcm9sbGluZyAqL1xuICAgIGlmIChNb2Rlcm5penIuaW9zKSB7XG4gICAgICBjb25zdCBzY3JvbGxhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXNjcm9sbGZpeF1cIilcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2Nyb2xsYWJsZSwgaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvcCA9IGl0ZW0uc2Nyb2xsVG9wXG5cbiAgICAgICAgICAvKiBXZSdyZSBhdCB0aGUgdG9wIG9mIHRoZSBjb250YWluZXIgKi9cbiAgICAgICAgICBpZiAodG9wID09PSAwKSB7XG4gICAgICAgICAgICBpdGVtLnNjcm9sbFRvcCA9IDFcblxuICAgICAgICAgICAgLyogV2UncmUgYXQgdGhlIGJvdHRvbSBvZiB0aGUgY29udGFpbmVyICovXG4gICAgICAgICAgfSBlbHNlIGlmICh0b3AgKyBpdGVtLm9mZnNldEhlaWdodCA9PT0gaXRlbS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICAgIGl0ZW0uc2Nyb2xsVG9wID0gdG9wIC0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9KS5saXN0ZW4oKVxuXG4gIC8qIENvbXBvbmVudDogaGVhZGVyIHNoYWRvdyB0b2dnbGUgKi9cbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xuICAgIFwic2Nyb2xsXCIsIFwicmVzaXplXCIsIFwib3JpZW50YXRpb25jaGFuZ2VcIlxuICBdLCBuZXcgTWF0ZXJpYWwuSGVhZGVyLlNoYWRvdyhcbiAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1jb250YWluZXJdXCIsXG4gICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9aGVhZGVyXVwiKVxuICApLmxpc3RlbigpXG5cbiAgLyogQ29tcG9uZW50OiBoZWFkZXIgdGl0bGUgdG9nZ2xlICovXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFtcbiAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcbiAgXSwgbmV3IE1hdGVyaWFsLkhlYWRlci5UaXRsZShcbiAgICBcIltkYXRhLW1kLWNvbXBvbmVudD10aXRsZV1cIixcbiAgICBcIi5tZC10eXBlc2V0IGgxXCIpXG4gICkubGlzdGVuKClcblxuICAvKiBDb21wb25lbnQ6IGhlcm8gdmlzaWJpbGl0eSB0b2dnbGUgKi9cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9aGVyb11cIikpXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xuICAgICAgXCJzY3JvbGxcIiwgXCJyZXNpemVcIiwgXCJvcmllbnRhdGlvbmNoYW5nZVwiXG4gICAgXSwgbmV3IE1hdGVyaWFsLlRhYnMuVG9nZ2xlKFwiW2RhdGEtbWQtY29tcG9uZW50PWhlcm9dXCIpKS5saXN0ZW4oKVxuXG4gIC8qIENvbXBvbmVudDogdGFicyB2aXNpYmlsaXR5IHRvZ2dsZSAqL1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLWNvbXBvbmVudD10YWJzXVwiKSlcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBbXG4gICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcbiAgICBdLCBuZXcgTWF0ZXJpYWwuVGFicy5Ub2dnbGUoXCJbZGF0YS1tZC1jb21wb25lbnQ9dGFic11cIikpLmxpc3RlbigpXG5cbiAgLyogQ29tcG9uZW50OiBzaWRlYmFyIHdpdGggbmF2aWdhdGlvbiAqL1xuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEyMjBweClcIixcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBbXG4gICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcbiAgICBdLCBuZXcgTWF0ZXJpYWwuU2lkZWJhci5Qb3NpdGlvbihcbiAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dXCIsXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1oZWFkZXJdXCIpKSlcblxuICAvKiBDb21wb25lbnQ6IHNpZGViYXIgd2l0aCB0YWJsZSBvZiBjb250ZW50cyAobWlzc2luZyBvbiA0MDQgcGFnZSkgKi9cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9dG9jXVwiKSlcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDk2MHB4KVwiLFxuICAgICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgW1xuICAgICAgICBcInNjcm9sbFwiLCBcInJlc2l6ZVwiLCBcIm9yaWVudGF0aW9uY2hhbmdlXCJcbiAgICAgIF0sIG5ldyBNYXRlcmlhbC5TaWRlYmFyLlBvc2l0aW9uKFxuICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD10b2NdXCIsXG4gICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PWhlYWRlcl1cIikpKVxuXG4gIC8qIENvbXBvbmVudDogbGluayBibHVycmluZyBmb3IgdGFibGUgb2YgY29udGVudHMgKi9cbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5NjBweClcIixcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIod2luZG93LCBcInNjcm9sbFwiLFxuICAgICAgbmV3IE1hdGVyaWFsLk5hdi5CbHVyKFwiW2RhdGEtbWQtY29tcG9uZW50PXRvY10gW2hyZWZdXCIpKSlcblxuICAvKiBDb21wb25lbnQ6IGNvbGxhcHNpYmxlIGVsZW1lbnRzIGZvciBuYXZpZ2F0aW9uICovXG4gIGNvbnN0IGNvbGxhcHNpYmxlcyA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLWNvbXBvbmVudD1jb2xsYXBzaWJsZV1cIilcbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChjb2xsYXBzaWJsZXMsIGNvbGxhcHNlID0+IHtcbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEyMjBweClcIixcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihjb2xsYXBzZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLCBcImNsaWNrXCIsXG4gICAgICAgIG5ldyBNYXRlcmlhbC5OYXYuQ29sbGFwc2UoY29sbGFwc2UpKSlcbiAgfSlcblxuICAvKiBDb21wb25lbnQ6IGFjdGl2ZSBwYW5lIG1vbml0b3IgZm9yIGlPUyBzY3JvbGxpbmcgZml4ZXMgKi9cbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMjE5cHgpXCIsXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFxuICAgICAgXCJbZGF0YS1tZC1jb21wb25lbnQ9bmF2aWdhdGlvbl0gW2RhdGEtbWQtdG9nZ2xlXVwiLCBcImNoYW5nZVwiLFxuICAgICAgbmV3IE1hdGVyaWFsLk5hdi5TY3JvbGxpbmcoXCJbZGF0YS1tZC1jb21wb25lbnQ9bmF2aWdhdGlvbl0gbmF2XCIpKSlcblxuICAvKiBJbml0aWFsaXplIHNlYXJjaCwgaWYgYXZhaWxhYmxlICovXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXNlYXJjaF1cIikpIHtcblxuICAgIC8qIENvbXBvbmVudDogc2VhcmNoIGJvZHkgbG9jayBmb3IgbW9iaWxlICovXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lk1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA5NTlweClcIixcbiAgICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIsIFwiY2hhbmdlXCIsXG4gICAgICAgIG5ldyBNYXRlcmlhbC5TZWFyY2guTG9jayhcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpKSlcblxuICAgIC8qIENvbXBvbmVudDogc2VhcmNoIHJlc3VsdHMgKi9cbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIsIFtcbiAgICAgIFwiZm9jdXNcIiwgXCJrZXl1cFwiLCBcImNoYW5nZVwiXG4gICAgXSwgbmV3IE1hdGVyaWFsLlNlYXJjaC5SZXN1bHQoXCJbZGF0YS1tZC1jb21wb25lbnQ9cmVzdWx0XVwiLCAoKSA9PiB7XG4gICAgICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLnVybC5iYXNlfS8ke1xuICAgICAgICBjb25maWcudmVyc2lvbiA8IFwiMC4xN1wiID8gXCJta2RvY3NcIiA6IFwic2VhcmNoXCJcbiAgICAgIH0vc2VhcmNoX2luZGV4Lmpzb25gLCB7XG4gICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCJcbiAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICByZXR1cm4gZGF0YS5kb2NzLm1hcChkb2MgPT4ge1xuICAgICAgICAgICAgZG9jLmxvY2F0aW9uID0gY29uZmlnLnVybC5iYXNlICsgZG9jLmxvY2F0aW9uXG4gICAgICAgICAgICByZXR1cm4gZG9jXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KSkubGlzdGVuKClcblxuICAgIC8qIExpc3RlbmVyOiBmb2N1cyBpbnB1dCBhZnRlciBmb3JtIHJlc2V0ICovXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtY29tcG9uZW50PXJlc2V0XVwiLCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIpXG4gICAgICAgIGlmICghKHF1ZXJ5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICAgIHF1ZXJ5LmZvY3VzKClcbiAgICAgIH0sIDEwKVxuICAgIH0pLmxpc3RlbigpXG5cbiAgICAvKiBMaXN0ZW5lcjogZm9jdXMgaW5wdXQgYWZ0ZXIgb3BlbmluZyBzZWFyY2ggKi9cbiAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC10b2dnbGU9c2VhcmNoXVwiLCBcImNoYW5nZVwiLCBldiA9PiB7XG4gICAgICBzZXRUaW1lb3V0KHRvZ2dsZSA9PiB7XG4gICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIpXG4gICAgICAgICAgaWYgKCEocXVlcnkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSwgNDAwLCBldi50YXJnZXQpXG4gICAgfSkubGlzdGVuKClcblxuICAgIC8qIExpc3RlbmVyOiBvcGVuIHNlYXJjaCBvbiBmb2N1cyAqL1xuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTYwcHgpXCIsXG4gICAgICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIsIFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIilcbiAgICAgICAgaWYgKCEodG9nZ2xlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICAgIGlmICghdG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IHRydWVcbiAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXG4gICAgICAgIH1cbiAgICAgIH0pKVxuXG4gICAgLyogTGlzdGVuZXI6IGtleWJvYXJkIGhhbmRsZXJzICovIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKHdpbmRvdywgXCJrZXlkb3duXCIsIGV2ID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzcGxpdCB1cCBpbnRvIGNvbXBvbmVudCB0byByZWR1Y2UgY29tcGxleGl0eVxuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXG4gICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1jb21wb25lbnQ9cXVlcnldXCIpXG4gICAgICBpZiAoIShxdWVyeSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcblxuICAgICAgLyogQWJvcnQgaWYgbWV0YSBrZXkgKG1hY09TKSBvciBjdHJsIGtleSAoV2luZG93cykgaXMgcHJlc3NlZCAqL1xuICAgICAgaWYgKGV2Lm1ldGFLZXkgfHwgZXYuY3RybEtleSlcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIC8qIFNlYXJjaCBpcyBvcGVuICovXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcblxuICAgICAgICAvKiBFbnRlcjogcHJldmVudCBmb3JtIHN1Ym1pc3Npb24gKi9cbiAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgaWYgKHF1ZXJ5ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICAgIC8qIEdvIHRvIGN1cnJlbnQgYWN0aXZlL2ZvY3VzZWQgbGluayAqL1xuICAgICAgICAgICAgY29uc3QgZm9jdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1zZWFyY2hdIFtocmVmXVtkYXRhLW1kLXN0YXRlPWFjdGl2ZV1cIilcbiAgICAgICAgICAgIGlmIChmb2N1cyBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBmb2N1cy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXG5cbiAgICAgICAgICAgICAgLyogQ2xvc2Ugc2VhcmNoICovXG4gICAgICAgICAgICAgIHRvZ2dsZS5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxuICAgICAgICAgICAgICBxdWVyeS5ibHVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgLyogRXNjYXBlIG9yIFRhYjogY2xvc2Ugc2VhcmNoICovXG4gICAgICAgIH0gZWxzZSBpZiAoZXYua2V5Q29kZSA9PT0gOSB8fCBldi5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgIHRvZ2dsZS5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpXG4gICAgICAgICAgcXVlcnkuYmx1cigpXG5cbiAgICAgICAgLyogSG9yaXpvbnRhbCBhcnJvd3MgYW5kIGJhY2tzcGFjZTogZm9jdXMgaW5wdXQgKi9cbiAgICAgICAgfSBlbHNlIGlmIChbOCwgMzcsIDM5XS5pbmRleE9mKGV2LmtleUNvZGUpICE9PSAtMSkge1xuICAgICAgICAgIGlmIChxdWVyeSAhPT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudClcbiAgICAgICAgICAgIHF1ZXJ5LmZvY3VzKClcblxuICAgICAgICAvKiBWZXJ0aWNhbCBhcnJvd3M6IHNlbGVjdCBwcmV2aW91cyBvciBuZXh0IHNlYXJjaCByZXN1bHQgKi9cbiAgICAgICAgfSBlbHNlIGlmIChbMzgsIDQwXS5pbmRleE9mKGV2LmtleUNvZGUpICE9PSAtMSkge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGV2LmtleUNvZGVcblxuICAgICAgICAgIC8qIFJldHJpZXZlIGFsbCByZXN1bHRzICovXG4gICAgICAgICAgY29uc3QgbGlua3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XSwgW2RhdGEtbWQtY29tcG9uZW50PXNlYXJjaF0gW2hyZWZdXCIpKVxuXG4gICAgICAgICAgLyogUmV0cmlldmUgY3VycmVudCBhY3RpdmUvZm9jdXNlZCByZXN1bHQgKi9cbiAgICAgICAgICBjb25zdCBmb2N1cyA9IGxpbmtzLmZpbmQobGluayA9PiB7XG4gICAgICAgICAgICBpZiAoIShsaW5rIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgICAgICAgIHJldHVybiBsaW5rLmRhdGFzZXQubWRTdGF0ZSA9PT0gXCJhY3RpdmVcIlxuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKGZvY3VzKVxuICAgICAgICAgICAgZm9jdXMuZGF0YXNldC5tZFN0YXRlID0gXCJcIlxuXG4gICAgICAgICAgLyogQ2FsY3VsYXRlIGluZGV4IGRlcGVuZGluZyBvbiBkaXJlY3Rpb24sIGFkZCBsZW5ndGggdG8gZm9ybSByaW5nICovXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLm1heCgwLCAoXG4gICAgICAgICAgICBsaW5rcy5pbmRleE9mKGZvY3VzKSArIGxpbmtzLmxlbmd0aCArIChrZXkgPT09IDM4ID8gLTEgOiArMSlcbiAgICAgICAgICApICUgbGlua3MubGVuZ3RoKVxuXG4gICAgICAgICAgLyogU2V0IGFjdGl2ZSBzdGF0ZSBhbmQgZm9jdXMgKi9cbiAgICAgICAgICBpZiAobGlua3NbaW5kZXhdKSB7XG4gICAgICAgICAgICBsaW5rc1tpbmRleF0uZGF0YXNldC5tZFN0YXRlID0gXCJhY3RpdmVcIlxuICAgICAgICAgICAgbGlua3NbaW5kZXhdLmZvY3VzKClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBQcmV2ZW50IHNjcm9sbGluZyBvZiBwYWdlICovXG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAvKiBSZXR1cm4gZmFsc2UgcHJldmVudHMgdGhlIGN1cnNvciBwb3NpdGlvbiBmcm9tIGNoYW5naW5nICovXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgLyogU2VhcmNoIGlzIGNsb3NlZCBhbmQgd2UncmUgbm90IGluc2lkZSBhIGZvcm0gKi9cbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAhZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5mb3JtKSB7XG5cbiAgICAgICAgLyogRi9TOiBPcGVuIHNlYXJjaCBpZiBub3QgaW4gaW5wdXQgZmllbGQgKi9cbiAgICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDcwIHx8IGV2LmtleUNvZGUgPT09IDgzKSB7XG4gICAgICAgICAgcXVlcnkuZm9jdXMoKVxuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLmxpc3RlbigpXG5cbiAgICAvKiBMaXN0ZW5lcjogZm9jdXMgcXVlcnkgaWYgaW4gc2VhcmNoIGlzIG9wZW4gYW5kIGNoYXJhY3RlciBpcyB0eXBlZCAqL1xuICAgIG5ldyBNYXRlcmlhbC5FdmVudC5MaXN0ZW5lcih3aW5kb3csIFwia2V5cHJlc3NcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdXCIpXG4gICAgICBpZiAoISh0b2dnbGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtY29tcG9uZW50PXF1ZXJ5XVwiKVxuICAgICAgICBpZiAoIShxdWVyeSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICBpZiAocXVlcnkgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgcXVlcnkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pLmxpc3RlbigpXG4gIH1cblxuICAvKiBMaXN0ZW5lcjogaGFuZGxlIHRhYmJpbmcgY29udGV4dCBmb3IgYmV0dGVyIGFjY2Vzc2liaWxpdHkgKi9cbiAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKGRvY3VtZW50LmJvZHksIFwia2V5ZG93blwiLCBldiA9PiB7XG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDkpIHtcbiAgICAgIGNvbnN0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIC5tZC1uYXZfX2xpbmtbZm9yXTpub3QoW3RhYmluZGV4XSlcIilcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGFiZWxzLCBsYWJlbCA9PiB7XG4gICAgICAgIGlmIChsYWJlbC5vZmZzZXRIZWlnaHQpXG4gICAgICAgICAgbGFiZWwudGFiSW5kZXggPSAwXG4gICAgICB9KVxuICAgIH1cbiAgfSkubGlzdGVuKClcblxuICAvKiBMaXN0ZW5lcjogcmVzZXQgdGFiYmluZyBiZWhhdmlvciAqL1xuICBuZXcgTWF0ZXJpYWwuRXZlbnQuTGlzdGVuZXIoZG9jdW1lbnQuYm9keSwgXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xuICAgIGNvbnN0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIltkYXRhLW1kLWNvbXBvbmVudD1uYXZpZ2F0aW9uXSAubWQtbmF2X19saW5rW3RhYmluZGV4XVwiKVxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGFiZWxzLCBsYWJlbCA9PiB7XG4gICAgICBsYWJlbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJJbmRleFwiKVxuICAgIH0pXG4gIH0pLmxpc3RlbigpXG5cbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5ib2R5LmRhdGFzZXQubWRTdGF0ZSA9PT0gXCJ0YWJiaW5nXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcbiAgfSlcblxuICAvKiBMaXN0ZW5lcjogY2xvc2UgZHJhd2VyIHdoZW4gYW5jaG9yIGxpbmtzIGFyZSBjbGlja2VkICovXG4gIG5ldyBNYXRlcmlhbC5FdmVudC5NYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTU5cHgpXCIsXG4gICAgbmV3IE1hdGVyaWFsLkV2ZW50Lkxpc3RlbmVyKFwiW2RhdGEtbWQtY29tcG9uZW50PW5hdmlnYXRpb25dIFtocmVmXj0nIyddXCIsXG4gICAgICBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1kLXRvZ2dsZT1kcmF3ZXJdXCIpXG4gICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICBpZiAodG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgICAgdG9nZ2xlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKVxuICAgICAgICB9XG4gICAgICB9KSlcblxuICAvKiBSZXRyaWV2ZSBmYWN0cyBmb3IgdGhlIGdpdmVuIHJlcG9zaXRvcnkgdHlwZSAqL1xuICA7KCgpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1tZC1zb3VyY2VdXCIpXG4gICAgaWYgKCFlbClcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pXG4gICAgZWxzZSBpZiAoIShlbCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHN3aXRjaCAoZWwuZGF0YXNldC5tZFNvdXJjZSkge1xuICAgICAgY2FzZSBcImdpdGh1YlwiOiByZXR1cm4gbmV3IE1hdGVyaWFsLlNvdXJjZS5BZGFwdGVyLkdpdEh1YihlbCkuZmV0Y2goKVxuICAgICAgZGVmYXVsdDogcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSlcbiAgICB9XG5cbiAgLyogUmVuZGVyIHJlcG9zaXRvcnkgaW5mb3JtYXRpb24gKi9cbiAgfSkoKS50aGVuKGZhY3RzID0+IHtcbiAgICBjb25zdCBzb3VyY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXNvdXJjZV1cIilcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNvdXJjZXMsIHNvdXJjZSA9PiB7XG4gICAgICBuZXcgTWF0ZXJpYWwuU291cmNlLlJlcG9zaXRvcnkoc291cmNlKVxuICAgICAgICAuaW5pdGlhbGl6ZShmYWN0cylcbiAgICB9KVxuICB9KVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHBvcnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIFByb3ZpZGUgdGhpcyBmb3IgZG93bndhcmQgY29tcGF0aWJpbGl0eSBmb3Igbm93ICovXG5jb25zdCBhcHAgPSB7XG4gIGluaXRpYWxpemVcbn1cblxuZXhwb3J0IHtcbiAgYXBwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2FwcGxpY2F0aW9uLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9iaXRidWNrZXQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZ2l0aHViLnN2Z1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL2ljb25zL2dpdGxhYi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2dpdGxhYi5zdmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwbGljYXRpb24tcGFsZXR0ZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBQb2x5ZmlsbCBmb3IgY3JlYXRpbmcgQ3VzdG9tRXZlbnRzIG9uIElFOS8xMC8xMVxuXG4vLyBjb2RlIHB1bGxlZCBmcm9tOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Q0dG9jY2hpbmkvY3VzdG9tZXZlbnQtcG9seWZpbGxcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudCNQb2x5ZmlsbFxuXG50cnkge1xuICAgIHZhciBjZSA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoJ3Rlc3QnKTtcbiAgICBjZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChjZS5kZWZhdWx0UHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgIC8vIElFIGhhcyBwcm9ibGVtcyB3aXRoIC5wcmV2ZW50RGVmYXVsdCgpIG9uIGN1c3RvbSBldmVudHNcbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzM0OTE5MVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwcmV2ZW50IGRlZmF1bHQnKTtcbiAgICB9XG59IGNhdGNoKGUpIHtcbiAgdmFyIEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24oZXZlbnQsIHBhcmFtcykge1xuICAgIHZhciBldnQsIG9yaWdQcmV2ZW50O1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XG4gICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgZGV0YWlsOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgIG9yaWdQcmV2ZW50ID0gZXZ0LnByZXZlbnREZWZhdWx0O1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9yaWdQcmV2ZW50LmNhbGwodGhpcyk7XG4gICAgICB0cnkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2RlZmF1bHRQcmV2ZW50ZWQnLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gZXZ0O1xuICB9O1xuXG4gIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG4gIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50OyAvLyBleHBvc2UgZGVmaW5pdGlvbiB0byB3aW5kb3dcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2N1c3RvbS1ldmVudC1wb2x5ZmlsbC9jdXN0b20tZXZlbnQtcG9seWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImlmICghd2luZG93LmZldGNoKSB3aW5kb3cuZmV0Y2ggPSByZXF1aXJlKCcuJykuZGVmYXVsdCB8fCByZXF1aXJlKCcuJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91bmZldGNoL3BvbHlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8vIFN0b3JlIHNldFRpbWVvdXQgcmVmZXJlbmNlIHNvIHByb21pc2UtcG9seWZpbGwgd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XG4vLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcbnZhciBzZXRUaW1lb3V0RnVuYyA9IHNldFRpbWVvdXQ7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb21pc2UoZm4pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2UpKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBmdW5jdGlvbicpO1xuICB0aGlzLl9zdGF0ZSA9IDA7XG4gIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcbiAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xuXG4gIGRvUmVzb2x2ZShmbiwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICB3aGlsZSAoc2VsZi5fc3RhdGUgPT09IDMpIHtcbiAgICBzZWxmID0gc2VsZi5fdmFsdWU7XG4gIH1cbiAgaWYgKHNlbGYuX3N0YXRlID09PSAwKSB7XG4gICAgc2VsZi5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBzZWxmLl9oYW5kbGVkID0gdHJ1ZTtcbiAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNiID0gc2VsZi5fc3RhdGUgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByZXQ7XG4gICAgdHJ5IHtcbiAgICAgIHJldCA9IGNiKHNlbGYuX3ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZilcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgaWYgKFxuICAgICAgbmV3VmFsdWUgJiZcbiAgICAgICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICApIHtcbiAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcbiAgICAgIGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xuICAgICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBmaW5hbGUoc2VsZik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzZWxmLl9zdGF0ZSA9IDE7XG4gICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaW5hbGUoc2VsZik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3Qoc2VsZiwgZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XG4gIHNlbGYuX3N0YXRlID0gMjtcbiAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgZmluYWxlKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuICBpZiAoc2VsZi5fc3RhdGUgPT09IDIgJiYgc2VsZi5fZGVmZXJyZWRzLmxlbmd0aCA9PT0gMCkge1xuICAgIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFzZWxmLl9oYW5kbGVkKSB7XG4gICAgICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHNlbGYuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcbiAgfVxuICBzZWxmLl9kZWZlcnJlZHMgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9taXNlKSB7XG4gIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG59XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG4gIHZhciBkb25lID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgZm4oXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZWplY3Qoc2VsZiwgcmVhc29uKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGNhdGNoIChleCkge1xuICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgZG9uZSA9IHRydWU7XG4gICAgcmVqZWN0KHNlbGYsIGV4KTtcbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICB2YXIgcHJvbSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG5vb3ApO1xuXG4gIGhhbmRsZSh0aGlzLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbSkpO1xuICByZXR1cm4gcHJvbTtcbn07XG5cblByb21pc2UucHJvdG90eXBlWydmaW5hbGx5J10gPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG4gICAgfVxuICApO1xufTtcblxuUHJvbWlzZS5hbGwgPSBmdW5jdGlvbihhcnIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICghYXJyIHx8IHR5cGVvZiBhcnIubGVuZ3RoID09PSAndW5kZWZpbmVkJylcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXknKTtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhlbi5jYWxsKFxuICAgICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyZ3NbaV0gPSB2YWw7XG4gICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJlamVjdChleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cblByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQcm9taXNlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWplY3QodmFsdWUpO1xuICB9KTtcbn07XG5cblByb21pc2UucmFjZSA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFsdWVzW2ldLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gVXNlIHBvbHlmaWxsIGZvciBzZXRJbW1lZGlhdGUgZm9yIHBlcmZvcm1hbmNlIGdhaW5zXG5Qcm9taXNlLl9pbW1lZGlhdGVGbiA9XG4gICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nICYmXG4gICAgZnVuY3Rpb24oZm4pIHtcbiAgICAgIHNldEltbWVkaWF0ZShmbik7XG4gICAgfSkgfHxcbiAgZnVuY3Rpb24oZm4pIHtcbiAgICBzZXRUaW1lb3V0RnVuYyhmbiwgMCk7XG4gIH07XG5cblByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuID0gZnVuY3Rpb24gX3VuaGFuZGxlZFJlamVjdGlvbkZuKGVycikge1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvbWlzZS1wb2x5ZmlsbC9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1laWRhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ21vZHVsZScsICcuL2NsaXBib2FyZC1hY3Rpb24nLCAndGlueS1lbWl0dGVyJywgJ2dvb2QtbGlzdGVuZXInXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBmYWN0b3J5KG1vZHVsZSwgcmVxdWlyZSgnLi9jbGlwYm9hcmQtYWN0aW9uJyksIHJlcXVpcmUoJ3RpbnktZW1pdHRlcicpLCByZXF1aXJlKCdnb29kLWxpc3RlbmVyJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtb2QgPSB7XG4gICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICB9O1xuICAgICAgICBmYWN0b3J5KG1vZCwgZ2xvYmFsLmNsaXBib2FyZEFjdGlvbiwgZ2xvYmFsLnRpbnlFbWl0dGVyLCBnbG9iYWwuZ29vZExpc3RlbmVyKTtcbiAgICAgICAgZ2xvYmFsLmNsaXBib2FyZCA9IG1vZC5leHBvcnRzO1xuICAgIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUsIF9jbGlwYm9hcmRBY3Rpb24sIF90aW55RW1pdHRlciwgX2dvb2RMaXN0ZW5lcikge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBfY2xpcGJvYXJkQWN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsaXBib2FyZEFjdGlvbik7XG5cbiAgICB2YXIgX3RpbnlFbWl0dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbnlFbWl0dGVyKTtcblxuICAgIHZhciBfZ29vZExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dvb2RMaXN0ZW5lcik7XG5cbiAgICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgICAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgICAgICB9O1xuICAgIH0oKTtcblxuICAgIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICAgICAgaWYgKCFzZWxmKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuICAgIH1cblxuICAgIHZhciBDbGlwYm9hcmQgPSBmdW5jdGlvbiAoX0VtaXR0ZXIpIHtcbiAgICAgICAgX2luaGVyaXRzKENsaXBib2FyZCwgX0VtaXR0ZXIpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdHJpZ2dlclxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQ2xpcGJvYXJkKHRyaWdnZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDbGlwYm9hcmQpO1xuXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2xpcGJvYXJkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xpcGJvYXJkKSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgICAgIF90aGlzLnJlc29sdmVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAgICAgX3RoaXMubGlzdGVuQ2xpY2sodHJpZ2dlcik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lcyBpZiBhdHRyaWJ1dGVzIHdvdWxkIGJlIHJlc29sdmVkIHVzaW5nIGludGVybmFsIHNldHRlciBmdW5jdGlvbnNcbiAgICAgICAgICogb3IgY3VzdG9tIGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgICAgICovXG5cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoQ2xpcGJvYXJkLCBbe1xuICAgICAgICAgICAga2V5OiAncmVzb2x2ZU9wdGlvbnMnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmVPcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gdHlwZW9mIG9wdGlvbnMuYWN0aW9uID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5hY3Rpb24gOiB0aGlzLmRlZmF1bHRBY3Rpb247XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0eXBlb2Ygb3B0aW9ucy50YXJnZXQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRhcmdldCA6IHRoaXMuZGVmYXVsdFRhcmdldDtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQgPSB0eXBlb2Ygb3B0aW9ucy50ZXh0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50ZXh0IDogdGhpcy5kZWZhdWx0VGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IF90eXBlb2Yob3B0aW9ucy5jb250YWluZXIpID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuY29udGFpbmVyIDogZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnbGlzdGVuQ2xpY2snLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbkNsaWNrKHRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXIgPSAoMCwgX2dvb2RMaXN0ZW5lcjIuZGVmYXVsdCkodHJpZ2dlciwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdvbkNsaWNrJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJpZ2dlciA9IGUuZGVsZWdhdGVUYXJnZXQgfHwgZS5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG5ldyBfY2xpcGJvYXJkQWN0aW9uMi5kZWZhdWx0KHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbih0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldCh0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0KHRyaWdnZXIpLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyOiB0aGlzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2RlZmF1bHRBY3Rpb24nLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRBY3Rpb24odHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgnYWN0aW9uJywgdHJpZ2dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2RlZmF1bHRUYXJnZXQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRUYXJnZXQodHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IGdldEF0dHJpYnV0ZVZhbHVlKCd0YXJnZXQnLCB0cmlnZ2VyKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZWZhdWx0VGV4dCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdFRleHQodHJpZ2dlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgndGV4dCcsIHRyaWdnZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdkZXN0cm95JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXIuZGVzdHJveSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpcGJvYXJkQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0sIFt7XG4gICAgICAgICAgICBrZXk6ICdpc1N1cHBvcnRlZCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWydjb3B5JywgJ2N1dCddO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbnMgPSB0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJyA/IFthY3Rpb25dIDogYWN0aW9uO1xuICAgICAgICAgICAgICAgIHZhciBzdXBwb3J0ID0gISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQ7XG5cbiAgICAgICAgICAgICAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ID0gc3VwcG9ydCAmJiAhIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZChhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gQ2xpcGJvYXJkO1xuICAgIH0oX3RpbnlFbWl0dGVyMi5kZWZhdWx0KTtcblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN1ZmZpeFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldEF0dHJpYnV0ZVZhbHVlKHN1ZmZpeCwgZWxlbWVudCkge1xuICAgICAgICB2YXIgYXR0cmlidXRlID0gJ2RhdGEtY2xpcGJvYXJkLScgKyBzdWZmaXg7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IENsaXBib2FyZDtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC9saWIvY2xpcGJvYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydtb2R1bGUnLCAnc2VsZWN0J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZmFjdG9yeShtb2R1bGUsIHJlcXVpcmUoJ3NlbGVjdCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbW9kID0ge1xuICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgfTtcbiAgICAgICAgZmFjdG9yeShtb2QsIGdsb2JhbC5zZWxlY3QpO1xuICAgICAgICBnbG9iYWwuY2xpcGJvYXJkQWN0aW9uID0gbW9kLmV4cG9ydHM7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24gKG1vZHVsZSwgX3NlbGVjdCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBfc2VsZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NlbGVjdCk7XG5cbiAgICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgICAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgICAgICB9O1xuICAgIH0oKTtcblxuICAgIHZhciBDbGlwYm9hcmRBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQ2xpcGJvYXJkQWN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDbGlwYm9hcmRBY3Rpb24pO1xuXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5pbml0U2VsZWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lcyBiYXNlIHByb3BlcnRpZXMgcGFzc2VkIGZyb20gY29uc3RydWN0b3IuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKENsaXBib2FyZEFjdGlvbiwgW3tcbiAgICAgICAgICAgIGtleTogJ3Jlc29sdmVPcHRpb25zJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0dGVyID0gb3B0aW9ucy5lbWl0dGVyO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlciA9IG9wdGlvbnMudHJpZ2dlcjtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2luaXRTZWxlY3Rpb24nLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEZha2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdzZWxlY3RGYWtlJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RGYWtlKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgaXNSVEwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXInKSA9PSAncnRsJztcblxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRmFrZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlRmFrZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlciA9IHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrKSB8fCB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB6b29taW5nIG9uIGlPU1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUuZm9udFNpemUgPSAnMTJwdCc7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgYm94IG1vZGVsXG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5ib3JkZXIgPSAnMCc7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5wYWRkaW5nID0gJzAnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUubWFyZ2luID0gJzAnO1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgZWxlbWVudCBvdXQgb2Ygc2NyZWVuIGhvcml6b250YWxseVxuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0uc3R5bGVbaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnXSA9ICctOTk5OXB4JztcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGVsZW1lbnQgdG8gdGhlIHNhbWUgcG9zaXRpb24gdmVydGljYWxseVxuICAgICAgICAgICAgICAgIHZhciB5UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnRvcCA9IHlQb3NpdGlvbiArICdweCc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZha2VFbGVtLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS52YWx1ZSA9IHRoaXMudGV4dDtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmFrZUVsZW0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSAoMCwgX3NlbGVjdDIuZGVmYXVsdCkodGhpcy5mYWtlRWxlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5VGV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdyZW1vdmVGYWtlJyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVGYWtlKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZha2VIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWtlSGFuZGxlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFrZUhhbmRsZXJDYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmFrZUVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mYWtlRWxlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnc2VsZWN0VGFyZ2V0JyxcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RUYXJnZXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSAoMCwgX3NlbGVjdDIuZGVmYXVsdCkodGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29weVRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnY29weVRleHQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvcHlUZXh0KCkge1xuICAgICAgICAgICAgICAgIHZhciBzdWNjZWVkZWQgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZWVkZWQgPSBkb2N1bWVudC5leGVjQ29tbWFuZCh0aGlzLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2NlZWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KHN1Y2NlZWRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2hhbmRsZVJlc3VsdCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlUmVzdWx0KHN1Y2NlZWRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHN1Y2NlZWRlZCA/ICdzdWNjZXNzJyA6ICdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5zZWxlY3RlZFRleHQsXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IHRoaXMudHJpZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb246IHRoaXMuY2xlYXJTZWxlY3Rpb24uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6ICdjbGVhclNlbGVjdGlvbicsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJpZ2dlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGYWtlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2FjdGlvbicsXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnY29weSc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWN0aW9uICE9PSAnY29weScgJiYgdGhpcy5fYWN0aW9uICE9PSAnY3V0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJhY3Rpb25cIiB2YWx1ZSwgdXNlIGVpdGhlciBcImNvcHlcIiBvciBcImN1dFwiJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ3RhcmdldCcsXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldCAmJiAodHlwZW9mIHRhcmdldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodGFyZ2V0KSkgPT09ICdvYmplY3QnICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnY29weScgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gUGxlYXNlIHVzZSBcInJlYWRvbmx5XCIgaW5zdGVhZCBvZiBcImRpc2FibGVkXCIgYXR0cmlidXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2N1dCcgJiYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykgfHwgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFlvdSBjYW5cXCd0IGN1dCB0ZXh0IGZyb20gZWxlbWVudHMgd2l0aCBcInJlYWRvbmx5XCIgb3IgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgdmFsdWUsIHVzZSBhIHZhbGlkIEVsZW1lbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIENsaXBib2FyZEFjdGlvbjtcbiAgICB9KCk7XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IENsaXBib2FyZEFjdGlvbjtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC9saWIvY2xpcGJvYXJkLWFjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gc2VsZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgc2VsZWN0ZWRUZXh0O1xuXG4gICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGVsZW1lbnQubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgdmFyIGlzUmVhZE9ubHkgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc2VsZWN0KCk7XG4gICAgICAgIGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgZWxlbWVudC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbGVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NlbGVjdC9zcmMvc2VsZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RpbnktZW1pdHRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzID0gcmVxdWlyZSgnLi9pcycpO1xudmFyIGRlbGVnYXRlID0gcmVxdWlyZSgnZGVsZWdhdGUnKTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgYWxsIHBhcmFtcyBhbmQgY2FsbHMgdGhlIHJpZ2h0XG4gKiBsaXN0ZW5lciBmdW5jdGlvbiBiYXNlZCBvbiBpdHMgdGFyZ2V0IHR5cGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRhcmdldFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0YXJnZXQgJiYgIXR5cGUgJiYgIWNhbGxiYWNrKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudHMnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzLnN0cmluZyh0eXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIFN0cmluZycpO1xuICAgIH1cblxuICAgIGlmICghaXMuZm4oY2FsbGJhY2spKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoaXJkIGFyZ3VtZW50IG11c3QgYmUgYSBGdW5jdGlvbicpO1xuICAgIH1cblxuICAgIGlmIChpcy5ub2RlKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Rlbk5vZGUodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzLm5vZGVMaXN0KHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Rlbk5vZGVMaXN0KHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBlbHNlIGlmIChpcy5zdHJpbmcodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuU2VsZWN0b3IodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nLCBIVE1MRWxlbWVudCwgSFRNTENvbGxlY3Rpb24sIG9yIE5vZGVMaXN0Jyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBIVE1MIGVsZW1lbnRcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5Ob2RlKG5vZGUsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBsaXN0IG9mIEhUTUwgZWxlbWVudHNcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb259IG5vZGVMaXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuTm9kZUxpc3Qobm9kZUxpc3QsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlTGlzdCwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVMaXN0LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBhIHNlbGVjdG9yXG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5TZWxlY3RvcihzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZGVsZWdhdGUoZG9jdW1lbnQuYm9keSwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0ZW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nb29kLWxpc3RlbmVyL3NyYy9saXN0ZW4uanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBIVE1MIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLm5vZGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICYmIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgJiYgdmFsdWUubm9kZVR5cGUgPT09IDE7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5ub2RlTGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgKHR5cGUgPT09ICdbb2JqZWN0IE5vZGVMaXN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJylcbiAgICAgICAgJiYgKCdsZW5ndGgnIGluIHZhbHVlKVxuICAgICAgICAmJiAodmFsdWUubGVuZ3RoID09PSAwIHx8IGV4cG9ydHMubm9kZSh2YWx1ZVswXSkpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuc3RyaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuZm4gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuICAgIHJldHVybiB0eXBlID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2QtbGlzdGVuZXIvc3JjL2lzLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xvc2VzdCA9IHJlcXVpcmUoJy4vY2xvc2VzdCcpO1xuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgdmFyIGxpc3RlbmVyRm4gPSBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fFN0cmluZ3xBcnJheX0gW2VsZW1lbnRzXVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50cywgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XG4gICAgLy8gSGFuZGxlIHRoZSByZWd1bGFyIEVsZW1lbnQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBFbGVtZW50LWxlc3MgdXNhZ2UsIGl0IGRlZmF1bHRzIHRvIGdsb2JhbCBkZWxlZ2F0aW9uXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFVzZSBgZG9jdW1lbnRgIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIsIHRoZW4gYXBwbHkgYXJndW1lbnRzXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzaG9ydCB3YXkgdG8gLnVuc2hpZnQgYGFyZ3VtZW50c2Agd2l0aG91dCBydW5uaW5nIGludG8gZGVvcHRpbWl6YXRpb25zXG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYmluZChudWxsLCBkb2N1bWVudCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgU2VsZWN0b3ItYmFzZWQgdXNhZ2VcbiAgICBpZiAodHlwZW9mIGVsZW1lbnRzID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBBcnJheS1saWtlIGJhc2VkIHVzYWdlXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEZpbmRzIGNsb3Nlc3QgbWF0Y2ggYW5kIGludm9rZXMgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGxpc3RlbmVyKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUuZGVsZWdhdGVUYXJnZXQgPSBjbG9zZXN0KGUudGFyZ2V0LCBzZWxlY3Rvcik7XG5cbiAgICAgICAgaWYgKGUuZGVsZWdhdGVUYXJnZXQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZWxlbWVudCwgZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsZWdhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kZWxlZ2F0ZS9zcmMvZGVsZWdhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBET0NVTUVOVF9OT0RFX1RZUEUgPSA5O1xuXG4vKipcbiAqIEEgcG9seWZpbGwgZm9yIEVsZW1lbnQubWF0Y2hlcygpXG4gKi9cbmlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICB2YXIgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IHBhcmVudCB0aGF0IG1hdGNoZXMgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QgKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfTk9ERV9UWVBFKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvc2VzdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RlbGVnYXRlL3NyYy9jbG9zZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI7KGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKlxuXHQgKiBAcHJlc2VydmUgRmFzdENsaWNrOiBwb2x5ZmlsbCB0byByZW1vdmUgY2xpY2sgZGVsYXlzIG9uIGJyb3dzZXJzIHdpdGggdG91Y2ggVUlzLlxuXHQgKlxuXHQgKiBAY29kaW5nc3RhbmRhcmQgZnRsYWJzLWpzdjJcblx0ICogQGNvcHlyaWdodCBUaGUgRmluYW5jaWFsIFRpbWVzIExpbWl0ZWQgW0FsbCBSaWdodHMgUmVzZXJ2ZWRdXG5cdCAqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChzZWUgTElDRU5TRS50eHQpXG5cdCAqL1xuXG5cdC8qanNsaW50IGJyb3dzZXI6dHJ1ZSwgbm9kZTp0cnVlKi9cblx0LypnbG9iYWwgZGVmaW5lLCBFdmVudCwgTm9kZSovXG5cblxuXHQvKipcblx0ICogSW5zdGFudGlhdGUgZmFzdC1jbGlja2luZyBsaXN0ZW5lcnMgb24gdGhlIHNwZWNpZmllZCBsYXllci5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gbGF5ZXIgVGhlIGxheWVyIHRvIGxpc3RlbiBvblxuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0c1xuXHQgKi9cblx0ZnVuY3Rpb24gRmFzdENsaWNrKGxheWVyLCBvcHRpb25zKSB7XG5cdFx0dmFyIG9sZE9uQ2xpY2s7XG5cblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIFdoZXRoZXIgYSBjbGljayBpcyBjdXJyZW50bHkgYmVpbmcgdHJhY2tlZC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHQgKi9cblx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblxuXG5cdFx0LyoqXG5cdFx0ICogVGltZXN0YW1wIGZvciB3aGVuIGNsaWNrIHRyYWNraW5nIHN0YXJ0ZWQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCA9IDA7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBlbGVtZW50IGJlaW5nIHRyYWNrZWQgZm9yIGEgY2xpY2suXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBFdmVudFRhcmdldFxuXHRcdCAqL1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFgtY29vcmRpbmF0ZSBvZiB0b3VjaCBzdGFydCBldmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudG91Y2hTdGFydFggPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBZLWNvb3JkaW5hdGUgb2YgdG91Y2ggc3RhcnQgZXZlbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLnRvdWNoU3RhcnRZID0gMDtcblxuXG5cdFx0LyoqXG5cdFx0ICogSUQgb2YgdGhlIGxhc3QgdG91Y2gsIHJldHJpZXZlZCBmcm9tIFRvdWNoLmlkZW50aWZpZXIuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBudW1iZXJcblx0XHQgKi9cblx0XHR0aGlzLmxhc3RUb3VjaElkZW50aWZpZXIgPSAwO1xuXG5cblx0XHQvKipcblx0XHQgKiBUb3VjaG1vdmUgYm91bmRhcnksIGJleW9uZCB3aGljaCBhIGNsaWNrIHdpbGwgYmUgY2FuY2VsbGVkLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50b3VjaEJvdW5kYXJ5ID0gb3B0aW9ucy50b3VjaEJvdW5kYXJ5IHx8IDEwO1xuXG5cblx0XHQvKipcblx0XHQgKiBUaGUgRmFzdENsaWNrIGxheWVyLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgRWxlbWVudFxuXHRcdCAqL1xuXHRcdHRoaXMubGF5ZXIgPSBsYXllcjtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBtaW5pbXVtIHRpbWUgYmV0d2VlbiB0YXAodG91Y2hzdGFydCBhbmQgdG91Y2hlbmQpIGV2ZW50c1xuXHRcdCAqXG5cdFx0ICogQHR5cGUgbnVtYmVyXG5cdFx0ICovXG5cdFx0dGhpcy50YXBEZWxheSA9IG9wdGlvbnMudGFwRGVsYXkgfHwgMjAwO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIG1heGltdW0gdGltZSBmb3IgYSB0YXBcblx0XHQgKlxuXHRcdCAqIEB0eXBlIG51bWJlclxuXHRcdCAqL1xuXHRcdHRoaXMudGFwVGltZW91dCA9IG9wdGlvbnMudGFwVGltZW91dCB8fCA3MDA7XG5cblx0XHRpZiAoRmFzdENsaWNrLm5vdE5lZWRlZChsYXllcikpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBTb21lIG9sZCB2ZXJzaW9ucyBvZiBBbmRyb2lkIGRvbid0IGhhdmUgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcblx0XHRmdW5jdGlvbiBiaW5kKG1ldGhvZCwgY29udGV4dCkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gbWV0aG9kLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7IH07XG5cdFx0fVxuXG5cblx0XHR2YXIgbWV0aG9kcyA9IFsnb25Nb3VzZScsICdvbkNsaWNrJywgJ29uVG91Y2hTdGFydCcsICdvblRvdWNoTW92ZScsICdvblRvdWNoRW5kJywgJ29uVG91Y2hDYW5jZWwnXTtcblx0XHR2YXIgY29udGV4dCA9IHRoaXM7XG5cdFx0Zm9yICh2YXIgaSA9IDAsIGwgPSBtZXRob2RzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdFx0Y29udGV4dFttZXRob2RzW2ldXSA9IGJpbmQoY29udGV4dFttZXRob2RzW2ldXSwgY29udGV4dCk7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHVwIGV2ZW50IGhhbmRsZXJzIGFzIHJlcXVpcmVkXG5cdFx0aWYgKGRldmljZUlzQW5kcm9pZCkge1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlLCB0cnVlKTtcblx0XHR9XG5cblx0XHRsYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljaywgdHJ1ZSk7XG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgZmFsc2UpO1xuXHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kLCBmYWxzZSk7XG5cdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLm9uVG91Y2hDYW5jZWwsIGZhbHNlKTtcblxuXHRcdC8vIEhhY2sgaXMgcmVxdWlyZWQgZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBFdmVudCNzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKGUuZy4gQW5kcm9pZCAyKVxuXHRcdC8vIHdoaWNoIGlzIGhvdyBGYXN0Q2xpY2sgbm9ybWFsbHkgc3RvcHMgY2xpY2sgZXZlbnRzIGJ1YmJsaW5nIHRvIGNhbGxiYWNrcyByZWdpc3RlcmVkIG9uIHRoZSBGYXN0Q2xpY2tcblx0XHQvLyBsYXllciB3aGVuIHRoZXkgYXJlIGNhbmNlbGxlZC5cblx0XHRpZiAoIUV2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSkge1xuXHRcdFx0XHR2YXIgcm12ID0gTm9kZS5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcblx0XHRcdFx0aWYgKHR5cGUgPT09ICdjbGljaycpIHtcblx0XHRcdFx0XHRybXYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2suaGlqYWNrZWQgfHwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJtdi5jYWxsKGxheWVyLCB0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGxheWVyLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSkge1xuXHRcdFx0XHR2YXIgYWR2ID0gTm9kZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcblx0XHRcdFx0aWYgKHR5cGUgPT09ICdjbGljaycpIHtcblx0XHRcdFx0XHRhZHYuY2FsbChsYXllciwgdHlwZSwgY2FsbGJhY2suaGlqYWNrZWQgfHwgKGNhbGxiYWNrLmhpamFja2VkID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0XHRcdGlmICghZXZlbnQucHJvcGFnYXRpb25TdG9wcGVkKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrKGV2ZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSwgY2FwdHVyZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWR2LmNhbGwobGF5ZXIsIHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBJZiBhIGhhbmRsZXIgaXMgYWxyZWFkeSBkZWNsYXJlZCBpbiB0aGUgZWxlbWVudCdzIG9uY2xpY2sgYXR0cmlidXRlLCBpdCB3aWxsIGJlIGZpcmVkIGJlZm9yZVxuXHRcdC8vIEZhc3RDbGljaydzIG9uQ2xpY2sgaGFuZGxlci4gRml4IHRoaXMgYnkgcHVsbGluZyBvdXQgdGhlIHVzZXItZGVmaW5lZCBoYW5kbGVyIGZ1bmN0aW9uIGFuZFxuXHRcdC8vIGFkZGluZyBpdCBhcyBsaXN0ZW5lci5cblx0XHRpZiAodHlwZW9mIGxheWVyLm9uY2xpY2sgPT09ICdmdW5jdGlvbicpIHtcblxuXHRcdFx0Ly8gQW5kcm9pZCBicm93c2VyIG9uIGF0IGxlYXN0IDMuMiByZXF1aXJlcyBhIG5ldyByZWZlcmVuY2UgdG8gdGhlIGZ1bmN0aW9uIGluIGxheWVyLm9uY2xpY2tcblx0XHRcdC8vIC0gdGhlIG9sZCBvbmUgd29uJ3Qgd29yayBpZiBwYXNzZWQgdG8gYWRkRXZlbnRMaXN0ZW5lciBkaXJlY3RseS5cblx0XHRcdG9sZE9uQ2xpY2sgPSBsYXllci5vbmNsaWNrO1xuXHRcdFx0bGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRvbGRPbkNsaWNrKGV2ZW50KTtcblx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdGxheWVyLm9uY2xpY2sgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIFdpbmRvd3MgUGhvbmUgOC4xIGZha2VzIHVzZXIgYWdlbnQgc3RyaW5nIHRvIGxvb2sgbGlrZSBBbmRyb2lkIGFuZCBpUGhvbmUuXG5cdCpcblx0KiBAdHlwZSBib29sZWFuXG5cdCovXG5cdHZhciBkZXZpY2VJc1dpbmRvd3NQaG9uZSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIldpbmRvd3MgUGhvbmVcIikgPj0gMDtcblxuXHQvKipcblx0ICogQW5kcm9pZCByZXF1aXJlcyBleGNlcHRpb25zLlxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNBbmRyb2lkID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdBbmRyb2lkJykgPiAwICYmICFkZXZpY2VJc1dpbmRvd3NQaG9uZTtcblxuXG5cdC8qKlxuXHQgKiBpT1MgcmVxdWlyZXMgZXhjZXB0aW9ucy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzSU9TID0gL2lQKGFkfGhvbmV8b2QpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICFkZXZpY2VJc1dpbmRvd3NQaG9uZTtcblxuXG5cdC8qKlxuXHQgKiBpT1MgNCByZXF1aXJlcyBhbiBleGNlcHRpb24gZm9yIHNlbGVjdCBlbGVtZW50cy5cblx0ICpcblx0ICogQHR5cGUgYm9vbGVhblxuXHQgKi9cblx0dmFyIGRldmljZUlzSU9TNCA9IGRldmljZUlzSU9TICYmICgvT1MgNF9cXGQoX1xcZCk/LykudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuXG5cdC8qKlxuXHQgKiBpT1MgNi4wLTcuKiByZXF1aXJlcyB0aGUgdGFyZ2V0IGVsZW1lbnQgdG8gYmUgbWFudWFsbHkgZGVyaXZlZFxuXHQgKlxuXHQgKiBAdHlwZSBib29sZWFuXG5cdCAqL1xuXHR2YXIgZGV2aWNlSXNJT1NXaXRoQmFkVGFyZ2V0ID0gZGV2aWNlSXNJT1MgJiYgKC9PUyBbNi03XV9cXGQvKS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5cdC8qKlxuXHQgKiBCbGFja0JlcnJ5IHJlcXVpcmVzIGV4Y2VwdGlvbnMuXG5cdCAqXG5cdCAqIEB0eXBlIGJvb2xlYW5cblx0ICovXG5cdHZhciBkZXZpY2VJc0JsYWNrQmVycnkxMCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQkIxMCcpID4gMDtcblxuXHQvKipcblx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgYSBnaXZlbiBlbGVtZW50IHJlcXVpcmVzIGEgbmF0aXZlIGNsaWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldCBUYXJnZXQgRE9NIGVsZW1lbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgZWxlbWVudCBuZWVkcyBhIG5hdGl2ZSBjbGlja1xuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5uZWVkc0NsaWNrID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdFx0c3dpdGNoICh0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkge1xuXG5cdFx0Ly8gRG9uJ3Qgc2VuZCBhIHN5bnRoZXRpYyBjbGljayB0byBkaXNhYmxlZCBpbnB1dHMgKGlzc3VlICM2Milcblx0XHRjYXNlICdidXR0b24nOlxuXHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0aWYgKHRhcmdldC5kaXNhYmxlZCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnaW5wdXQnOlxuXG5cdFx0XHQvLyBGaWxlIGlucHV0cyBuZWVkIHJlYWwgY2xpY2tzIG9uIGlPUyA2IGR1ZSB0byBhIGJyb3dzZXIgYnVnIChpc3N1ZSAjNjgpXG5cdFx0XHRpZiAoKGRldmljZUlzSU9TICYmIHRhcmdldC50eXBlID09PSAnZmlsZScpIHx8IHRhcmdldC5kaXNhYmxlZCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnbGFiZWwnOlxuXHRcdGNhc2UgJ2lmcmFtZSc6IC8vIGlPUzggaG9tZXNjcmVlbiBhcHBzIGNhbiBwcmV2ZW50IGV2ZW50cyBidWJibGluZyBpbnRvIGZyYW1lc1xuXHRcdGNhc2UgJ3ZpZGVvJzpcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiAoL1xcYm5lZWRzY2xpY2tcXGIvKS50ZXN0KHRhcmdldC5jbGFzc05hbWUpO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGV0aGVyIGEgZ2l2ZW4gZWxlbWVudCByZXF1aXJlcyBhIGNhbGwgdG8gZm9jdXMgdG8gc2ltdWxhdGUgY2xpY2sgaW50byBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEVsZW1lbnR9IHRhcmdldCBUYXJnZXQgRE9NIGVsZW1lbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0aGUgZWxlbWVudCByZXF1aXJlcyBhIGNhbGwgdG8gZm9jdXMgdG8gc2ltdWxhdGUgbmF0aXZlIGNsaWNrLlxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5uZWVkc0ZvY3VzID0gZnVuY3Rpb24odGFyZ2V0KSB7XG5cdFx0c3dpdGNoICh0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkge1xuXHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHRyZXR1cm4gIWRldmljZUlzQW5kcm9pZDtcblx0XHRjYXNlICdpbnB1dCc6XG5cdFx0XHRzd2l0Y2ggKHRhcmdldC50eXBlKSB7XG5cdFx0XHRjYXNlICdidXR0b24nOlxuXHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0Y2FzZSAnZmlsZSc6XG5cdFx0XHRjYXNlICdpbWFnZSc6XG5cdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRjYXNlICdzdWJtaXQnOlxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE5vIHBvaW50IGluIGF0dGVtcHRpbmcgdG8gZm9jdXMgZGlzYWJsZWQgaW5wdXRzXG5cdFx0XHRyZXR1cm4gIXRhcmdldC5kaXNhYmxlZCAmJiAhdGFyZ2V0LnJlYWRPbmx5O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gKC9cXGJuZWVkc2ZvY3VzXFxiLykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcblx0XHR9XG5cdH07XG5cblxuXHQvKipcblx0ICogU2VuZCBhIGNsaWNrIGV2ZW50IHRvIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxFbGVtZW50fSB0YXJnZXRFbGVtZW50XG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLnNlbmRDbGljayA9IGZ1bmN0aW9uKHRhcmdldEVsZW1lbnQsIGV2ZW50KSB7XG5cdFx0dmFyIGNsaWNrRXZlbnQsIHRvdWNoO1xuXG5cdFx0Ly8gT24gc29tZSBBbmRyb2lkIGRldmljZXMgYWN0aXZlRWxlbWVudCBuZWVkcyB0byBiZSBibHVycmVkIG90aGVyd2lzZSB0aGUgc3ludGhldGljIGNsaWNrIHdpbGwgaGF2ZSBubyBlZmZlY3QgKCMyNClcblx0XHRpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSB0YXJnZXRFbGVtZW50KSB7XG5cdFx0XHRkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcblx0XHR9XG5cblx0XHR0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xuXG5cdFx0Ly8gU3ludGhlc2lzZSBhIGNsaWNrIGV2ZW50LCB3aXRoIGFuIGV4dHJhIGF0dHJpYnV0ZSBzbyBpdCBjYW4gYmUgdHJhY2tlZFxuXHRcdGNsaWNrRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcblx0XHRjbGlja0V2ZW50LmluaXRNb3VzZUV2ZW50KHRoaXMuZGV0ZXJtaW5lRXZlbnRUeXBlKHRhcmdldEVsZW1lbnQpLCB0cnVlLCB0cnVlLCB3aW5kb3csIDEsIHRvdWNoLnNjcmVlblgsIHRvdWNoLnNjcmVlblksIHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFksIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKTtcblx0XHRjbGlja0V2ZW50LmZvcndhcmRlZFRvdWNoRXZlbnQgPSB0cnVlO1xuXHRcdHRhcmdldEVsZW1lbnQuZGlzcGF0Y2hFdmVudChjbGlja0V2ZW50KTtcblx0fTtcblxuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmRldGVybWluZUV2ZW50VHlwZSA9IGZ1bmN0aW9uKHRhcmdldEVsZW1lbnQpIHtcblxuXHRcdC8vSXNzdWUgIzE1OTogQW5kcm9pZCBDaHJvbWUgU2VsZWN0IEJveCBkb2VzIG5vdCBvcGVuIHdpdGggYSBzeW50aGV0aWMgY2xpY2sgZXZlbnRcblx0XHRpZiAoZGV2aWNlSXNBbmRyb2lkICYmIHRhcmdldEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuXHRcdFx0cmV0dXJuICdtb3VzZWRvd24nO1xuXHRcdH1cblxuXHRcdHJldHVybiAnY2xpY2snO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0RWxlbWVudFxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5mb2N1cyA9IGZ1bmN0aW9uKHRhcmdldEVsZW1lbnQpIHtcblx0XHR2YXIgbGVuZ3RoO1xuXG5cdFx0Ly8gSXNzdWUgIzE2MDogb24gaU9TIDcsIHNvbWUgaW5wdXQgZWxlbWVudHMgKGUuZy4gZGF0ZSBkYXRldGltZSBtb250aCkgdGhyb3cgYSB2YWd1ZSBUeXBlRXJyb3Igb24gc2V0U2VsZWN0aW9uUmFuZ2UuIFRoZXNlIGVsZW1lbnRzIGRvbid0IGhhdmUgYW4gaW50ZWdlciB2YWx1ZSBmb3IgdGhlIHNlbGVjdGlvblN0YXJ0IGFuZCBzZWxlY3Rpb25FbmQgcHJvcGVydGllcywgYnV0IHVuZm9ydHVuYXRlbHkgdGhhdCBjYW4ndCBiZSB1c2VkIGZvciBkZXRlY3Rpb24gYmVjYXVzZSBhY2Nlc3NpbmcgdGhlIHByb3BlcnRpZXMgYWxzbyB0aHJvd3MgYSBUeXBlRXJyb3IuIEp1c3QgY2hlY2sgdGhlIHR5cGUgaW5zdGVhZC4gRmlsZWQgYXMgQXBwbGUgYnVnICMxNTEyMjcyNC5cblx0XHRpZiAoZGV2aWNlSXNJT1MgJiYgdGFyZ2V0RWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSAmJiB0YXJnZXRFbGVtZW50LnR5cGUuaW5kZXhPZignZGF0ZScpICE9PSAwICYmIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ3RpbWUnICYmIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ21vbnRoJykge1xuXHRcdFx0bGVuZ3RoID0gdGFyZ2V0RWxlbWVudC52YWx1ZS5sZW5ndGg7XG5cdFx0XHR0YXJnZXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKGxlbmd0aCwgbGVuZ3RoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0RWxlbWVudC5mb2N1cygpO1xuXHRcdH1cblx0fTtcblxuXG5cdC8qKlxuXHQgKiBDaGVjayB3aGV0aGVyIHRoZSBnaXZlbiB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIGEgc2Nyb2xsYWJsZSBsYXllciBhbmQgaWYgc28sIHNldCBhIGZsYWcgb24gaXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RWxlbWVudH0gdGFyZ2V0RWxlbWVudFxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS51cGRhdGVTY3JvbGxQYXJlbnQgPSBmdW5jdGlvbih0YXJnZXRFbGVtZW50KSB7XG5cdFx0dmFyIHNjcm9sbFBhcmVudCwgcGFyZW50RWxlbWVudDtcblxuXHRcdHNjcm9sbFBhcmVudCA9IHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50O1xuXG5cdFx0Ly8gQXR0ZW1wdCB0byBkaXNjb3ZlciB3aGV0aGVyIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBjb250YWluZWQgd2l0aGluIGEgc2Nyb2xsYWJsZSBsYXllci4gUmUtY2hlY2sgaWYgdGhlXG5cdFx0Ly8gdGFyZ2V0IGVsZW1lbnQgd2FzIG1vdmVkIHRvIGFub3RoZXIgcGFyZW50LlxuXHRcdGlmICghc2Nyb2xsUGFyZW50IHx8ICFzY3JvbGxQYXJlbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCkpIHtcblx0XHRcdHBhcmVudEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50O1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRpZiAocGFyZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgPiBwYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCkge1xuXHRcdFx0XHRcdHNjcm9sbFBhcmVudCA9IHBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdFx0dGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQgPSBwYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdH0gd2hpbGUgKHBhcmVudEVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdC8vIEFsd2F5cyB1cGRhdGUgdGhlIHNjcm9sbCB0b3AgdHJhY2tlciBpZiBwb3NzaWJsZS5cblx0XHRpZiAoc2Nyb2xsUGFyZW50KSB7XG5cdFx0XHRzY3JvbGxQYXJlbnQuZmFzdENsaWNrTGFzdFNjcm9sbFRvcCA9IHNjcm9sbFBhcmVudC5zY3JvbGxUb3A7XG5cdFx0fVxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IHRhcmdldEVsZW1lbnRcblx0ICogQHJldHVybnMge0VsZW1lbnR8RXZlbnRUYXJnZXR9XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLmdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQgPSBmdW5jdGlvbihldmVudFRhcmdldCkge1xuXG5cdFx0Ly8gT24gc29tZSBvbGRlciBicm93c2VycyAobm90YWJseSBTYWZhcmkgb24gaU9TIDQuMSAtIHNlZSBpc3N1ZSAjNTYpIHRoZSBldmVudCB0YXJnZXQgbWF5IGJlIGEgdGV4dCBub2RlLlxuXHRcdGlmIChldmVudFRhcmdldC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcblx0XHRcdHJldHVybiBldmVudFRhcmdldC5wYXJlbnROb2RlO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmVudFRhcmdldDtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiB0b3VjaCBzdGFydCwgcmVjb3JkIHRoZSBwb3NpdGlvbiBhbmQgc2Nyb2xsIG9mZnNldC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHRhcmdldEVsZW1lbnQsIHRvdWNoLCBzZWxlY3Rpb247XG5cblx0XHQvLyBJZ25vcmUgbXVsdGlwbGUgdG91Y2hlcywgb3RoZXJ3aXNlIHBpbmNoLXRvLXpvb20gaXMgcHJldmVudGVkIGlmIGJvdGggZmluZ2VycyBhcmUgb24gdGhlIEZhc3RDbGljayBlbGVtZW50IChpc3N1ZSAjMTExKS5cblx0XHRpZiAoZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHR0YXJnZXRFbGVtZW50ID0gdGhpcy5nZXRUYXJnZXRFbGVtZW50RnJvbUV2ZW50VGFyZ2V0KGV2ZW50LnRhcmdldCk7XG5cdFx0dG91Y2ggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdO1xuXG5cdFx0aWYgKGRldmljZUlzSU9TKSB7XG5cblx0XHRcdC8vIE9ubHkgdHJ1c3RlZCBldmVudHMgd2lsbCBkZXNlbGVjdCB0ZXh0IG9uIGlPUyAoaXNzdWUgIzQ5KVxuXHRcdFx0c2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXHRcdFx0aWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50ICYmICFzZWxlY3Rpb24uaXNDb2xsYXBzZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghZGV2aWNlSXNJT1M0KSB7XG5cblx0XHRcdFx0Ly8gV2VpcmQgdGhpbmdzIGhhcHBlbiBvbiBpT1Mgd2hlbiBhbiBhbGVydCBvciBjb25maXJtIGRpYWxvZyBpcyBvcGVuZWQgZnJvbSBhIGNsaWNrIGV2ZW50IGNhbGxiYWNrIChpc3N1ZSAjMjMpOlxuXHRcdFx0XHQvLyB3aGVuIHRoZSB1c2VyIG5leHQgdGFwcyBhbnl3aGVyZSBlbHNlIG9uIHRoZSBwYWdlLCBuZXcgdG91Y2hzdGFydCBhbmQgdG91Y2hlbmQgZXZlbnRzIGFyZSBkaXNwYXRjaGVkXG5cdFx0XHRcdC8vIHdpdGggdGhlIHNhbWUgaWRlbnRpZmllciBhcyB0aGUgdG91Y2ggZXZlbnQgdGhhdCBwcmV2aW91c2x5IHRyaWdnZXJlZCB0aGUgY2xpY2sgdGhhdCB0cmlnZ2VyZWQgdGhlIGFsZXJ0LlxuXHRcdFx0XHQvLyBTYWRseSwgdGhlcmUgaXMgYW4gaXNzdWUgb24gaU9TIDQgdGhhdCBjYXVzZXMgc29tZSBub3JtYWwgdG91Y2ggZXZlbnRzIHRvIGhhdmUgdGhlIHNhbWUgaWRlbnRpZmllciBhcyBhblxuXHRcdFx0XHQvLyBpbW1lZGlhdGVseSBwcmVjZWVkaW5nIHRvdWNoIGV2ZW50IChpc3N1ZSAjNTIpLCBzbyB0aGlzIGZpeCBpcyB1bmF2YWlsYWJsZSBvbiB0aGF0IHBsYXRmb3JtLlxuXHRcdFx0XHQvLyBJc3N1ZSAxMjA6IHRvdWNoLmlkZW50aWZpZXIgaXMgMCB3aGVuIENocm9tZSBkZXYgdG9vbHMgJ0VtdWxhdGUgdG91Y2ggZXZlbnRzJyBpcyBzZXQgd2l0aCBhbiBpT1MgZGV2aWNlIFVBIHN0cmluZyxcblx0XHRcdFx0Ly8gd2hpY2ggY2F1c2VzIGFsbCB0b3VjaCBldmVudHMgdG8gYmUgaWdub3JlZC4gQXMgdGhpcyBibG9jayBvbmx5IGFwcGxpZXMgdG8gaU9TLCBhbmQgaU9TIGlkZW50aWZpZXJzIGFyZSBhbHdheXMgbG9uZyxcblx0XHRcdFx0Ly8gcmFuZG9tIGludGVnZXJzLCBpdCdzIHNhZmUgdG8gdG8gY29udGludWUgaWYgdGhlIGlkZW50aWZpZXIgaXMgMCBoZXJlLlxuXHRcdFx0XHRpZiAodG91Y2guaWRlbnRpZmllciAmJiB0b3VjaC5pZGVudGlmaWVyID09PSB0aGlzLmxhc3RUb3VjaElkZW50aWZpZXIpIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMubGFzdFRvdWNoSWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2YgYSBzY3JvbGxhYmxlIGxheWVyICh1c2luZyAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2gpIGFuZDpcblx0XHRcdFx0Ly8gMSkgdGhlIHVzZXIgZG9lcyBhIGZsaW5nIHNjcm9sbCBvbiB0aGUgc2Nyb2xsYWJsZSBsYXllclxuXHRcdFx0XHQvLyAyKSB0aGUgdXNlciBzdG9wcyB0aGUgZmxpbmcgc2Nyb2xsIHdpdGggYW5vdGhlciB0YXBcblx0XHRcdFx0Ly8gdGhlbiB0aGUgZXZlbnQudGFyZ2V0IG9mIHRoZSBsYXN0ICd0b3VjaGVuZCcgZXZlbnQgd2lsbCBiZSB0aGUgZWxlbWVudCB0aGF0IHdhcyB1bmRlciB0aGUgdXNlcidzIGZpbmdlclxuXHRcdFx0XHQvLyB3aGVuIHRoZSBmbGluZyBzY3JvbGwgd2FzIHN0YXJ0ZWQsIGNhdXNpbmcgRmFzdENsaWNrIHRvIHNlbmQgYSBjbGljayBldmVudCB0byB0aGF0IGxheWVyIC0gdW5sZXNzIGEgY2hlY2tcblx0XHRcdFx0Ly8gaXMgbWFkZSB0byBlbnN1cmUgdGhhdCBhIHBhcmVudCBsYXllciB3YXMgbm90IHNjcm9sbGVkIGJlZm9yZSBzZW5kaW5nIGEgc3ludGhldGljIGNsaWNrIChpc3N1ZSAjNDIpLlxuXHRcdFx0XHR0aGlzLnVwZGF0ZVNjcm9sbFBhcmVudCh0YXJnZXRFbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSB0cnVlO1xuXHRcdHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0ID0gZXZlbnQudGltZVN0YW1wO1xuXHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQ7XG5cblx0XHR0aGlzLnRvdWNoU3RhcnRYID0gdG91Y2gucGFnZVg7XG5cdFx0dGhpcy50b3VjaFN0YXJ0WSA9IHRvdWNoLnBhZ2VZO1xuXG5cdFx0Ly8gUHJldmVudCBwaGFudG9tIGNsaWNrcyBvbiBmYXN0IGRvdWJsZS10YXAgKGlzc3VlICMzNilcblx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMubGFzdENsaWNrVGltZSkgPCB0aGlzLnRhcERlbGF5KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEJhc2VkIG9uIGEgdG91Y2htb3ZlIGV2ZW50IG9iamVjdCwgY2hlY2sgd2hldGhlciB0aGUgdG91Y2ggaGFzIG1vdmVkIHBhc3QgYSBib3VuZGFyeSBzaW5jZSBpdCBzdGFydGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUudG91Y2hIYXNNb3ZlZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0sIGJvdW5kYXJ5ID0gdGhpcy50b3VjaEJvdW5kYXJ5O1xuXG5cdFx0aWYgKE1hdGguYWJzKHRvdWNoLnBhZ2VYIC0gdGhpcy50b3VjaFN0YXJ0WCkgPiBib3VuZGFyeSB8fCBNYXRoLmFicyh0b3VjaC5wYWdlWSAtIHRoaXMudG91Y2hTdGFydFkpID4gYm91bmRhcnkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIGxhc3QgcG9zaXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLnRyYWNraW5nQ2xpY2spIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSB0b3VjaCBoYXMgbW92ZWQsIGNhbmNlbCB0aGUgY2xpY2sgdHJhY2tpbmdcblx0XHRpZiAodGhpcy50YXJnZXRFbGVtZW50ICE9PSB0aGlzLmdldFRhcmdldEVsZW1lbnRGcm9tRXZlbnRUYXJnZXQoZXZlbnQudGFyZ2V0KSB8fCB0aGlzLnRvdWNoSGFzTW92ZWQoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cblxuXHQvKipcblx0ICogQXR0ZW1wdCB0byBmaW5kIHRoZSBsYWJlbGxlZCBjb250cm9sIGZvciB0aGUgZ2l2ZW4gbGFiZWwgZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudFRhcmdldHxIVE1MTGFiZWxFbGVtZW50fSBsYWJlbEVsZW1lbnRcblx0ICogQHJldHVybnMge0VsZW1lbnR8bnVsbH1cblx0ICovXG5cdEZhc3RDbGljay5wcm90b3R5cGUuZmluZENvbnRyb2wgPSBmdW5jdGlvbihsYWJlbEVsZW1lbnQpIHtcblxuXHRcdC8vIEZhc3QgcGF0aCBmb3IgbmV3ZXIgYnJvd3NlcnMgc3VwcG9ydGluZyB0aGUgSFRNTDUgY29udHJvbCBhdHRyaWJ1dGVcblx0XHRpZiAobGFiZWxFbGVtZW50LmNvbnRyb2wgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGxhYmVsRWxlbWVudC5jb250cm9sO1xuXHRcdH1cblxuXHRcdC8vIEFsbCBicm93c2VycyB1bmRlciB0ZXN0IHRoYXQgc3VwcG9ydCB0b3VjaCBldmVudHMgYWxzbyBzdXBwb3J0IHRoZSBIVE1MNSBodG1sRm9yIGF0dHJpYnV0ZVxuXHRcdGlmIChsYWJlbEVsZW1lbnQuaHRtbEZvcikge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxhYmVsRWxlbWVudC5odG1sRm9yKTtcblx0XHR9XG5cblx0XHQvLyBJZiBubyBmb3IgYXR0cmlidXRlIGV4aXN0cywgYXR0ZW1wdCB0byByZXRyaWV2ZSB0aGUgZmlyc3QgbGFiZWxsYWJsZSBkZXNjZW5kYW50IGVsZW1lbnRcblx0XHQvLyB0aGUgbGlzdCBvZiB3aGljaCBpcyBkZWZpbmVkIGhlcmU6IGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L2Zvcm1zLmh0bWwjY2F0ZWdvcnktbGFiZWxcblx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiwgaW5wdXQ6bm90KFt0eXBlPWhpZGRlbl0pLCBrZXlnZW4sIG1ldGVyLCBvdXRwdXQsIHByb2dyZXNzLCBzZWxlY3QsIHRleHRhcmVhJyk7XG5cdH07XG5cblxuXHQvKipcblx0ICogT24gdG91Y2ggZW5kLCBkZXRlcm1pbmUgd2hldGhlciB0byBzZW5kIGEgY2xpY2sgZXZlbnQgYXQgb25jZS5cblx0ICpcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRGYXN0Q2xpY2sucHJvdG90eXBlLm9uVG91Y2hFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBmb3JFbGVtZW50LCB0cmFja2luZ0NsaWNrU3RhcnQsIHRhcmdldFRhZ05hbWUsIHNjcm9sbFBhcmVudCwgdG91Y2gsIHRhcmdldEVsZW1lbnQgPSB0aGlzLnRhcmdldEVsZW1lbnQ7XG5cblx0XHRpZiAoIXRoaXMudHJhY2tpbmdDbGljaykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gUHJldmVudCBwaGFudG9tIGNsaWNrcyBvbiBmYXN0IGRvdWJsZS10YXAgKGlzc3VlICMzNilcblx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMubGFzdENsaWNrVGltZSkgPCB0aGlzLnRhcERlbGF5KSB7XG5cdFx0XHR0aGlzLmNhbmNlbE5leHRDbGljayA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoKGV2ZW50LnRpbWVTdGFtcCAtIHRoaXMudHJhY2tpbmdDbGlja1N0YXJ0KSA+IHRoaXMudGFwVGltZW91dCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gUmVzZXQgdG8gcHJldmVudCB3cm9uZyBjbGljayBjYW5jZWwgb24gaW5wdXQgKGlzc3VlICMxNTYpLlxuXHRcdHRoaXMuY2FuY2VsTmV4dENsaWNrID0gZmFsc2U7XG5cblx0XHR0aGlzLmxhc3RDbGlja1RpbWUgPSBldmVudC50aW1lU3RhbXA7XG5cblx0XHR0cmFja2luZ0NsaWNrU3RhcnQgPSB0aGlzLnRyYWNraW5nQ2xpY2tTdGFydDtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2sgPSBmYWxzZTtcblx0XHR0aGlzLnRyYWNraW5nQ2xpY2tTdGFydCA9IDA7XG5cblx0XHQvLyBPbiBzb21lIGlPUyBkZXZpY2VzLCB0aGUgdGFyZ2V0RWxlbWVudCBzdXBwbGllZCB3aXRoIHRoZSBldmVudCBpcyBpbnZhbGlkIGlmIHRoZSBsYXllclxuXHRcdC8vIGlzIHBlcmZvcm1pbmcgYSB0cmFuc2l0aW9uIG9yIHNjcm9sbCwgYW5kIGhhcyB0byBiZSByZS1kZXRlY3RlZCBtYW51YWxseS4gTm90ZSB0aGF0XG5cdFx0Ly8gZm9yIHRoaXMgdG8gZnVuY3Rpb24gY29ycmVjdGx5LCBpdCBtdXN0IGJlIGNhbGxlZCAqYWZ0ZXIqIHRoZSBldmVudCB0YXJnZXQgaXMgY2hlY2tlZCFcblx0XHQvLyBTZWUgaXNzdWUgIzU3OyBhbHNvIGZpbGVkIGFzIHJkYXI6Ly8xMzA0ODU4OSAuXG5cdFx0aWYgKGRldmljZUlzSU9TV2l0aEJhZFRhcmdldCkge1xuXHRcdFx0dG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcblxuXHRcdFx0Ly8gSW4gY2VydGFpbiBjYXNlcyBhcmd1bWVudHMgb2YgZWxlbWVudEZyb21Qb2ludCBjYW4gYmUgbmVnYXRpdmUsIHNvIHByZXZlbnQgc2V0dGluZyB0YXJnZXRFbGVtZW50IHRvIG51bGxcblx0XHRcdHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LCB0b3VjaC5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldCkgfHwgdGFyZ2V0RWxlbWVudDtcblx0XHRcdHRhcmdldEVsZW1lbnQuZmFzdENsaWNrU2Nyb2xsUGFyZW50ID0gdGhpcy50YXJnZXRFbGVtZW50LmZhc3RDbGlja1Njcm9sbFBhcmVudDtcblx0XHR9XG5cblx0XHR0YXJnZXRUYWdOYW1lID0gdGFyZ2V0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKHRhcmdldFRhZ05hbWUgPT09ICdsYWJlbCcpIHtcblx0XHRcdGZvckVsZW1lbnQgPSB0aGlzLmZpbmRDb250cm9sKHRhcmdldEVsZW1lbnQpO1xuXHRcdFx0aWYgKGZvckVsZW1lbnQpIHtcblx0XHRcdFx0dGhpcy5mb2N1cyh0YXJnZXRFbGVtZW50KTtcblx0XHRcdFx0aWYgKGRldmljZUlzQW5kcm9pZCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRhcmdldEVsZW1lbnQgPSBmb3JFbGVtZW50O1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodGhpcy5uZWVkc0ZvY3VzKHRhcmdldEVsZW1lbnQpKSB7XG5cblx0XHRcdC8vIENhc2UgMTogSWYgdGhlIHRvdWNoIHN0YXJ0ZWQgYSB3aGlsZSBhZ28gKGJlc3QgZ3Vlc3MgaXMgMTAwbXMgYmFzZWQgb24gdGVzdHMgZm9yIGlzc3VlICMzNikgdGhlbiBmb2N1cyB3aWxsIGJlIHRyaWdnZXJlZCBhbnl3YXkuIFJldHVybiBlYXJseSBhbmQgdW5zZXQgdGhlIHRhcmdldCBlbGVtZW50IHJlZmVyZW5jZSBzbyB0aGF0IHRoZSBzdWJzZXF1ZW50IGNsaWNrIHdpbGwgYmUgYWxsb3dlZCB0aHJvdWdoLlxuXHRcdFx0Ly8gQ2FzZSAyOiBXaXRob3V0IHRoaXMgZXhjZXB0aW9uIGZvciBpbnB1dCBlbGVtZW50cyB0YXBwZWQgd2hlbiB0aGUgZG9jdW1lbnQgaXMgY29udGFpbmVkIGluIGFuIGlmcmFtZSwgdGhlbiBhbnkgaW5wdXR0ZWQgdGV4dCB3b24ndCBiZSB2aXNpYmxlIGV2ZW4gdGhvdWdoIHRoZSB2YWx1ZSBhdHRyaWJ1dGUgaXMgdXBkYXRlZCBhcyB0aGUgdXNlciB0eXBlcyAoaXNzdWUgIzM3KS5cblx0XHRcdGlmICgoZXZlbnQudGltZVN0YW1wIC0gdHJhY2tpbmdDbGlja1N0YXJ0KSA+IDEwMCB8fCAoZGV2aWNlSXNJT1MgJiYgd2luZG93LnRvcCAhPT0gd2luZG93ICYmIHRhcmdldFRhZ05hbWUgPT09ICdpbnB1dCcpKSB7XG5cdFx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5mb2N1cyh0YXJnZXRFbGVtZW50KTtcblx0XHRcdHRoaXMuc2VuZENsaWNrKHRhcmdldEVsZW1lbnQsIGV2ZW50KTtcblxuXHRcdFx0Ly8gU2VsZWN0IGVsZW1lbnRzIG5lZWQgdGhlIGV2ZW50IHRvIGdvIHRocm91Z2ggb24gaU9TIDQsIG90aGVyd2lzZSB0aGUgc2VsZWN0b3IgbWVudSB3b24ndCBvcGVuLlxuXHRcdFx0Ly8gQWxzbyB0aGlzIGJyZWFrcyBvcGVuaW5nIHNlbGVjdHMgd2hlbiBWb2ljZU92ZXIgaXMgYWN0aXZlIG9uIGlPUzYsIGlPUzcgKGFuZCBwb3NzaWJseSBvdGhlcnMpXG5cdFx0XHRpZiAoIWRldmljZUlzSU9TIHx8IHRhcmdldFRhZ05hbWUgIT09ICdzZWxlY3QnKSB7XG5cdFx0XHRcdHRoaXMudGFyZ2V0RWxlbWVudCA9IG51bGw7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoZGV2aWNlSXNJT1MgJiYgIWRldmljZUlzSU9TNCkge1xuXG5cdFx0XHQvLyBEb24ndCBzZW5kIGEgc3ludGhldGljIGNsaWNrIGV2ZW50IGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBjb250YWluZWQgd2l0aGluIGEgcGFyZW50IGxheWVyIHRoYXQgd2FzIHNjcm9sbGVkXG5cdFx0XHQvLyBhbmQgdGhpcyB0YXAgaXMgYmVpbmcgdXNlZCB0byBzdG9wIHRoZSBzY3JvbGxpbmcgKHVzdWFsbHkgaW5pdGlhdGVkIGJ5IGEgZmxpbmcgLSBpc3N1ZSAjNDIpLlxuXHRcdFx0c2Nyb2xsUGFyZW50ID0gdGFyZ2V0RWxlbWVudC5mYXN0Q2xpY2tTY3JvbGxQYXJlbnQ7XG5cdFx0XHRpZiAoc2Nyb2xsUGFyZW50ICYmIHNjcm9sbFBhcmVudC5mYXN0Q2xpY2tMYXN0U2Nyb2xsVG9wICE9PSBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFByZXZlbnQgdGhlIGFjdHVhbCBjbGljayBmcm9tIGdvaW5nIHRob3VnaCAtIHVubGVzcyB0aGUgdGFyZ2V0IG5vZGUgaXMgbWFya2VkIGFzIHJlcXVpcmluZ1xuXHRcdC8vIHJlYWwgY2xpY2tzIG9yIGlmIGl0IGlzIGluIHRoZSB3aGl0ZWxpc3QgaW4gd2hpY2ggY2FzZSBvbmx5IG5vbi1wcm9ncmFtbWF0aWMgY2xpY2tzIGFyZSBwZXJtaXR0ZWQuXG5cdFx0aWYgKCF0aGlzLm5lZWRzQ2xpY2sodGFyZ2V0RWxlbWVudCkpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnNlbmRDbGljayh0YXJnZXRFbGVtZW50LCBldmVudCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIE9uIHRvdWNoIGNhbmNlbCwgc3RvcCB0cmFja2luZyB0aGUgY2xpY2suXG5cdCAqXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vblRvdWNoQ2FuY2VsID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy50cmFja2luZ0NsaWNrID0gZmFsc2U7XG5cdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgbW91c2UgZXZlbnRzIHdoaWNoIHNob3VsZCBiZSBwZXJtaXR0ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vbk1vdXNlID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuXHRcdC8vIElmIGEgdGFyZ2V0IGVsZW1lbnQgd2FzIG5ldmVyIHNldCAoYmVjYXVzZSBhIHRvdWNoIGV2ZW50IHdhcyBuZXZlciBmaXJlZCkgYWxsb3cgdGhlIGV2ZW50XG5cdFx0aWYgKCF0aGlzLnRhcmdldEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5mb3J3YXJkZWRUb3VjaEV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBQcm9ncmFtbWF0aWNhbGx5IGdlbmVyYXRlZCBldmVudHMgdGFyZ2V0aW5nIGEgc3BlY2lmaWMgZWxlbWVudCBzaG91bGQgYmUgcGVybWl0dGVkXG5cdFx0aWYgKCFldmVudC5jYW5jZWxhYmxlKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBEZXJpdmUgYW5kIGNoZWNrIHRoZSB0YXJnZXQgZWxlbWVudCB0byBzZWUgd2hldGhlciB0aGUgbW91c2UgZXZlbnQgbmVlZHMgdG8gYmUgcGVybWl0dGVkO1xuXHRcdC8vIHVubGVzcyBleHBsaWNpdGx5IGVuYWJsZWQsIHByZXZlbnQgbm9uLXRvdWNoIGNsaWNrIGV2ZW50cyBmcm9tIHRyaWdnZXJpbmcgYWN0aW9ucyxcblx0XHQvLyB0byBwcmV2ZW50IGdob3N0L2RvdWJsZWNsaWNrcy5cblx0XHRpZiAoIXRoaXMubmVlZHNDbGljayh0aGlzLnRhcmdldEVsZW1lbnQpIHx8IHRoaXMuY2FuY2VsTmV4dENsaWNrKSB7XG5cblx0XHRcdC8vIFByZXZlbnQgYW55IHVzZXItYWRkZWQgbGlzdGVuZXJzIGRlY2xhcmVkIG9uIEZhc3RDbGljayBlbGVtZW50IGZyb20gYmVpbmcgZmlyZWQuXG5cdFx0XHRpZiAoZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XG5cdFx0XHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBQYXJ0IG9mIHRoZSBoYWNrIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgRXZlbnQjc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIChlLmcuIEFuZHJvaWQgMilcblx0XHRcdFx0ZXZlbnQucHJvcGFnYXRpb25TdG9wcGVkID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2FuY2VsIHRoZSBldmVudFxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIG1vdXNlIGV2ZW50IGlzIHBlcm1pdHRlZCwgcmV0dXJuIHRydWUgZm9yIHRoZSBhY3Rpb24gdG8gZ28gdGhyb3VnaC5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBPbiBhY3R1YWwgY2xpY2tzLCBkZXRlcm1pbmUgd2hldGhlciB0aGlzIGlzIGEgdG91Y2gtZ2VuZXJhdGVkIGNsaWNrLCBhIGNsaWNrIGFjdGlvbiBvY2N1cnJpbmdcblx0ICogbmF0dXJhbGx5IGFmdGVyIGEgZGVsYXkgYWZ0ZXIgYSB0b3VjaCAod2hpY2ggbmVlZHMgdG8gYmUgY2FuY2VsbGVkIHRvIGF2b2lkIGR1cGxpY2F0aW9uKSwgb3Jcblx0ICogYW4gYWN0dWFsIGNsaWNrIHdoaWNoIHNob3VsZCBiZSBwZXJtaXR0ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgcGVybWl0dGVkO1xuXG5cdFx0Ly8gSXQncyBwb3NzaWJsZSBmb3IgYW5vdGhlciBGYXN0Q2xpY2stbGlrZSBsaWJyYXJ5IGRlbGl2ZXJlZCB3aXRoIHRoaXJkLXBhcnR5IGNvZGUgdG8gZmlyZSBhIGNsaWNrIGV2ZW50IGJlZm9yZSBGYXN0Q2xpY2sgZG9lcyAoaXNzdWUgIzQ0KS4gSW4gdGhhdCBjYXNlLCBzZXQgdGhlIGNsaWNrLXRyYWNraW5nIGZsYWcgYmFjayB0byBmYWxzZSBhbmQgcmV0dXJuIGVhcmx5LiBUaGlzIHdpbGwgY2F1c2Ugb25Ub3VjaEVuZCB0byByZXR1cm4gZWFybHkuXG5cdFx0aWYgKHRoaXMudHJhY2tpbmdDbGljaykge1xuXHRcdFx0dGhpcy50YXJnZXRFbGVtZW50ID0gbnVsbDtcblx0XHRcdHRoaXMudHJhY2tpbmdDbGljayA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gVmVyeSBvZGQgYmVoYXZpb3VyIG9uIGlPUyAoaXNzdWUgIzE4KTogaWYgYSBzdWJtaXQgZWxlbWVudCBpcyBwcmVzZW50IGluc2lkZSBhIGZvcm0gYW5kIHRoZSB1c2VyIGhpdHMgZW50ZXIgaW4gdGhlIGlPUyBzaW11bGF0b3Igb3IgY2xpY2tzIHRoZSBHbyBidXR0b24gb24gdGhlIHBvcC11cCBPUyBrZXlib2FyZCB0aGUgYSBraW5kIG9mICdmYWtlJyBjbGljayBldmVudCB3aWxsIGJlIHRyaWdnZXJlZCB3aXRoIHRoZSBzdWJtaXQtdHlwZSBpbnB1dCBlbGVtZW50IGFzIHRoZSB0YXJnZXQuXG5cdFx0aWYgKGV2ZW50LnRhcmdldC50eXBlID09PSAnc3VibWl0JyAmJiBldmVudC5kZXRhaWwgPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHBlcm1pdHRlZCA9IHRoaXMub25Nb3VzZShldmVudCk7XG5cblx0XHQvLyBPbmx5IHVuc2V0IHRhcmdldEVsZW1lbnQgaWYgdGhlIGNsaWNrIGlzIG5vdCBwZXJtaXR0ZWQuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCB0aGUgY2hlY2sgZm9yICF0YXJnZXRFbGVtZW50IGluIG9uTW91c2UgZmFpbHMgYW5kIHRoZSBicm93c2VyJ3MgY2xpY2sgZG9lc24ndCBnbyB0aHJvdWdoLlxuXHRcdGlmICghcGVybWl0dGVkKSB7XG5cdFx0XHR0aGlzLnRhcmdldEVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblxuXHRcdC8vIElmIGNsaWNrcyBhcmUgcGVybWl0dGVkLCByZXR1cm4gdHJ1ZSBmb3IgdGhlIGFjdGlvbiB0byBnbyB0aHJvdWdoLlxuXHRcdHJldHVybiBwZXJtaXR0ZWQ7XG5cdH07XG5cblxuXHQvKipcblx0ICogUmVtb3ZlIGFsbCBGYXN0Q2xpY2sncyBldmVudCBsaXN0ZW5lcnMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0RmFzdENsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGxheWVyID0gdGhpcy5sYXllcjtcblxuXHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2UsIHRydWUpO1xuXHRcdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZSwgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0bGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcblx0XHRsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCwgZmFsc2UpO1xuXHRcdGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblRvdWNoQ2FuY2VsLCBmYWxzZSk7XG5cdH07XG5cblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciBGYXN0Q2xpY2sgaXMgbmVlZGVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cblx0ICovXG5cdEZhc3RDbGljay5ub3ROZWVkZWQgPSBmdW5jdGlvbihsYXllcikge1xuXHRcdHZhciBtZXRhVmlld3BvcnQ7XG5cdFx0dmFyIGNocm9tZVZlcnNpb247XG5cdFx0dmFyIGJsYWNrYmVycnlWZXJzaW9uO1xuXHRcdHZhciBmaXJlZm94VmVyc2lvbjtcblxuXHRcdC8vIERldmljZXMgdGhhdCBkb24ndCBzdXBwb3J0IHRvdWNoIGRvbid0IG5lZWQgRmFzdENsaWNrXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gQ2hyb21lIHZlcnNpb24gLSB6ZXJvIGZvciBvdGhlciBicm93c2Vyc1xuXHRcdGNocm9tZVZlcnNpb24gPSArKC9DaHJvbWVcXC8oWzAtOV0rKS8uZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBbLDBdKVsxXTtcblxuXHRcdGlmIChjaHJvbWVWZXJzaW9uKSB7XG5cblx0XHRcdGlmIChkZXZpY2VJc0FuZHJvaWQpIHtcblx0XHRcdFx0bWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuXG5cdFx0XHRcdGlmIChtZXRhVmlld3BvcnQpIHtcblx0XHRcdFx0XHQvLyBDaHJvbWUgb24gQW5kcm9pZCB3aXRoIHVzZXItc2NhbGFibGU9XCJub1wiIGRvZXNuJ3QgbmVlZCBGYXN0Q2xpY2sgKGlzc3VlICM4OSlcblx0XHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0LmNvbnRlbnQuaW5kZXhPZigndXNlci1zY2FsYWJsZT1ubycpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIENocm9tZSAzMiBhbmQgYWJvdmUgd2l0aCB3aWR0aD1kZXZpY2Utd2lkdGggb3IgbGVzcyBkb24ndCBuZWVkIEZhc3RDbGlja1xuXHRcdFx0XHRcdGlmIChjaHJvbWVWZXJzaW9uID4gMzEgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoIDw9IHdpbmRvdy5vdXRlcldpZHRoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gQ2hyb21lIGRlc2t0b3AgZG9lc24ndCBuZWVkIEZhc3RDbGljayAoaXNzdWUgIzE1KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGRldmljZUlzQmxhY2tCZXJyeTEwKSB7XG5cdFx0XHRibGFja2JlcnJ5VmVyc2lvbiA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1ZlcnNpb25cXC8oWzAtOV0qKVxcLihbMC05XSopLyk7XG5cblx0XHRcdC8vIEJsYWNrQmVycnkgMTAuMysgZG9lcyBub3QgcmVxdWlyZSBGYXN0Y2xpY2sgbGlicmFyeS5cblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mdGxhYnMvZmFzdGNsaWNrL2lzc3Vlcy8yNTFcblx0XHRcdGlmIChibGFja2JlcnJ5VmVyc2lvblsxXSA+PSAxMCAmJiBibGFja2JlcnJ5VmVyc2lvblsyXSA+PSAzKSB7XG5cdFx0XHRcdG1ldGFWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcblxuXHRcdFx0XHRpZiAobWV0YVZpZXdwb3J0KSB7XG5cdFx0XHRcdFx0Ly8gdXNlci1zY2FsYWJsZT1ubyBlbGltaW5hdGVzIGNsaWNrIGRlbGF5LlxuXHRcdFx0XHRcdGlmIChtZXRhVmlld3BvcnQuY29udGVudC5pbmRleE9mKCd1c2VyLXNjYWxhYmxlPW5vJykgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gd2lkdGg9ZGV2aWNlLXdpZHRoIChvciBsZXNzIHRoYW4gZGV2aWNlLXdpZHRoKSBlbGltaW5hdGVzIGNsaWNrIGRlbGF5LlxuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPD0gd2luZG93Lm91dGVyV2lkdGgpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElFMTAgd2l0aCAtbXMtdG91Y2gtYWN0aW9uOiBub25lIG9yIG1hbmlwdWxhdGlvbiwgd2hpY2ggZGlzYWJsZXMgZG91YmxlLXRhcC10by16b29tIChpc3N1ZSAjOTcpXG5cdFx0aWYgKGxheWVyLnN0eWxlLm1zVG91Y2hBY3Rpb24gPT09ICdub25lJyB8fCBsYXllci5zdHlsZS50b3VjaEFjdGlvbiA9PT0gJ21hbmlwdWxhdGlvbicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIEZpcmVmb3ggdmVyc2lvbiAtIHplcm8gZm9yIG90aGVyIGJyb3dzZXJzXG5cdFx0ZmlyZWZveFZlcnNpb24gPSArKC9GaXJlZm94XFwvKFswLTldKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgWywwXSlbMV07XG5cblx0XHRpZiAoZmlyZWZveFZlcnNpb24gPj0gMjcpIHtcblx0XHRcdC8vIEZpcmVmb3ggMjcrIGRvZXMgbm90IGhhdmUgdGFwIGRlbGF5IGlmIHRoZSBjb250ZW50IGlzIG5vdCB6b29tYWJsZSAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTkyMjg5NlxuXG5cdFx0XHRtZXRhVmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG5cdFx0XHRpZiAobWV0YVZpZXdwb3J0ICYmIChtZXRhVmlld3BvcnQuY29udGVudC5pbmRleE9mKCd1c2VyLXNjYWxhYmxlPW5vJykgIT09IC0xIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCA8PSB3aW5kb3cub3V0ZXJXaWR0aCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSUUxMTogcHJlZml4ZWQgLW1zLXRvdWNoLWFjdGlvbiBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGFuZCBpdCdzIHJlY29tZW5kZWQgdG8gdXNlIG5vbi1wcmVmaXhlZCB2ZXJzaW9uXG5cdFx0Ly8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L3dpbmRvd3MvYXBwcy9IaDc2NzMxMy5hc3B4XG5cdFx0aWYgKGxheWVyLnN0eWxlLnRvdWNoQWN0aW9uID09PSAnbm9uZScgfHwgbGF5ZXIuc3R5bGUudG91Y2hBY3Rpb24gPT09ICdtYW5pcHVsYXRpb24nKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXHQvKipcblx0ICogRmFjdG9yeSBtZXRob2QgZm9yIGNyZWF0aW5nIGEgRmFzdENsaWNrIG9iamVjdFxuXHQgKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGxheWVyIFRoZSBsYXllciB0byBsaXN0ZW4gb25cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHNcblx0ICovXG5cdEZhc3RDbGljay5hdHRhY2ggPSBmdW5jdGlvbihsYXllciwgb3B0aW9ucykge1xuXHRcdHJldHVybiBuZXcgRmFzdENsaWNrKGxheWVyLCBvcHRpb25zKTtcblx0fTtcblxuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIEZhc3RDbGljaztcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gRmFzdENsaWNrLmF0dGFjaDtcblx0XHRtb2R1bGUuZXhwb3J0cy5GYXN0Q2xpY2sgPSBGYXN0Q2xpY2s7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LkZhc3RDbGljayA9IEZhc3RDbGljaztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Zhc3RjbGljay9saWIvZmFzdGNsaWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBFdmVudCBmcm9tIFwiLi9NYXRlcmlhbC9FdmVudFwiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL01hdGVyaWFsL0hlYWRlclwiXG5pbXBvcnQgTmF2IGZyb20gXCIuL01hdGVyaWFsL05hdlwiXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL01hdGVyaWFsL1NlYXJjaFwiXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9NYXRlcmlhbC9TaWRlYmFyXCJcbmltcG9ydCBTb3VyY2UgZnJvbSBcIi4vTWF0ZXJpYWwvU291cmNlXCJcbmltcG9ydCBUYWJzIGZyb20gXCIuL01hdGVyaWFsL1RhYnNcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBNb2R1bGVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBFdmVudCxcbiAgSGVhZGVyLFxuICBOYXYsXG4gIFNlYXJjaCxcbiAgU2lkZWJhcixcbiAgU291cmNlLFxuICBUYWJzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBMaXN0ZW5lciBmcm9tIFwiLi9FdmVudC9MaXN0ZW5lclwiXG5pbXBvcnQgTWF0Y2hNZWRpYSBmcm9tIFwiLi9FdmVudC9NYXRjaE1lZGlhXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTW9kdWxlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTGlzdGVuZXIsXG4gIE1hdGNoTWVkaWFcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IExpc3RlbmVyIGZyb20gXCIuL0xpc3RlbmVyXCIgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRjaE1lZGlhIHtcblxuICAvKipcbiAgICogTWVkaWEgcXVlcnkgbGlzdGVuZXJcbiAgICpcbiAgICogVGhpcyBjbGFzcyBsaXN0ZW5zIGZvciBzdGF0ZSBjaGFuZ2VzIG9mIG1lZGlhIHF1ZXJpZXMgYW5kIGF1dG9tYXRpY2FsbHlcbiAgICogc3dpdGNoZXMgdGhlIGdpdmVuIGxpc3RlbmVycyBvbiBvciBvZmYuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBoYW5kbGVyXyAtIE1lZGlhIHF1ZXJ5IGV2ZW50IGhhbmRsZXJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IC0gTWVkaWEgcXVlcnkgdG8gdGVzdCBmb3JcbiAgICogQHBhcmFtIHtMaXN0ZW5lcn0gbGlzdGVuZXIgLSBFdmVudCBsaXN0ZW5lclxuICAgKi9cbiAgY29uc3RydWN0b3IocXVlcnksIGxpc3RlbmVyKSB7XG4gICAgdGhpcy5oYW5kbGVyXyA9IG1xID0+IHtcbiAgICAgIGlmIChtcS5tYXRjaGVzKVxuICAgICAgICBsaXN0ZW5lci5saXN0ZW4oKVxuICAgICAgZWxzZVxuICAgICAgICBsaXN0ZW5lci51bmxpc3RlbigpXG4gICAgfVxuXG4gICAgLyogSW5pdGlhbGl6ZSBtZWRpYSBxdWVyeSBsaXN0ZW5lciAqL1xuICAgIGNvbnN0IG1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpXG4gICAgbWVkaWEuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVyXylcblxuICAgIC8qIEFsd2F5cyBjaGVjayBhdCBpbml0aWFsaXphdGlvbiAqL1xuICAgIHRoaXMuaGFuZGxlcl8obWVkaWEpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9FdmVudC9NYXRjaE1lZGlhLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgU2hhZG93IGZyb20gXCIuL0hlYWRlci9TaGFkb3dcIlxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL0hlYWRlci9UaXRsZVwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE1vZHVsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFNoYWRvdyxcbiAgVGl0bGVcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9IZWFkZXIuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYWRvdyB7XG5cbiAgLyoqXG4gICAqIFNob3cgb3IgaGlkZSBoZWFkZXIgc2hhZG93IGRlcGVuZGluZyBvbiBwYWdlIHktb2Zmc2V0XG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBDb250ZW50IGNvbnRhaW5lclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBoZWFkZXJfIC0gSGVhZGVyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHRfIC0gT2Zmc2V0IGhlaWdodCBvZiBwcmV2aW91cyBub2Rlc1xuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGFjdGl2ZV8gLSBIZWFkZXIgc2hhZG93IHN0YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGhlYWRlciAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwsIGhlYWRlcikge1xuICAgIGxldCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxuICAgICAgOiBlbFxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fFxuICAgICAgICAhKHJlZi5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgdGhpcy5lbF8gPSByZWYucGFyZW50Tm9kZVxuXG4gICAgLyogUmV0cmlldmUgaGVhZGVyICovXG4gICAgcmVmID0gKHR5cGVvZiBoZWFkZXIgPT09IFwic3RyaW5nXCIpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyKVxuICAgICAgOiBoZWFkZXJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmhlYWRlcl8gPSByZWZcblxuICAgIC8qIEluaXRpYWxpemUgaGVpZ2h0IGFuZCBzdGF0ZSAqL1xuICAgIHRoaXMuaGVpZ2h0XyA9IDBcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0b3RhbCBoZWlnaHQgb2YgcHJldmlvdXMgbm9kZXNcbiAgICovXG4gIHNldHVwKCkge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5lbF9cbiAgICB3aGlsZSAoKGN1cnJlbnQgPSBjdXJyZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcpKSB7XG4gICAgICBpZiAoIShjdXJyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgIHRoaXMuaGVpZ2h0XyArPSBjdXJyZW50Lm9mZnNldEhlaWdodFxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNoYWRvdyBzdGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIEV2ZW50XG4gICAqL1xuICB1cGRhdGUoZXYpIHtcbiAgICBpZiAoZXYgJiYgKGV2LnR5cGUgPT09IFwicmVzaXplXCIgfHwgZXYudHlwZSA9PT0gXCJvcmllbnRhdGlvbmNoYW5nZVwiKSkge1xuICAgICAgdGhpcy5oZWlnaHRfID0gMFxuICAgICAgdGhpcy5zZXR1cCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IHdpbmRvdy5wYWdlWU9mZnNldCA+PSB0aGlzLmhlaWdodF9cbiAgICAgIGlmIChhY3RpdmUgIT09IHRoaXMuYWN0aXZlXylcbiAgICAgICAgdGhpcy5oZWFkZXJfLmRhdGFzZXQubWRTdGF0ZSA9ICh0aGlzLmFjdGl2ZV8gPSBhY3RpdmUpID8gXCJzaGFkb3dcIiA6IFwiXCJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgc2hhZG93IHN0YXRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLmhlYWRlcl8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxuICAgIHRoaXMuaGVpZ2h0XyA9IDBcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvSGVhZGVyL1NoYWRvdy5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUge1xuXG4gIC8qKlxuICAgKiBTd2FwIGhlYWRlciB0aXRsZSB0b3BpY3Mgd2hlbiBoZWFkZXIgaXMgc2Nyb2xsZWQgcGFzdFxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gRWxlbWVudFxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBoZWFkZXJfIC0gSGVhZGVyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWN0aXZlXyAtIFRpdGxlIHN0YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MSGVhZGluZ0VsZW1lbnQpfSBoZWFkZXIgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsLCBoZWFkZXIpIHtcbiAgICBsZXQgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICAgIDogZWxcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmVsXyA9IHJlZlxuXG4gICAgLyogUmV0cmlldmUgaGVhZGVyICovXG4gICAgcmVmID0gKHR5cGVvZiBoZWFkZXIgPT09IFwic3RyaW5nXCIpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGVhZGVyKVxuICAgICAgOiBoZWFkZXJcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgdGhpcy5oZWFkZXJfID0gcmVmXG5cbiAgICAvKiBJbml0aWFsaXplIHN0YXRlICovXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCB0aXRsZSBzdGF0ZVxuICAgKi9cbiAgc2V0dXAoKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLmVsXy5jaGlsZHJlbiwgbm9kZSA9PiB7ICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHVzZSBjaGlsZE5vZGVzIGhlcmUgZm9yIElFP1xuICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuZWxfLm9mZnNldFdpZHRoIC0gMjB9cHhgXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGl0bGUgc3RhdGVcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXYgLSBFdmVudFxuICAgKi9cbiAgdXBkYXRlKGV2KSB7XG4gICAgY29uc3QgYWN0aXZlID0gd2luZG93LnBhZ2VZT2Zmc2V0ID49IHRoaXMuaGVhZGVyXy5vZmZzZXRUb3BcbiAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmFjdGl2ZV8pXG4gICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSAodGhpcy5hY3RpdmVfID0gYWN0aXZlKSA/IFwiYWN0aXZlXCIgOiBcIlwiXG5cbiAgICAvKiBIYWNrOiBpbmR1Y2UgZWxsaXBzaXMgb24gdG9waWNzICovXG4gICAgaWYgKGV2LnR5cGUgPT09IFwicmVzaXplXCIgfHwgZXYudHlwZSA9PT0gXCJvcmllbnRhdGlvbmNoYW5nZVwiKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuZWxfLmNoaWxkcmVuLCBub2RlID0+IHtcbiAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuZWxfLm9mZnNldFdpZHRoIC0gMjB9cHhgXG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRpdGxlIHN0YXRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcIlwiXG4gICAgdGhpcy5lbF8uc3R5bGUud2lkdGggPSBcIlwiXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2VcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL0hlYWRlci9UaXRsZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IEJsdXIgZnJvbSBcIi4vTmF2L0JsdXJcIlxuaW1wb3J0IENvbGxhcHNlIGZyb20gXCIuL05hdi9Db2xsYXBzZVwiXG5pbXBvcnQgU2Nyb2xsaW5nIGZyb20gXCIuL05hdi9TY3JvbGxpbmdcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBNb2R1bGVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBCbHVyLFxuICBDb2xsYXBzZSxcbiAgU2Nyb2xsaW5nXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvTmF2LmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbHVyIHtcblxuICAvKipcbiAgICogQmx1ciBsaW5rcyB3aXRoaW4gdGhlIHRhYmxlIG9mIGNvbnRlbnRzIGFib3ZlIGN1cnJlbnQgcGFnZSB5LW9mZnNldFxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHByb3BlcnR5IHtOb2RlTGlzdDxIVE1MRWxlbWVudD59IGVsc18gLSBUYWJsZSBvZiBjb250ZW50cyBsaW5rc1xuICAgKiBAcHJvcGVydHkge0FycmF5PEhUTUxFbGVtZW50Pn0gYW5jaG9yc18gLSBSZWZlcmVuY2VkIGFuY2hvciBub2Rlc1xuICAgKiBAcHJvcGVydHkge251bWJlcn0gaW5kZXhfIC0gQ3VycmVudCBsaW5rIGluZGV4XG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXRfIC0gQ3VycmVudCBwYWdlIHktb2Zmc2V0XG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGlyXyAtIFNjcm9sbCBkaXJlY3Rpb24gY2hhbmdlXG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xOb2RlTGlzdDxIVE1MRWxlbWVudD4pfSBlbHMgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbHMpIHtcbiAgICB0aGlzLmVsc18gPSAodHlwZW9mIGVscyA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbHMpXG4gICAgICA6IGVsc1xuXG4gICAgLyogSW5pdGlhbGl6ZSBpbmRleCBhbmQgcGFnZSB5LW9mZnNldCAqL1xuICAgIHRoaXMuaW5kZXhfID0gMFxuICAgIHRoaXMub2Zmc2V0XyA9IHdpbmRvdy5wYWdlWU9mZnNldFxuXG4gICAgLyogTmVjZXNzYXJ5IHN0YXRlIHRvIGNvcnJlY3RseSByZXNldCB0aGUgaW5kZXggKi9cbiAgICB0aGlzLmRpcl8gPSBmYWxzZVxuXG4gICAgLyogSW5kZXggYW5jaG9yIG5vZGUgb2Zmc2V0cyBmb3IgZmFzdCBsb29rdXAgKi9cbiAgICB0aGlzLmFuY2hvcnNfID0gW10ucmVkdWNlLmNhbGwodGhpcy5lbHNfLCAoYW5jaG9ycywgZWwpID0+IHtcbiAgICAgIHJldHVybiBhbmNob3JzLmNvbmNhdChcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuaGFzaC5zdWJzdHJpbmcoMSkpIHx8IFtdKVxuICAgIH0sIFtdKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYmx1ciBzdGF0ZXNcbiAgICovXG4gIHNldHVwKCkge1xuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYmx1ciBzdGF0ZXNcbiAgICpcbiAgICogRGVkdWN0IHRoZSBzdGF0aWMgb2Zmc2V0IG9mIHRoZSBoZWFkZXIgKDU2cHgpIGFuZCBzaWRlYmFyIG9mZnNldCAoMjRweCksXG4gICAqIHNlZSBfcGVybWFsaW5rcy5zY3NzIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IG9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgIGNvbnN0IGRpciA9IHRoaXMub2Zmc2V0XyAtIG9mZnNldCA8IDBcblxuICAgIC8qIEhhY2s6IHJlc2V0IGluZGV4IGlmIGRpcmVjdGlvbiBjaGFuZ2VkIHRvIGNhdGNoIHZlcnkgZmFzdCBzY3JvbGxpbmcsXG4gICAgICAgYmVjYXVzZSBvdGhlcndpc2Ugd2Ugd291bGQgaGF2ZSB0byByZWdpc3RlciBhIHRpbWVyIGFuZCB0aGF0IHN1Y2tzICovXG4gICAgaWYgKHRoaXMuZGlyXyAhPT0gZGlyKVxuICAgICAgdGhpcy5pbmRleF8gPSBkaXJcbiAgICAgICAgPyB0aGlzLmluZGV4XyA9IDBcbiAgICAgICAgOiB0aGlzLmluZGV4XyA9IHRoaXMuZWxzXy5sZW5ndGggLSAxXG5cbiAgICAvKiBFeGl0IHdoZW4gdGhlcmUgYXJlIG5vIGFuY2hvcnMgKi9cbiAgICBpZiAodGhpcy5hbmNob3JzXy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm5cblxuICAgIC8qIFNjcm9sbCBkaXJlY3Rpb24gaXMgZG93biAqL1xuICAgIGlmICh0aGlzLm9mZnNldF8gPD0gb2Zmc2V0KSB7XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5pbmRleF8gKyAxOyBpIDwgdGhpcy5lbHNfLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmFuY2hvcnNfW2ldLm9mZnNldFRvcCAtICg1NiArIDI0KSA8PSBvZmZzZXQpIHtcbiAgICAgICAgICBpZiAoaSA+IDApXG4gICAgICAgICAgICB0aGlzLmVsc19baSAtIDFdLmRhdGFzZXQubWRTdGF0ZSA9IFwiYmx1clwiXG4gICAgICAgICAgdGhpcy5pbmRleF8gPSBpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgLyogU2Nyb2xsIGRpcmVjdGlvbiBpcyB1cCAqL1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5pbmRleF87IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmICh0aGlzLmFuY2hvcnNfW2ldLm9mZnNldFRvcCAtICg1NiArIDI0KSA+IG9mZnNldCkge1xuICAgICAgICAgIGlmIChpID4gMClcbiAgICAgICAgICAgIHRoaXMuZWxzX1tpIC0gMV0uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW5kZXhfID0gaVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBSZW1lbWJlciBjdXJyZW50IG9mZnNldCBhbmQgZGlyZWN0aW9uIGZvciBuZXh0IGl0ZXJhdGlvbiAqL1xuICAgIHRoaXMub2Zmc2V0XyA9IG9mZnNldFxuICAgIHRoaXMuZGlyXyA9IGRpclxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGJsdXIgc3RhdGVzXG4gICAqL1xuICByZXNldCgpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuZWxzXywgZWwgPT4ge1xuICAgICAgZWwuZGF0YXNldC5tZFN0YXRlID0gXCJcIlxuICAgIH0pXG5cbiAgICAvKiBSZXNldCBpbmRleCBhbmQgcGFnZSB5LW9mZnNldCAqL1xuICAgIHRoaXMuaW5kZXhfICA9IDBcbiAgICB0aGlzLm9mZnNldF8gPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9CbHVyLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsYXBzZSB7XG5cbiAgLyoqXG4gICAqIEV4cGFuZCBvciBjb2xsYXBzZSBuYXZpZ2F0aW9uIG9uIHRvZ2dsZVxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWxfIC0gTmF2aWdhdGlvbiBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXG4gICAgICA6IGVsXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgdGhpcy5lbF8gPSByZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIG92ZXJmbG93IGFuZCBkaXNwbGF5IGZvciBhY2Nlc3NpYmlsaXR5XG4gICAqL1xuICBzZXR1cCgpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5lbF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG5cbiAgICAvKiBIaWRkZW4gbGlua3Mgc2hvdWxkIG5vdCBiZSBmb2N1c2FibGUsIHNvIGhpZGUgdGhlbSB3aGVuIHRoZSBuYXZpZ2F0aW9uXG4gICAgICAgaXMgY29sbGFwc2VkIGFuZCBzZXQgb3ZlcmZsb3cgc28gdGhlIG91dGxpbmUgaXMgbm90IGN1dCBvZmYgKi9cbiAgICB0aGlzLmVsXy5zdHlsZS5kaXNwbGF5ICA9IGN1cnJlbnQgPyBcImJsb2NrXCIgICA6IFwibm9uZVwiXG4gICAgdGhpcy5lbF8uc3R5bGUub3ZlcmZsb3cgPSBjdXJyZW50ID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0ZSBleHBhbmQgYW5kIGNvbGxhcHNlIHNtb290aGx5XG4gICAqXG4gICAqIEludGVybmV0IEV4cGxvcmVyIDExIGlzIHZlcnkgc2xvdyBhdCByZWNvZ25pemluZyBjaGFuZ2VzIG9uIHRoZSBkYXRhc2V0XG4gICAqIHdoaWNoIHJlc3VsdHMgaW4gdGhlIG1lbnUgbm90IGV4cGFuZGluZyBvciBjb2xsYXBzaW5nIHByb3Blcmx5LiBUSGVyZWZvcmUsXG4gICAqIGZvciByZWFzb25zIG9mIGNvbXBhdGliaWxpdHksIHRoZSBhdHRyaWJ1dGUgYWNjZXNzb3JzIGFyZSB1c2VkLlxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmVsXy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcblxuICAgIC8qIFJlc2V0IG92ZXJmbG93IHRvIENTUyBkZWZhdWx0cyAqL1xuICAgIHRoaXMuZWxfLnN0eWxlLmRpc3BsYXkgID0gXCJibG9ja1wiXG4gICAgdGhpcy5lbF8uc3R5bGUub3ZlcmZsb3cgPSBcIlwiXG5cbiAgICAvKiBFeHBhbmRlZCwgc28gY29sbGFwc2UgKi9cbiAgICBpZiAoY3VycmVudCkge1xuICAgICAgdGhpcy5lbF8uc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y3VycmVudH1weGBcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWxfLnNldEF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIiwgXCJhbmltYXRlXCIpXG4gICAgICAgIHRoaXMuZWxfLnN0eWxlLm1heEhlaWdodCA9IFwiMHB4XCJcbiAgICAgIH0pXG5cbiAgICAvKiBDb2xsYXBzZWQsIHNvIGV4cGFuZCAqL1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIsIFwiZXhwYW5kXCIpXG4gICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIlwiXG5cbiAgICAgIC8qIFJlYWQgaGVpZ2h0IGFuZCB1bnNldCBwc2V1ZG8tdG9nZ2xlZCBzdGF0ZSAqL1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICB0aGlzLmVsXy5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIpXG5cbiAgICAgIC8qIFNldCBpbml0aWFsIHN0YXRlIGFuZCBhbmltYXRlICovXG4gICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIjBweFwiXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsXy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIsIFwiYW5pbWF0ZVwiKVxuICAgICAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBgJHtoZWlnaHR9cHhgXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qIFJlbW92ZSBzdGF0ZSBvbiBlbmQgb2YgdHJhbnNpdGlvbiAqL1xuICAgIGNvbnN0IGVuZCA9IGV2ID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldFxuICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcblxuICAgICAgLyogUmVzZXQgaGVpZ2h0IGFuZCBzdGF0ZSAqL1xuICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIilcbiAgICAgIHRhcmdldC5zdHlsZS5tYXhIZWlnaHQgPSBcIlwiXG5cbiAgICAgIC8qIEhpZGRlbiBsaW5rcyBzaG91bGQgbm90IGJlIGZvY3VzYWJsZSwgc28gaGlkZSB0aGVtIHdoZW4gdGhlIG5hdmlnYXRpb25cbiAgICAgICAgIGlzIGNvbGxhcHNlZCBhbmQgc2V0IG92ZXJmbG93IHNvIHRoZSBvdXRsaW5lIGlzIG5vdCBjdXQgb2ZmICovXG4gICAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSAgPSBjdXJyZW50ID8gXCJub25lXCIgICA6IFwiYmxvY2tcIlxuICAgICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gY3VycmVudCA/IFwiaGlkZGVuXCIgOiBcInZpc2libGVcIlxuXG4gICAgICAvKiBPbmx5IGZpcmUgb25jZSwgc28gZGlyZWN0bHkgcmVtb3ZlIGV2ZW50IGxpc3RlbmVyICovXG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kKVxuICAgIH1cbiAgICB0aGlzLmVsXy5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQsIGZhbHNlKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGhlaWdodCBhbmQgcHNldWRvLXRvZ2dsZWQgc3RhdGVcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcbiAgICB0aGlzLmVsXy5zdHlsZS5tYXhIZWlnaHQgPSBcIlwiXG4gICAgdGhpcy5lbF8uc3R5bGUuZGlzcGxheSAgID0gXCJcIlxuICAgIHRoaXMuZWxfLnN0eWxlLm92ZXJmbG93ICA9IFwiXCJcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL05hdi9Db2xsYXBzZS5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsaW5nIHtcblxuICAvKipcbiAgICogU2V0IG92ZXJmbG93IHNjcm9sbGluZyBvbiB0aGUgY3VycmVudCBhY3RpdmUgcGFuZSAoZm9yIGlPUylcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIFByaW1hcnkgbmF2aWdhdGlvblxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwpIHtcbiAgICBjb25zdCByZWYgPSAodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxuICAgICAgOiBlbFxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuZWxfID0gcmVmXG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgcGFuZXNcbiAgICovXG4gIHNldHVwKCkge1xuXG4gICAgLyogSW5pdGlhbGx5IHNldCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gbWFpbiBwYW5lICovXG4gICAgY29uc3QgbWFpbiA9IHRoaXMuZWxfLmNoaWxkcmVuW3RoaXMuZWxfLmNoaWxkcmVuLmxlbmd0aCAtIDFdXG4gICAgbWFpbi5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwidG91Y2hcIlxuXG4gICAgLyogRmluZCBhbGwgdG9nZ2xlcyBhbmQgY2hlY2sgd2hpY2ggb25lIGlzIGFjdGl2ZSAqL1xuICAgIGNvbnN0IHRvZ2dsZXMgPSB0aGlzLmVsXy5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbWQtdG9nZ2xlXVwiKVxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodG9nZ2xlcywgdG9nZ2xlID0+IHtcbiAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xuXG4gICAgICAgIC8qIEZpbmQgY29ycmVzcG9uZGluZyBuYXZpZ2F0aW9uYWwgcGFuZSAqL1xuICAgICAgICBsZXQgcGFuZSA9IHRvZ2dsZS5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgaWYgKCEocGFuZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgICAgd2hpbGUgKHBhbmUudGFnTmFtZSAhPT0gXCJOQVZcIiAmJiBwYW5lLm5leHRFbGVtZW50U2libGluZylcbiAgICAgICAgICBwYW5lID0gcGFuZS5uZXh0RWxlbWVudFNpYmxpbmdcblxuICAgICAgICAvKiBDaGVjayByZWZlcmVuY2VzICovXG4gICAgICAgIGlmICghKHRvZ2dsZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XG4gICAgICAgICAgICAhKHRvZ2dsZS5wYXJlbnROb2RlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG5cbiAgICAgICAgLyogRmluZCBjdXJyZW50IGFuZCBwYXJlbnQgbGlzdCBlbGVtZW50cyAqL1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0b2dnbGUucGFyZW50Tm9kZS5wYXJlbnROb2RlXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHBhbmUuY2hpbGRyZW5bcGFuZS5jaGlsZHJlbi5sZW5ndGggLSAxXVxuXG4gICAgICAgIC8qIEFsd2F5cyByZXNldCBhbGwgbGlzdHMgd2hlbiB0cmFuc2l0aW9uaW5nICovXG4gICAgICAgIHBhcmVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYWN0aXZlIHBhbmVzXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gQ2hhbmdlIGV2ZW50XG4gICAqL1xuICB1cGRhdGUoZXYpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXRcbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcblxuICAgIC8qIEZpbmQgY29ycmVzcG9uZGluZyBuYXZpZ2F0aW9uYWwgcGFuZSAqL1xuICAgIGxldCBwYW5lID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZ1xuICAgIGlmICghKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB3aGlsZSAocGFuZS50YWdOYW1lICE9PSBcIk5BVlwiICYmIHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nKVxuICAgICAgcGFuZSA9IHBhbmUubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICAvKiBDaGVjayByZWZlcmVuY2VzICovXG4gICAgaWYgKCEodGFyZ2V0LnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcbiAgICAgICAgISh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG5cbiAgICAvKiBGaW5kIHBhcmVudCBhbmQgYWN0aXZlIHBhbmVzICovXG4gICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZVxuICAgIGNvbnN0IGFjdGl2ZSA9IHBhbmUuY2hpbGRyZW5bcGFuZS5jaGlsZHJlbi5sZW5ndGggLSAxXVxuXG4gICAgLyogQWx3YXlzIHJlc2V0IGFsbCBsaXN0cyB3aGVuIHRyYW5zaXRpb25pbmcgKi9cbiAgICBwYXJlbnQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBcIlwiXG4gICAgYWN0aXZlLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxuXG4gICAgLyogU2V0IG92ZXJmbG93IHNjcm9sbGluZyBvbiBwYXJlbnQgcGFuZSAqL1xuICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHBhbmUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIHBhcmVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwidG91Y2hcIlxuICAgICAgICAgIHBhbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwYW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZCwgZmFsc2UpXG4gICAgfVxuXG4gICAgLyogU2V0IG92ZXJmbG93IHNjcm9sbGluZyBvbiBhY3RpdmUgcGFuZSAqL1xuICAgIGlmICh0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgY29uc3QgZW5kID0gKCkgPT4ge1xuICAgICAgICBpZiAocGFuZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgYWN0aXZlLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJ0b3VjaFwiXG4gICAgICAgICAgcGFuZS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHBhbmUuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgcGFuZXNcbiAgICovXG4gIHJlc2V0KCkge1xuXG4gICAgLyogUmVzZXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIG9uIG1haW4gcGFuZSAqL1xuICAgIHRoaXMuZWxfLmNoaWxkcmVuWzFdLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxuXG4gICAgLyogRmluZCBhbGwgdG9nZ2xlcyBhbmQgY2hlY2sgd2hpY2ggb25lIGlzIGFjdGl2ZSAqL1xuICAgIGNvbnN0IHRvZ2dsZXMgPSB0aGlzLmVsXy5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbWQtdG9nZ2xlXVwiKVxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodG9nZ2xlcywgdG9nZ2xlID0+IHtcbiAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xuXG4gICAgICAgIC8qIEZpbmQgY29ycmVzcG9uZGluZyBuYXZpZ2F0aW9uYWwgcGFuZSAqL1xuICAgICAgICBsZXQgcGFuZSA9IHRvZ2dsZS5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgaWYgKCEocGFuZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgICAgd2hpbGUgKHBhbmUudGFnTmFtZSAhPT0gXCJOQVZcIiAmJiBwYW5lLm5leHRFbGVtZW50U2libGluZylcbiAgICAgICAgICBwYW5lID0gcGFuZS5uZXh0RWxlbWVudFNpYmxpbmdcblxuICAgICAgICAvKiBDaGVjayByZWZlcmVuY2VzICovXG4gICAgICAgIGlmICghKHRvZ2dsZS5wYXJlbnROb2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XG4gICAgICAgICAgICAhKHRvZ2dsZS5wYXJlbnROb2RlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG5cbiAgICAgICAgLyogRmluZCBwYXJlbnQgYW5kIGFjdGl2ZSBwYW5lcyAqL1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0b2dnbGUucGFyZW50Tm9kZS5wYXJlbnROb2RlXG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IHBhbmUuY2hpbGRyZW5bcGFuZS5jaGlsZHJlbi5sZW5ndGggLSAxXVxuXG4gICAgICAgIC8qIEFsd2F5cyByZXNldCBhbGwgbGlzdHMgd2hlbiB0cmFuc2l0aW9uaW5nICovXG4gICAgICAgIHBhcmVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IFwiXCJcbiAgICAgICAgYWN0aXZlLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gXCJcIlxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9OYXYvU2Nyb2xsaW5nLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgTG9jayBmcm9tIFwiLi9TZWFyY2gvTG9ja1wiXG5pbXBvcnQgUmVzdWx0IGZyb20gXCIuL1NlYXJjaC9SZXN1bHRcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBNb2R1bGVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBMb2NrLFxuICBSZXN1bHRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TZWFyY2guanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2sge1xuXG4gIC8qKlxuICAgKiBMb2NrIGJvZHkgZm9yIGZ1bGwtc2NyZWVuIHNlYXJjaCBtb2RhbFxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHByb3BlcnR5IHtIVE1MSW5wdXRFbGVtZW50fSBlbF8gLSBMb2NrIHRvZ2dsZVxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBsb2NrXyAtIEVsZW1lbnQgdG8gbG9jayAoZG9jdW1lbnQgYm9keSlcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldF8gLSBDdXJyZW50IHBhZ2UgeS1vZmZzZXRcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICAgIDogZWxcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuZWxfID0gcmVmXG5cbiAgICAvKiBSZXRyaWV2ZSBlbGVtZW50IHRvIGxvY2sgKD0gYm9keSkgKi9cbiAgICBpZiAoIWRvY3VtZW50LmJvZHkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmxvY2tfID0gZG9jdW1lbnQuYm9keVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIGxvY2tlZCBzdGF0ZVxuICAgKi9cbiAgc2V0dXAoKSB7XG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBsb2NrZWQgc3RhdGVcbiAgICovXG4gIHVwZGF0ZSgpIHtcblxuICAgIC8qIEVudGVyaW5nIHNlYXJjaCBtb2RlICovXG4gICAgaWYgKHRoaXMuZWxfLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMub2Zmc2V0XyA9IHdpbmRvdy5wYWdlWU9mZnNldFxuXG4gICAgICAvKiBTY3JvbGwgdG8gdG9wIGFmdGVyIHRyYW5zaXRpb24sIHRvIG9taXQgZmxpY2tlcmluZyAqL1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuXG4gICAgICAgIC8qIExvY2sgYm9keSBhZnRlciBmaW5pc2hpbmcgdHJhbnNpdGlvbiAqL1xuICAgICAgICBpZiAodGhpcy5lbF8uY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMubG9ja18uZGF0YXNldC5tZFN0YXRlID0gXCJsb2NrXCJcbiAgICAgICAgfVxuICAgICAgfSwgNDAwKVxuXG4gICAgLyogRXhpdGluZyBzZWFyY2ggbW9kZSAqL1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvY2tfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcblxuICAgICAgLyogU2Nyb2xsIHRvIGZvcm1lciBwb3NpdGlvbiwgYnV0IHdhaXQgZm9yIDEwMG1zIHRvIHByZXZlbnQgZmxhc2hlcyBvblxuICAgICAgICAgaU9TLiBBIHNob3J0IHRpbWVvdXQgc2VlbXMgdG8gZG8gdGhlIHRyaWNrICovXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9mZnNldF8gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHRoaXMub2Zmc2V0XylcbiAgICAgIH0sIDEwMClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgbG9ja2VkIHN0YXRlIGFuZCBwYWdlIHktb2Zmc2V0XG4gICAqL1xuICByZXNldCgpIHtcbiAgICBpZiAodGhpcy5sb2NrXy5kYXRhc2V0Lm1kU3RhdGUgPT09IFwibG9ja1wiKVxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHRoaXMub2Zmc2V0XylcbiAgICB0aGlzLmxvY2tfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9Mb2NrLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgZXNjYXBlIGZyb20gXCJlc2NhcGUtc3RyaW5nLXJlZ2V4cFwiXG5pbXBvcnQgbHVuciBmcm9tIFwiZXhwb3NlLWxvYWRlcj9sdW5yIWx1bnJcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBUcnVuY2F0ZSBhIHN0cmluZyBhZnRlciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIGNoYXJhY3RlclxuICpcbiAqIFRoaXMgaXMgbm90IGEgcmVhc29uYWJsZSBhcHByb2FjaCwgc2luY2UgdGhlIHN1bW1hcmllcyBraW5kIG9mIHN1Y2suIEl0XG4gKiB3b3VsZCBiZSBiZXR0ZXIgdG8gY3JlYXRlIHNvbWV0aGluZyBtb3JlIGludGVsbGlnZW50LCBoaWdobGlnaHRpbmcgdGhlXG4gKiBzZWFyY2ggb2NjdXJyZW5jZXMgYW5kIG1ha2luZyBhIGJldHRlciBzdW1tYXJ5IG91dCBvZiBpdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gU3RyaW5nIHRvIGJlIHRydW5jYXRlZFxuICogQHBhcmFtIHtudW1iZXJ9IG4gLSBOdW1iZXIgb2YgY2hhcmFjdGVyc1xuICogQHJldHVybiB7c3RyaW5nfSBUcnVuY2F0ZWQgc3RyaW5nXG4gKi9cbmNvbnN0IHRydW5jYXRlID0gKHN0cmluZywgbikgPT4ge1xuICBsZXQgaSA9IG5cbiAgaWYgKHN0cmluZy5sZW5ndGggPiBpKSB7XG4gICAgd2hpbGUgKHN0cmluZ1tpXSAhPT0gXCIgXCIgJiYgLS1pID4gMCk7XG4gICAgcmV0dXJuIGAke3N0cmluZy5zdWJzdHJpbmcoMCwgaSl9Li4uYFxuICB9XG4gIHJldHVybiBzdHJpbmdcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIG1ldGEgdGFnIHZhbHVlIGZvciB0aGUgZ2l2ZW4ga2V5XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIE1ldGEgbmFtZVxuICpcbiAqIEByZXR1cm4ge3N0cmluZ30gTWV0YSBjb250ZW50IHZhbHVlXG4gKi9cbmNvbnN0IHRyYW5zbGF0ZSA9IGtleSA9PiB7XG4gIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShgbGFuZzoke2tleX1gKVswXVxuICBpZiAoIShtZXRhIGluc3RhbmNlb2YgSFRNTE1ldGFFbGVtZW50KSlcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgcmV0dXJuIG1ldGEuY29udGVudFxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQge1xuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHNlYXJjaCBhbmQgdXBkYXRlIHJlc3VsdHMgb24ga2V5Ym9hcmQgZXZlbnRzXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBTZWFyY2ggcmVzdWx0IGNvbnRhaW5lclxuICAgKiBAcHJvcGVydHkgeyhBcnJheTxPYmplY3Q+fEZ1bmN0aW9uKX0gZGF0YV8gLSBSYXcgZG9jdW1lbnQgZGF0YVxuICAgKiBAcHJvcGVydHkge09iamVjdH0gZG9jc18gLSBJbmRleGVkIGRvY3VtZW50c1xuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBtZXRhXyAtIFNlYXJjaCBtZXRhIGluZm9ybWF0aW9uXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGxpc3RfIC0gU2VhcmNoIHJlc3VsdCBsaXN0XG4gICAqIEBwcm9wZXJ0eSB7QXJyYXk8c3RyaW5nPn0gbGFuZ18gLSBTZWFyY2ggbGFuZ3VhZ2VzXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBtZXNzYWdlXyAtIFNlYXJjaCByZXN1bHQgbWVzc2FnZXNcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGluZGV4XyAtIFNlYXJjaCBpbmRleFxuICAgKiBAcHJvcGVydHkge0FycmF5PEZ1bmN0aW9uPn0gc3RhY2tfIC0gU2VhcmNoIHJlc3VsdCBzdGFja1xuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdmFsdWVfIC0gTGFzdCBpbnB1dCB2YWx1ZVxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8SFRNTEVsZW1lbnQpfSBlbCAtIFNlbGVjdG9yIG9yIEhUTUwgZWxlbWVudFxuICAgKiBAcGFyYW0geyhBcnJheTxPYmplY3Q+fEZ1bmN0aW9uKX0gZGF0YSAtIEZ1bmN0aW9uIHByb3ZpZGluZyBkYXRhIG9yIGFycmF5XG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCwgZGF0YSkge1xuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXG4gICAgICA6IGVsXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgdGhpcy5lbF8gPSByZWZcblxuICAgIC8qIFJldHJpZXZlIG1ldGFkYXRhIGFuZCBsaXN0IGVsZW1lbnQgKi9cbiAgICBjb25zdCBbbWV0YSwgbGlzdF0gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmVsXy5jaGlsZHJlbilcblxuICAgIC8qIFNldCBkYXRhLCBtZXRhZGF0YSBhbmQgbGlzdCBlbGVtZW50cyAqL1xuICAgIHRoaXMuZGF0YV8gPSBkYXRhXG4gICAgdGhpcy5tZXRhXyA9IG1ldGFcbiAgICB0aGlzLmxpc3RfID0gbGlzdFxuXG4gICAgLyogTG9hZCBtZXNzYWdlcyBmb3IgbWV0YWRhdGEgZGlzcGxheSAqL1xuICAgIHRoaXMubWVzc2FnZV8gPSB7XG4gICAgICBwbGFjZWhvbGRlcjogdGhpcy5tZXRhXy50ZXh0Q29udGVudCxcbiAgICAgIG5vbmU6IHRyYW5zbGF0ZShcInNlYXJjaC5yZXN1bHQubm9uZVwiKSxcbiAgICAgIG9uZTogdHJhbnNsYXRlKFwic2VhcmNoLnJlc3VsdC5vbmVcIiksXG4gICAgICBvdGhlcjogdHJhbnNsYXRlKFwic2VhcmNoLnJlc3VsdC5vdGhlclwiKVxuICAgIH1cblxuICAgIC8qIE92ZXJyaWRlIHRva2VuaXplciBzZXBhcmF0b3IsIGlmIGdpdmVuICovXG4gICAgY29uc3QgdG9rZW5pemVyID0gdHJhbnNsYXRlKFwic2VhcmNoLnRva2VuaXplclwiKVxuICAgIGlmICh0b2tlbml6ZXIubGVuZ3RoKVxuICAgICAgbHVuci50b2tlbml6ZXIuc2VwYXJhdG9yID0gdG9rZW5pemVyXG5cbiAgICAvKiBMb2FkIHNlYXJjaCBsYW5ndWFnZXMgKi9cbiAgICB0aGlzLmxhbmdfID0gdHJhbnNsYXRlKFwic2VhcmNoLmxhbmd1YWdlXCIpLnNwbGl0KFwiLFwiKVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLm1hcChsYW5nID0+IGxhbmcudHJpbSgpKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzZWFyY2ggcmVzdWx0c1xuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldiAtIElucHV0IG9yIGZvY3VzIGV2ZW50XG4gICAqL1xuICB1cGRhdGUoZXYpIHtcblxuICAgIC8qIEluaXRpYWxpemUgaW5kZXgsIGlmIHRoaXMgaGFzIG5vdCBiZSBkb25lIHlldCAqL1xuICAgIGlmIChldi50eXBlID09PSBcImZvY3VzXCIgJiYgIXRoaXMuaW5kZXhfKSB7XG5cbiAgICAgIC8qIEluaXRpYWxpemUgaW5kZXggKi9cbiAgICAgIGNvbnN0IGluaXQgPSBkYXRhID0+IHtcblxuICAgICAgICAvKiBQcmVwcm9jZXNzIGFuZCBpbmRleCBzZWN0aW9ucyBhbmQgZG9jdW1lbnRzICovXG4gICAgICAgIHRoaXMuZG9jc18gPSBkYXRhLnJlZHVjZSgoZG9jcywgZG9jKSA9PiB7XG4gICAgICAgICAgY29uc3QgW3BhdGgsIGhhc2hdID0gZG9jLmxvY2F0aW9uLnNwbGl0KFwiI1wiKVxuXG4gICAgICAgICAgLyogQXNzb2NpYXRlIHNlY3Rpb24gd2l0aCBwYXJlbnQgZG9jdW1lbnQgKi9cbiAgICAgICAgICBpZiAoaGFzaCkge1xuICAgICAgICAgICAgZG9jLnBhcmVudCA9IGRvY3MuZ2V0KHBhdGgpXG5cbiAgICAgICAgICAgIC8qIE92ZXJyaWRlIHBhZ2UgdGl0bGUgd2l0aCBkb2N1bWVudCB0aXRsZSBpZiBmaXJzdCBzZWN0aW9uICovXG4gICAgICAgICAgICBpZiAoZG9jLnBhcmVudCAmJiAhZG9jLnBhcmVudC5kb25lKSB7XG4gICAgICAgICAgICAgIGRvYy5wYXJlbnQudGl0bGUgPSBkb2MudGl0bGVcbiAgICAgICAgICAgICAgZG9jLnBhcmVudC50ZXh0ICA9IGRvYy50ZXh0XG4gICAgICAgICAgICAgIGRvYy5wYXJlbnQuZG9uZSAgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogU29tZSBjbGVhbnVwIG9uIHRoZSB0ZXh0ICovXG4gICAgICAgICAgZG9jLnRleHQgPSBkb2MudGV4dFxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcbi9nLCBcIiBcIikgICAgICAgICAgICAgICAvKiBSZW1vdmUgbmV3bGluZXMgKi9cbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKSAgICAgICAgICAgICAgLyogQ29tcGFjdCB3aGl0ZXNwYWNlICovXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzKyhbLC46OyE/XSkvZywgICAgICAgICAvKiBDb3JyZWN0IHB1bmN0dWF0aW9uICovXG4gICAgICAgICAgICAgIChfLCBjaGFyKSA9PiBjaGFyKVxuXG4gICAgICAgICAgLyogSW5kZXggc2VjdGlvbnMgYW5kIGRvY3VtZW50cywgYnV0IHNraXAgdG9wLWxldmVsIGhlYWRsaW5lICovXG4gICAgICAgICAgaWYgKCFkb2MucGFyZW50IHx8IGRvYy5wYXJlbnQudGl0bGUgIT09IGRvYy50aXRsZSlcbiAgICAgICAgICAgIGRvY3Muc2V0KGRvYy5sb2NhdGlvbiwgZG9jKVxuICAgICAgICAgIHJldHVybiBkb2NzXG4gICAgICAgIH0sIG5ldyBNYXApXG5cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8taW52YWxpZC10aGlzICovXG4gICAgICAgIGNvbnN0IGRvY3MgPSB0aGlzLmRvY3NfLFxuICAgICAgICAgICAgICBsYW5nID0gdGhpcy5sYW5nX1xuXG4gICAgICAgIC8qIENyZWF0ZSBzdGFjayBhbmQgaW5kZXggKi9cbiAgICAgICAgdGhpcy5zdGFja18gPSBbXVxuICAgICAgICB0aGlzLmluZGV4XyA9IGx1bnIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc3QgZmlsdGVycyA9IHtcbiAgICAgICAgICAgIFwic2VhcmNoLnBpcGVsaW5lLnRyaW1tZXJcIjogbHVuci50cmltbWVyLFxuICAgICAgICAgICAgXCJzZWFyY2gucGlwZWxpbmUuc3RvcHdvcmRzXCI6IGx1bnIuc3RvcFdvcmRGaWx0ZXJcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBEaXNhYmxlIHN0b3Agd29yZHMgZmlsdGVyIGFuZCB0cmltbWVyLCBpZiBkZXNpcmVkICovXG4gICAgICAgICAgY29uc3QgcGlwZWxpbmUgPSBPYmplY3Qua2V5cyhmaWx0ZXJzKS5yZWR1Y2UoKHJlc3VsdCwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0cmFuc2xhdGUobmFtZSkubWF0Y2goL15mYWxzZSQvaSkpXG4gICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZpbHRlcnNbbmFtZV0pXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgfSwgW10pXG5cbiAgICAgICAgICAvKiBSZW1vdmUgc3RlbW1lciwgYXMgaXQgY3JpcHBsZXMgc2VhcmNoIGV4cGVyaWVuY2UgKi9cbiAgICAgICAgICB0aGlzLnBpcGVsaW5lLnJlc2V0KClcbiAgICAgICAgICBpZiAocGlwZWxpbmUpXG4gICAgICAgICAgICB0aGlzLnBpcGVsaW5lLmFkZCguLi5waXBlbGluZSlcblxuICAgICAgICAgIC8qIFNldCB1cCBhbHRlcm5hdGUgc2VhcmNoIGxhbmd1YWdlcyAqL1xuICAgICAgICAgIGlmIChsYW5nLmxlbmd0aCA9PT0gMSAmJiBsYW5nWzBdICE9PSBcImVuXCIgJiYgbHVucltsYW5nWzBdXSkge1xuICAgICAgICAgICAgdGhpcy51c2UobHVucltsYW5nWzBdXSlcbiAgICAgICAgICB9IGVsc2UgaWYgKGxhbmcubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy51c2UobHVuci5tdWx0aUxhbmd1YWdlKC4uLmxhbmcpKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEluZGV4IGZpZWxkcyAqL1xuICAgICAgICAgIHRoaXMuZmllbGQoXCJ0aXRsZVwiLCB7IGJvb3N0OiAxMCB9KVxuICAgICAgICAgIHRoaXMuZmllbGQoXCJ0ZXh0XCIpXG4gICAgICAgICAgdGhpcy5yZWYoXCJsb2NhdGlvblwiKVxuXG4gICAgICAgICAgLyogSW5kZXggZG9jdW1lbnRzICovXG4gICAgICAgICAgZG9jcy5mb3JFYWNoKGRvYyA9PiB0aGlzLmFkZChkb2MpKVxuICAgICAgICB9KVxuXG4gICAgICAgIC8qIFJlZ2lzdGVyIGV2ZW50IGhhbmRsZXIgZm9yIGxhenkgcmVuZGVyaW5nICovXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxfLnBhcmVudE5vZGVcbiAgICAgICAgaWYgKCEoY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgICAgd2hpbGUgKHRoaXMuc3RhY2tfLmxlbmd0aCAmJiBjb250YWluZXIuc2Nyb2xsVG9wICtcbiAgICAgICAgICAgICAgY29udGFpbmVyLm9mZnNldEhlaWdodCA+PSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gMTYpXG4gICAgICAgICAgICB0aGlzLnN0YWNrXy5zcGxpY2UoMCwgMTApLmZvckVhY2gocmVuZGVyID0+IHJlbmRlcigpKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1pbnZhbGlkLXRoaXMgKi9cblxuICAgICAgLyogSW5pdGlhbGl6ZSBpbmRleCBhZnRlciBzaG9ydCB0aW1lb3V0IHRvIGFjY291bnQgZm9yIHRyYW5zaXRpb24gKi9cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuZGF0YV8gPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gdGhpcy5kYXRhXygpLnRoZW4oaW5pdClcbiAgICAgICAgICA6IGluaXQodGhpcy5kYXRhXylcbiAgICAgIH0sIDI1MClcblxuICAgIC8qIEV4ZWN1dGUgc2VhcmNoIG9uIG5ldyBpbnB1dCBldmVudCAqL1xuICAgIH0gZWxzZSBpZiAoZXYudHlwZSA9PT0gXCJmb2N1c1wiIHx8IGV2LnR5cGUgPT09IFwia2V5dXBcIikge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0XG4gICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSlcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG5cbiAgICAgIC8qIEFib3J0IGVhcmx5LCBpZiBpbmRleCBpcyBub3QgYnVpbGQgb3IgaW5wdXQgaGFzbid0IGNoYW5nZWQgKi9cbiAgICAgIGlmICghdGhpcy5pbmRleF8gfHwgdGFyZ2V0LnZhbHVlID09PSB0aGlzLnZhbHVlXylcbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIC8qIENsZWFyIGN1cnJlbnQgbGlzdCAqL1xuICAgICAgd2hpbGUgKHRoaXMubGlzdF8uZmlyc3RDaGlsZClcbiAgICAgICAgdGhpcy5saXN0Xy5yZW1vdmVDaGlsZCh0aGlzLmxpc3RfLmZpcnN0Q2hpbGQpXG5cbiAgICAgIC8qIEFib3J0IGVhcmx5LCBpZiBzZWFyY2ggaW5wdXQgaXMgZW1wdHkgKi9cbiAgICAgIHRoaXMudmFsdWVfID0gdGFyZ2V0LnZhbHVlXG4gICAgICBpZiAodGhpcy52YWx1ZV8ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMubWV0YV8udGV4dENvbnRlbnQgPSB0aGlzLm1lc3NhZ2VfLnBsYWNlaG9sZGVyXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvKiBQZXJmb3JtIHNlYXJjaCBvbiBpbmRleCBhbmQgZ3JvdXAgc2VjdGlvbnMgYnkgZG9jdW1lbnQgKi9cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaW5kZXhfXG5cbiAgICAgICAgLyogQXBwZW5kIHRyYWlsaW5nIHdpbGRjYXJkIHRvIGFsbCB0ZXJtcyBmb3IgcHJlZml4IHF1ZXJ5aW5nICovXG4gICAgICAgIC5xdWVyeShxdWVyeSA9PiB7XG4gICAgICAgICAgdGhpcy52YWx1ZV8udG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIilcbiAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgIC5mb3JFYWNoKHRlcm0gPT4ge1xuICAgICAgICAgICAgICBxdWVyeS50ZXJtKHRlcm0sIHsgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkcgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLyogUHJvY2VzcyBxdWVyeSByZXN1bHRzICovXG4gICAgICAgIC5yZWR1Y2UoKGl0ZW1zLCBpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgZG9jID0gdGhpcy5kb2NzXy5nZXQoaXRlbS5yZWYpXG4gICAgICAgICAgaWYgKGRvYy5wYXJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IGRvYy5wYXJlbnQubG9jYXRpb25cbiAgICAgICAgICAgIGl0ZW1zLnNldChyZWYsIChpdGVtcy5nZXQocmVmKSB8fCBbXSkuY29uY2F0KGl0ZW0pKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZWYgPSBkb2MubG9jYXRpb25cbiAgICAgICAgICAgIGl0ZW1zLnNldChyZWYsIChpdGVtcy5nZXQocmVmKSB8fCBbXSkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpdGVtc1xuICAgICAgICB9LCBuZXcgTWFwKVxuXG4gICAgICAvKiBBc3NlbWJsZSByZWd1bGFyIGV4cHJlc3Npb25zIGZvciBtYXRjaGluZyAqL1xuICAgICAgY29uc3QgcXVlcnkgPSBlc2NhcGUodGhpcy52YWx1ZV8udHJpbSgpKS5yZXBsYWNlKFxuICAgICAgICBuZXcgUmVnRXhwKGx1bnIudG9rZW5pemVyLnNlcGFyYXRvciwgXCJpbWdcIiksIFwifFwiKVxuICAgICAgY29uc3QgbWF0Y2ggPVxuICAgICAgICBuZXcgUmVnRXhwKGAoXnwke2x1bnIudG9rZW5pemVyLnNlcGFyYXRvcn0pKCR7cXVlcnl9KWAsIFwiaW1nXCIpXG4gICAgICBjb25zdCBoaWdobGlnaHQgPSAoXywgc2VwYXJhdG9yLCB0b2tlbikgPT5cbiAgICAgICAgYCR7c2VwYXJhdG9yfTxlbT4ke3Rva2VufTwvZW0+YFxuXG4gICAgICAvKiBSZXNldCBzdGFjayBhbmQgcmVuZGVyIHJlc3VsdHMgKi9cbiAgICAgIHRoaXMuc3RhY2tfID0gW11cbiAgICAgIHJlc3VsdC5mb3JFYWNoKChpdGVtcywgcmVmKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvYyA9IHRoaXMuZG9jc18uZ2V0KHJlZilcblxuICAgICAgICAvKiBSZW5kZXIgYXJ0aWNsZSAqL1xuICAgICAgICBjb25zdCBhcnRpY2xlID0gKFxuICAgICAgICAgIDxsaSBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2l0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9e2RvYy5sb2NhdGlvbn0gdGl0bGU9e2RvYy50aXRsZX1cbiAgICAgICAgICAgICAgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X19saW5rXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX2FydGljbGVcbiAgICAgICAgICAgICAgICAgICAgbWQtc2VhcmNoLXJlc3VsdF9fYXJ0aWNsZS0tZG9jdW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAge3sgX19odG1sOiBkb2MudGl0bGUucmVwbGFjZShtYXRjaCwgaGlnaGxpZ2h0KSB9fVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAge2RvYy50ZXh0Lmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1kLXNlYXJjaC1yZXN1bHRfX3RlYXNlclwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBfX2h0bWw6IGRvYy50ZXh0LnJlcGxhY2UobWF0Y2gsIGhpZ2hsaWdodCkgfX1cbiAgICAgICAgICAgICAgICAgIDwvcD4gOiB7fX1cbiAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIClcblxuICAgICAgICAvKiBSZW5kZXIgc2VjdGlvbnMgZm9yIGFydGljbGUgKi9cbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBpdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLmRvY3NfLmdldChpdGVtLnJlZilcbiAgICAgICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3NlY3Rpb24ubG9jYXRpb259IHRpdGxlPXtzZWN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9fbGlua1wiIGRhdGEtbWQtcmVsPVwiYW5jaG9yXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X19hcnRpY2xlXCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBfX2h0bWw6IHNlY3Rpb24udGl0bGUucmVwbGFjZShtYXRjaCwgaGlnaGxpZ2h0KSB9fVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLnRleHQubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtZC1zZWFyY2gtcmVzdWx0X190ZWFzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBfX2h0bWw6IHRydW5jYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi50ZXh0LnJlcGxhY2UobWF0Y2gsIGhpZ2hsaWdodCksIDQwMClcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+IDoge319XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8qIFB1c2ggYXJ0aWNsZXMgYW5kIHNlY3Rpb24gcmVuZGVyZXJzIG9udG8gc3RhY2sgKi9cbiAgICAgICAgdGhpcy5zdGFja18ucHVzaCgoKSA9PiB0aGlzLmxpc3RfLmFwcGVuZENoaWxkKGFydGljbGUpLCAuLi5zZWN0aW9ucylcbiAgICAgIH0pXG5cbiAgICAgIC8qIEdyYWR1YWxseSBhZGQgcmVzdWx0cyBhcyBsb25nIGFzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciBncm93cyAqL1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbF8ucGFyZW50Tm9kZVxuICAgICAgaWYgKCEoY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgIHdoaWxlICh0aGlzLnN0YWNrXy5sZW5ndGggJiZcbiAgICAgICAgICBjb250YWluZXIub2Zmc2V0SGVpZ2h0ID49IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgLSAxNilcbiAgICAgICAgKHRoaXMuc3RhY2tfLnNoaWZ0KCkpKClcblxuICAgICAgLyogQmluZCBjbGljayBoYW5kbGVycyBmb3IgYW5jaG9ycyAqL1xuICAgICAgY29uc3QgYW5jaG9ycyA9IHRoaXMubGlzdF8ucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW1kLXJlbD1hbmNob3JdXCIpXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFuY2hvcnMsIGFuY2hvciA9PiB7XG4gICAgICAgIFtcImNsaWNrXCIsIFwia2V5ZG93blwiXS5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoYWN0aW9uLCBldjIgPT4ge1xuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJrZXlkb3duXCIgJiYgZXYyLmtleUNvZGUgIT09IDEzKVxuICAgICAgICAgICAgICByZXR1cm5cblxuICAgICAgICAgICAgLyogQ2xvc2Ugc2VhcmNoICovXG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWQtdG9nZ2xlPXNlYXJjaF1cIilcbiAgICAgICAgICAgIGlmICghKHRvZ2dsZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICAgICAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xuICAgICAgICAgICAgICB0b2dnbGUuY2hlY2tlZCA9IGZhbHNlXG4gICAgICAgICAgICAgIHRvZ2dsZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogSGFjazogcHJldmVudCBkZWZhdWx0LCBhcyB0aGUgbmF2aWdhdGlvbiBuZWVkcyB0byBiZSBkZWxheWVkIGR1ZVxuICAgICAgICAgICAgICAgdG8gdGhlIHNlYXJjaCBib2R5IGxvY2sgb24gbW9iaWxlICovXG4gICAgICAgICAgICBldjIucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBhbmNob3IuaHJlZlxuICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICAvKiBVcGRhdGUgc2VhcmNoIG1ldGFkYXRhICovXG4gICAgICBzd2l0Y2ggKHJlc3VsdC5zaXplKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB0aGlzLm1ldGFfLnRleHRDb250ZW50ID0gdGhpcy5tZXNzYWdlXy5ub25lXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMubWV0YV8udGV4dENvbnRlbnQgPSB0aGlzLm1lc3NhZ2VfLm9uZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5tZXRhXy50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VfLm90aGVyLnJlcGxhY2UoXCIjXCIsIHJlc3VsdC5zaXplKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NlYXJjaC9SZXN1bHQuanN4IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWF0Y2hPcGVyYXRvcnNSZSA9IC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG5cdH1cblxuXHRyZXR1cm4gc3RyLnJlcGxhY2UobWF0Y2hPcGVyYXRvcnNSZSwgJ1xcXFwkJicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VzY2FwZS1zdHJpbmctcmVnZXhwL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFtcImx1bnJcIl0gPSByZXF1aXJlKFwiLSEuL2x1bnIuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXhwb3NlLWxvYWRlcj9sdW5yIS4vbm9kZV9tb2R1bGVzL2x1bnIvbHVuci5qcy1leHBvc2VkXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGx1bnIgLSBodHRwOi8vbHVucmpzLmNvbSAtIEEgYml0IGxpa2UgU29sciwgYnV0IG11Y2ggc21hbGxlciBhbmQgbm90IGFzIGJyaWdodCAtIDIuMS41XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuXG47KGZ1bmN0aW9uKCl7XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29uZmlndXJpbmcgYW5kIGNvbnN0cnVjdGluZ1xuICogYSBuZXcgbHVuciBJbmRleC5cbiAqXG4gKiBBIGx1bnIuQnVpbGRlciBpbnN0YW5jZSBpcyBjcmVhdGVkIGFuZCB0aGUgcGlwZWxpbmUgc2V0dXBcbiAqIHdpdGggYSB0cmltbWVyLCBzdG9wIHdvcmQgZmlsdGVyIGFuZCBzdGVtbWVyLlxuICpcbiAqIFRoaXMgYnVpbGRlciBvYmplY3QgaXMgeWllbGRlZCB0byB0aGUgY29uZmlndXJhdGlvbiBmdW5jdGlvblxuICogdGhhdCBpcyBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIsIGFsbG93aW5nIHRoZSBsaXN0IG9mIGZpZWxkc1xuICogYW5kIG90aGVyIGJ1aWxkZXIgcGFyYW1ldGVycyB0byBiZSBjdXN0b21pc2VkLlxuICpcbiAqIEFsbCBkb2N1bWVudHMgX211c3RfIGJlIGFkZGVkIHdpdGhpbiB0aGUgcGFzc2VkIGNvbmZpZyBmdW5jdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIGlkeCA9IGx1bnIoZnVuY3Rpb24gKCkge1xuICogICB0aGlzLmZpZWxkKCd0aXRsZScpXG4gKiAgIHRoaXMuZmllbGQoJ2JvZHknKVxuICogICB0aGlzLnJlZignaWQnKVxuICpcbiAqICAgZG9jdW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xuICogICAgIHRoaXMuYWRkKGRvYylcbiAqICAgfSwgdGhpcylcbiAqIH0pXG4gKlxuICogQHNlZSB7QGxpbmsgbHVuci5CdWlsZGVyfVxuICogQHNlZSB7QGxpbmsgbHVuci5QaXBlbGluZX1cbiAqIEBzZWUge0BsaW5rIGx1bnIudHJpbW1lcn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuc3RvcFdvcmRGaWx0ZXJ9XG4gKiBAc2VlIHtAbGluayBsdW5yLnN0ZW1tZXJ9XG4gKiBAbmFtZXNwYWNlIHtmdW5jdGlvbn0gbHVuclxuICovXG52YXIgbHVuciA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdmFyIGJ1aWxkZXIgPSBuZXcgbHVuci5CdWlsZGVyXG5cbiAgYnVpbGRlci5waXBlbGluZS5hZGQoXG4gICAgbHVuci50cmltbWVyLFxuICAgIGx1bnIuc3RvcFdvcmRGaWx0ZXIsXG4gICAgbHVuci5zdGVtbWVyXG4gIClcblxuICBidWlsZGVyLnNlYXJjaFBpcGVsaW5lLmFkZChcbiAgICBsdW5yLnN0ZW1tZXJcbiAgKVxuXG4gIGNvbmZpZy5jYWxsKGJ1aWxkZXIsIGJ1aWxkZXIpXG4gIHJldHVybiBidWlsZGVyLmJ1aWxkKClcbn1cblxubHVuci52ZXJzaW9uID0gXCIyLjEuNVwiXG4vKiFcbiAqIGx1bnIudXRpbHNcbiAqIENvcHlyaWdodCAoQykgMjAxNyBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlIGNvbnRhaW5pbmcgdXRpbHMgZm9yIHRoZSByZXN0IG9mIHRoZSBsdW5yIGxpYnJhcnlcbiAqL1xubHVuci51dGlscyA9IHt9XG5cbi8qKlxuICogUHJpbnQgYSB3YXJuaW5nIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gYmUgcHJpbnRlZC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICovXG5sdW5yLnV0aWxzLndhcm4gPSAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIGlmIChnbG9iYWwuY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbn0pKHRoaXMpXG5cbi8qKlxuICogQ29udmVydCBhbiBvYmplY3QgdG8gYSBzdHJpbmcuXG4gKlxuICogSW4gdGhlIGNhc2Ugb2YgYG51bGxgIGFuZCBgdW5kZWZpbmVkYCB0aGUgZnVuY3Rpb24gcmV0dXJuc1xuICogdGhlIGVtcHR5IHN0cmluZywgaW4gYWxsIG90aGVyIGNhc2VzIHRoZSByZXN1bHQgb2YgY2FsbGluZ1xuICogYHRvU3RyaW5nYCBvbiB0aGUgcGFzc2VkIG9iamVjdCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge0FueX0gb2JqIFRoZSBvYmplY3QgdG8gY29udmVydCB0byBhIHN0cmluZy5cbiAqIEByZXR1cm4ge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwYXNzZWQgb2JqZWN0LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKi9cbmx1bnIudXRpbHMuYXNTdHJpbmcgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmogPT09IHZvaWQgMCB8fCBvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gXCJcIlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmoudG9TdHJpbmcoKVxuICB9XG59XG5sdW5yLkZpZWxkUmVmID0gZnVuY3Rpb24gKGRvY1JlZiwgZmllbGROYW1lLCBzdHJpbmdWYWx1ZSkge1xuICB0aGlzLmRvY1JlZiA9IGRvY1JlZlxuICB0aGlzLmZpZWxkTmFtZSA9IGZpZWxkTmFtZVxuICB0aGlzLl9zdHJpbmdWYWx1ZSA9IHN0cmluZ1ZhbHVlXG59XG5cbmx1bnIuRmllbGRSZWYuam9pbmVyID0gXCIvXCJcblxubHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nID0gZnVuY3Rpb24gKHMpIHtcbiAgdmFyIG4gPSBzLmluZGV4T2YobHVuci5GaWVsZFJlZi5qb2luZXIpXG5cbiAgaWYgKG4gPT09IC0xKSB7XG4gICAgdGhyb3cgXCJtYWxmb3JtZWQgZmllbGQgcmVmIHN0cmluZ1wiXG4gIH1cblxuICB2YXIgZmllbGRSZWYgPSBzLnNsaWNlKDAsIG4pLFxuICAgICAgZG9jUmVmID0gcy5zbGljZShuICsgMSlcblxuICByZXR1cm4gbmV3IGx1bnIuRmllbGRSZWYgKGRvY1JlZiwgZmllbGRSZWYsIHMpXG59XG5cbmx1bnIuRmllbGRSZWYucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fc3RyaW5nVmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc3RyaW5nVmFsdWUgPSB0aGlzLmZpZWxkTmFtZSArIGx1bnIuRmllbGRSZWYuam9pbmVyICsgdGhpcy5kb2NSZWZcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9zdHJpbmdWYWx1ZVxufVxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgaW52ZXJzZSBkb2N1bWVudCBmcmVxdWVuY3kgZm9yXG4gKiBhIHBvc3RpbmcuIFRoaXMgaXMgc2hhcmVkIGJldHdlZW4gdGhlIGJ1aWxkZXIgYW5kIHRoZSBpbmRleFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcG9zdGluZyAtIFRoZSBwb3N0aW5nIGZvciBhIGdpdmVuIHRlcm1cbiAqIEBwYXJhbSB7bnVtYmVyfSBkb2N1bWVudENvdW50IC0gVGhlIHRvdGFsIG51bWJlciBvZiBkb2N1bWVudHMuXG4gKi9cbmx1bnIuaWRmID0gZnVuY3Rpb24gKHBvc3RpbmcsIGRvY3VtZW50Q291bnQpIHtcbiAgdmFyIGRvY3VtZW50c1dpdGhUZXJtID0gMFxuXG4gIGZvciAodmFyIGZpZWxkTmFtZSBpbiBwb3N0aW5nKSB7XG4gICAgaWYgKGZpZWxkTmFtZSA9PSAnX2luZGV4JykgY29udGludWUgLy8gSWdub3JlIHRoZSB0ZXJtIGluZGV4LCBpdHMgbm90IGEgZmllbGRcbiAgICBkb2N1bWVudHNXaXRoVGVybSArPSBPYmplY3Qua2V5cyhwb3N0aW5nW2ZpZWxkTmFtZV0pLmxlbmd0aFxuICB9XG5cbiAgdmFyIHggPSAoZG9jdW1lbnRDb3VudCAtIGRvY3VtZW50c1dpdGhUZXJtICsgMC41KSAvIChkb2N1bWVudHNXaXRoVGVybSArIDAuNSlcblxuICByZXR1cm4gTWF0aC5sb2coMSArIE1hdGguYWJzKHgpKVxufVxuXG4vKipcbiAqIEEgdG9rZW4gd3JhcHMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB0b2tlblxuICogYXMgaXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlIHRleHQgcHJvY2Vzc2luZyBwaXBlbGluZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyPScnXSAtIFRoZSBzdHJpbmcgdG9rZW4gYmVpbmcgd3JhcHBlZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGE9e31dIC0gTWV0YWRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdG9rZW4uXG4gKi9cbmx1bnIuVG9rZW4gPSBmdW5jdGlvbiAoc3RyLCBtZXRhZGF0YSkge1xuICB0aGlzLnN0ciA9IHN0ciB8fCBcIlwiXG4gIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YSB8fCB7fVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRva2VuIHN0cmluZyB0aGF0IGlzIGJlaW5nIHdyYXBwZWQgYnkgdGhpcyBvYmplY3QuXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xubHVuci5Ub2tlbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnN0clxufVxuXG4vKipcbiAqIEEgdG9rZW4gdXBkYXRlIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB1cGRhdGluZyBvciBvcHRpb25hbGx5XG4gKiB3aGVuIGNsb25pbmcgYSB0b2tlbi5cbiAqXG4gKiBAY2FsbGJhY2sgbHVuci5Ub2tlbn51cGRhdGVGdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRva2VuLlxuICogQHBhcmFtIHtPYmplY3R9IG1ldGFkYXRhIC0gQWxsIG1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHRva2VuLlxuICovXG5cbi8qKlxuICogQXBwbGllcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gdGhlIHdyYXBwZWQgc3RyaW5nIHRva2VuLlxuICpcbiAqIEBleGFtcGxlXG4gKiB0b2tlbi51cGRhdGUoZnVuY3Rpb24gKHN0ciwgbWV0YWRhdGEpIHtcbiAqICAgcmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpXG4gKiB9KVxuICpcbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn51cGRhdGVGdW5jdGlvbn0gZm4gLSBBIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIHRoZSB0b2tlbiBzdHJpbmcuXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqL1xubHVuci5Ub2tlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMuc3RyID0gZm4odGhpcy5zdHIsIHRoaXMubWV0YWRhdGEpXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdG9rZW4uIE9wdGlvbmFsbHkgYSBmdW5jdGlvbiBjYW4gYmVcbiAqIGFwcGxpZWQgdG8gdGhlIGNsb25lZCB0b2tlbi5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5+dXBkYXRlRnVuY3Rpb259IFtmbl0gLSBBbiBvcHRpb25hbCBmdW5jdGlvbiB0byBhcHBseSB0byB0aGUgY2xvbmVkIHRva2VuLlxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKi9cbmx1bnIuVG9rZW4ucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGZuKSB7XG4gIGZuID0gZm4gfHwgZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgfVxuICByZXR1cm4gbmV3IGx1bnIuVG9rZW4gKGZuKHRoaXMuc3RyLCB0aGlzLm1ldGFkYXRhKSwgdGhpcy5tZXRhZGF0YSlcbn1cbi8qIVxuICogbHVuci50b2tlbml6ZXJcbiAqIENvcHlyaWdodCAoQykgMjAxNyBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gZm9yIHNwbGl0dGluZyBhIHN0cmluZyBpbnRvIHRva2VucyByZWFkeSB0byBiZSBpbnNlcnRlZCBpbnRvXG4gKiB0aGUgc2VhcmNoIGluZGV4LiBVc2VzIGBsdW5yLnRva2VuaXplci5zZXBhcmF0b3JgIHRvIHNwbGl0IHN0cmluZ3MsIGNoYW5nZVxuICogdGhlIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgdG8gY2hhbmdlIGhvdyBzdHJpbmdzIGFyZSBzcGxpdCBpbnRvIHRva2Vucy5cbiAqXG4gKiBUaGlzIHRva2VuaXplciB3aWxsIGNvbnZlcnQgaXRzIHBhcmFtZXRlciB0byBhIHN0cmluZyBieSBjYWxsaW5nIGB0b1N0cmluZ2AgYW5kXG4gKiB0aGVuIHdpbGwgc3BsaXQgdGhpcyBzdHJpbmcgb24gdGhlIGNoYXJhY3RlciBpbiBgbHVuci50b2tlbml6ZXIuc2VwYXJhdG9yYC5cbiAqIEFycmF5cyB3aWxsIGhhdmUgdGhlaXIgZWxlbWVudHMgY29udmVydGVkIHRvIHN0cmluZ3MgYW5kIHdyYXBwZWQgaW4gYSBsdW5yLlRva2VuLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7PyhzdHJpbmd8b2JqZWN0fG9iamVjdFtdKX0gb2JqIC0gVGhlIG9iamVjdCB0byBjb252ZXJ0IGludG8gdG9rZW5zXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbltdfVxuICovXG5sdW5yLnRva2VuaXplciA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsIHx8IG9iaiA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIG5ldyBsdW5yLlRva2VuKGx1bnIudXRpbHMuYXNTdHJpbmcodCkudG9Mb3dlckNhc2UoKSlcbiAgICB9KVxuICB9XG5cbiAgdmFyIHN0ciA9IG9iai50b1N0cmluZygpLnRyaW0oKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgbGVuID0gc3RyLmxlbmd0aCxcbiAgICAgIHRva2VucyA9IFtdXG5cbiAgZm9yICh2YXIgc2xpY2VFbmQgPSAwLCBzbGljZVN0YXJ0ID0gMDsgc2xpY2VFbmQgPD0gbGVuOyBzbGljZUVuZCsrKSB7XG4gICAgdmFyIGNoYXIgPSBzdHIuY2hhckF0KHNsaWNlRW5kKSxcbiAgICAgICAgc2xpY2VMZW5ndGggPSBzbGljZUVuZCAtIHNsaWNlU3RhcnRcblxuICAgIGlmICgoY2hhci5tYXRjaChsdW5yLnRva2VuaXplci5zZXBhcmF0b3IpIHx8IHNsaWNlRW5kID09IGxlbikpIHtcblxuICAgICAgaWYgKHNsaWNlTGVuZ3RoID4gMCkge1xuICAgICAgICB0b2tlbnMucHVzaChcbiAgICAgICAgICBuZXcgbHVuci5Ub2tlbiAoc3RyLnNsaWNlKHNsaWNlU3RhcnQsIHNsaWNlRW5kKSwge1xuICAgICAgICAgICAgcG9zaXRpb246IFtzbGljZVN0YXJ0LCBzbGljZUxlbmd0aF0sXG4gICAgICAgICAgICBpbmRleDogdG9rZW5zLmxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgc2xpY2VTdGFydCA9IHNsaWNlRW5kICsgMVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIFRoZSBzZXBhcmF0b3IgdXNlZCB0byBzcGxpdCBhIHN0cmluZyBpbnRvIHRva2Vucy4gT3ZlcnJpZGUgdGhpcyBwcm9wZXJ0eSB0byBjaGFuZ2UgdGhlIGJlaGF2aW91ciBvZlxuICogYGx1bnIudG9rZW5pemVyYCBiZWhhdmlvdXIgd2hlbiB0b2tlbml6aW5nIHN0cmluZ3MuIEJ5IGRlZmF1bHQgdGhpcyBzcGxpdHMgb24gd2hpdGVzcGFjZSBhbmQgaHlwaGVucy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2VlIGx1bnIudG9rZW5pemVyXG4gKi9cbmx1bnIudG9rZW5pemVyLnNlcGFyYXRvciA9IC9bXFxzXFwtXSsvXG4vKiFcbiAqIGx1bnIuUGlwZWxpbmVcbiAqIENvcHlyaWdodCAoQykgMjAxNyBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIGx1bnIuUGlwZWxpbmVzIG1haW50YWluIGFuIG9yZGVyZWQgbGlzdCBvZiBmdW5jdGlvbnMgdG8gYmUgYXBwbGllZCB0byBhbGxcbiAqIHRva2VucyBpbiBkb2N1bWVudHMgZW50ZXJpbmcgdGhlIHNlYXJjaCBpbmRleCBhbmQgcXVlcmllcyBiZWluZyByYW4gYWdhaW5zdFxuICogdGhlIGluZGV4LlxuICpcbiAqIEFuIGluc3RhbmNlIG9mIGx1bnIuSW5kZXggY3JlYXRlZCB3aXRoIHRoZSBsdW5yIHNob3J0Y3V0IHdpbGwgY29udGFpbiBhXG4gKiBwaXBlbGluZSB3aXRoIGEgc3RvcCB3b3JkIGZpbHRlciBhbmQgYW4gRW5nbGlzaCBsYW5ndWFnZSBzdGVtbWVyLiBFeHRyYVxuICogZnVuY3Rpb25zIGNhbiBiZSBhZGRlZCBiZWZvcmUgb3IgYWZ0ZXIgZWl0aGVyIG9mIHRoZXNlIGZ1bmN0aW9ucyBvciB0aGVzZVxuICogZGVmYXVsdCBmdW5jdGlvbnMgY2FuIGJlIHJlbW92ZWQuXG4gKlxuICogV2hlbiBydW4gdGhlIHBpcGVsaW5lIHdpbGwgY2FsbCBlYWNoIGZ1bmN0aW9uIGluIHR1cm4sIHBhc3NpbmcgYSB0b2tlbiwgdGhlXG4gKiBpbmRleCBvZiB0aGF0IHRva2VuIGluIHRoZSBvcmlnaW5hbCBsaXN0IG9mIGFsbCB0b2tlbnMgYW5kIGZpbmFsbHkgYSBsaXN0IG9mXG4gKiBhbGwgdGhlIG9yaWdpbmFsIHRva2Vucy5cbiAqXG4gKiBUaGUgb3V0cHV0IG9mIGZ1bmN0aW9ucyBpbiB0aGUgcGlwZWxpbmUgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIG5leHQgZnVuY3Rpb25cbiAqIGluIHRoZSBwaXBlbGluZS4gVG8gZXhjbHVkZSBhIHRva2VuIGZyb20gZW50ZXJpbmcgdGhlIGluZGV4IHRoZSBmdW5jdGlvblxuICogc2hvdWxkIHJldHVybiB1bmRlZmluZWQsIHRoZSByZXN0IG9mIHRoZSBwaXBlbGluZSB3aWxsIG5vdCBiZSBjYWxsZWQgd2l0aFxuICogdGhpcyB0b2tlbi5cbiAqXG4gKiBGb3Igc2VyaWFsaXNhdGlvbiBvZiBwaXBlbGluZXMgdG8gd29yaywgYWxsIGZ1bmN0aW9ucyB1c2VkIGluIGFuIGluc3RhbmNlIG9mXG4gKiBhIHBpcGVsaW5lIHNob3VsZCBiZSByZWdpc3RlcmVkIHdpdGggbHVuci5QaXBlbGluZS4gUmVnaXN0ZXJlZCBmdW5jdGlvbnMgY2FuXG4gKiB0aGVuIGJlIGxvYWRlZC4gSWYgdHJ5aW5nIHRvIGxvYWQgYSBzZXJpYWxpc2VkIHBpcGVsaW5lIHRoYXQgdXNlcyBmdW5jdGlvbnNcbiAqIHRoYXQgYXJlIG5vdCByZWdpc3RlcmVkIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIElmIG5vdCBwbGFubmluZyBvbiBzZXJpYWxpc2luZyB0aGUgcGlwZWxpbmUgdGhlbiByZWdpc3RlcmluZyBwaXBlbGluZSBmdW5jdGlvbnNcbiAqIGlzIG5vdCBuZWNlc3NhcnkuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmx1bnIuUGlwZWxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX3N0YWNrID0gW11cbn1cblxubHVuci5QaXBlbGluZS5yZWdpc3RlcmVkRnVuY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4vKipcbiAqIEEgcGlwZWxpbmUgZnVuY3Rpb24gbWFwcyBsdW5yLlRva2VuIHRvIGx1bnIuVG9rZW4uIEEgbHVuci5Ub2tlbiBjb250YWlucyB0aGUgdG9rZW5cbiAqIHN0cmluZyBhcyB3ZWxsIGFzIGFsbCBrbm93biBtZXRhZGF0YS4gQSBwaXBlbGluZSBmdW5jdGlvbiBjYW4gbXV0YXRlIHRoZSB0b2tlbiBzdHJpbmdcbiAqIG9yIG11dGF0ZSAob3IgYWRkKSBtZXRhZGF0YSBmb3IgYSBnaXZlbiB0b2tlbi5cbiAqXG4gKiBBIHBpcGVsaW5lIGZ1bmN0aW9uIGNhbiBpbmRpY2F0ZSB0aGF0IHRoZSBwYXNzZWQgdG9rZW4gc2hvdWxkIGJlIGRpc2NhcmRlZCBieSByZXR1cm5pbmdcbiAqIG51bGwuIFRoaXMgdG9rZW4gd2lsbCBub3QgYmUgcGFzc2VkIHRvIGFueSBkb3duc3RyZWFtIHBpcGVsaW5lIGZ1bmN0aW9ucyBhbmQgd2lsbCBub3QgYmVcbiAqIGFkZGVkIHRvIHRoZSBpbmRleC5cbiAqXG4gKiBNdWx0aXBsZSB0b2tlbnMgY2FuIGJlIHJldHVybmVkIGJ5IHJldHVybmluZyBhbiBhcnJheSBvZiB0b2tlbnMuIEVhY2ggdG9rZW4gd2lsbCBiZSBwYXNzZWRcbiAqIHRvIGFueSBkb3duc3RyZWFtIHBpcGVsaW5lIGZ1bmN0aW9ucyBhbmQgYWxsIHdpbGwgcmV0dXJuZWQgdG9rZW5zIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGluZGV4LlxuICpcbiAqIEFueSBudW1iZXIgb2YgcGlwZWxpbmUgZnVuY3Rpb25zIG1heSBiZSBjaGFpbmVkIHRvZ2V0aGVyIHVzaW5nIGEgbHVuci5QaXBlbGluZS5cbiAqXG4gKiBAaW50ZXJmYWNlIGx1bnIuUGlwZWxpbmVGdW5jdGlvblxuICogQHBhcmFtIHtsdW5yLlRva2VufSB0b2tlbiAtIEEgdG9rZW4gZnJvbSB0aGUgZG9jdW1lbnQgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGkgLSBUaGUgaW5kZXggb2YgdGhpcyB0b2tlbiBpbiB0aGUgY29tcGxldGUgbGlzdCBvZiB0b2tlbnMgZm9yIHRoaXMgZG9jdW1lbnQvZmllbGQuXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5bXX0gdG9rZW5zIC0gQWxsIHRva2VucyBmb3IgdGhpcyBkb2N1bWVudC9maWVsZC5cbiAqIEByZXR1cm5zIHsoP2x1bnIuVG9rZW58bHVuci5Ub2tlbltdKX1cbiAqL1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgZnVuY3Rpb24gd2l0aCB0aGUgcGlwZWxpbmUuXG4gKlxuICogRnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgaW4gdGhlIHBpcGVsaW5lIHNob3VsZCBiZSByZWdpc3RlcmVkIGlmIHRoZSBwaXBlbGluZVxuICogbmVlZHMgdG8gYmUgc2VyaWFsaXNlZCwgb3IgYSBzZXJpYWxpc2VkIHBpcGVsaW5lIG5lZWRzIHRvIGJlIGxvYWRlZC5cbiAqXG4gKiBSZWdpc3RlcmluZyBhIGZ1bmN0aW9uIGRvZXMgbm90IGFkZCBpdCB0byBhIHBpcGVsaW5lLCBmdW5jdGlvbnMgbXVzdCBzdGlsbCBiZVxuICogYWRkZWQgdG8gaW5zdGFuY2VzIG9mIHRoZSBwaXBlbGluZSBmb3IgdGhlbSB0byBiZSB1c2VkIHdoZW4gcnVubmluZyBhIHBpcGVsaW5lLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjaGVjayBmb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbGFiZWwgLSBUaGUgbGFiZWwgdG8gcmVnaXN0ZXIgdGhpcyBmdW5jdGlvbiB3aXRoXG4gKi9cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbiwgbGFiZWwpIHtcbiAgaWYgKGxhYmVsIGluIHRoaXMucmVnaXN0ZXJlZEZ1bmN0aW9ucykge1xuICAgIGx1bnIudXRpbHMud2FybignT3ZlcndyaXRpbmcgZXhpc3RpbmcgcmVnaXN0ZXJlZCBmdW5jdGlvbjogJyArIGxhYmVsKVxuICB9XG5cbiAgZm4ubGFiZWwgPSBsYWJlbFxuICBsdW5yLlBpcGVsaW5lLnJlZ2lzdGVyZWRGdW5jdGlvbnNbZm4ubGFiZWxdID0gZm5cbn1cblxuLyoqXG4gKiBXYXJucyBpZiB0aGUgZnVuY3Rpb24gaXMgbm90IHJlZ2lzdGVyZWQgYXMgYSBQaXBlbGluZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgZm9yLlxuICogQHByaXZhdGVcbiAqL1xubHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIGlzUmVnaXN0ZXJlZCA9IGZuLmxhYmVsICYmIChmbi5sYWJlbCBpbiB0aGlzLnJlZ2lzdGVyZWRGdW5jdGlvbnMpXG5cbiAgaWYgKCFpc1JlZ2lzdGVyZWQpIHtcbiAgICBsdW5yLnV0aWxzLndhcm4oJ0Z1bmN0aW9uIGlzIG5vdCByZWdpc3RlcmVkIHdpdGggcGlwZWxpbmUuIFRoaXMgbWF5IGNhdXNlIHByb2JsZW1zIHdoZW4gc2VyaWFsaXNpbmcgdGhlIGluZGV4LlxcbicsIGZuKVxuICB9XG59XG5cbi8qKlxuICogTG9hZHMgYSBwcmV2aW91c2x5IHNlcmlhbGlzZWQgcGlwZWxpbmUuXG4gKlxuICogQWxsIGZ1bmN0aW9ucyB0byBiZSBsb2FkZWQgbXVzdCBhbHJlYWR5IGJlIHJlZ2lzdGVyZWQgd2l0aCBsdW5yLlBpcGVsaW5lLlxuICogSWYgYW55IGZ1bmN0aW9uIGZyb20gdGhlIHNlcmlhbGlzZWQgZGF0YSBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCB0aGVuIGFuXG4gKiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2VyaWFsaXNlZCAtIFRoZSBzZXJpYWxpc2VkIHBpcGVsaW5lIHRvIGxvYWQuXG4gKiBAcmV0dXJucyB7bHVuci5QaXBlbGluZX1cbiAqL1xubHVuci5QaXBlbGluZS5sb2FkID0gZnVuY3Rpb24gKHNlcmlhbGlzZWQpIHtcbiAgdmFyIHBpcGVsaW5lID0gbmV3IGx1bnIuUGlwZWxpbmVcblxuICBzZXJpYWxpc2VkLmZvckVhY2goZnVuY3Rpb24gKGZuTmFtZSkge1xuICAgIHZhciBmbiA9IGx1bnIuUGlwZWxpbmUucmVnaXN0ZXJlZEZ1bmN0aW9uc1tmbk5hbWVdXG5cbiAgICBpZiAoZm4pIHtcbiAgICAgIHBpcGVsaW5lLmFkZChmbilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgbG9hZCB1bnJlZ2lzdGVyZWQgZnVuY3Rpb246ICcgKyBmbk5hbWUpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBwaXBlbGluZVxufVxuXG4vKipcbiAqIEFkZHMgbmV3IGZ1bmN0aW9ucyB0byB0aGUgZW5kIG9mIHRoZSBwaXBlbGluZS5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb25bXX0gZnVuY3Rpb25zIC0gQW55IG51bWJlciBvZiBmdW5jdGlvbnMgdG8gYWRkIHRvIHRoZSBwaXBlbGluZS5cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZm5zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuXG4gIGZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKGZuKVxuICAgIHRoaXMuX3N0YWNrLnB1c2goZm4pXG4gIH0sIHRoaXMpXG59XG5cbi8qKlxuICogQWRkcyBhIHNpbmdsZSBmdW5jdGlvbiBhZnRlciBhIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlXG4gKiBwaXBlbGluZS5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGV4aXN0aW5nRm4gLSBBIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIHBpcGVsaW5lLlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IG5ld0ZuIC0gVGhlIG5ldyBmdW5jdGlvbiB0byBhZGQgdG8gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uIChleGlzdGluZ0ZuLCBuZXdGbikge1xuICBsdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZChuZXdGbilcblxuICB2YXIgcG9zID0gdGhpcy5fc3RhY2suaW5kZXhPZihleGlzdGluZ0ZuKVxuICBpZiAocG9zID09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBleGlzdGluZ0ZuJylcbiAgfVxuXG4gIHBvcyA9IHBvcyArIDFcbiAgdGhpcy5fc3RhY2suc3BsaWNlKHBvcywgMCwgbmV3Rm4pXG59XG5cbi8qKlxuICogQWRkcyBhIHNpbmdsZSBmdW5jdGlvbiBiZWZvcmUgYSBmdW5jdGlvbiB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZVxuICogcGlwZWxpbmUuXG4gKlxuICogTG9ncyBhIHdhcm5pbmcgaWYgdGhlIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBleGlzdGluZ0ZuIC0gQSBmdW5jdGlvbiB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBwaXBlbGluZS5cbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBuZXdGbiAtIFRoZSBuZXcgZnVuY3Rpb24gdG8gYWRkIHRvIHRoZSBwaXBlbGluZS5cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24gKGV4aXN0aW5nRm4sIG5ld0ZuKSB7XG4gIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKG5ld0ZuKVxuXG4gIHZhciBwb3MgPSB0aGlzLl9zdGFjay5pbmRleE9mKGV4aXN0aW5nRm4pXG4gIGlmIChwb3MgPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGV4aXN0aW5nRm4nKVxuICB9XG5cbiAgdGhpcy5fc3RhY2suc3BsaWNlKHBvcywgMCwgbmV3Rm4pXG59XG5cbi8qKlxuICogUmVtb3ZlcyBhIGZ1bmN0aW9uIGZyb20gdGhlIHBpcGVsaW5lLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gcmVtb3ZlIGZyb20gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHBvcyA9IHRoaXMuX3N0YWNrLmluZGV4T2YoZm4pXG4gIGlmIChwb3MgPT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuX3N0YWNrLnNwbGljZShwb3MsIDEpXG59XG5cbi8qKlxuICogUnVucyB0aGUgY3VycmVudCBsaXN0IG9mIGZ1bmN0aW9ucyB0aGF0IG1ha2UgdXAgdGhlIHBpcGVsaW5lIGFnYWluc3QgdGhlXG4gKiBwYXNzZWQgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHRva2VucyBUaGUgdG9rZW5zIHRvIHJ1biB0aHJvdWdoIHRoZSBwaXBlbGluZS5cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKHRva2Vucykge1xuICB2YXIgc3RhY2tMZW5ndGggPSB0aGlzLl9zdGFjay5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZm4gPSB0aGlzLl9zdGFja1tpXVxuXG4gICAgdG9rZW5zID0gdG9rZW5zLnJlZHVjZShmdW5jdGlvbiAobWVtbywgdG9rZW4sIGopIHtcbiAgICAgIHZhciByZXN1bHQgPSBmbih0b2tlbiwgaiwgdG9rZW5zKVxuXG4gICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDAgfHwgcmVzdWx0ID09PSAnJykgcmV0dXJuIG1lbW9cblxuICAgICAgcmV0dXJuIG1lbW8uY29uY2F0KHJlc3VsdClcbiAgICB9LCBbXSlcbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIHBhc3NpbmcgYSBzdHJpbmcgdGhyb3VnaCBhIHBpcGVsaW5lIGFuZCBnZXR0aW5nXG4gKiBzdHJpbmdzIG91dC4gVGhpcyBtZXRob2QgdGFrZXMgY2FyZSBvZiB3cmFwcGluZyB0aGUgcGFzc2VkIHN0cmluZyBpbiBhXG4gKiB0b2tlbiBhbmQgbWFwcGluZyB0aGUgcmVzdWx0aW5nIHRva2VucyBiYWNrIHRvIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gcGFzcyB0aHJvdWdoIHRoZSBwaXBlbGluZS5cbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUucnVuU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICB2YXIgdG9rZW4gPSBuZXcgbHVuci5Ub2tlbiAoc3RyKVxuXG4gIHJldHVybiB0aGlzLnJ1bihbdG9rZW5dKS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdC50b1N0cmluZygpXG4gIH0pXG59XG5cbi8qKlxuICogUmVzZXRzIHRoZSBwaXBlbGluZSBieSByZW1vdmluZyBhbnkgZXhpc3RpbmcgcHJvY2Vzc29ycy5cbiAqXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9zdGFjayA9IFtdXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwaXBlbGluZSByZWFkeSBmb3Igc2VyaWFsaXNhdGlvbi5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9zdGFjay5tYXAoZnVuY3Rpb24gKGZuKSB7XG4gICAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQoZm4pXG5cbiAgICByZXR1cm4gZm4ubGFiZWxcbiAgfSlcbn1cbi8qIVxuICogbHVuci5WZWN0b3JcbiAqIENvcHlyaWdodCAoQykgMjAxNyBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgdmVjdG9yIGlzIHVzZWQgdG8gY29uc3RydWN0IHRoZSB2ZWN0b3Igc3BhY2Ugb2YgZG9jdW1lbnRzIGFuZCBxdWVyaWVzLiBUaGVzZVxuICogdmVjdG9ycyBzdXBwb3J0IG9wZXJhdGlvbnMgdG8gZGV0ZXJtaW5lIHRoZSBzaW1pbGFyaXR5IGJldHdlZW4gdHdvIGRvY3VtZW50cyBvclxuICogYSBkb2N1bWVudCBhbmQgYSBxdWVyeS5cbiAqXG4gKiBOb3JtYWxseSBubyBwYXJhbWV0ZXJzIGFyZSByZXF1aXJlZCBmb3IgaW5pdGlhbGl6aW5nIGEgdmVjdG9yLCBidXQgaW4gdGhlIGNhc2Ugb2ZcbiAqIGxvYWRpbmcgYSBwcmV2aW91c2x5IGR1bXBlZCB2ZWN0b3IgdGhlIHJhdyBlbGVtZW50cyBjYW4gYmUgcHJvdmlkZWQgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEZvciBwZXJmb3JtYW5jZSByZWFzb25zIHZlY3RvcnMgYXJlIGltcGxlbWVudGVkIHdpdGggYSBmbGF0IGFycmF5LCB3aGVyZSBhbiBlbGVtZW50c1xuICogaW5kZXggaXMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgaXRzIHZhbHVlLiBFLmcuIFtpbmRleCwgdmFsdWUsIGluZGV4LCB2YWx1ZV0uIFRoaXNcbiAqIGFsbG93cyB0aGUgdW5kZXJseWluZyBhcnJheSB0byBiZSBhcyBzcGFyc2UgYXMgcG9zc2libGUgYW5kIHN0aWxsIG9mZmVyIGRlY2VudFxuICogcGVyZm9ybWFuY2Ugd2hlbiBiZWluZyB1c2VkIGZvciB2ZWN0b3IgY2FsY3VsYXRpb25zLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtOdW1iZXJbXX0gW2VsZW1lbnRzXSAtIFRoZSBmbGF0IGxpc3Qgb2YgZWxlbWVudCBpbmRleCBhbmQgZWxlbWVudCB2YWx1ZSBwYWlycy5cbiAqL1xubHVuci5WZWN0b3IgPSBmdW5jdGlvbiAoZWxlbWVudHMpIHtcbiAgdGhpcy5fbWFnbml0dWRlID0gMFxuICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHMgfHwgW11cbn1cblxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHBvc2l0aW9uIHdpdGhpbiB0aGUgdmVjdG9yIHRvIGluc2VydCBhIGdpdmVuIGluZGV4LlxuICpcbiAqIFRoaXMgaXMgdXNlZCBpbnRlcm5hbGx5IGJ5IGluc2VydCBhbmQgdXBzZXJ0LiBJZiB0aGVyZSBhcmUgZHVwbGljYXRlIGluZGV4ZXMgdGhlblxuICogdGhlIHBvc2l0aW9uIGlzIHJldHVybmVkIGFzIGlmIHRoZSB2YWx1ZSBmb3IgdGhhdCBpbmRleCB3ZXJlIHRvIGJlIHVwZGF0ZWQsIGJ1dCBpdFxuICogaXMgdGhlIGNhbGxlcnMgcmVzcG9uc2liaWxpdHkgdG8gY2hlY2sgd2hldGhlciB0aGVyZSBpcyBhIGR1cGxpY2F0ZSBhdCB0aGF0IGluZGV4XG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluc2VydElkeCAtIFRoZSBpbmRleCBhdCB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUucG9zaXRpb25Gb3JJbmRleCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAvLyBGb3IgYW4gZW1wdHkgdmVjdG9yIHRoZSB0dXBsZSBjYW4gYmUgaW5zZXJ0ZWQgYXQgdGhlIGJlZ2lubmluZ1xuICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICB2YXIgc3RhcnQgPSAwLFxuICAgICAgZW5kID0gdGhpcy5lbGVtZW50cy5sZW5ndGggLyAyLFxuICAgICAgc2xpY2VMZW5ndGggPSBlbmQgLSBzdGFydCxcbiAgICAgIHBpdm90UG9pbnQgPSBNYXRoLmZsb29yKHNsaWNlTGVuZ3RoIC8gMiksXG4gICAgICBwaXZvdEluZGV4ID0gdGhpcy5lbGVtZW50c1twaXZvdFBvaW50ICogMl1cblxuICB3aGlsZSAoc2xpY2VMZW5ndGggPiAxKSB7XG4gICAgaWYgKHBpdm90SW5kZXggPCBpbmRleCkge1xuICAgICAgc3RhcnQgPSBwaXZvdFBvaW50XG4gICAgfVxuXG4gICAgaWYgKHBpdm90SW5kZXggPiBpbmRleCkge1xuICAgICAgZW5kID0gcGl2b3RQb2ludFxuICAgIH1cblxuICAgIGlmIChwaXZvdEluZGV4ID09IGluZGV4KSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIHNsaWNlTGVuZ3RoID0gZW5kIC0gc3RhcnRcbiAgICBwaXZvdFBvaW50ID0gc3RhcnQgKyBNYXRoLmZsb29yKHNsaWNlTGVuZ3RoIC8gMilcbiAgICBwaXZvdEluZGV4ID0gdGhpcy5lbGVtZW50c1twaXZvdFBvaW50ICogMl1cbiAgfVxuXG4gIGlmIChwaXZvdEluZGV4ID09IGluZGV4KSB7XG4gICAgcmV0dXJuIHBpdm90UG9pbnQgKiAyXG4gIH1cblxuICBpZiAocGl2b3RJbmRleCA+IGluZGV4KSB7XG4gICAgcmV0dXJuIHBpdm90UG9pbnQgKiAyXG4gIH1cblxuICBpZiAocGl2b3RJbmRleCA8IGluZGV4KSB7XG4gICAgcmV0dXJuIChwaXZvdFBvaW50ICsgMSkgKiAyXG4gIH1cbn1cblxuLyoqXG4gKiBJbnNlcnRzIGFuIGVsZW1lbnQgYXQgYW4gaW5kZXggd2l0aGluIHRoZSB2ZWN0b3IuXG4gKlxuICogRG9lcyBub3QgYWxsb3cgZHVwbGljYXRlcywgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGVyZSBpcyBhbHJlYWR5IGFuIGVudHJ5XG4gKiBmb3IgdGhpcyBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5zZXJ0SWR4IC0gVGhlIGluZGV4IGF0IHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCBiZSBpbnNlcnRlZC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWwgLSBUaGUgdmFsdWUgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgdmVjdG9yLlxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKGluc2VydElkeCwgdmFsKSB7XG4gIHRoaXMudXBzZXJ0KGluc2VydElkeCwgdmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgXCJkdXBsaWNhdGUgaW5kZXhcIlxuICB9KVxufVxuXG4vKipcbiAqIEluc2VydHMgb3IgdXBkYXRlcyBhbiBleGlzdGluZyBpbmRleCB3aXRoaW4gdGhlIHZlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5zZXJ0SWR4IC0gVGhlIGluZGV4IGF0IHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCBiZSBpbnNlcnRlZC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWwgLSBUaGUgdmFsdWUgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgdmVjdG9yLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBBIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGZvciB1cGRhdGVzLCB0aGUgZXhpc3RpbmcgdmFsdWUgYW5kIHRoZVxuICogcmVxdWVzdGVkIHZhbHVlIGFyZSBwYXNzZWQgYXMgYXJndW1lbnRzXG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS51cHNlcnQgPSBmdW5jdGlvbiAoaW5zZXJ0SWR4LCB2YWwsIGZuKSB7XG4gIHRoaXMuX21hZ25pdHVkZSA9IDBcbiAgdmFyIHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbkZvckluZGV4KGluc2VydElkeClcblxuICBpZiAodGhpcy5lbGVtZW50c1twb3NpdGlvbl0gPT0gaW5zZXJ0SWR4KSB7XG4gICAgdGhpcy5lbGVtZW50c1twb3NpdGlvbiArIDFdID0gZm4odGhpcy5lbGVtZW50c1twb3NpdGlvbiArIDFdLCB2YWwpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5lbGVtZW50cy5zcGxpY2UocG9zaXRpb24sIDAsIGluc2VydElkeCwgdmFsKVxuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbWFnbml0dWRlIG9mIHRoaXMgdmVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5tYWduaXR1ZGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9tYWduaXR1ZGUpIHJldHVybiB0aGlzLl9tYWduaXR1ZGVcblxuICB2YXIgc3VtT2ZTcXVhcmVzID0gMCxcbiAgICAgIGVsZW1lbnRzTGVuZ3RoID0gdGhpcy5lbGVtZW50cy5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGVsZW1lbnRzTGVuZ3RoOyBpICs9IDIpIHtcbiAgICB2YXIgdmFsID0gdGhpcy5lbGVtZW50c1tpXVxuICAgIHN1bU9mU3F1YXJlcyArPSB2YWwgKiB2YWxcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9tYWduaXR1ZGUgPSBNYXRoLnNxcnQoc3VtT2ZTcXVhcmVzKVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyIHZlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuVmVjdG9yfSBvdGhlclZlY3RvciAtIFRoZSB2ZWN0b3IgdG8gY29tcHV0ZSB0aGUgZG90IHByb2R1Y3Qgd2l0aC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbiAob3RoZXJWZWN0b3IpIHtcbiAgdmFyIGRvdFByb2R1Y3QgPSAwLFxuICAgICAgYSA9IHRoaXMuZWxlbWVudHMsIGIgPSBvdGhlclZlY3Rvci5lbGVtZW50cyxcbiAgICAgIGFMZW4gPSBhLmxlbmd0aCwgYkxlbiA9IGIubGVuZ3RoLFxuICAgICAgYVZhbCA9IDAsIGJWYWwgPSAwLFxuICAgICAgaSA9IDAsIGogPSAwXG5cbiAgd2hpbGUgKGkgPCBhTGVuICYmIGogPCBiTGVuKSB7XG4gICAgYVZhbCA9IGFbaV0sIGJWYWwgPSBiW2pdXG4gICAgaWYgKGFWYWwgPCBiVmFsKSB7XG4gICAgICBpICs9IDJcbiAgICB9IGVsc2UgaWYgKGFWYWwgPiBiVmFsKSB7XG4gICAgICBqICs9IDJcbiAgICB9IGVsc2UgaWYgKGFWYWwgPT0gYlZhbCkge1xuICAgICAgZG90UHJvZHVjdCArPSBhW2kgKyAxXSAqIGJbaiArIDFdXG4gICAgICBpICs9IDJcbiAgICAgIGogKz0gMlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkb3RQcm9kdWN0XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgY29zaW5lIHNpbWlsYXJpdHkgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICogdmVjdG9yLlxuICpcbiAqIEBwYXJhbSB7bHVuci5WZWN0b3J9IG90aGVyVmVjdG9yIC0gVGhlIG90aGVyIHZlY3RvciB0byBjYWxjdWxhdGUgdGhlXG4gKiBzaW1pbGFyaXR5IHdpdGguXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUuc2ltaWxhcml0eSA9IGZ1bmN0aW9uIChvdGhlclZlY3Rvcikge1xuICByZXR1cm4gdGhpcy5kb3Qob3RoZXJWZWN0b3IpIC8gKHRoaXMubWFnbml0dWRlKCkgKiBvdGhlclZlY3Rvci5tYWduaXR1ZGUoKSlcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdmVjdG9yIHRvIGFuIGFycmF5IG9mIHRoZSBlbGVtZW50cyB3aXRoaW4gdGhlIHZlY3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7TnVtYmVyW119XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3V0cHV0ID0gbmV3IEFycmF5ICh0aGlzLmVsZW1lbnRzLmxlbmd0aCAvIDIpXG5cbiAgZm9yICh2YXIgaSA9IDEsIGogPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGg7IGkgKz0gMiwgaisrKSB7XG4gICAgb3V0cHV0W2pdID0gdGhpcy5lbGVtZW50c1tpXVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG4vKipcbiAqIEEgSlNPTiBzZXJpYWxpemFibGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7TnVtYmVyW119XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmVsZW1lbnRzXG59XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyohXG4gKiBsdW5yLnN0ZW1tZXJcbiAqIENvcHlyaWdodCAoQykgMjAxNyBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqIEluY2x1ZGVzIGNvZGUgZnJvbSAtIGh0dHA6Ly90YXJ0YXJ1cy5vcmcvfm1hcnRpbi9Qb3J0ZXJTdGVtbWVyL2pzLnR4dFxuICovXG5cbi8qKlxuICogbHVuci5zdGVtbWVyIGlzIGFuIGVuZ2xpc2ggbGFuZ3VhZ2Ugc3RlbW1lciwgdGhpcyBpcyBhIEphdmFTY3JpcHRcbiAqIGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb3J0ZXJTdGVtbWVyIHRha2VuIGZyb20gaHR0cDovL3RhcnRhcnVzLm9yZy9+bWFydGluXG4gKlxuICogQHN0YXRpY1xuICogQGltcGxlbWVudHMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn0gdG9rZW4gLSBUaGUgc3RyaW5nIHRvIHN0ZW1cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICogQHNlZSB7QGxpbmsgbHVuci5QaXBlbGluZX1cbiAqL1xubHVuci5zdGVtbWVyID0gKGZ1bmN0aW9uKCl7XG4gIHZhciBzdGVwMmxpc3QgPSB7XG4gICAgICBcImF0aW9uYWxcIiA6IFwiYXRlXCIsXG4gICAgICBcInRpb25hbFwiIDogXCJ0aW9uXCIsXG4gICAgICBcImVuY2lcIiA6IFwiZW5jZVwiLFxuICAgICAgXCJhbmNpXCIgOiBcImFuY2VcIixcbiAgICAgIFwiaXplclwiIDogXCJpemVcIixcbiAgICAgIFwiYmxpXCIgOiBcImJsZVwiLFxuICAgICAgXCJhbGxpXCIgOiBcImFsXCIsXG4gICAgICBcImVudGxpXCIgOiBcImVudFwiLFxuICAgICAgXCJlbGlcIiA6IFwiZVwiLFxuICAgICAgXCJvdXNsaVwiIDogXCJvdXNcIixcbiAgICAgIFwiaXphdGlvblwiIDogXCJpemVcIixcbiAgICAgIFwiYXRpb25cIiA6IFwiYXRlXCIsXG4gICAgICBcImF0b3JcIiA6IFwiYXRlXCIsXG4gICAgICBcImFsaXNtXCIgOiBcImFsXCIsXG4gICAgICBcIml2ZW5lc3NcIiA6IFwiaXZlXCIsXG4gICAgICBcImZ1bG5lc3NcIiA6IFwiZnVsXCIsXG4gICAgICBcIm91c25lc3NcIiA6IFwib3VzXCIsXG4gICAgICBcImFsaXRpXCIgOiBcImFsXCIsXG4gICAgICBcIml2aXRpXCIgOiBcIml2ZVwiLFxuICAgICAgXCJiaWxpdGlcIiA6IFwiYmxlXCIsXG4gICAgICBcImxvZ2lcIiA6IFwibG9nXCJcbiAgICB9LFxuXG4gICAgc3RlcDNsaXN0ID0ge1xuICAgICAgXCJpY2F0ZVwiIDogXCJpY1wiLFxuICAgICAgXCJhdGl2ZVwiIDogXCJcIixcbiAgICAgIFwiYWxpemVcIiA6IFwiYWxcIixcbiAgICAgIFwiaWNpdGlcIiA6IFwiaWNcIixcbiAgICAgIFwiaWNhbFwiIDogXCJpY1wiLFxuICAgICAgXCJmdWxcIiA6IFwiXCIsXG4gICAgICBcIm5lc3NcIiA6IFwiXCJcbiAgICB9LFxuXG4gICAgYyA9IFwiW15hZWlvdV1cIiwgICAgICAgICAgLy8gY29uc29uYW50XG4gICAgdiA9IFwiW2FlaW91eV1cIiwgICAgICAgICAgLy8gdm93ZWxcbiAgICBDID0gYyArIFwiW15hZWlvdXldKlwiLCAgICAvLyBjb25zb25hbnQgc2VxdWVuY2VcbiAgICBWID0gdiArIFwiW2FlaW91XSpcIiwgICAgICAvLyB2b3dlbCBzZXF1ZW5jZVxuXG4gICAgbWdyMCA9IFwiXihcIiArIEMgKyBcIik/XCIgKyBWICsgQywgICAgICAgICAgICAgICAvLyBbQ11WQy4uLiBpcyBtPjBcbiAgICBtZXExID0gXCJeKFwiICsgQyArIFwiKT9cIiArIFYgKyBDICsgXCIoXCIgKyBWICsgXCIpPyRcIiwgIC8vIFtDXVZDW1ZdIGlzIG09MVxuICAgIG1ncjEgPSBcIl4oXCIgKyBDICsgXCIpP1wiICsgViArIEMgKyBWICsgQywgICAgICAgLy8gW0NdVkNWQy4uLiBpcyBtPjFcbiAgICBzX3YgPSBcIl4oXCIgKyBDICsgXCIpP1wiICsgdjsgICAgICAgICAgICAgICAgICAgLy8gdm93ZWwgaW4gc3RlbVxuXG4gIHZhciByZV9tZ3IwID0gbmV3IFJlZ0V4cChtZ3IwKTtcbiAgdmFyIHJlX21ncjEgPSBuZXcgUmVnRXhwKG1ncjEpO1xuICB2YXIgcmVfbWVxMSA9IG5ldyBSZWdFeHAobWVxMSk7XG4gIHZhciByZV9zX3YgPSBuZXcgUmVnRXhwKHNfdik7XG5cbiAgdmFyIHJlXzFhID0gL14oLis/KShzc3xpKWVzJC87XG4gIHZhciByZTJfMWEgPSAvXiguKz8pKFtec10pcyQvO1xuICB2YXIgcmVfMWIgPSAvXiguKz8pZWVkJC87XG4gIHZhciByZTJfMWIgPSAvXiguKz8pKGVkfGluZykkLztcbiAgdmFyIHJlXzFiXzIgPSAvLiQvO1xuICB2YXIgcmUyXzFiXzIgPSAvKGF0fGJsfGl6KSQvO1xuICB2YXIgcmUzXzFiXzIgPSBuZXcgUmVnRXhwKFwiKFteYWVpb3V5bHN6XSlcXFxcMSRcIik7XG4gIHZhciByZTRfMWJfMiA9IG5ldyBSZWdFeHAoXCJeXCIgKyBDICsgdiArIFwiW15hZWlvdXd4eV0kXCIpO1xuXG4gIHZhciByZV8xYyA9IC9eKC4rP1teYWVpb3VdKXkkLztcbiAgdmFyIHJlXzIgPSAvXiguKz8pKGF0aW9uYWx8dGlvbmFsfGVuY2l8YW5jaXxpemVyfGJsaXxhbGxpfGVudGxpfGVsaXxvdXNsaXxpemF0aW9ufGF0aW9ufGF0b3J8YWxpc218aXZlbmVzc3xmdWxuZXNzfG91c25lc3N8YWxpdGl8aXZpdGl8YmlsaXRpfGxvZ2kpJC87XG5cbiAgdmFyIHJlXzMgPSAvXiguKz8pKGljYXRlfGF0aXZlfGFsaXplfGljaXRpfGljYWx8ZnVsfG5lc3MpJC87XG5cbiAgdmFyIHJlXzQgPSAvXiguKz8pKGFsfGFuY2V8ZW5jZXxlcnxpY3xhYmxlfGlibGV8YW50fGVtZW50fG1lbnR8ZW50fG91fGlzbXxhdGV8aXRpfG91c3xpdmV8aXplKSQvO1xuICB2YXIgcmUyXzQgPSAvXiguKz8pKHN8dCkoaW9uKSQvO1xuXG4gIHZhciByZV81ID0gL14oLis/KWUkLztcbiAgdmFyIHJlXzVfMSA9IC9sbCQvO1xuICB2YXIgcmUzXzUgPSBuZXcgUmVnRXhwKFwiXlwiICsgQyArIHYgKyBcIlteYWVpb3V3eHldJFwiKTtcblxuICB2YXIgcG9ydGVyU3RlbW1lciA9IGZ1bmN0aW9uIHBvcnRlclN0ZW1tZXIodykge1xuICAgIHZhciBzdGVtLFxuICAgICAgc3VmZml4LFxuICAgICAgZmlyc3RjaCxcbiAgICAgIHJlLFxuICAgICAgcmUyLFxuICAgICAgcmUzLFxuICAgICAgcmU0O1xuXG4gICAgaWYgKHcubGVuZ3RoIDwgMykgeyByZXR1cm4gdzsgfVxuXG4gICAgZmlyc3RjaCA9IHcuc3Vic3RyKDAsMSk7XG4gICAgaWYgKGZpcnN0Y2ggPT0gXCJ5XCIpIHtcbiAgICAgIHcgPSBmaXJzdGNoLnRvVXBwZXJDYXNlKCkgKyB3LnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICAvLyBTdGVwIDFhXG4gICAgcmUgPSByZV8xYVxuICAgIHJlMiA9IHJlMl8xYTtcblxuICAgIGlmIChyZS50ZXN0KHcpKSB7IHcgPSB3LnJlcGxhY2UocmUsXCIkMSQyXCIpOyB9XG4gICAgZWxzZSBpZiAocmUyLnRlc3QodykpIHsgdyA9IHcucmVwbGFjZShyZTIsXCIkMSQyXCIpOyB9XG5cbiAgICAvLyBTdGVwIDFiXG4gICAgcmUgPSByZV8xYjtcbiAgICByZTIgPSByZTJfMWI7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICByZSA9IHJlX21ncjA7XG4gICAgICBpZiAocmUudGVzdChmcFsxXSkpIHtcbiAgICAgICAgcmUgPSByZV8xYl8yO1xuICAgICAgICB3ID0gdy5yZXBsYWNlKHJlLFwiXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmUyLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlMi5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgcmUyID0gcmVfc192O1xuICAgICAgaWYgKHJlMi50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgICByZTIgPSByZTJfMWJfMjtcbiAgICAgICAgcmUzID0gcmUzXzFiXzI7XG4gICAgICAgIHJlNCA9IHJlNF8xYl8yO1xuICAgICAgICBpZiAocmUyLnRlc3QodykpIHsgdyA9IHcgKyBcImVcIjsgfVxuICAgICAgICBlbHNlIGlmIChyZTMudGVzdCh3KSkgeyByZSA9IHJlXzFiXzI7IHcgPSB3LnJlcGxhY2UocmUsXCJcIik7IH1cbiAgICAgICAgZWxzZSBpZiAocmU0LnRlc3QodykpIHsgdyA9IHcgKyBcImVcIjsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgMWMgLSByZXBsYWNlIHN1ZmZpeCB5IG9yIFkgYnkgaSBpZiBwcmVjZWRlZCBieSBhIG5vbi12b3dlbCB3aGljaCBpcyBub3QgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgd29yZCAoc28gY3J5IC0+IGNyaSwgYnkgLT4gYnksIHNheSAtPiBzYXkpXG4gICAgcmUgPSByZV8xYztcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHcgPSBzdGVtICsgXCJpXCI7XG4gICAgfVxuXG4gICAgLy8gU3RlcCAyXG4gICAgcmUgPSByZV8yO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgc3VmZml4ID0gZnBbMl07XG4gICAgICByZSA9IHJlX21ncjA7XG4gICAgICBpZiAocmUudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbSArIHN0ZXAybGlzdFtzdWZmaXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgM1xuICAgIHJlID0gcmVfMztcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHN1ZmZpeCA9IGZwWzJdO1xuICAgICAgcmUgPSByZV9tZ3IwO1xuICAgICAgaWYgKHJlLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW0gKyBzdGVwM2xpc3Rbc3VmZml4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDRcbiAgICByZSA9IHJlXzQ7XG4gICAgcmUyID0gcmUyXzQ7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICByZSA9IHJlX21ncjE7XG4gICAgICBpZiAocmUudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlMi50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZTIuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXSArIGZwWzJdO1xuICAgICAgcmUyID0gcmVfbWdyMTtcbiAgICAgIGlmIChyZTIudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGVwIDVcbiAgICByZSA9IHJlXzU7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICByZSA9IHJlX21ncjE7XG4gICAgICByZTIgPSByZV9tZXExO1xuICAgICAgcmUzID0gcmUzXzU7XG4gICAgICBpZiAocmUudGVzdChzdGVtKSB8fCAocmUyLnRlc3Qoc3RlbSkgJiYgIShyZTMudGVzdChzdGVtKSkpKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlID0gcmVfNV8xO1xuICAgIHJlMiA9IHJlX21ncjE7XG4gICAgaWYgKHJlLnRlc3QodykgJiYgcmUyLnRlc3QodykpIHtcbiAgICAgIHJlID0gcmVfMWJfMjtcbiAgICAgIHcgPSB3LnJlcGxhY2UocmUsXCJcIik7XG4gICAgfVxuXG4gICAgLy8gYW5kIHR1cm4gaW5pdGlhbCBZIGJhY2sgdG8geVxuXG4gICAgaWYgKGZpcnN0Y2ggPT0gXCJ5XCIpIHtcbiAgICAgIHcgPSBmaXJzdGNoLnRvTG93ZXJDYXNlKCkgKyB3LnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdztcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuLnVwZGF0ZShwb3J0ZXJTdGVtbWVyKTtcbiAgfVxufSkoKTtcblxubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uKGx1bnIuc3RlbW1lciwgJ3N0ZW1tZXInKVxuLyohXG4gKiBsdW5yLnN0b3BXb3JkRmlsdGVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBsdW5yLmdlbmVyYXRlU3RvcFdvcmRGaWx0ZXIgYnVpbGRzIGEgc3RvcFdvcmRGaWx0ZXIgZnVuY3Rpb24gZnJvbSB0aGUgcHJvdmlkZWRcbiAqIGxpc3Qgb2Ygc3RvcCB3b3Jkcy5cbiAqXG4gKiBUaGUgYnVpbHQgaW4gbHVuci5zdG9wV29yZEZpbHRlciBpcyBidWlsdCB1c2luZyB0aGlzIGdlbmVyYXRvciBhbmQgY2FuIGJlIHVzZWRcbiAqIHRvIGdlbmVyYXRlIGN1c3RvbSBzdG9wV29yZEZpbHRlcnMgZm9yIGFwcGxpY2F0aW9ucyBvciBub24gRW5nbGlzaCBsYW5ndWFnZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdG9rZW4gVGhlIHRva2VuIHRvIHBhc3MgdGhyb3VnaCB0aGUgZmlsdGVyXG4gKiBAcmV0dXJucyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHNlZSBsdW5yLlBpcGVsaW5lXG4gKiBAc2VlIGx1bnIuc3RvcFdvcmRGaWx0ZXJcbiAqL1xubHVuci5nZW5lcmF0ZVN0b3BXb3JkRmlsdGVyID0gZnVuY3Rpb24gKHN0b3BXb3Jkcykge1xuICB2YXIgd29yZHMgPSBzdG9wV29yZHMucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBzdG9wV29yZCkge1xuICAgIG1lbW9bc3RvcFdvcmRdID0gc3RvcFdvcmRcbiAgICByZXR1cm4gbWVtb1xuICB9LCB7fSlcblxuICByZXR1cm4gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgaWYgKHRva2VuICYmIHdvcmRzW3Rva2VuLnRvU3RyaW5nKCldICE9PSB0b2tlbi50b1N0cmluZygpKSByZXR1cm4gdG9rZW5cbiAgfVxufVxuXG4vKipcbiAqIGx1bnIuc3RvcFdvcmRGaWx0ZXIgaXMgYW4gRW5nbGlzaCBsYW5ndWFnZSBzdG9wIHdvcmQgbGlzdCBmaWx0ZXIsIGFueSB3b3Jkc1xuICogY29udGFpbmVkIGluIHRoZSBsaXN0IHdpbGwgbm90IGJlIHBhc3NlZCB0aHJvdWdoIHRoZSBmaWx0ZXIuXG4gKlxuICogVGhpcyBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluIHRoZSBQaXBlbGluZS4gSWYgdGhlIHRva2VuIGRvZXMgbm90IHBhc3MgdGhlXG4gKiBmaWx0ZXIgdGhlbiB1bmRlZmluZWQgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBAaW1wbGVtZW50cyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHBhcmFtcyB7bHVuci5Ub2tlbn0gdG9rZW4gLSBBIHRva2VuIHRvIGNoZWNrIGZvciBiZWluZyBhIHN0b3Agd29yZC5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICogQHNlZSB7QGxpbmsgbHVuci5QaXBlbGluZX1cbiAqL1xubHVuci5zdG9wV29yZEZpbHRlciA9IGx1bnIuZ2VuZXJhdGVTdG9wV29yZEZpbHRlcihbXG4gICdhJyxcbiAgJ2FibGUnLFxuICAnYWJvdXQnLFxuICAnYWNyb3NzJyxcbiAgJ2FmdGVyJyxcbiAgJ2FsbCcsXG4gICdhbG1vc3QnLFxuICAnYWxzbycsXG4gICdhbScsXG4gICdhbW9uZycsXG4gICdhbicsXG4gICdhbmQnLFxuICAnYW55JyxcbiAgJ2FyZScsXG4gICdhcycsXG4gICdhdCcsXG4gICdiZScsXG4gICdiZWNhdXNlJyxcbiAgJ2JlZW4nLFxuICAnYnV0JyxcbiAgJ2J5JyxcbiAgJ2NhbicsXG4gICdjYW5ub3QnLFxuICAnY291bGQnLFxuICAnZGVhcicsXG4gICdkaWQnLFxuICAnZG8nLFxuICAnZG9lcycsXG4gICdlaXRoZXInLFxuICAnZWxzZScsXG4gICdldmVyJyxcbiAgJ2V2ZXJ5JyxcbiAgJ2ZvcicsXG4gICdmcm9tJyxcbiAgJ2dldCcsXG4gICdnb3QnLFxuICAnaGFkJyxcbiAgJ2hhcycsXG4gICdoYXZlJyxcbiAgJ2hlJyxcbiAgJ2hlcicsXG4gICdoZXJzJyxcbiAgJ2hpbScsXG4gICdoaXMnLFxuICAnaG93JyxcbiAgJ2hvd2V2ZXInLFxuICAnaScsXG4gICdpZicsXG4gICdpbicsXG4gICdpbnRvJyxcbiAgJ2lzJyxcbiAgJ2l0JyxcbiAgJ2l0cycsXG4gICdqdXN0JyxcbiAgJ2xlYXN0JyxcbiAgJ2xldCcsXG4gICdsaWtlJyxcbiAgJ2xpa2VseScsXG4gICdtYXknLFxuICAnbWUnLFxuICAnbWlnaHQnLFxuICAnbW9zdCcsXG4gICdtdXN0JyxcbiAgJ215JyxcbiAgJ25laXRoZXInLFxuICAnbm8nLFxuICAnbm9yJyxcbiAgJ25vdCcsXG4gICdvZicsXG4gICdvZmYnLFxuICAnb2Z0ZW4nLFxuICAnb24nLFxuICAnb25seScsXG4gICdvcicsXG4gICdvdGhlcicsXG4gICdvdXInLFxuICAnb3duJyxcbiAgJ3JhdGhlcicsXG4gICdzYWlkJyxcbiAgJ3NheScsXG4gICdzYXlzJyxcbiAgJ3NoZScsXG4gICdzaG91bGQnLFxuICAnc2luY2UnLFxuICAnc28nLFxuICAnc29tZScsXG4gICd0aGFuJyxcbiAgJ3RoYXQnLFxuICAndGhlJyxcbiAgJ3RoZWlyJyxcbiAgJ3RoZW0nLFxuICAndGhlbicsXG4gICd0aGVyZScsXG4gICd0aGVzZScsXG4gICd0aGV5JyxcbiAgJ3RoaXMnLFxuICAndGlzJyxcbiAgJ3RvJyxcbiAgJ3RvbycsXG4gICd0d2FzJyxcbiAgJ3VzJyxcbiAgJ3dhbnRzJyxcbiAgJ3dhcycsXG4gICd3ZScsXG4gICd3ZXJlJyxcbiAgJ3doYXQnLFxuICAnd2hlbicsXG4gICd3aGVyZScsXG4gICd3aGljaCcsXG4gICd3aGlsZScsXG4gICd3aG8nLFxuICAnd2hvbScsXG4gICd3aHknLFxuICAnd2lsbCcsXG4gICd3aXRoJyxcbiAgJ3dvdWxkJyxcbiAgJ3lldCcsXG4gICd5b3UnLFxuICAneW91cidcbl0pXG5cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbihsdW5yLnN0b3BXb3JkRmlsdGVyLCAnc3RvcFdvcmRGaWx0ZXInKVxuLyohXG4gKiBsdW5yLnRyaW1tZXJcbiAqIENvcHlyaWdodCAoQykgMjAxNyBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIGx1bnIudHJpbW1lciBpcyBhIHBpcGVsaW5lIGZ1bmN0aW9uIGZvciB0cmltbWluZyBub24gd29yZFxuICogY2hhcmFjdGVycyBmcm9tIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiB0b2tlbnMgYmVmb3JlIHRoZXlcbiAqIGVudGVyIHRoZSBpbmRleC5cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIG1heSBub3Qgd29yayBjb3JyZWN0bHkgZm9yIG5vbiBsYXRpblxuICogY2hhcmFjdGVycyBhbmQgc2hvdWxkIGVpdGhlciBiZSByZW1vdmVkIG9yIGFkYXB0ZWQgZm9yIHVzZVxuICogd2l0aCBsYW5ndWFnZXMgd2l0aCBub24tbGF0aW4gY2hhcmFjdGVycy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAaW1wbGVtZW50cyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHBhcmFtIHtsdW5yLlRva2VufSB0b2tlbiBUaGUgdG9rZW4gdG8gcGFzcyB0aHJvdWdoIHRoZSBmaWx0ZXJcbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICogQHNlZSBsdW5yLlBpcGVsaW5lXG4gKi9cbmx1bnIudHJpbW1lciA9IGZ1bmN0aW9uICh0b2tlbikge1xuICByZXR1cm4gdG9rZW4udXBkYXRlKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXlxcVysvLCAnJykucmVwbGFjZSgvXFxXKyQvLCAnJylcbiAgfSlcbn1cblxubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uKGx1bnIudHJpbW1lciwgJ3RyaW1tZXInKVxuLyohXG4gKiBsdW5yLlRva2VuU2V0XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIHRva2VuIHNldCBpcyB1c2VkIHRvIHN0b3JlIHRoZSB1bmlxdWUgbGlzdCBvZiBhbGwgdG9rZW5zXG4gKiB3aXRoaW4gYW4gaW5kZXguIFRva2VuIHNldHMgYXJlIGFsc28gdXNlZCB0byByZXByZXNlbnQgYW5cbiAqIGluY29taW5nIHF1ZXJ5IHRvIHRoZSBpbmRleCwgdGhpcyBxdWVyeSB0b2tlbiBzZXQgYW5kIGluZGV4XG4gKiB0b2tlbiBzZXQgYXJlIHRoZW4gaW50ZXJzZWN0ZWQgdG8gZmluZCB3aGljaCB0b2tlbnMgdG8gbG9va1xuICogdXAgaW4gdGhlIGludmVydGVkIGluZGV4LlxuICpcbiAqIEEgdG9rZW4gc2V0IGNhbiBob2xkIG11bHRpcGxlIHRva2VucywgYXMgaW4gdGhlIGNhc2Ugb2YgdGhlXG4gKiBpbmRleCB0b2tlbiBzZXQsIG9yIGl0IGNhbiBob2xkIGEgc2luZ2xlIHRva2VuIGFzIGluIHRoZVxuICogY2FzZSBvZiBhIHNpbXBsZSBxdWVyeSB0b2tlbiBzZXQuXG4gKlxuICogQWRkaXRpb25hbGx5IHRva2VuIHNldHMgYXJlIHVzZWQgdG8gcGVyZm9ybSB3aWxkY2FyZCBtYXRjaGluZy5cbiAqIExlYWRpbmcsIGNvbnRhaW5lZCBhbmQgdHJhaWxpbmcgd2lsZGNhcmRzIGFyZSBzdXBwb3J0ZWQsIGFuZFxuICogZnJvbSB0aGlzIGVkaXQgZGlzdGFuY2UgbWF0Y2hpbmcgY2FuIGFsc28gYmUgcHJvdmlkZWQuXG4gKlxuICogVG9rZW4gc2V0cyBhcmUgaW1wbGVtZW50ZWQgYXMgYSBtaW5pbWFsIGZpbml0ZSBzdGF0ZSBhdXRvbWF0YSxcbiAqIHdoZXJlIGJvdGggY29tbW9uIHByZWZpeGVzIGFuZCBzdWZmaXhlcyBhcmUgc2hhcmVkIGJldHdlZW4gdG9rZW5zLlxuICogVGhpcyBoZWxwcyB0byByZWR1Y2UgdGhlIHNwYWNlIHVzZWQgZm9yIHN0b3JpbmcgdGhlIHRva2VuIHNldC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xubHVuci5Ub2tlblNldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5maW5hbCA9IGZhbHNlXG4gIHRoaXMuZWRnZXMgPSB7fVxuICB0aGlzLmlkID0gbHVuci5Ub2tlblNldC5fbmV4dElkXG4gIGx1bnIuVG9rZW5TZXQuX25leHRJZCArPSAxXG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIG5leHQsIGF1dG8gaW5jcmVtZW50LCBpZGVudGlmaWVyIHRvIGFzc2lnblxuICogdG8gYSBuZXcgdG9rZW5TZXQuXG4gKlxuICogVG9rZW5TZXRzIHJlcXVpcmUgYSB1bmlxdWUgaWRlbnRpZmllciB0byBiZSBjb3JyZWN0bHkgbWluaW1pc2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuVG9rZW5TZXQuX25leHRJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGVzIGEgVG9rZW5TZXQgaW5zdGFuY2UgZnJvbSB0aGUgZ2l2ZW4gc29ydGVkIGFycmF5IG9mIHdvcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nW119IGFyciAtIEEgc29ydGVkIGFycmF5IG9mIHN0cmluZ3MgdG8gY3JlYXRlIHRoZSBzZXQgZnJvbS5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuU2V0fVxuICogQHRocm93cyBXaWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBpbnB1dCBhcnJheSBpcyBub3Qgc29ydGVkLlxuICovXG5sdW5yLlRva2VuU2V0LmZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgdmFyIGJ1aWxkZXIgPSBuZXcgbHVuci5Ub2tlblNldC5CdWlsZGVyXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGJ1aWxkZXIuaW5zZXJ0KGFycltpXSlcbiAgfVxuXG4gIGJ1aWxkZXIuZmluaXNoKClcbiAgcmV0dXJuIGJ1aWxkZXIucm9vdFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0b2tlbiBzZXQgZnJvbSBhIHF1ZXJ5IGNsYXVzZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNsYXVzZSAtIEEgc2luZ2xlIGNsYXVzZSBmcm9tIGx1bnIuUXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhdXNlLnRlcm0gLSBUaGUgcXVlcnkgY2xhdXNlIHRlcm0uXG4gKiBAcGFyYW0ge251bWJlcn0gW2NsYXVzZS5lZGl0RGlzdGFuY2VdIC0gVGhlIG9wdGlvbmFsIGVkaXQgZGlzdGFuY2UgZm9yIHRoZSB0ZXJtLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbUNsYXVzZSA9IGZ1bmN0aW9uIChjbGF1c2UpIHtcbiAgaWYgKCdlZGl0RGlzdGFuY2UnIGluIGNsYXVzZSkge1xuICAgIHJldHVybiBsdW5yLlRva2VuU2V0LmZyb21GdXp6eVN0cmluZyhjbGF1c2UudGVybSwgY2xhdXNlLmVkaXREaXN0YW5jZSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbHVuci5Ub2tlblNldC5mcm9tU3RyaW5nKGNsYXVzZS50ZXJtKVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRva2VuIHNldCByZXByZXNlbnRpbmcgYSBzaW5nbGUgc3RyaW5nIHdpdGggYSBzcGVjaWZpZWRcbiAqIGVkaXQgZGlzdGFuY2UuXG4gKlxuICogSW5zZXJ0aW9ucywgZGVsZXRpb25zLCBzdWJzdGl0dXRpb25zIGFuZCB0cmFuc3Bvc2l0aW9ucyBhcmUgZWFjaFxuICogdHJlYXRlZCBhcyBhbiBlZGl0IGRpc3RhbmNlIG9mIDEuXG4gKlxuICogSW5jcmVhc2luZyB0aGUgYWxsb3dlZCBlZGl0IGRpc3RhbmNlIHdpbGwgaGF2ZSBhIGRyYW1hdGljIGltcGFjdFxuICogb24gdGhlIHBlcmZvcm1hbmNlIG9mIGJvdGggY3JlYXRpbmcgYW5kIGludGVyc2VjdGluZyB0aGVzZSBUb2tlblNldHMuXG4gKiBJdCBpcyBhZHZpc2VkIHRvIGtlZXAgdGhlIGVkaXQgZGlzdGFuY2UgbGVzcyB0aGFuIDMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gY3JlYXRlIHRoZSB0b2tlbiBzZXQgZnJvbS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlZGl0RGlzdGFuY2UgLSBUaGUgYWxsb3dlZCBlZGl0IGRpc3RhbmNlIHRvIG1hdGNoLlxuICogQHJldHVybnMge2x1bnIuVmVjdG9yfVxuICovXG5sdW5yLlRva2VuU2V0LmZyb21GdXp6eVN0cmluZyA9IGZ1bmN0aW9uIChzdHIsIGVkaXREaXN0YW5jZSkge1xuICB2YXIgcm9vdCA9IG5ldyBsdW5yLlRva2VuU2V0XG5cbiAgdmFyIHN0YWNrID0gW3tcbiAgICBub2RlOiByb290LFxuICAgIGVkaXRzUmVtYWluaW5nOiBlZGl0RGlzdGFuY2UsXG4gICAgc3RyOiBzdHJcbiAgfV1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgdmFyIGZyYW1lID0gc3RhY2sucG9wKClcblxuICAgIC8vIG5vIGVkaXRcbiAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBjaGFyID0gZnJhbWUuc3RyLmNoYXJBdCgwKSxcbiAgICAgICAgICBub0VkaXROb2RlXG5cbiAgICAgIGlmIChjaGFyIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgbm9FZGl0Tm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbY2hhcl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vRWRpdE5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJdID0gbm9FZGl0Tm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIG5vRWRpdE5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICBub2RlOiBub0VkaXROb2RlLFxuICAgICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyxcbiAgICAgICAgICBzdHI6IGZyYW1lLnN0ci5zbGljZSgxKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRlbGV0aW9uXG4gICAgLy8gY2FuIG9ubHkgZG8gYSBkZWxldGlvbiBpZiB3ZSBoYXZlIGVub3VnaCBlZGl0cyByZW1haW5pbmdcbiAgICAvLyBhbmQgaWYgdGhlcmUgYXJlIGNoYXJhY3RlcnMgbGVmdCB0byBkZWxldGUgaW4gdGhlIHN0cmluZ1xuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDAgJiYgZnJhbWUuc3RyLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBjaGFyID0gZnJhbWUuc3RyLmNoYXJBdCgxKSxcbiAgICAgICAgICBkZWxldGlvbk5vZGVcblxuICAgICAgaWYgKGNoYXIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICBkZWxldGlvbk5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGlvbk5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJdID0gZGVsZXRpb25Ob2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgZGVsZXRpb25Ob2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogZGVsZXRpb25Ob2RlLFxuICAgICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgICAgc3RyOiBmcmFtZS5zdHIuc2xpY2UoMilcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkZWxldGlvblxuICAgIC8vIGp1c3QgcmVtb3ZpbmcgdGhlIGxhc3QgY2hhcmFjdGVyIGZyb20gdGhlIHN0clxuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDAgJiYgZnJhbWUuc3RyLmxlbmd0aCA9PSAxKSB7XG4gICAgICBmcmFtZS5ub2RlLmZpbmFsID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIHN1YnN0aXR1dGlvblxuICAgIC8vIGNhbiBvbmx5IGRvIGEgc3Vic3RpdHV0aW9uIGlmIHdlIGhhdmUgZW5vdWdoIGVkaXRzIHJlbWFpbmluZ1xuICAgIC8vIGFuZCBpZiB0aGVyZSBhcmUgY2hhcmFjdGVycyBsZWZ0IHRvIHN1YnN0aXR1dGVcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwICYmIGZyYW1lLnN0ci5sZW5ndGggPj0gMSkge1xuICAgICAgaWYgKFwiKlwiIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgdmFyIHN1YnN0aXR1dGlvbk5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN1YnN0aXR1dGlvbk5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXSA9IHN1YnN0aXR1dGlvbk5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgICBzdWJzdGl0dXRpb25Ob2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgbm9kZTogc3Vic3RpdHV0aW9uTm9kZSxcbiAgICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcgLSAxLFxuICAgICAgICAgIHN0cjogZnJhbWUuc3RyLnNsaWNlKDEpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW5zZXJ0aW9uXG4gICAgLy8gY2FuIG9ubHkgZG8gaW5zZXJ0aW9uIGlmIHRoZXJlIGFyZSBlZGl0cyByZW1haW5pbmdcbiAgICBpZiAoZnJhbWUuZWRpdHNSZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoXCIqXCIgaW4gZnJhbWUubm9kZS5lZGdlcykge1xuICAgICAgICB2YXIgaW5zZXJ0aW9uTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW5zZXJ0aW9uTm9kZSA9IG5ldyBsdW5yLlRva2VuU2V0XG4gICAgICAgIGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdID0gaW5zZXJ0aW9uTm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGluc2VydGlvbk5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICBub2RlOiBpbnNlcnRpb25Ob2RlLFxuICAgICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgICAgc3RyOiBmcmFtZS5zdHJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0cmFuc3Bvc2l0aW9uXG4gICAgLy8gY2FuIG9ubHkgZG8gYSB0cmFuc3Bvc2l0aW9uIGlmIHRoZXJlIGFyZSBlZGl0cyByZW1haW5pbmdcbiAgICAvLyBhbmQgdGhlcmUgYXJlIGVub3VnaCBjaGFyYWN0ZXJzIHRvIHRyYW5zcG9zZVxuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA+IDAgJiYgZnJhbWUuc3RyLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBjaGFyQSA9IGZyYW1lLnN0ci5jaGFyQXQoMCksXG4gICAgICAgICAgY2hhckIgPSBmcmFtZS5zdHIuY2hhckF0KDEpLFxuICAgICAgICAgIHRyYW5zcG9zZU5vZGVcblxuICAgICAgaWYgKGNoYXJCIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgdHJhbnNwb3NlTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbY2hhckJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc3Bvc2VOb2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tjaGFyQl0gPSB0cmFuc3Bvc2VOb2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgdHJhbnNwb3NlTm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIG5vZGU6IHRyYW5zcG9zZU5vZGUsXG4gICAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgICAgICBzdHI6IGNoYXJBICsgZnJhbWUuc3RyLnNsaWNlKDIpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJvb3Rcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgVG9rZW5TZXQgZnJvbSBhIHN0cmluZy5cbiAqXG4gKiBUaGUgc3RyaW5nIG1heSBjb250YWluIG9uZSBvciBtb3JlIHdpbGRjYXJkIGNoYXJhY3RlcnMgKCopXG4gKiB0aGF0IHdpbGwgYWxsb3cgd2lsZGNhcmQgbWF0Y2hpbmcgd2hlbiBpbnRlcnNlY3Rpbmcgd2l0aFxuICogYW5vdGhlciBUb2tlblNldC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBjcmVhdGUgYSBUb2tlblNldCBmcm9tLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIG5vZGUgPSBuZXcgbHVuci5Ub2tlblNldCxcbiAgICAgIHJvb3QgPSBub2RlLFxuICAgICAgd2lsZGNhcmRGb3VuZCA9IGZhbHNlXG5cbiAgLypcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCBhbGwgY2hhcmFjdGVycyB3aXRoaW4gdGhlIHBhc3NlZCBzdHJpbmdcbiAgICogYXBwZW5kaW5nIGEgbm9kZSBmb3IgZWFjaCBjaGFyYWN0ZXIuXG4gICAqXG4gICAqIEFzIHNvb24gYXMgYSB3aWxkY2FyZCBjaGFyYWN0ZXIgaXMgZm91bmQgdGhlbiBhIHNlbGZcbiAgICogcmVmZXJlbmNpbmcgZWRnZSBpcyBpbnRyb2R1Y2VkIHRvIGNvbnRpbnVhbGx5IG1hdGNoXG4gICAqIGFueSBudW1iZXIgb2YgYW55IGNoYXJhY3RlcnMuXG4gICAqL1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGNoYXIgPSBzdHJbaV0sXG4gICAgICAgIGZpbmFsID0gKGkgPT0gbGVuIC0gMSlcblxuICAgIGlmIChjaGFyID09IFwiKlwiKSB7XG4gICAgICB3aWxkY2FyZEZvdW5kID0gdHJ1ZVxuICAgICAgbm9kZS5lZGdlc1tjaGFyXSA9IG5vZGVcbiAgICAgIG5vZGUuZmluYWwgPSBmaW5hbFxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuZXh0ID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgIG5leHQuZmluYWwgPSBmaW5hbFxuXG4gICAgICBub2RlLmVkZ2VzW2NoYXJdID0gbmV4dFxuICAgICAgbm9kZSA9IG5leHRcblxuICAgICAgLy8gVE9ETzogaXMgdGhpcyBuZWVkZWQgYW55bW9yZT9cbiAgICAgIGlmICh3aWxkY2FyZEZvdW5kKSB7XG4gICAgICAgIG5vZGUuZWRnZXNbXCIqXCJdID0gcm9vdFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByb290XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhpcyBUb2tlblNldCBpbnRvIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAqIGNvbnRhaW5lZCB3aXRoaW4gdGhlIFRva2VuU2V0LlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAqL1xubHVuci5Ub2tlblNldC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHdvcmRzID0gW11cblxuICB2YXIgc3RhY2sgPSBbe1xuICAgIHByZWZpeDogXCJcIixcbiAgICBub2RlOiB0aGlzXG4gIH1dXG5cbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgIHZhciBmcmFtZSA9IHN0YWNrLnBvcCgpLFxuICAgICAgICBlZGdlcyA9IE9iamVjdC5rZXlzKGZyYW1lLm5vZGUuZWRnZXMpLFxuICAgICAgICBsZW4gPSBlZGdlcy5sZW5ndGhcblxuICAgIGlmIChmcmFtZS5ub2RlLmZpbmFsKSB7XG4gICAgICB3b3Jkcy5wdXNoKGZyYW1lLnByZWZpeClcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldXG5cbiAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICBwcmVmaXg6IGZyYW1lLnByZWZpeC5jb25jYXQoZWRnZSksXG4gICAgICAgIG5vZGU6IGZyYW1lLm5vZGUuZWRnZXNbZWRnZV1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdvcmRzXG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgVG9rZW5TZXQuXG4gKlxuICogVGhpcyBpcyBpbnRlbmRlZCB0byBhbGxvdyBUb2tlblNldHMgdG8gYmUgdXNlZCBhcyBrZXlzXG4gKiBpbiBvYmplY3RzLCBsYXJnZWx5IHRvIGFpZCB0aGUgY29uc3RydWN0aW9uIGFuZCBtaW5pbWlzYXRpb25cbiAqIG9mIGEgVG9rZW5TZXQuIEFzIHN1Y2ggaXQgaXMgbm90IGRlc2lnbmVkIHRvIGJlIGEgaHVtYW5cbiAqIGZyaWVuZGx5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBUb2tlblNldC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5sdW5yLlRva2VuU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gTk9URTogVXNpbmcgT2JqZWN0LmtleXMgaGVyZSBhcyB0aGlzLmVkZ2VzIGlzIHZlcnkgbGlrZWx5XG4gIC8vIHRvIGVudGVyICdoYXNoLW1vZGUnIHdpdGggbWFueSBrZXlzIGJlaW5nIGFkZGVkXG4gIC8vXG4gIC8vIGF2b2lkaW5nIGEgZm9yLWluIGxvb3AgaGVyZSBhcyBpdCBsZWFkcyB0byB0aGUgZnVuY3Rpb25cbiAgLy8gYmVpbmcgZGUtb3B0aW1pc2VkIChhdCBsZWFzdCBpbiBWOCkuIEZyb20gc29tZSBzaW1wbGVcbiAgLy8gYmVuY2htYXJrcyB0aGUgcGVyZm9ybWFuY2UgaXMgY29tcGFyYWJsZSwgYnV0IGFsbG93aW5nXG4gIC8vIFY4IHRvIG9wdGltaXplIG1heSBtZWFuIGVhc3kgcGVyZm9ybWFuY2Ugd2lucyBpbiB0aGUgZnV0dXJlLlxuXG4gIGlmICh0aGlzLl9zdHIpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyXG4gIH1cblxuICB2YXIgc3RyID0gdGhpcy5maW5hbCA/ICcxJyA6ICcwJyxcbiAgICAgIGxhYmVscyA9IE9iamVjdC5rZXlzKHRoaXMuZWRnZXMpLnNvcnQoKSxcbiAgICAgIGxlbiA9IGxhYmVscy5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGxhYmVsID0gbGFiZWxzW2ldLFxuICAgICAgICBub2RlID0gdGhpcy5lZGdlc1tsYWJlbF1cblxuICAgIHN0ciA9IHN0ciArIGxhYmVsICsgbm9kZS5pZFxuICB9XG5cbiAgcmV0dXJuIHN0clxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgVG9rZW5TZXQgdGhhdCBpcyB0aGUgaW50ZXJzZWN0aW9uIG9mXG4gKiB0aGlzIFRva2VuU2V0IGFuZCB0aGUgcGFzc2VkIFRva2VuU2V0LlxuICpcbiAqIFRoaXMgaW50ZXJzZWN0aW9uIHdpbGwgdGFrZSBpbnRvIGFjY291bnQgYW55IHdpbGRjYXJkc1xuICogY29udGFpbmVkIHdpdGhpbiB0aGUgVG9rZW5TZXQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlRva2VuU2V0fSBiIC0gQW4gb3RoZXIgVG9rZW5TZXQgdG8gaW50ZXJzZWN0IHdpdGguXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlblNldH1cbiAqL1xubHVuci5Ub2tlblNldC5wcm90b3R5cGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24gKGIpIHtcbiAgdmFyIG91dHB1dCA9IG5ldyBsdW5yLlRva2VuU2V0LFxuICAgICAgZnJhbWUgPSB1bmRlZmluZWRcblxuICB2YXIgc3RhY2sgPSBbe1xuICAgIHFOb2RlOiBiLFxuICAgIG91dHB1dDogb3V0cHV0LFxuICAgIG5vZGU6IHRoaXNcbiAgfV1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgZnJhbWUgPSBzdGFjay5wb3AoKVxuXG4gICAgLy8gTk9URTogQXMgd2l0aCB0aGUgI3RvU3RyaW5nIG1ldGhvZCwgd2UgYXJlIHVzaW5nXG4gICAgLy8gT2JqZWN0LmtleXMgYW5kIGEgZm9yIGxvb3AgaW5zdGVhZCBvZiBhIGZvci1pbiBsb29wXG4gICAgLy8gYXMgYm90aCBvZiB0aGVzZSBvYmplY3RzIGVudGVyICdoYXNoJyBtb2RlLCBjYXVzaW5nXG4gICAgLy8gdGhlIGZ1bmN0aW9uIHRvIGJlIGRlLW9wdGltaXNlZCBpbiBWOFxuICAgIHZhciBxRWRnZXMgPSBPYmplY3Qua2V5cyhmcmFtZS5xTm9kZS5lZGdlcyksXG4gICAgICAgIHFMZW4gPSBxRWRnZXMubGVuZ3RoLFxuICAgICAgICBuRWRnZXMgPSBPYmplY3Qua2V5cyhmcmFtZS5ub2RlLmVkZ2VzKSxcbiAgICAgICAgbkxlbiA9IG5FZGdlcy5sZW5ndGhcblxuICAgIGZvciAodmFyIHEgPSAwOyBxIDwgcUxlbjsgcSsrKSB7XG4gICAgICB2YXIgcUVkZ2UgPSBxRWRnZXNbcV1cblxuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBuTGVuOyBuKyspIHtcbiAgICAgICAgdmFyIG5FZGdlID0gbkVkZ2VzW25dXG5cbiAgICAgICAgaWYgKG5FZGdlID09IHFFZGdlIHx8IHFFZGdlID09ICcqJykge1xuICAgICAgICAgIHZhciBub2RlID0gZnJhbWUubm9kZS5lZGdlc1tuRWRnZV0sXG4gICAgICAgICAgICAgIHFOb2RlID0gZnJhbWUucU5vZGUuZWRnZXNbcUVkZ2VdLFxuICAgICAgICAgICAgICBmaW5hbCA9IG5vZGUuZmluYWwgJiYgcU5vZGUuZmluYWwsXG4gICAgICAgICAgICAgIG5leHQgPSB1bmRlZmluZWRcblxuICAgICAgICAgIGlmIChuRWRnZSBpbiBmcmFtZS5vdXRwdXQuZWRnZXMpIHtcbiAgICAgICAgICAgIC8vIGFuIGVkZ2UgYWxyZWFkeSBleGlzdHMgZm9yIHRoaXMgY2hhcmFjdGVyXG4gICAgICAgICAgICAvLyBubyBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBub2RlLCBqdXN0IHNldCB0aGUgZmluYWxpdHlcbiAgICAgICAgICAgIC8vIGJpdCB1bmxlc3MgdGhpcyBub2RlIGlzIGFscmVhZHkgZmluYWxcbiAgICAgICAgICAgIG5leHQgPSBmcmFtZS5vdXRwdXQuZWRnZXNbbkVkZ2VdXG4gICAgICAgICAgICBuZXh0LmZpbmFsID0gbmV4dC5maW5hbCB8fCBmaW5hbFxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIGVkZ2UgZXhpc3RzIHlldCwgbXVzdCBjcmVhdGUgb25lXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGZpbmFsaXR5IGJpdCBhbmQgaW5zZXJ0IGl0XG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBvdXRwdXRcbiAgICAgICAgICAgIG5leHQgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICAgICAgbmV4dC5maW5hbCA9IGZpbmFsXG4gICAgICAgICAgICBmcmFtZS5vdXRwdXQuZWRnZXNbbkVkZ2VdID0gbmV4dFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgICAgcU5vZGU6IHFOb2RlLFxuICAgICAgICAgICAgb3V0cHV0OiBuZXh0LFxuICAgICAgICAgICAgbm9kZTogbm9kZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59XG5sdW5yLlRva2VuU2V0LkJ1aWxkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucHJldmlvdXNXb3JkID0gXCJcIlxuICB0aGlzLnJvb3QgPSBuZXcgbHVuci5Ub2tlblNldFxuICB0aGlzLnVuY2hlY2tlZE5vZGVzID0gW11cbiAgdGhpcy5taW5pbWl6ZWROb2RlcyA9IHt9XG59XG5cbmx1bnIuVG9rZW5TZXQuQnVpbGRlci5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKHdvcmQpIHtcbiAgdmFyIG5vZGUsXG4gICAgICBjb21tb25QcmVmaXggPSAwXG5cbiAgaWYgKHdvcmQgPCB0aGlzLnByZXZpb3VzV29yZCkge1xuICAgIHRocm93IG5ldyBFcnJvciAoXCJPdXQgb2Ygb3JkZXIgd29yZCBpbnNlcnRpb25cIilcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZC5sZW5ndGggJiYgaSA8IHRoaXMucHJldmlvdXNXb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHdvcmRbaV0gIT0gdGhpcy5wcmV2aW91c1dvcmRbaV0pIGJyZWFrXG4gICAgY29tbW9uUHJlZml4KytcbiAgfVxuXG4gIHRoaXMubWluaW1pemUoY29tbW9uUHJlZml4KVxuXG4gIGlmICh0aGlzLnVuY2hlY2tlZE5vZGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgbm9kZSA9IHRoaXMucm9vdFxuICB9IGVsc2Uge1xuICAgIG5vZGUgPSB0aGlzLnVuY2hlY2tlZE5vZGVzW3RoaXMudW5jaGVja2VkTm9kZXMubGVuZ3RoIC0gMV0uY2hpbGRcbiAgfVxuXG4gIGZvciAodmFyIGkgPSBjb21tb25QcmVmaXg7IGkgPCB3b3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5leHROb2RlID0gbmV3IGx1bnIuVG9rZW5TZXQsXG4gICAgICAgIGNoYXIgPSB3b3JkW2ldXG5cbiAgICBub2RlLmVkZ2VzW2NoYXJdID0gbmV4dE5vZGVcblxuICAgIHRoaXMudW5jaGVja2VkTm9kZXMucHVzaCh7XG4gICAgICBwYXJlbnQ6IG5vZGUsXG4gICAgICBjaGFyOiBjaGFyLFxuICAgICAgY2hpbGQ6IG5leHROb2RlXG4gICAgfSlcblxuICAgIG5vZGUgPSBuZXh0Tm9kZVxuICB9XG5cbiAgbm9kZS5maW5hbCA9IHRydWVcbiAgdGhpcy5wcmV2aW91c1dvcmQgPSB3b3JkXG59XG5cbmx1bnIuVG9rZW5TZXQuQnVpbGRlci5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm1pbmltaXplKDApXG59XG5cbmx1bnIuVG9rZW5TZXQuQnVpbGRlci5wcm90b3R5cGUubWluaW1pemUgPSBmdW5jdGlvbiAoZG93blRvKSB7XG4gIGZvciAodmFyIGkgPSB0aGlzLnVuY2hlY2tlZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gZG93blRvOyBpLS0pIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMudW5jaGVja2VkTm9kZXNbaV0sXG4gICAgICAgIGNoaWxkS2V5ID0gbm9kZS5jaGlsZC50b1N0cmluZygpXG5cbiAgICBpZiAoY2hpbGRLZXkgaW4gdGhpcy5taW5pbWl6ZWROb2Rlcykge1xuICAgICAgbm9kZS5wYXJlbnQuZWRnZXNbbm9kZS5jaGFyXSA9IHRoaXMubWluaW1pemVkTm9kZXNbY2hpbGRLZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENhY2hlIHRoZSBrZXkgZm9yIHRoaXMgbm9kZSBzaW5jZVxuICAgICAgLy8gd2Uga25vdyBpdCBjYW4ndCBjaGFuZ2UgYW55bW9yZVxuICAgICAgbm9kZS5jaGlsZC5fc3RyID0gY2hpbGRLZXlcblxuICAgICAgdGhpcy5taW5pbWl6ZWROb2Rlc1tjaGlsZEtleV0gPSBub2RlLmNoaWxkXG4gICAgfVxuXG4gICAgdGhpcy51bmNoZWNrZWROb2Rlcy5wb3AoKVxuICB9XG59XG4vKiFcbiAqIGx1bnIuSW5kZXhcbiAqIENvcHlyaWdodCAoQykgMjAxNyBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEFuIGluZGV4IGNvbnRhaW5zIHRoZSBidWlsdCBpbmRleCBvZiBhbGwgZG9jdW1lbnRzIGFuZCBwcm92aWRlcyBhIHF1ZXJ5IGludGVyZmFjZVxuICogdG8gdGhlIGluZGV4LlxuICpcbiAqIFVzdWFsbHkgaW5zdGFuY2VzIG9mIGx1bnIuSW5kZXggd2lsbCBub3QgYmUgY3JlYXRlZCB1c2luZyB0aGlzIGNvbnN0cnVjdG9yLCBpbnN0ZWFkXG4gKiBsdW5yLkJ1aWxkZXIgc2hvdWxkIGJlIHVzZWQgdG8gY29uc3RydWN0IG5ldyBpbmRleGVzLCBvciBsdW5yLkluZGV4LmxvYWQgc2hvdWxkIGJlXG4gKiB1c2VkIHRvIGxvYWQgcHJldmlvdXNseSBidWlsdCBhbmQgc2VyaWFsaXplZCBpbmRleGVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzIC0gVGhlIGF0dHJpYnV0ZXMgb2YgdGhlIGJ1aWx0IHNlYXJjaCBpbmRleC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycy5pbnZlcnRlZEluZGV4IC0gQW4gaW5kZXggb2YgdGVybS9maWVsZCB0byBkb2N1bWVudCByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGx1bnIuVmVjdG9yPn0gYXR0cnMuZG9jdW1lbnRWZWN0b3JzIC0gRG9jdW1lbnQgdmVjdG9ycyBrZXllZCBieSBkb2N1bWVudCByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5TZXR9IGF0dHJzLnRva2VuU2V0IC0gQW4gc2V0IG9mIGFsbCBjb3JwdXMgdG9rZW5zLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gYXR0cnMuZmllbGRzIC0gVGhlIG5hbWVzIG9mIGluZGV4ZWQgZG9jdW1lbnQgZmllbGRzLlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lfSBhdHRycy5waXBlbGluZSAtIFRoZSBwaXBlbGluZSB0byB1c2UgZm9yIHNlYXJjaCB0ZXJtcy5cbiAqL1xubHVuci5JbmRleCA9IGZ1bmN0aW9uIChhdHRycykge1xuICB0aGlzLmludmVydGVkSW5kZXggPSBhdHRycy5pbnZlcnRlZEluZGV4XG4gIHRoaXMuZmllbGRWZWN0b3JzID0gYXR0cnMuZmllbGRWZWN0b3JzXG4gIHRoaXMudG9rZW5TZXQgPSBhdHRycy50b2tlblNldFxuICB0aGlzLmZpZWxkcyA9IGF0dHJzLmZpZWxkc1xuICB0aGlzLnBpcGVsaW5lID0gYXR0cnMucGlwZWxpbmVcbn1cblxuLyoqXG4gKiBBIHJlc3VsdCBjb250YWlucyBkZXRhaWxzIG9mIGEgZG9jdW1lbnQgbWF0Y2hpbmcgYSBzZWFyY2ggcXVlcnkuXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBsdW5yLkluZGV4flJlc3VsdFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHJlZiAtIFRoZSByZWZlcmVuY2Ugb2YgdGhlIGRvY3VtZW50IHRoaXMgcmVzdWx0IHJlcHJlc2VudHMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2NvcmUgLSBBIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgcmVwcmVzZW50aW5nIGhvdyBzaW1pbGFyIHRoaXMgZG9jdW1lbnQgaXMgdG8gdGhlIHF1ZXJ5LlxuICogQHByb3BlcnR5IHtsdW5yLk1hdGNoRGF0YX0gbWF0Y2hEYXRhIC0gQ29udGFpbnMgbWV0YWRhdGEgYWJvdXQgdGhpcyBtYXRjaCBpbmNsdWRpbmcgd2hpY2ggdGVybShzKSBjYXVzZWQgdGhlIG1hdGNoLlxuICovXG5cbi8qKlxuICogQWx0aG91Z2ggbHVuciBwcm92aWRlcyB0aGUgYWJpbGl0eSB0byBjcmVhdGUgcXVlcmllcyB1c2luZyBsdW5yLlF1ZXJ5LCBpdCBhbHNvIHByb3ZpZGVzIGEgc2ltcGxlXG4gKiBxdWVyeSBsYW5ndWFnZSB3aGljaCBpdHNlbGYgaXMgcGFyc2VkIGludG8gYW4gaW5zdGFuY2Ugb2YgbHVuci5RdWVyeS5cbiAqXG4gKiBGb3IgcHJvZ3JhbW1hdGljYWxseSBidWlsZGluZyBxdWVyaWVzIGl0IGlzIGFkdmlzZWQgdG8gZGlyZWN0bHkgdXNlIGx1bnIuUXVlcnksIHRoZSBxdWVyeSBsYW5ndWFnZVxuICogaXMgYmVzdCB1c2VkIGZvciBodW1hbiBlbnRlcmVkIHRleHQgcmF0aGVyIHRoYW4gcHJvZ3JhbSBnZW5lcmF0ZWQgdGV4dC5cbiAqXG4gKiBBdCBpdHMgc2ltcGxlc3QgcXVlcmllcyBjYW4ganVzdCBiZSBhIHNpbmdsZSB0ZXJtLCBlLmcuIGBoZWxsb2AsIG11bHRpcGxlIHRlcm1zIGFyZSBhbHNvIHN1cHBvcnRlZFxuICogYW5kIHdpbGwgYmUgY29tYmluZWQgd2l0aCBPUiwgZS5nIGBoZWxsbyB3b3JsZGAgd2lsbCBtYXRjaCBkb2N1bWVudHMgdGhhdCBjb250YWluIGVpdGhlciAnaGVsbG8nXG4gKiBvciAnd29ybGQnLCB0aG91Z2ggdGhvc2UgdGhhdCBjb250YWluIGJvdGggd2lsbCByYW5rIGhpZ2hlciBpbiB0aGUgcmVzdWx0cy5cbiAqXG4gKiBXaWxkY2FyZHMgY2FuIGJlIGluY2x1ZGVkIGluIHRlcm1zIHRvIG1hdGNoIG9uZSBvciBtb3JlIHVuc3BlY2lmaWVkIGNoYXJhY3RlcnMsIHRoZXNlIHdpbGRjYXJkcyBjYW5cbiAqIGJlIGluc2VydGVkIGFueXdoZXJlIHdpdGhpbiB0aGUgdGVybSwgYW5kIG1vcmUgdGhhbiBvbmUgd2lsZGNhcmQgY2FuIGV4aXN0IGluIGEgc2luZ2xlIHRlcm0uIEFkZGluZ1xuICogd2lsZGNhcmRzIHdpbGwgaW5jcmVhc2UgdGhlIG51bWJlciBvZiBkb2N1bWVudHMgdGhhdCB3aWxsIGJlIGZvdW5kIGJ1dCBjYW4gYWxzbyBoYXZlIGEgbmVnYXRpdmVcbiAqIGltcGFjdCBvbiBxdWVyeSBwZXJmb3JtYW5jZSwgZXNwZWNpYWxseSB3aXRoIHdpbGRjYXJkcyBhdCB0aGUgYmVnaW5uaW5nIG9mIGEgdGVybS5cbiAqXG4gKiBUZXJtcyBjYW4gYmUgcmVzdHJpY3RlZCB0byBzcGVjaWZpYyBmaWVsZHMsIGUuZy4gYHRpdGxlOmhlbGxvYCwgb25seSBkb2N1bWVudHMgd2l0aCB0aGUgdGVybVxuICogaGVsbG8gaW4gdGhlIHRpdGxlIGZpZWxkIHdpbGwgbWF0Y2ggdGhpcyBxdWVyeS4gVXNpbmcgYSBmaWVsZCBub3QgcHJlc2VudCBpbiB0aGUgaW5kZXggd2lsbCBsZWFkXG4gKiB0byBhbiBlcnJvciBiZWluZyB0aHJvd24uXG4gKlxuICogTW9kaWZpZXJzIGNhbiBhbHNvIGJlIGFkZGVkIHRvIHRlcm1zLCBsdW5yIHN1cHBvcnRzIGVkaXQgZGlzdGFuY2UgYW5kIGJvb3N0IG1vZGlmaWVycyBvbiB0ZXJtcy4gQSB0ZXJtXG4gKiBib29zdCB3aWxsIG1ha2UgZG9jdW1lbnRzIG1hdGNoaW5nIHRoYXQgdGVybSBzY29yZSBoaWdoZXIsIGUuZy4gYGZvb141YC4gRWRpdCBkaXN0YW5jZSBpcyBhbHNvIHN1cHBvcnRlZFxuICogdG8gcHJvdmlkZSBmdXp6eSBtYXRjaGluZywgZS5nLiAnaGVsbG9+Micgd2lsbCBtYXRjaCBkb2N1bWVudHMgd2l0aCBoZWxsbyB3aXRoIGFuIGVkaXQgZGlzdGFuY2Ugb2YgMi5cbiAqIEF2b2lkIGxhcmdlIHZhbHVlcyBmb3IgZWRpdCBkaXN0YW5jZSB0byBpbXByb3ZlIHF1ZXJ5IHBlcmZvcm1hbmNlLlxuICpcbiAqIFRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhlIGJhY2tzbGFzaCBjaGFyYWN0ZXIgJ1xcJyBjYW4gYmUgdXNlZCwgdGhpcyBhbGxvd3Mgc2VhcmNoZXMgdG8gaW5jbHVkZVxuICogY2hhcmFjdGVycyB0aGF0IHdvdWxkIG5vcm1hbGx5IGJlIGNvbnNpZGVyZWQgbW9kaWZpZXJzLCBlLmcuIGBmb29cXH4yYCB3aWxsIHNlYXJjaCBmb3IgYSB0ZXJtIFwiZm9vfjJcIiBpbnN0ZWFkXG4gKiBvZiBhdHRlbXB0aW5nIHRvIGFwcGx5IGEgYm9vc3Qgb2YgMiB0byB0aGUgc2VhcmNoIHRlcm0gXCJmb29cIi5cbiAqXG4gKiBAdHlwZWRlZiB7c3RyaW5nfSBsdW5yLkluZGV4flF1ZXJ5U3RyaW5nXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5TaW1wbGUgc2luZ2xlIHRlcm0gcXVlcnk8L2NhcHRpb24+XG4gKiBoZWxsb1xuICogQGV4YW1wbGUgPGNhcHRpb24+TXVsdGlwbGUgdGVybSBxdWVyeTwvY2FwdGlvbj5cbiAqIGhlbGxvIHdvcmxkXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj50ZXJtIHNjb3BlZCB0byBhIGZpZWxkPC9jYXB0aW9uPlxuICogdGl0bGU6aGVsbG9cbiAqIEBleGFtcGxlIDxjYXB0aW9uPnRlcm0gd2l0aCBhIGJvb3N0IG9mIDEwPC9jYXB0aW9uPlxuICogaGVsbG9eMTBcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnRlcm0gd2l0aCBhbiBlZGl0IGRpc3RhbmNlIG9mIDI8L2NhcHRpb24+XG4gKiBoZWxsb34yXG4gKi9cblxuLyoqXG4gKiBQZXJmb3JtcyBhIHNlYXJjaCBhZ2FpbnN0IHRoZSBpbmRleCB1c2luZyBsdW5yIHF1ZXJ5IHN5bnRheC5cbiAqXG4gKiBSZXN1bHRzIHdpbGwgYmUgcmV0dXJuZWQgc29ydGVkIGJ5IHRoZWlyIHNjb3JlLCB0aGUgbW9zdCByZWxldmFudCByZXN1bHRzXG4gKiB3aWxsIGJlIHJldHVybmVkIGZpcnN0LlxuICpcbiAqIEZvciBtb3JlIHByb2dyYW1tYXRpYyBxdWVyeWluZyB1c2UgbHVuci5JbmRleCNxdWVyeS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuSW5kZXh+UXVlcnlTdHJpbmd9IHF1ZXJ5U3RyaW5nIC0gQSBzdHJpbmcgY29udGFpbmluZyBhIGx1bnIgcXVlcnkuXG4gKiBAdGhyb3dzIHtsdW5yLlF1ZXJ5UGFyc2VFcnJvcn0gSWYgdGhlIHBhc3NlZCBxdWVyeSBzdHJpbmcgY2Fubm90IGJlIHBhcnNlZC5cbiAqIEByZXR1cm5zIHtsdW5yLkluZGV4flJlc3VsdFtdfVxuICovXG5sdW5yLkluZGV4LnByb3RvdHlwZS5zZWFyY2ggPSBmdW5jdGlvbiAocXVlcnlTdHJpbmcpIHtcbiAgcmV0dXJuIHRoaXMucXVlcnkoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgdmFyIHBhcnNlciA9IG5ldyBsdW5yLlF1ZXJ5UGFyc2VyKHF1ZXJ5U3RyaW5nLCBxdWVyeSlcbiAgICBwYXJzZXIucGFyc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcXVlcnkgYnVpbGRlciBjYWxsYmFjayBwcm92aWRlcyBhIHF1ZXJ5IG9iamVjdCB0byBiZSB1c2VkIHRvIGV4cHJlc3NcbiAqIHRoZSBxdWVyeSB0byBwZXJmb3JtIG9uIHRoZSBpbmRleC5cbiAqXG4gKiBAY2FsbGJhY2sgbHVuci5JbmRleH5xdWVyeUJ1aWxkZXJcbiAqIEBwYXJhbSB7bHVuci5RdWVyeX0gcXVlcnkgLSBUaGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHVwLlxuICogQHRoaXMgbHVuci5RdWVyeVxuICovXG5cbi8qKlxuICogUGVyZm9ybXMgYSBxdWVyeSBhZ2FpbnN0IHRoZSBpbmRleCB1c2luZyB0aGUgeWllbGRlZCBsdW5yLlF1ZXJ5IG9iamVjdC5cbiAqXG4gKiBJZiBwZXJmb3JtaW5nIHByb2dyYW1tYXRpYyBxdWVyaWVzIGFnYWluc3QgdGhlIGluZGV4LCB0aGlzIG1ldGhvZCBpcyBwcmVmZXJyZWRcbiAqIG92ZXIgbHVuci5JbmRleCNzZWFyY2ggc28gYXMgdG8gYXZvaWQgdGhlIGFkZGl0aW9uYWwgcXVlcnkgcGFyc2luZyBvdmVyaGVhZC5cbiAqXG4gKiBBIHF1ZXJ5IG9iamVjdCBpcyB5aWVsZGVkIHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiB3aGljaCBzaG91bGQgYmUgdXNlZCB0b1xuICogZXhwcmVzcyB0aGUgcXVlcnkgdG8gYmUgcnVuIGFnYWluc3QgdGhlIGluZGV4LlxuICpcbiAqIE5vdGUgdGhhdCBhbHRob3VnaCB0aGlzIGZ1bmN0aW9uIHRha2VzIGEgY2FsbGJhY2sgcGFyYW1ldGVyIGl0IGlzIF9ub3RfIGFuXG4gKiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLCB0aGUgY2FsbGJhY2sgaXMganVzdCB5aWVsZGVkIGEgcXVlcnkgb2JqZWN0IHRvIGJlXG4gKiBjdXN0b21pemVkLlxuICpcbiAqIEBwYXJhbSB7bHVuci5JbmRleH5xdWVyeUJ1aWxkZXJ9IGZuIC0gQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gYnVpbGQgdGhlIHF1ZXJ5LlxuICogQHJldHVybnMge2x1bnIuSW5kZXh+UmVzdWx0W119XG4gKi9cbmx1bnIuSW5kZXgucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKGZuKSB7XG4gIC8vIGZvciBlYWNoIHF1ZXJ5IGNsYXVzZVxuICAvLyAqIHByb2Nlc3MgdGVybXNcbiAgLy8gKiBleHBhbmQgdGVybXMgZnJvbSB0b2tlbiBzZXRcbiAgLy8gKiBmaW5kIG1hdGNoaW5nIGRvY3VtZW50cyBhbmQgbWV0YWRhdGFcbiAgLy8gKiBnZXQgZG9jdW1lbnQgdmVjdG9yc1xuICAvLyAqIHNjb3JlIGRvY3VtZW50c1xuXG4gIHZhciBxdWVyeSA9IG5ldyBsdW5yLlF1ZXJ5KHRoaXMuZmllbGRzKSxcbiAgICAgIG1hdGNoaW5nRmllbGRzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIHF1ZXJ5VmVjdG9ycyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICB0ZXJtRmllbGRDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBmbi5jYWxsKHF1ZXJ5LCBxdWVyeSlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXJ5LmNsYXVzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvKlxuICAgICAqIFVubGVzcyB0aGUgcGlwZWxpbmUgaGFzIGJlZW4gZGlzYWJsZWQgZm9yIHRoaXMgdGVybSwgd2hpY2ggaXNcbiAgICAgKiB0aGUgY2FzZSBmb3IgdGVybXMgd2l0aCB3aWxkY2FyZHMsIHdlIG5lZWQgdG8gcGFzcyB0aGUgY2xhdXNlXG4gICAgICogdGVybSB0aHJvdWdoIHRoZSBzZWFyY2ggcGlwZWxpbmUuIEEgcGlwZWxpbmUgcmV0dXJucyBhbiBhcnJheVxuICAgICAqIG9mIHByb2Nlc3NlZCB0ZXJtcy4gUGlwZWxpbmUgZnVuY3Rpb25zIG1heSBleHBhbmQgdGhlIHBhc3NlZFxuICAgICAqIHRlcm0sIHdoaWNoIG1lYW5zIHdlIG1heSBlbmQgdXAgcGVyZm9ybWluZyBtdWx0aXBsZSBpbmRleCBsb29rdXBzXG4gICAgICogZm9yIGEgc2luZ2xlIHF1ZXJ5IHRlcm0uXG4gICAgICovXG4gICAgdmFyIGNsYXVzZSA9IHF1ZXJ5LmNsYXVzZXNbaV0sXG4gICAgICAgIHRlcm1zID0gbnVsbFxuXG4gICAgaWYgKGNsYXVzZS51c2VQaXBlbGluZSkge1xuICAgICAgdGVybXMgPSB0aGlzLnBpcGVsaW5lLnJ1blN0cmluZyhjbGF1c2UudGVybSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGVybXMgPSBbY2xhdXNlLnRlcm1dXG4gICAgfVxuXG4gICAgZm9yICh2YXIgbSA9IDA7IG0gPCB0ZXJtcy5sZW5ndGg7IG0rKykge1xuICAgICAgdmFyIHRlcm0gPSB0ZXJtc1ttXVxuXG4gICAgICAvKlxuICAgICAgICogRWFjaCB0ZXJtIHJldHVybmVkIGZyb20gdGhlIHBpcGVsaW5lIG5lZWRzIHRvIHVzZSB0aGUgc2FtZSBxdWVyeVxuICAgICAgICogY2xhdXNlIG9iamVjdCwgZS5nLiB0aGUgc2FtZSBib29zdCBhbmQgb3IgZWRpdCBkaXN0YW5jZS4gVGhlXG4gICAgICAgKiBzaW1wbGVzdCB3YXkgdG8gZG8gdGhpcyBpcyB0byByZS11c2UgdGhlIGNsYXVzZSBvYmplY3QgYnV0IG11dGF0ZVxuICAgICAgICogaXRzIHRlcm0gcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGNsYXVzZS50ZXJtID0gdGVybVxuXG4gICAgICAvKlxuICAgICAgICogRnJvbSB0aGUgdGVybSBpbiB0aGUgY2xhdXNlIHdlIGNyZWF0ZSBhIHRva2VuIHNldCB3aGljaCB3aWxsIHRoZW5cbiAgICAgICAqIGJlIHVzZWQgdG8gaW50ZXJzZWN0IHRoZSBpbmRleGVzIHRva2VuIHNldCB0byBnZXQgYSBsaXN0IG9mIHRlcm1zXG4gICAgICAgKiB0byBsb29rdXAgaW4gdGhlIGludmVydGVkIGluZGV4XG4gICAgICAgKi9cbiAgICAgIHZhciB0ZXJtVG9rZW5TZXQgPSBsdW5yLlRva2VuU2V0LmZyb21DbGF1c2UoY2xhdXNlKSxcbiAgICAgICAgICBleHBhbmRlZFRlcm1zID0gdGhpcy50b2tlblNldC5pbnRlcnNlY3QodGVybVRva2VuU2V0KS50b0FycmF5KClcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBleHBhbmRlZFRlcm1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIEZvciBlYWNoIHRlcm0gZ2V0IHRoZSBwb3N0aW5nIGFuZCB0ZXJtSW5kZXgsIHRoaXMgaXMgcmVxdWlyZWQgZm9yXG4gICAgICAgICAqIGJ1aWxkaW5nIHRoZSBxdWVyeSB2ZWN0b3IuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgZXhwYW5kZWRUZXJtID0gZXhwYW5kZWRUZXJtc1tqXSxcbiAgICAgICAgICAgIHBvc3RpbmcgPSB0aGlzLmludmVydGVkSW5kZXhbZXhwYW5kZWRUZXJtXSxcbiAgICAgICAgICAgIHRlcm1JbmRleCA9IHBvc3RpbmcuX2luZGV4XG5cbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBjbGF1c2UuZmllbGRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBGb3IgZWFjaCBmaWVsZCB0aGF0IHRoaXMgcXVlcnkgdGVybSBpcyBzY29wZWQgYnkgKGJ5IGRlZmF1bHRcbiAgICAgICAgICAgKiBhbGwgZmllbGRzIGFyZSBpbiBzY29wZSkgd2UgbmVlZCB0byBnZXQgYWxsIHRoZSBkb2N1bWVudCByZWZzXG4gICAgICAgICAgICogdGhhdCBoYXZlIHRoaXMgdGVybSBpbiB0aGF0IGZpZWxkLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogVGhlIHBvc3RpbmcgaXMgdGhlIGVudHJ5IGluIHRoZSBpbnZlcnRlZEluZGV4IGZvciB0aGUgbWF0Y2hpbmdcbiAgICAgICAgICAgKiB0ZXJtIGZyb20gYWJvdmUuXG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFyIGZpZWxkID0gY2xhdXNlLmZpZWxkc1trXSxcbiAgICAgICAgICAgICAgZmllbGRQb3N0aW5nID0gcG9zdGluZ1tmaWVsZF0sXG4gICAgICAgICAgICAgIG1hdGNoaW5nRG9jdW1lbnRSZWZzID0gT2JqZWN0LmtleXMoZmllbGRQb3N0aW5nKSxcbiAgICAgICAgICAgICAgdGVybUZpZWxkID0gZXhwYW5kZWRUZXJtICsgXCIvXCIgKyBmaWVsZFxuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBUbyBzdXBwb3J0IGZpZWxkIGxldmVsIGJvb3N0cyBhIHF1ZXJ5IHZlY3RvciBpcyBjcmVhdGVkIHBlclxuICAgICAgICAgICAqIGZpZWxkLiBUaGlzIHZlY3RvciBpcyBwb3B1bGF0ZWQgdXNpbmcgdGhlIHRlcm1JbmRleCBmb3VuZCBmb3JcbiAgICAgICAgICAgKiB0aGUgdGVybSBhbmQgYSB1bml0IHZhbHVlIHdpdGggdGhlIGFwcHJvcHJpYXRlIGJvb3N0IGFwcGxpZWQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBJZiB0aGUgcXVlcnkgdmVjdG9yIGZvciB0aGlzIGZpZWxkIGRvZXMgbm90IGV4aXN0IHlldCBpdCBuZWVkc1xuICAgICAgICAgICAqIHRvIGJlIGNyZWF0ZWQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHF1ZXJ5VmVjdG9yc1tmaWVsZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcXVlcnlWZWN0b3JzW2ZpZWxkXSA9IG5ldyBsdW5yLlZlY3RvclxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogVXNpbmcgdXBzZXJ0IGJlY2F1c2UgdGhlcmUgY291bGQgYWxyZWFkeSBiZSBhbiBlbnRyeSBpbiB0aGUgdmVjdG9yXG4gICAgICAgICAgICogZm9yIHRoZSB0ZXJtIHdlIGFyZSB3b3JraW5nIHdpdGguIEluIHRoYXQgY2FzZSB3ZSBqdXN0IGFkZCB0aGUgc2NvcmVzXG4gICAgICAgICAgICogdG9nZXRoZXIuXG4gICAgICAgICAgICovXG4gICAgICAgICAgcXVlcnlWZWN0b3JzW2ZpZWxkXS51cHNlcnQodGVybUluZGV4LCAxICogY2xhdXNlLmJvb3N0LCBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSArIGIgfSlcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHdlJ3ZlIGFscmVhZHkgc2VlbiB0aGlzIHRlcm0sIGZpZWxkIGNvbWJvIHRoZW4gd2UndmUgYWxyZWFkeSBjb2xsZWN0ZWRcbiAgICAgICAgICAgKiB0aGUgbWF0Y2hpbmcgZG9jdW1lbnRzIGFuZCBtZXRhZGF0YSwgbm8gbmVlZCB0byBnbyB0aHJvdWdoIGFsbCB0aGF0IGFnYWluXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHRlcm1GaWVsZENhY2hlW3Rlcm1GaWVsZF0pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBtYXRjaGluZ0RvY3VtZW50UmVmcy5sZW5ndGg7IGwrKykge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIEFsbCBtZXRhZGF0YSBmb3IgdGhpcyB0ZXJtL2ZpZWxkL2RvY3VtZW50IHRyaXBsZVxuICAgICAgICAgICAgICogYXJlIHRoZW4gZXh0cmFjdGVkIGFuZCBjb2xsZWN0ZWQgaW50byBhbiBpbnN0YW5jZVxuICAgICAgICAgICAgICogb2YgbHVuci5NYXRjaERhdGEgcmVhZHkgdG8gYmUgcmV0dXJuZWQgaW4gdGhlIHF1ZXJ5XG4gICAgICAgICAgICAgKiByZXN1bHRzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0RvY3VtZW50UmVmID0gbWF0Y2hpbmdEb2N1bWVudFJlZnNbbF0sXG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdGaWVsZFJlZiA9IG5ldyBsdW5yLkZpZWxkUmVmIChtYXRjaGluZ0RvY3VtZW50UmVmLCBmaWVsZCksXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEgPSBmaWVsZFBvc3RpbmdbbWF0Y2hpbmdEb2N1bWVudFJlZl0sXG4gICAgICAgICAgICAgICAgZmllbGRNYXRjaFxuXG4gICAgICAgICAgICBpZiAoKGZpZWxkTWF0Y2ggPSBtYXRjaGluZ0ZpZWxkc1ttYXRjaGluZ0ZpZWxkUmVmXSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBtYXRjaGluZ0ZpZWxkc1ttYXRjaGluZ0ZpZWxkUmVmXSA9IG5ldyBsdW5yLk1hdGNoRGF0YSAoZXhwYW5kZWRUZXJtLCBmaWVsZCwgbWV0YWRhdGEpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmaWVsZE1hdGNoLmFkZChleHBhbmRlZFRlcm0sIGZpZWxkLCBtZXRhZGF0YSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRlcm1GaWVsZENhY2hlW3Rlcm1GaWVsZF0gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgbWF0Y2hpbmdGaWVsZFJlZnMgPSBPYmplY3Qua2V5cyhtYXRjaGluZ0ZpZWxkcyksXG4gICAgICByZXN1bHRzID0gW10sXG4gICAgICBtYXRjaGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hpbmdGaWVsZFJlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAvKlxuICAgICAqIEN1cnJlbnRseSB3ZSBoYXZlIGRvY3VtZW50IGZpZWxkcyB0aGF0IG1hdGNoIHRoZSBxdWVyeSwgYnV0IHdlXG4gICAgICogbmVlZCB0byByZXR1cm4gZG9jdW1lbnRzLiBUaGUgbWF0Y2hEYXRhIGFuZCBzY29yZXMgYXJlIGNvbWJpbmVkXG4gICAgICogZnJvbSBtdWx0aXBsZSBmaWVsZHMgYmVsb25naW5nIHRvIHRoZSBzYW1lIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogU2NvcmVzIGFyZSBjYWxjdWxhdGVkIGJ5IGZpZWxkLCB1c2luZyB0aGUgcXVlcnkgdmVjdG9ycyBjcmVhdGVkXG4gICAgICogYWJvdmUsIGFuZCBjb21iaW5lZCBpbnRvIGEgZmluYWwgZG9jdW1lbnQgc2NvcmUgdXNpbmcgYWRkaXRpb24uXG4gICAgICovXG4gICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKG1hdGNoaW5nRmllbGRSZWZzW2ldKSxcbiAgICAgICAgZG9jUmVmID0gZmllbGRSZWYuZG9jUmVmLFxuICAgICAgICBmaWVsZFZlY3RvciA9IHRoaXMuZmllbGRWZWN0b3JzW2ZpZWxkUmVmXSxcbiAgICAgICAgc2NvcmUgPSBxdWVyeVZlY3RvcnNbZmllbGRSZWYuZmllbGROYW1lXS5zaW1pbGFyaXR5KGZpZWxkVmVjdG9yKSxcbiAgICAgICAgZG9jTWF0Y2hcblxuICAgIGlmICgoZG9jTWF0Y2ggPSBtYXRjaGVzW2RvY1JlZl0pICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRvY01hdGNoLnNjb3JlICs9IHNjb3JlXG4gICAgICBkb2NNYXRjaC5tYXRjaERhdGEuY29tYmluZShtYXRjaGluZ0ZpZWxkc1tmaWVsZFJlZl0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtYXRjaCA9IHtcbiAgICAgICAgcmVmOiBkb2NSZWYsXG4gICAgICAgIHNjb3JlOiBzY29yZSxcbiAgICAgICAgbWF0Y2hEYXRhOiBtYXRjaGluZ0ZpZWxkc1tmaWVsZFJlZl1cbiAgICAgIH1cbiAgICAgIG1hdGNoZXNbZG9jUmVmXSA9IG1hdGNoXG4gICAgICByZXN1bHRzLnB1c2gobWF0Y2gpXG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogU29ydCB0aGUgcmVzdWx0cyBvYmplY3RzIGJ5IHNjb3JlLCBoaWdoZXN0IGZpcnN0LlxuICAgKi9cbiAgcmV0dXJuIHJlc3VsdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLnNjb3JlIC0gYS5zY29yZVxuICB9KVxufVxuXG4vKipcbiAqIFByZXBhcmVzIHRoZSBpbmRleCBmb3IgSlNPTiBzZXJpYWxpemF0aW9uLlxuICpcbiAqIFRoZSBzY2hlbWEgZm9yIHRoaXMgSlNPTiBibG9iIHdpbGwgYmUgZGVzY3JpYmVkIGluIGFcbiAqIHNlcGFyYXRlIEpTT04gc2NoZW1hIGZpbGUuXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xubHVuci5JbmRleC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaW52ZXJ0ZWRJbmRleCA9IE9iamVjdC5rZXlzKHRoaXMuaW52ZXJ0ZWRJbmRleClcbiAgICAuc29ydCgpXG4gICAgLm1hcChmdW5jdGlvbiAodGVybSkge1xuICAgICAgcmV0dXJuIFt0ZXJtLCB0aGlzLmludmVydGVkSW5kZXhbdGVybV1dXG4gICAgfSwgdGhpcylcblxuICB2YXIgZmllbGRWZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5maWVsZFZlY3RvcnMpXG4gICAgLm1hcChmdW5jdGlvbiAocmVmKSB7XG4gICAgICByZXR1cm4gW3JlZiwgdGhpcy5maWVsZFZlY3RvcnNbcmVmXS50b0pTT04oKV1cbiAgICB9LCB0aGlzKVxuXG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogbHVuci52ZXJzaW9uLFxuICAgIGZpZWxkczogdGhpcy5maWVsZHMsXG4gICAgZmllbGRWZWN0b3JzOiBmaWVsZFZlY3RvcnMsXG4gICAgaW52ZXJ0ZWRJbmRleDogaW52ZXJ0ZWRJbmRleCxcbiAgICBwaXBlbGluZTogdGhpcy5waXBlbGluZS50b0pTT04oKVxuICB9XG59XG5cbi8qKlxuICogTG9hZHMgYSBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgbHVuci5JbmRleFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXJpYWxpemVkSW5kZXggLSBBIHByZXZpb3VzbHkgc2VyaWFsaXplZCBsdW5yLkluZGV4XG4gKiBAcmV0dXJucyB7bHVuci5JbmRleH1cbiAqL1xubHVuci5JbmRleC5sb2FkID0gZnVuY3Rpb24gKHNlcmlhbGl6ZWRJbmRleCkge1xuICB2YXIgYXR0cnMgPSB7fSxcbiAgICAgIGZpZWxkVmVjdG9ycyA9IHt9LFxuICAgICAgc2VyaWFsaXplZFZlY3RvcnMgPSBzZXJpYWxpemVkSW5kZXguZmllbGRWZWN0b3JzLFxuICAgICAgaW52ZXJ0ZWRJbmRleCA9IHt9LFxuICAgICAgc2VyaWFsaXplZEludmVydGVkSW5kZXggPSBzZXJpYWxpemVkSW5kZXguaW52ZXJ0ZWRJbmRleCxcbiAgICAgIHRva2VuU2V0QnVpbGRlciA9IG5ldyBsdW5yLlRva2VuU2V0LkJ1aWxkZXIsXG4gICAgICBwaXBlbGluZSA9IGx1bnIuUGlwZWxpbmUubG9hZChzZXJpYWxpemVkSW5kZXgucGlwZWxpbmUpXG5cbiAgaWYgKHNlcmlhbGl6ZWRJbmRleC52ZXJzaW9uICE9IGx1bnIudmVyc2lvbikge1xuICAgIGx1bnIudXRpbHMud2FybihcIlZlcnNpb24gbWlzbWF0Y2ggd2hlbiBsb2FkaW5nIHNlcmlhbGlzZWQgaW5kZXguIEN1cnJlbnQgdmVyc2lvbiBvZiBsdW5yICdcIiArIGx1bnIudmVyc2lvbiArIFwiJyBkb2VzIG5vdCBtYXRjaCBzZXJpYWxpemVkIGluZGV4ICdcIiArIHNlcmlhbGl6ZWRJbmRleC52ZXJzaW9uICsgXCInXCIpXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlcmlhbGl6ZWRWZWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHR1cGxlID0gc2VyaWFsaXplZFZlY3RvcnNbaV0sXG4gICAgICAgIHJlZiA9IHR1cGxlWzBdLFxuICAgICAgICBlbGVtZW50cyA9IHR1cGxlWzFdXG5cbiAgICBmaWVsZFZlY3RvcnNbcmVmXSA9IG5ldyBsdW5yLlZlY3RvcihlbGVtZW50cylcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWFsaXplZEludmVydGVkSW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdHVwbGUgPSBzZXJpYWxpemVkSW52ZXJ0ZWRJbmRleFtpXSxcbiAgICAgICAgdGVybSA9IHR1cGxlWzBdLFxuICAgICAgICBwb3N0aW5nID0gdHVwbGVbMV1cblxuICAgIHRva2VuU2V0QnVpbGRlci5pbnNlcnQodGVybSlcbiAgICBpbnZlcnRlZEluZGV4W3Rlcm1dID0gcG9zdGluZ1xuICB9XG5cbiAgdG9rZW5TZXRCdWlsZGVyLmZpbmlzaCgpXG5cbiAgYXR0cnMuZmllbGRzID0gc2VyaWFsaXplZEluZGV4LmZpZWxkc1xuXG4gIGF0dHJzLmZpZWxkVmVjdG9ycyA9IGZpZWxkVmVjdG9yc1xuICBhdHRycy5pbnZlcnRlZEluZGV4ID0gaW52ZXJ0ZWRJbmRleFxuICBhdHRycy50b2tlblNldCA9IHRva2VuU2V0QnVpbGRlci5yb290XG4gIGF0dHJzLnBpcGVsaW5lID0gcGlwZWxpbmVcblxuICByZXR1cm4gbmV3IGx1bnIuSW5kZXgoYXR0cnMpXG59XG4vKiFcbiAqIGx1bnIuQnVpbGRlclxuICogQ29weXJpZ2h0IChDKSAyMDE3IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci5CdWlsZGVyIHBlcmZvcm1zIGluZGV4aW5nIG9uIGEgc2V0IG9mIGRvY3VtZW50cyBhbmRcbiAqIHJldHVybnMgaW5zdGFuY2VzIG9mIGx1bnIuSW5kZXggcmVhZHkgZm9yIHF1ZXJ5aW5nLlxuICpcbiAqIEFsbCBjb25maWd1cmF0aW9uIG9mIHRoZSBpbmRleCBpcyBkb25lIHZpYSB0aGUgYnVpbGRlciwgdGhlXG4gKiBmaWVsZHMgdG8gaW5kZXgsIHRoZSBkb2N1bWVudCByZWZlcmVuY2UsIHRoZSB0ZXh0IHByb2Nlc3NpbmdcbiAqIHBpcGVsaW5lIGFuZCBkb2N1bWVudCBzY29yaW5nIHBhcmFtZXRlcnMgYXJlIGFsbCBzZXQgb24gdGhlXG4gKiBidWlsZGVyIGJlZm9yZSBpbmRleGluZy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBfcmVmIC0gSW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudCByZWZlcmVuY2UgZmllbGQuXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBfZmllbGRzIC0gSW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudCBmaWVsZHMgdG8gaW5kZXguXG4gKiBAcHJvcGVydHkge29iamVjdH0gaW52ZXJ0ZWRJbmRleCAtIFRoZSBpbnZlcnRlZCBpbmRleCBtYXBzIHRlcm1zIHRvIGRvY3VtZW50IGZpZWxkcy5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBkb2N1bWVudFRlcm1GcmVxdWVuY2llcyAtIEtlZXBzIHRyYWNrIG9mIGRvY3VtZW50IHRlcm0gZnJlcXVlbmNpZXMuXG4gKiBAcHJvcGVydHkge29iamVjdH0gZG9jdW1lbnRMZW5ndGhzIC0gS2VlcHMgdHJhY2sgb2YgdGhlIGxlbmd0aCBvZiBkb2N1bWVudHMgYWRkZWQgdG8gdGhlIGluZGV4LlxuICogQHByb3BlcnR5IHtsdW5yLnRva2VuaXplcn0gdG9rZW5pemVyIC0gRnVuY3Rpb24gZm9yIHNwbGl0dGluZyBzdHJpbmdzIGludG8gdG9rZW5zIGZvciBpbmRleGluZy5cbiAqIEBwcm9wZXJ0eSB7bHVuci5QaXBlbGluZX0gcGlwZWxpbmUgLSBUaGUgcGlwZWxpbmUgcGVyZm9ybXMgdGV4dCBwcm9jZXNzaW5nIG9uIHRva2VucyBiZWZvcmUgaW5kZXhpbmcuXG4gKiBAcHJvcGVydHkge2x1bnIuUGlwZWxpbmV9IHNlYXJjaFBpcGVsaW5lIC0gQSBwaXBlbGluZSBmb3IgcHJvY2Vzc2luZyBzZWFyY2ggdGVybXMgYmVmb3JlIHF1ZXJ5aW5nIHRoZSBpbmRleC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkb2N1bWVudENvdW50IC0gS2VlcHMgdHJhY2sgb2YgdGhlIHRvdGFsIG51bWJlciBvZiBkb2N1bWVudHMgaW5kZXhlZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfYiAtIEEgcGFyYW1ldGVyIHRvIGNvbnRyb2wgZmllbGQgbGVuZ3RoIG5vcm1hbGl6YXRpb24sIHNldHRpbmcgdGhpcyB0byAwIGRpc2FibGVkIG5vcm1hbGl6YXRpb24sIDEgZnVsbHkgbm9ybWFsaXplcyBmaWVsZCBsZW5ndGhzLCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyAwLjc1LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IF9rMSAtIEEgcGFyYW1ldGVyIHRvIGNvbnRyb2wgaG93IHF1aWNrbHkgYW4gaW5jcmVhc2UgaW4gdGVybSBmcmVxdWVuY3kgcmVzdWx0cyBpbiB0ZXJtIGZyZXF1ZW5jeSBzYXR1cmF0aW9uLCB0aGUgZGVmYXVsdCB2YWx1ZSBpcyAxLjIuXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGVybUluZGV4IC0gQSBjb3VudGVyIGluY3JlbWVudGVkIGZvciBlYWNoIHVuaXF1ZSB0ZXJtLCB1c2VkIHRvIGlkZW50aWZ5IGEgdGVybXMgcG9zaXRpb24gaW4gdGhlIHZlY3RvciBzcGFjZS5cbiAqIEBwcm9wZXJ0eSB7YXJyYXl9IG1ldGFkYXRhV2hpdGVsaXN0IC0gQSBsaXN0IG9mIG1ldGFkYXRhIGtleXMgdGhhdCBoYXZlIGJlZW4gd2hpdGVsaXN0ZWQgZm9yIGVudHJ5IGluIHRoZSBpbmRleC5cbiAqL1xubHVuci5CdWlsZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9yZWYgPSBcImlkXCJcbiAgdGhpcy5fZmllbGRzID0gW11cbiAgdGhpcy5pbnZlcnRlZEluZGV4ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzID0ge31cbiAgdGhpcy5maWVsZExlbmd0aHMgPSB7fVxuICB0aGlzLnRva2VuaXplciA9IGx1bnIudG9rZW5pemVyXG4gIHRoaXMucGlwZWxpbmUgPSBuZXcgbHVuci5QaXBlbGluZVxuICB0aGlzLnNlYXJjaFBpcGVsaW5lID0gbmV3IGx1bnIuUGlwZWxpbmVcbiAgdGhpcy5kb2N1bWVudENvdW50ID0gMFxuICB0aGlzLl9iID0gMC43NVxuICB0aGlzLl9rMSA9IDEuMlxuICB0aGlzLnRlcm1JbmRleCA9IDBcbiAgdGhpcy5tZXRhZGF0YVdoaXRlbGlzdCA9IFtdXG59XG5cbi8qKlxuICogU2V0cyB0aGUgZG9jdW1lbnQgZmllbGQgdXNlZCBhcyB0aGUgZG9jdW1lbnQgcmVmZXJlbmNlLiBFdmVyeSBkb2N1bWVudCBtdXN0IGhhdmUgdGhpcyBmaWVsZC5cbiAqIFRoZSB0eXBlIG9mIHRoaXMgZmllbGQgaW4gdGhlIGRvY3VtZW50IHNob3VsZCBiZSBhIHN0cmluZywgaWYgaXQgaXMgbm90IGEgc3RyaW5nIGl0IHdpbGwgYmVcbiAqIGNvZXJjZWQgaW50byBhIHN0cmluZyBieSBjYWxsaW5nIHRvU3RyaW5nLlxuICpcbiAqIFRoZSBkZWZhdWx0IHJlZiBpcyAnaWQnLlxuICpcbiAqIFRoZSByZWYgc2hvdWxkIF9ub3RfIGJlIGNoYW5nZWQgZHVyaW5nIGluZGV4aW5nLCBpdCBzaG91bGQgYmUgc2V0IGJlZm9yZSBhbnkgZG9jdW1lbnRzIGFyZVxuICogYWRkZWQgdG8gdGhlIGluZGV4LiBDaGFuZ2luZyBpdCBkdXJpbmcgaW5kZXhpbmcgY2FuIGxlYWQgdG8gaW5jb25zaXN0ZW50IHJlc3VsdHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZiAtIFRoZSBuYW1lIG9mIHRoZSByZWZlcmVuY2UgZmllbGQgaW4gdGhlIGRvY3VtZW50LlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdGhpcy5fcmVmID0gcmVmXG59XG5cbi8qKlxuICogQWRkcyBhIGZpZWxkIHRvIHRoZSBsaXN0IG9mIGRvY3VtZW50IGZpZWxkcyB0aGF0IHdpbGwgYmUgaW5kZXhlZC4gRXZlcnkgZG9jdW1lbnQgYmVpbmdcbiAqIGluZGV4ZWQgc2hvdWxkIGhhdmUgdGhpcyBmaWVsZC4gTnVsbCB2YWx1ZXMgZm9yIHRoaXMgZmllbGQgaW4gaW5kZXhlZCBkb2N1bWVudHMgd2lsbFxuICogbm90IGNhdXNlIGVycm9ycyBidXQgd2lsbCBsaW1pdCB0aGUgY2hhbmNlIG9mIHRoYXQgZG9jdW1lbnQgYmVpbmcgcmV0cmlldmVkIGJ5IHNlYXJjaGVzLlxuICpcbiAqIEFsbCBmaWVsZHMgc2hvdWxkIGJlIGFkZGVkIGJlZm9yZSBhZGRpbmcgZG9jdW1lbnRzIHRvIHRoZSBpbmRleC4gQWRkaW5nIGZpZWxkcyBhZnRlclxuICogYSBkb2N1bWVudCBoYXMgYmVlbiBpbmRleGVkIHdpbGwgaGF2ZSBubyBlZmZlY3Qgb24gYWxyZWFkeSBpbmRleGVkIGRvY3VtZW50cy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgLSBUaGUgbmFtZSBvZiBhIGZpZWxkIHRvIGluZGV4IGluIGFsbCBkb2N1bWVudHMuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuZmllbGQgPSBmdW5jdGlvbiAoZmllbGQpIHtcbiAgdGhpcy5fZmllbGRzLnB1c2goZmllbGQpXG59XG5cbi8qKlxuICogQSBwYXJhbWV0ZXIgdG8gdHVuZSB0aGUgYW1vdW50IG9mIGZpZWxkIGxlbmd0aCBub3JtYWxpc2F0aW9uIHRoYXQgaXMgYXBwbGllZCB3aGVuXG4gKiBjYWxjdWxhdGluZyByZWxldmFuY2Ugc2NvcmVzLiBBIHZhbHVlIG9mIDAgd2lsbCBjb21wbGV0ZWx5IGRpc2FibGUgYW55IG5vcm1hbGlzYXRpb25cbiAqIGFuZCBhIHZhbHVlIG9mIDEgd2lsbCBmdWxseSBub3JtYWxpc2UgZmllbGQgbGVuZ3Rocy4gVGhlIGRlZmF1bHQgaXMgMC43NS4gVmFsdWVzIG9mIGJcbiAqIHdpbGwgYmUgY2xhbXBlZCB0byB0aGUgcmFuZ2UgMCAtIDEuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFRoZSB2YWx1ZSB0byBzZXQgZm9yIHRoaXMgdHVuaW5nIHBhcmFtZXRlci5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5iID0gZnVuY3Rpb24gKG51bWJlcikge1xuICBpZiAobnVtYmVyIDwgMCkge1xuICAgIHRoaXMuX2IgPSAwXG4gIH0gZWxzZSBpZiAobnVtYmVyID4gMSkge1xuICAgIHRoaXMuX2IgPSAxXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fYiA9IG51bWJlclxuICB9XG59XG5cbi8qKlxuICogQSBwYXJhbWV0ZXIgdGhhdCBjb250cm9scyB0aGUgc3BlZWQgYXQgd2hpY2ggYSByaXNlIGluIHRlcm0gZnJlcXVlbmN5IHJlc3VsdHMgaW4gdGVybVxuICogZnJlcXVlbmN5IHNhdHVyYXRpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuMi4gU2V0dGluZyB0aGlzIHRvIGEgaGlnaGVyIHZhbHVlIHdpbGwgZ2l2ZVxuICogc2xvd2VyIHNhdHVyYXRpb24gbGV2ZWxzLCBhIGxvd2VyIHZhbHVlIHdpbGwgcmVzdWx0IGluIHF1aWNrZXIgc2F0dXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gVGhlIHZhbHVlIHRvIHNldCBmb3IgdGhpcyB0dW5pbmcgcGFyYW1ldGVyLlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmsxID0gZnVuY3Rpb24gKG51bWJlcikge1xuICB0aGlzLl9rMSA9IG51bWJlclxufVxuXG4vKipcbiAqIEFkZHMgYSBkb2N1bWVudCB0byB0aGUgaW5kZXguXG4gKlxuICogQmVmb3JlIGFkZGluZyBmaWVsZHMgdG8gdGhlIGluZGV4IHRoZSBpbmRleCBzaG91bGQgaGF2ZSBiZWVuIGZ1bGx5IHNldHVwLCB3aXRoIHRoZSBkb2N1bWVudFxuICogcmVmIGFuZCBhbGwgZmllbGRzIHRvIGluZGV4IGFscmVhZHkgaGF2aW5nIGJlZW4gc3BlY2lmaWVkLlxuICpcbiAqIFRoZSBkb2N1bWVudCBtdXN0IGhhdmUgYSBmaWVsZCBuYW1lIGFzIHNwZWNpZmllZCBieSB0aGUgcmVmIChieSBkZWZhdWx0IHRoaXMgaXMgJ2lkJykgYW5kXG4gKiBpdCBzaG91bGQgaGF2ZSBhbGwgZmllbGRzIGRlZmluZWQgZm9yIGluZGV4aW5nLCB0aG91Z2ggbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzIHdpbGwgbm90XG4gKiBjYXVzZSBlcnJvcnMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGRvYyAtIFRoZSBkb2N1bWVudCB0byBhZGQgdG8gdGhlIGluZGV4LlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChkb2MpIHtcbiAgdmFyIGRvY1JlZiA9IGRvY1t0aGlzLl9yZWZdXG5cbiAgdGhpcy5kb2N1bWVudENvdW50ICs9IDFcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2ZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmaWVsZE5hbWUgPSB0aGlzLl9maWVsZHNbaV0sXG4gICAgICAgIGZpZWxkID0gZG9jW2ZpZWxkTmFtZV0sXG4gICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5pemVyKGZpZWxkKSxcbiAgICAgICAgdGVybXMgPSB0aGlzLnBpcGVsaW5lLnJ1bih0b2tlbnMpLFxuICAgICAgICBmaWVsZFJlZiA9IG5ldyBsdW5yLkZpZWxkUmVmIChkb2NSZWYsIGZpZWxkTmFtZSksXG4gICAgICAgIGZpZWxkVGVybXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgICB0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzW2ZpZWxkUmVmXSA9IGZpZWxkVGVybXNcbiAgICB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl0gPSAwXG5cbiAgICAvLyBzdG9yZSB0aGUgbGVuZ3RoIG9mIHRoaXMgZmllbGQgZm9yIHRoaXMgZG9jdW1lbnRcbiAgICB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl0gKz0gdGVybXMubGVuZ3RoXG5cbiAgICAvLyBjYWxjdWxhdGUgdGVybSBmcmVxdWVuY2llcyBmb3IgdGhpcyBmaWVsZFxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGVybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciB0ZXJtID0gdGVybXNbal1cblxuICAgICAgaWYgKGZpZWxkVGVybXNbdGVybV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZpZWxkVGVybXNbdGVybV0gPSAwXG4gICAgICB9XG5cbiAgICAgIGZpZWxkVGVybXNbdGVybV0gKz0gMVxuXG4gICAgICAvLyBhZGQgdG8gaW52ZXJ0ZWQgaW5kZXhcbiAgICAgIC8vIGNyZWF0ZSBhbiBpbml0aWFsIHBvc3RpbmcgaWYgb25lIGRvZXNuJ3QgZXhpc3RcbiAgICAgIGlmICh0aGlzLmludmVydGVkSW5kZXhbdGVybV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBwb3N0aW5nID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgICBwb3N0aW5nW1wiX2luZGV4XCJdID0gdGhpcy50ZXJtSW5kZXhcbiAgICAgICAgdGhpcy50ZXJtSW5kZXggKz0gMVxuXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5fZmllbGRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgcG9zdGluZ1t0aGlzLl9maWVsZHNba11dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dID0gcG9zdGluZ1xuICAgICAgfVxuXG4gICAgICAvLyBhZGQgYW4gZW50cnkgZm9yIHRoaXMgdGVybS9maWVsZE5hbWUvZG9jUmVmIHRvIHRoZSBpbnZlcnRlZEluZGV4XG4gICAgICBpZiAodGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgIH1cblxuICAgICAgLy8gc3RvcmUgYWxsIHdoaXRlbGlzdGVkIG1ldGFkYXRhIGFib3V0IHRoaXMgdG9rZW4gaW4gdGhlXG4gICAgICAvLyBpbnZlcnRlZCBpbmRleFxuICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCB0aGlzLm1ldGFkYXRhV2hpdGVsaXN0Lmxlbmd0aDsgbCsrKSB7XG4gICAgICAgIHZhciBtZXRhZGF0YUtleSA9IHRoaXMubWV0YWRhdGFXaGl0ZWxpc3RbbF0sXG4gICAgICAgICAgICBtZXRhZGF0YSA9IHRlcm0ubWV0YWRhdGFbbWV0YWRhdGFLZXldXG5cbiAgICAgICAgaWYgKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldLnB1c2gobWV0YWRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhdmVyYWdlIGRvY3VtZW50IGxlbmd0aCBmb3IgdGhpcyBpbmRleFxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocyA9IGZ1bmN0aW9uICgpIHtcblxuICB2YXIgZmllbGRSZWZzID0gT2JqZWN0LmtleXModGhpcy5maWVsZExlbmd0aHMpLFxuICAgICAgbnVtYmVyT2ZGaWVsZHMgPSBmaWVsZFJlZnMubGVuZ3RoLFxuICAgICAgYWNjdW11bGF0b3IgPSB7fSxcbiAgICAgIGRvY3VtZW50c1dpdGhGaWVsZCA9IHt9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkZpZWxkczsgaSsrKSB7XG4gICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKGZpZWxkUmVmc1tpXSksXG4gICAgICAgIGZpZWxkID0gZmllbGRSZWYuZmllbGROYW1lXG5cbiAgICBkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdIHx8IChkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdID0gMClcbiAgICBkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdICs9IDFcblxuICAgIGFjY3VtdWxhdG9yW2ZpZWxkXSB8fCAoYWNjdW11bGF0b3JbZmllbGRdID0gMClcbiAgICBhY2N1bXVsYXRvcltmaWVsZF0gKz0gdGhpcy5maWVsZExlbmd0aHNbZmllbGRSZWZdXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2ZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBmaWVsZCA9IHRoaXMuX2ZpZWxkc1tpXVxuICAgIGFjY3VtdWxhdG9yW2ZpZWxkXSA9IGFjY3VtdWxhdG9yW2ZpZWxkXSAvIGRvY3VtZW50c1dpdGhGaWVsZFtmaWVsZF1cbiAgfVxuXG4gIHRoaXMuYXZlcmFnZUZpZWxkTGVuZ3RoID0gYWNjdW11bGF0b3Jcbn1cblxuLyoqXG4gKiBCdWlsZHMgYSB2ZWN0b3Igc3BhY2UgbW9kZWwgb2YgZXZlcnkgZG9jdW1lbnQgdXNpbmcgbHVuci5WZWN0b3JcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmNyZWF0ZUZpZWxkVmVjdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZpZWxkVmVjdG9ycyA9IHt9LFxuICAgICAgZmllbGRSZWZzID0gT2JqZWN0LmtleXModGhpcy5maWVsZFRlcm1GcmVxdWVuY2llcyksXG4gICAgICBmaWVsZFJlZnNMZW5ndGggPSBmaWVsZFJlZnMubGVuZ3RoLFxuICAgICAgdGVybUlkZkNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRSZWZzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmllbGRSZWYgPSBsdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcoZmllbGRSZWZzW2ldKSxcbiAgICAgICAgZmllbGQgPSBmaWVsZFJlZi5maWVsZE5hbWUsXG4gICAgICAgIGZpZWxkTGVuZ3RoID0gdGhpcy5maWVsZExlbmd0aHNbZmllbGRSZWZdLFxuICAgICAgICBmaWVsZFZlY3RvciA9IG5ldyBsdW5yLlZlY3RvcixcbiAgICAgICAgdGVybUZyZXF1ZW5jaWVzID0gdGhpcy5maWVsZFRlcm1GcmVxdWVuY2llc1tmaWVsZFJlZl0sXG4gICAgICAgIHRlcm1zID0gT2JqZWN0LmtleXModGVybUZyZXF1ZW5jaWVzKSxcbiAgICAgICAgdGVybXNMZW5ndGggPSB0ZXJtcy5sZW5ndGhcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGVybXNMZW5ndGg7IGorKykge1xuICAgICAgdmFyIHRlcm0gPSB0ZXJtc1tqXSxcbiAgICAgICAgICB0ZiA9IHRlcm1GcmVxdWVuY2llc1t0ZXJtXSxcbiAgICAgICAgICB0ZXJtSW5kZXggPSB0aGlzLmludmVydGVkSW5kZXhbdGVybV0uX2luZGV4LFxuICAgICAgICAgIGlkZiwgc2NvcmUsIHNjb3JlV2l0aFByZWNpc2lvblxuXG4gICAgICBpZiAodGVybUlkZkNhY2hlW3Rlcm1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWRmID0gbHVuci5pZGYodGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dLCB0aGlzLmRvY3VtZW50Q291bnQpXG4gICAgICAgIHRlcm1JZGZDYWNoZVt0ZXJtXSA9IGlkZlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWRmID0gdGVybUlkZkNhY2hlW3Rlcm1dXG4gICAgICB9XG5cbiAgICAgIHNjb3JlID0gaWRmICogKCh0aGlzLl9rMSArIDEpICogdGYpIC8gKHRoaXMuX2sxICogKDEgLSB0aGlzLl9iICsgdGhpcy5fYiAqIChmaWVsZExlbmd0aCAvIHRoaXMuYXZlcmFnZUZpZWxkTGVuZ3RoW2ZpZWxkXSkpICsgdGYpXG4gICAgICBzY29yZVdpdGhQcmVjaXNpb24gPSBNYXRoLnJvdW5kKHNjb3JlICogMTAwMCkgLyAxMDAwXG4gICAgICAvLyBDb252ZXJ0cyAxLjIzNDU2Nzg5IHRvIDEuMjM0LlxuICAgICAgLy8gUmVkdWNpbmcgdGhlIHByZWNpc2lvbiBzbyB0aGF0IHRoZSB2ZWN0b3JzIHRha2UgdXAgbGVzc1xuICAgICAgLy8gc3BhY2Ugd2hlbiBzZXJpYWxpc2VkLiBEb2luZyBpdCBub3cgc28gdGhhdCB0aGV5IGJlaGF2ZVxuICAgICAgLy8gdGhlIHNhbWUgYmVmb3JlIGFuZCBhZnRlciBzZXJpYWxpc2F0aW9uLiBBbHNvLCB0aGlzIGlzXG4gICAgICAvLyB0aGUgZmFzdGVzdCBhcHByb2FjaCB0byByZWR1Y2luZyBhIG51bWJlcidzIHByZWNpc2lvbiBpblxuICAgICAgLy8gSmF2YVNjcmlwdC5cblxuICAgICAgZmllbGRWZWN0b3IuaW5zZXJ0KHRlcm1JbmRleCwgc2NvcmVXaXRoUHJlY2lzaW9uKVxuICAgIH1cblxuICAgIGZpZWxkVmVjdG9yc1tmaWVsZFJlZl0gPSBmaWVsZFZlY3RvclxuICB9XG5cbiAgdGhpcy5maWVsZFZlY3RvcnMgPSBmaWVsZFZlY3RvcnNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9rZW4gc2V0IG9mIGFsbCB0b2tlbnMgaW4gdGhlIGluZGV4IHVzaW5nIGx1bnIuVG9rZW5TZXRcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmNyZWF0ZVRva2VuU2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnRva2VuU2V0ID0gbHVuci5Ub2tlblNldC5mcm9tQXJyYXkoXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnZlcnRlZEluZGV4KS5zb3J0KClcbiAgKVxufVxuXG4vKipcbiAqIEJ1aWxkcyB0aGUgaW5kZXgsIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGx1bnIuSW5kZXguXG4gKlxuICogVGhpcyBjb21wbGV0ZXMgdGhlIGluZGV4aW5nIHByb2Nlc3MgYW5kIHNob3VsZCBvbmx5IGJlIGNhbGxlZFxuICogb25jZSBhbGwgZG9jdW1lbnRzIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgaW5kZXguXG4gKlxuICogQHJldHVybnMge2x1bnIuSW5kZXh9XG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocygpXG4gIHRoaXMuY3JlYXRlRmllbGRWZWN0b3JzKClcbiAgdGhpcy5jcmVhdGVUb2tlblNldCgpXG5cbiAgcmV0dXJuIG5ldyBsdW5yLkluZGV4KHtcbiAgICBpbnZlcnRlZEluZGV4OiB0aGlzLmludmVydGVkSW5kZXgsXG4gICAgZmllbGRWZWN0b3JzOiB0aGlzLmZpZWxkVmVjdG9ycyxcbiAgICB0b2tlblNldDogdGhpcy50b2tlblNldCxcbiAgICBmaWVsZHM6IHRoaXMuX2ZpZWxkcyxcbiAgICBwaXBlbGluZTogdGhpcy5zZWFyY2hQaXBlbGluZVxuICB9KVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwbHVnaW4gdG8gdGhlIGluZGV4IGJ1aWxkZXIuXG4gKlxuICogQSBwbHVnaW4gaXMgYSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSBpbmRleCBidWlsZGVyIGFzIGl0cyBjb250ZXh0LlxuICogUGx1Z2lucyBjYW4gYmUgdXNlZCB0byBjdXN0b21pc2Ugb3IgZXh0ZW5kIHRoZSBiZWhhdmlvdXIgb2YgdGhlIGluZGV4XG4gKiBpbiBzb21lIHdheS4gQSBwbHVnaW4gaXMganVzdCBhIGZ1bmN0aW9uLCB0aGF0IGVuY2Fwc3VsYXRlZCB0aGUgY3VzdG9tXG4gKiBiZWhhdmlvdXIgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB3aGVuIGJ1aWxkaW5nIHRoZSBpbmRleC5cbiAqXG4gKiBUaGUgcGx1Z2luIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGluZGV4IGJ1aWxkZXIgYXMgaXRzIGFyZ3VtZW50LCBhZGRpdGlvbmFsXG4gKiBhcmd1bWVudHMgY2FuIGFsc28gYmUgcGFzc2VkIHdoZW4gY2FsbGluZyB1c2UuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZFxuICogd2l0aCB0aGUgaW5kZXggYnVpbGRlciBhcyBpdHMgY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwbHVnaW4gVGhlIHBsdWdpbiB0byBhcHBseS5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gIGFyZ3MudW5zaGlmdCh0aGlzKVxuICBmbi5hcHBseSh0aGlzLCBhcmdzKVxufVxuLyoqXG4gKiBDb250YWlucyBhbmQgY29sbGVjdHMgbWV0YWRhdGEgYWJvdXQgYSBtYXRjaGluZyBkb2N1bWVudC5cbiAqIEEgc2luZ2xlIGluc3RhbmNlIG9mIGx1bnIuTWF0Y2hEYXRhIGlzIHJldHVybmVkIGFzIHBhcnQgb2YgZXZlcnlcbiAqIGx1bnIuSW5kZXh+UmVzdWx0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IHRlcm0gLSBUaGUgdGVybSB0aGlzIG1hdGNoIGRhdGEgaXMgYXNzb2NpYXRlZCB3aXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgLSBUaGUgZmllbGQgaW4gd2hpY2ggdGhlIHRlcm0gd2FzIGZvdW5kXG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGEgLSBUaGUgbWV0YWRhdGEgcmVjb3JkZWQgYWJvdXQgdGhpcyB0ZXJtIGluIHRoaXMgZmllbGRcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBtZXRhZGF0YSAtIEEgY2xvbmVkIGNvbGxlY3Rpb24gb2YgbWV0YWRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZG9jdW1lbnQuXG4gKiBAc2VlIHtAbGluayBsdW5yLkluZGV4flJlc3VsdH1cbiAqL1xubHVuci5NYXRjaERhdGEgPSBmdW5jdGlvbiAodGVybSwgZmllbGQsIG1ldGFkYXRhKSB7XG4gIHZhciBjbG9uZWRNZXRhZGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBtZXRhZGF0YUtleXMgPSBPYmplY3Qua2V5cyhtZXRhZGF0YSlcblxuICAvLyBDbG9uaW5nIHRoZSBtZXRhZGF0YSB0byBwcmV2ZW50IHRoZSBvcmlnaW5hbFxuICAvLyBiZWluZyBtdXRhdGVkIGR1cmluZyBtYXRjaCBkYXRhIGNvbWJpbmF0aW9uLlxuICAvLyBNZXRhZGF0YSBpcyBrZXB0IGluIGFuIGFycmF5IHdpdGhpbiB0aGUgaW52ZXJ0ZWRcbiAgLy8gaW5kZXggc28gY2xvbmluZyB0aGUgZGF0YSBjYW4gYmUgZG9uZSB3aXRoXG4gIC8vIEFycmF5I3NsaWNlXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YWRhdGFLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IG1ldGFkYXRhS2V5c1tpXVxuICAgIGNsb25lZE1ldGFkYXRhW2tleV0gPSBtZXRhZGF0YVtrZXldLnNsaWNlKClcbiAgfVxuXG4gIHRoaXMubWV0YWRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHRoaXMubWV0YWRhdGFbdGVybV0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gY2xvbmVkTWV0YWRhdGFcbn1cblxuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiBsdW5yLk1hdGNoRGF0YSB3aWxsIGJlIGNyZWF0ZWQgZm9yIGV2ZXJ5IHRlcm0gdGhhdCBtYXRjaGVzIGFcbiAqIGRvY3VtZW50LiBIb3dldmVyIG9ubHkgb25lIGluc3RhbmNlIGlzIHJlcXVpcmVkIGluIGEgbHVuci5JbmRleH5SZXN1bHQuIFRoaXNcbiAqIG1ldGhvZCBjb21iaW5lcyBtZXRhZGF0YSBmcm9tIGFub3RoZXIgaW5zdGFuY2Ugb2YgbHVuci5NYXRjaERhdGEgd2l0aCB0aGlzXG4gKiBvYmplY3RzIG1ldGFkYXRhLlxuICpcbiAqIEBwYXJhbSB7bHVuci5NYXRjaERhdGF9IG90aGVyTWF0Y2hEYXRhIC0gQW5vdGhlciBpbnN0YW5jZSBvZiBtYXRjaCBkYXRhIHRvIG1lcmdlIHdpdGggdGhpcyBvbmUuXG4gKiBAc2VlIHtAbGluayBsdW5yLkluZGV4flJlc3VsdH1cbiAqL1xubHVuci5NYXRjaERhdGEucHJvdG90eXBlLmNvbWJpbmUgPSBmdW5jdGlvbiAob3RoZXJNYXRjaERhdGEpIHtcbiAgdmFyIHRlcm1zID0gT2JqZWN0LmtleXMob3RoZXJNYXRjaERhdGEubWV0YWRhdGEpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXJtcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0ZXJtID0gdGVybXNbaV0sXG4gICAgICAgIGZpZWxkcyA9IE9iamVjdC5rZXlzKG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhW3Rlcm1dKVxuXG4gICAgaWYgKHRoaXMubWV0YWRhdGFbdGVybV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIH1cblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgZmllbGRzLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgZmllbGQgPSBmaWVsZHNbal0sXG4gICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSlcblxuICAgICAgaWYgKHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBrZXlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2tdXG5cbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9IG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9IHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0uY29uY2F0KG90aGVyTWF0Y2hEYXRhLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldKVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgbWV0YWRhdGEgZm9yIGEgdGVybS9maWVsZCBwYWlyIHRvIHRoaXMgaW5zdGFuY2Ugb2YgbWF0Y2ggZGF0YS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVybSAtIFRoZSB0ZXJtIHRoaXMgbWF0Y2ggZGF0YSBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCAtIFRoZSBmaWVsZCBpbiB3aGljaCB0aGUgdGVybSB3YXMgZm91bmRcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YSAtIFRoZSBtZXRhZGF0YSByZWNvcmRlZCBhYm91dCB0aGlzIHRlcm0gaW4gdGhpcyBmaWVsZFxuICovXG5sdW5yLk1hdGNoRGF0YS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRlcm0sIGZpZWxkLCBtZXRhZGF0YSkge1xuICBpZiAoISh0ZXJtIGluIHRoaXMubWV0YWRhdGEpKSB7XG4gICAgdGhpcy5tZXRhZGF0YVt0ZXJtXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSA9IG1ldGFkYXRhXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIShmaWVsZCBpbiB0aGlzLm1ldGFkYXRhW3Rlcm1dKSkge1xuICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gbWV0YWRhdGFcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBtZXRhZGF0YUtleXMgPSBPYmplY3Qua2V5cyhtZXRhZGF0YSlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGFkYXRhS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBtZXRhZGF0YUtleXNbaV1cblxuICAgIGlmIChrZXkgaW4gdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0pIHtcbiAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPSB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldLmNvbmNhdChtZXRhZGF0YVtrZXldKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gbWV0YWRhdGFba2V5XVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBBIGx1bnIuUXVlcnkgcHJvdmlkZXMgYSBwcm9ncmFtbWF0aWMgd2F5IG9mIGRlZmluaW5nIHF1ZXJpZXMgdG8gYmUgcGVyZm9ybWVkXG4gKiBhZ2FpbnN0IGEge0BsaW5rIGx1bnIuSW5kZXh9LlxuICpcbiAqIFByZWZlciBjb25zdHJ1Y3RpbmcgYSBsdW5yLlF1ZXJ5IHVzaW5nIHRoZSB7QGxpbmsgbHVuci5JbmRleCNxdWVyeX0gbWV0aG9kXG4gKiBzbyB0aGUgcXVlcnkgb2JqZWN0IGlzIHByZS1pbml0aWFsaXplZCB3aXRoIHRoZSByaWdodCBpbmRleCBmaWVsZHMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJvcGVydHkge2x1bnIuUXVlcnl+Q2xhdXNlW119IGNsYXVzZXMgLSBBbiBhcnJheSBvZiBxdWVyeSBjbGF1c2VzLlxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gYWxsRmllbGRzIC0gQW4gYXJyYXkgb2YgYWxsIGF2YWlsYWJsZSBmaWVsZHMgaW4gYSBsdW5yLkluZGV4LlxuICovXG5sdW5yLlF1ZXJ5ID0gZnVuY3Rpb24gKGFsbEZpZWxkcykge1xuICB0aGlzLmNsYXVzZXMgPSBbXVxuICB0aGlzLmFsbEZpZWxkcyA9IGFsbEZpZWxkc1xufVxuXG4vKipcbiAqIENvbnN0YW50cyBmb3IgaW5kaWNhdGluZyB3aGF0IGtpbmQgb2YgYXV0b21hdGljIHdpbGRjYXJkIGluc2VydGlvbiB3aWxsIGJlIHVzZWQgd2hlbiBjb25zdHJ1Y3RpbmcgYSBxdWVyeSBjbGF1c2UuXG4gKlxuICogVGhpcyBhbGxvd3Mgd2lsZGNhcmRzIHRvIGJlIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHRlcm0gd2l0aG91dCBoYXZpbmcgdG8gbWFudWFsbHkgZG8gYW55IHN0cmluZ1xuICogY29uY2F0ZW5hdGlvbi5cbiAqXG4gKiBUaGUgd2lsZGNhcmQgY29uc3RhbnRzIGNhbiBiZSBiaXR3aXNlIGNvbWJpbmVkIHRvIHNlbGVjdCBib3RoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdpbGRjYXJkcy5cbiAqXG4gKiBAY29uc3RhbnRcbiAqIEBkZWZhdWx0XG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lsZGNhcmQuTk9ORSAtIFRoZSB0ZXJtIHdpbGwgaGF2ZSBubyB3aWxkY2FyZHMgaW5zZXJ0ZWQsIHRoaXMgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3VyXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lsZGNhcmQuTEVBRElORyAtIFByZXBlbmQgdGhlIHRlcm0gd2l0aCBhIHdpbGRjYXJkLCB1bmxlc3MgYSBsZWFkaW5nIHdpbGRjYXJkIGFscmVhZHkgZXhpc3RzXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lsZGNhcmQuVFJBSUxJTkcgLSBBcHBlbmQgYSB3aWxkY2FyZCB0byB0aGUgdGVybSwgdW5sZXNzIGEgdHJhaWxpbmcgd2lsZGNhcmQgYWxyZWFkeSBleGlzdHNcbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSNjbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSN0ZXJtXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5xdWVyeSB0ZXJtIHdpdGggdHJhaWxpbmcgd2lsZGNhcmQ8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKCdmb28nLCB7IHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HIH0pXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5xdWVyeSB0ZXJtIHdpdGggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2lsZGNhcmQ8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKCdmb28nLCB7XG4gKiAgIHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLkxFQURJTkcgfCBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HXG4gKiB9KVxuICovXG5sdW5yLlF1ZXJ5LndpbGRjYXJkID0gbmV3IFN0cmluZyAoXCIqXCIpXG5sdW5yLlF1ZXJ5LndpbGRjYXJkLk5PTkUgPSAwXG5sdW5yLlF1ZXJ5LndpbGRjYXJkLkxFQURJTkcgPSAxXG5sdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HID0gMlxuXG4vKipcbiAqIEEgc2luZ2xlIGNsYXVzZSBpbiBhIHtAbGluayBsdW5yLlF1ZXJ5fSBjb250YWlucyBhIHRlcm0gYW5kIGRldGFpbHMgb24gaG93IHRvXG4gKiBtYXRjaCB0aGF0IHRlcm0gYWdhaW5zdCBhIHtAbGluayBsdW5yLkluZGV4fS5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZmllbGRzIC0gVGhlIGZpZWxkcyBpbiBhbiBpbmRleCB0aGlzIGNsYXVzZSBzaG91bGQgYmUgbWF0Y2hlZCBhZ2FpbnN0LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtib29zdD0xXSAtIEFueSBib29zdCB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHdoZW4gbWF0Y2hpbmcgdGhpcyBjbGF1c2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2VkaXREaXN0YW5jZV0gLSBXaGV0aGVyIHRoZSB0ZXJtIHNob3VsZCBoYXZlIGZ1enp5IG1hdGNoaW5nIGFwcGxpZWQsIGFuZCBob3cgZnV6enkgdGhlIG1hdGNoIHNob3VsZCBiZS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3VzZVBpcGVsaW5lXSAtIFdoZXRoZXIgdGhlIHRlcm0gc2hvdWxkIGJlIHBhc3NlZCB0aHJvdWdoIHRoZSBzZWFyY2ggcGlwZWxpbmUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dpbGRjYXJkPTBdIC0gV2hldGhlciB0aGUgdGVybSBzaG91bGQgaGF2ZSB3aWxkY2FyZHMgYXBwZW5kZWQgb3IgcHJlcGVuZGVkLlxuICovXG5cbi8qKlxuICogQWRkcyBhIHtAbGluayBsdW5yLlF1ZXJ5fkNsYXVzZX0gdG8gdGhpcyBxdWVyeS5cbiAqXG4gKiBVbmxlc3MgdGhlIGNsYXVzZSBjb250YWlucyB0aGUgZmllbGRzIHRvIGJlIG1hdGNoZWQgYWxsIGZpZWxkcyB3aWxsIGJlIG1hdGNoZWQuIEluIGFkZGl0aW9uXG4gKiBhIGRlZmF1bHQgYm9vc3Qgb2YgMSBpcyBhcHBsaWVkIHRvIHRoZSBjbGF1c2UuXG4gKlxuICogQHBhcmFtIHtsdW5yLlF1ZXJ5fkNsYXVzZX0gY2xhdXNlIC0gVGhlIGNsYXVzZSB0byBhZGQgdG8gdGhpcyBxdWVyeS5cbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEByZXR1cm5zIHtsdW5yLlF1ZXJ5fVxuICovXG5sdW5yLlF1ZXJ5LnByb3RvdHlwZS5jbGF1c2UgPSBmdW5jdGlvbiAoY2xhdXNlKSB7XG4gIGlmICghKCdmaWVsZHMnIGluIGNsYXVzZSkpIHtcbiAgICBjbGF1c2UuZmllbGRzID0gdGhpcy5hbGxGaWVsZHNcbiAgfVxuXG4gIGlmICghKCdib29zdCcgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS5ib29zdCA9IDFcbiAgfVxuXG4gIGlmICghKCd1c2VQaXBlbGluZScgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS51c2VQaXBlbGluZSA9IHRydWVcbiAgfVxuXG4gIGlmICghKCd3aWxkY2FyZCcgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS53aWxkY2FyZCA9IGx1bnIuUXVlcnkud2lsZGNhcmQuTk9ORVxuICB9XG5cbiAgaWYgKChjbGF1c2Uud2lsZGNhcmQgJiBsdW5yLlF1ZXJ5LndpbGRjYXJkLkxFQURJTkcpICYmIChjbGF1c2UudGVybS5jaGFyQXQoMCkgIT0gbHVuci5RdWVyeS53aWxkY2FyZCkpIHtcbiAgICBjbGF1c2UudGVybSA9IFwiKlwiICsgY2xhdXNlLnRlcm1cbiAgfVxuXG4gIGlmICgoY2xhdXNlLndpbGRjYXJkICYgbHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElORykgJiYgKGNsYXVzZS50ZXJtLnNsaWNlKC0xKSAhPSBsdW5yLlF1ZXJ5LndpbGRjYXJkKSkge1xuICAgIGNsYXVzZS50ZXJtID0gXCJcIiArIGNsYXVzZS50ZXJtICsgXCIqXCJcbiAgfVxuXG4gIHRoaXMuY2xhdXNlcy5wdXNoKGNsYXVzZSlcblxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEFkZHMgYSB0ZXJtIHRvIHRoZSBjdXJyZW50IHF1ZXJ5LCB1bmRlciB0aGUgY292ZXJzIHRoaXMgd2lsbCBjcmVhdGUgYSB7QGxpbmsgbHVuci5RdWVyeX5DbGF1c2V9XG4gKiB0byB0aGUgbGlzdCBvZiBjbGF1c2VzIHRoYXQgbWFrZSB1cCB0aGlzIHF1ZXJ5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtIC0gVGhlIHRlcm0gdG8gYWRkIHRvIHRoZSBxdWVyeS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBBbnkgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIGFkZCB0byB0aGUgcXVlcnkgY2xhdXNlLlxuICogQHJldHVybnMge2x1bnIuUXVlcnl9XG4gKiBAc2VlIGx1bnIuUXVlcnkjY2xhdXNlXG4gKiBAc2VlIGx1bnIuUXVlcnl+Q2xhdXNlXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5hZGRpbmcgYSBzaW5nbGUgdGVybSB0byBhIHF1ZXJ5PC9jYXB0aW9uPlxuICogcXVlcnkudGVybShcImZvb1wiKVxuICogQGV4YW1wbGUgPGNhcHRpb24+YWRkaW5nIGEgc2luZ2xlIHRlcm0gdG8gYSBxdWVyeSBhbmQgc3BlY2lmeWluZyBzZWFyY2ggZmllbGRzLCB0ZXJtIGJvb3N0IGFuZCBhdXRvbWF0aWMgdHJhaWxpbmcgd2lsZGNhcmQ8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKFwiZm9vXCIsIHtcbiAqICAgZmllbGRzOiBbXCJ0aXRsZVwiXSxcbiAqICAgYm9vc3Q6IDEwLFxuICogICB3aWxkY2FyZDogbHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElOR1xuICogfSlcbiAqL1xubHVuci5RdWVyeS5wcm90b3R5cGUudGVybSA9IGZ1bmN0aW9uICh0ZXJtLCBvcHRpb25zKSB7XG4gIHZhciBjbGF1c2UgPSBvcHRpb25zIHx8IHt9XG4gIGNsYXVzZS50ZXJtID0gdGVybVxuXG4gIHRoaXMuY2xhdXNlKGNsYXVzZSlcblxuICByZXR1cm4gdGhpc1xufVxubHVuci5RdWVyeVBhcnNlRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSwgc3RhcnQsIGVuZCkge1xuICB0aGlzLm5hbWUgPSBcIlF1ZXJ5UGFyc2VFcnJvclwiXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgdGhpcy5zdGFydCA9IHN0YXJ0XG4gIHRoaXMuZW5kID0gZW5kXG59XG5cbmx1bnIuUXVlcnlQYXJzZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvclxubHVuci5RdWVyeUxleGVyID0gZnVuY3Rpb24gKHN0cikge1xuICB0aGlzLmxleGVtZXMgPSBbXVxuICB0aGlzLnN0ciA9IHN0clxuICB0aGlzLmxlbmd0aCA9IHN0ci5sZW5ndGhcbiAgdGhpcy5wb3MgPSAwXG4gIHRoaXMuc3RhcnQgPSAwXG4gIHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucyA9IFtdXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxuXG4gIHdoaWxlIChzdGF0ZSkge1xuICAgIHN0YXRlID0gc3RhdGUodGhpcylcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLnNsaWNlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3ViU2xpY2VzID0gW10sXG4gICAgICBzbGljZVN0YXJ0ID0gdGhpcy5zdGFydCxcbiAgICAgIHNsaWNlRW5kID0gdGhpcy5wb3NcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIHNsaWNlRW5kID0gdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zW2ldXG4gICAgc3ViU2xpY2VzLnB1c2godGhpcy5zdHIuc2xpY2Uoc2xpY2VTdGFydCwgc2xpY2VFbmQpKVxuICAgIHNsaWNlU3RhcnQgPSBzbGljZUVuZCArIDFcbiAgfVxuXG4gIHN1YlNsaWNlcy5wdXNoKHRoaXMuc3RyLnNsaWNlKHNsaWNlU3RhcnQsIHRoaXMucG9zKSlcbiAgdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zLmxlbmd0aCA9IDBcblxuICByZXR1cm4gc3ViU2xpY2VzLmpvaW4oJycpXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHRoaXMubGV4ZW1lcy5wdXNoKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHN0cjogdGhpcy5zbGljZVN0cmluZygpLFxuICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxuICAgIGVuZDogdGhpcy5wb3NcbiAgfSlcblxuICB0aGlzLnN0YXJ0ID0gdGhpcy5wb3Ncbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5lc2NhcGVDaGFyYWN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucy5wdXNoKHRoaXMucG9zIC0gMSlcbiAgdGhpcy5wb3MgKz0gMVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnBvcyA+PSB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIuRU9TXG4gIH1cblxuICB2YXIgY2hhciA9IHRoaXMuc3RyLmNoYXJBdCh0aGlzLnBvcylcbiAgdGhpcy5wb3MgKz0gMVxuICByZXR1cm4gY2hhclxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wb3MgLSB0aGlzLnN0YXJ0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuaWdub3JlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zdGFydCA9PSB0aGlzLnBvcykge1xuICAgIHRoaXMucG9zICs9IDFcbiAgfVxuXG4gIHRoaXMuc3RhcnQgPSB0aGlzLnBvc1xufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmJhY2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wb3MgLT0gMVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmFjY2VwdERpZ2l0UnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY2hhciwgY2hhckNvZGVcblxuICBkbyB7XG4gICAgY2hhciA9IHRoaXMubmV4dCgpXG4gICAgY2hhckNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMClcbiAgfSB3aGlsZSAoY2hhckNvZGUgPiA0NyAmJiBjaGFyQ29kZSA8IDU4KVxuXG4gIGlmIChjaGFyICE9IGx1bnIuUXVlcnlMZXhlci5FT1MpIHtcbiAgICB0aGlzLmJhY2t1cCgpXG4gIH1cbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5tb3JlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wb3MgPCB0aGlzLmxlbmd0aFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIuRU9TID0gJ0VPUydcbmx1bnIuUXVlcnlMZXhlci5GSUVMRCA9ICdGSUVMRCdcbmx1bnIuUXVlcnlMZXhlci5URVJNID0gJ1RFUk0nXG5sdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRSA9ICdFRElUX0RJU1RBTkNFJ1xubHVuci5RdWVyeUxleGVyLkJPT1NUID0gJ0JPT1NUJ1xuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4RmllbGQgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgbGV4ZXIuYmFja3VwKClcbiAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQpXG4gIGxleGVyLmlnbm9yZSgpXG4gIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4VGVybSA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBpZiAobGV4ZXIud2lkdGgoKSA+IDEpIHtcbiAgICBsZXhlci5iYWNrdXAoKVxuICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gIH1cblxuICBsZXhlci5pZ25vcmUoKVxuXG4gIGlmIChsZXhlci5tb3JlKCkpIHtcbiAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4RWRpdERpc3RhbmNlID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGxleGVyLmlnbm9yZSgpXG4gIGxleGVyLmFjY2VwdERpZ2l0UnVuKClcbiAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRSlcbiAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5sZXhCb29zdCA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBsZXhlci5pZ25vcmUoKVxuICBsZXhlci5hY2NlcHREaWdpdFJ1bigpXG4gIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLkJPT1NUKVxuICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbn1cblxubHVuci5RdWVyeUxleGVyLmxleEVPUyA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBpZiAobGV4ZXIud2lkdGgoKSA+IDApIHtcbiAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICB9XG59XG5cbi8vIFRoaXMgbWF0Y2hlcyB0aGUgc2VwYXJhdG9yIHVzZWQgd2hlbiB0b2tlbmlzaW5nIGZpZWxkc1xuLy8gd2l0aGluIGEgZG9jdW1lbnQuIFRoZXNlIHNob3VsZCBtYXRjaCBvdGhlcndpc2UgaXQgaXNcbi8vIG5vdCBwb3NzaWJsZSB0byBzZWFyY2ggZm9yIHNvbWUgdG9rZW5zIHdpdGhpbiBhIGRvY3VtZW50LlxuLy9cbi8vIEl0IGlzIHBvc3NpYmxlIGZvciB0aGUgdXNlciB0byBjaGFuZ2UgdGhlIHNlcGFyYXRvciBvbiB0aGVcbi8vIHRva2VuaXplciBzbyBpdCBfbWlnaHRfIGNsYXNoIHdpdGggYW55IG90aGVyIG9mIHRoZSBzcGVjaWFsXG4vLyBjaGFyYWN0ZXJzIGFscmVhZHkgdXNlZCB3aXRoaW4gdGhlIHNlYXJjaCBzdHJpbmcsIGUuZy4gOi5cbi8vXG4vLyBUaGlzIG1lYW5zIHRoYXQgaXQgaXMgcG9zc2libGUgdG8gY2hhbmdlIHRoZSBzZXBhcmF0b3IgaW5cbi8vIHN1Y2ggYSB3YXkgdGhhdCBtYWtlcyBzb21lIHdvcmRzIHVuc2VhcmNoYWJsZSB1c2luZyBhIHNlYXJjaFxuLy8gc3RyaW5nLlxubHVuci5RdWVyeUxleGVyLnRlcm1TZXBhcmF0b3IgPSBsdW5yLnRva2VuaXplci5zZXBhcmF0b3JcblxubHVuci5RdWVyeUxleGVyLmxleFRleHQgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgY2hhciA9IGxleGVyLm5leHQoKVxuXG4gICAgaWYgKGNoYXIgPT0gbHVuci5RdWVyeUxleGVyLkVPUykge1xuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhFT1NcbiAgICB9XG5cbiAgICAvLyBFc2NhcGUgY2hhcmFjdGVyIGlzICdcXCdcbiAgICBpZiAoY2hhci5jaGFyQ29kZUF0KDApID09IDkyKSB7XG4gICAgICBsZXhlci5lc2NhcGVDaGFyYWN0ZXIoKVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PSBcIjpcIikge1xuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhGaWVsZFxuICAgIH1cblxuICAgIGlmIChjaGFyID09IFwiflwiKSB7XG4gICAgICBsZXhlci5iYWNrdXAoKVxuICAgICAgaWYgKGxleGVyLndpZHRoKCkgPiAwKSB7XG4gICAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gICAgICB9XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEVkaXREaXN0YW5jZVxuICAgIH1cblxuICAgIGlmIChjaGFyID09IFwiXlwiKSB7XG4gICAgICBsZXhlci5iYWNrdXAoKVxuICAgICAgaWYgKGxleGVyLndpZHRoKCkgPiAwKSB7XG4gICAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gICAgICB9XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEJvb3N0XG4gICAgfVxuXG4gICAgaWYgKGNoYXIubWF0Y2gobHVuci5RdWVyeUxleGVyLnRlcm1TZXBhcmF0b3IpKSB7XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRlcm1cbiAgICB9XG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlciA9IGZ1bmN0aW9uIChzdHIsIHF1ZXJ5KSB7XG4gIHRoaXMubGV4ZXIgPSBuZXcgbHVuci5RdWVyeUxleGVyIChzdHIpXG4gIHRoaXMucXVlcnkgPSBxdWVyeVxuICB0aGlzLmN1cnJlbnRDbGF1c2UgPSB7fVxuICB0aGlzLmxleGVtZUlkeCA9IDBcbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGV4ZXIucnVuKClcbiAgdGhpcy5sZXhlbWVzID0gdGhpcy5sZXhlci5sZXhlbWVzXG5cbiAgdmFyIHN0YXRlID0gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkT3JUZXJtXG5cbiAgd2hpbGUgKHN0YXRlKSB7XG4gICAgc3RhdGUgPSBzdGF0ZSh0aGlzKVxuICB9XG5cbiAgcmV0dXJuIHRoaXMucXVlcnlcbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUucGVla0xleGVtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGV4ZW1lc1t0aGlzLmxleGVtZUlkeF1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUuY29uc3VtZUxleGVtZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxleGVtZSA9IHRoaXMucGVla0xleGVtZSgpXG4gIHRoaXMubGV4ZW1lSWR4ICs9IDFcbiAgcmV0dXJuIGxleGVtZVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnByb3RvdHlwZS5uZXh0Q2xhdXNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY29tcGxldGVkQ2xhdXNlID0gdGhpcy5jdXJyZW50Q2xhdXNlXG4gIHRoaXMucXVlcnkuY2xhdXNlKGNvbXBsZXRlZENsYXVzZSlcbiAgdGhpcy5jdXJyZW50Q2xhdXNlID0ge31cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkT3JUZXJtID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKGxleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RlZCBlaXRoZXIgYSBmaWVsZCBvciBhIHRlcm0sIGZvdW5kIFwiICsgbGV4ZW1lLnR5cGVcblxuICAgICAgaWYgKGxleGVtZS5zdHIubGVuZ3RoID49IDEpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlICs9IFwiIHdpdGggdmFsdWUgJ1wiICsgbGV4ZW1lLnN0ciArIFwiJ1wiXG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLmNvbnN1bWVMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAocGFyc2VyLnF1ZXJ5LmFsbEZpZWxkcy5pbmRleE9mKGxleGVtZS5zdHIpID09IC0xKSB7XG4gICAgdmFyIHBvc3NpYmxlRmllbGRzID0gcGFyc2VyLnF1ZXJ5LmFsbEZpZWxkcy5tYXAoZnVuY3Rpb24gKGYpIHsgcmV0dXJuIFwiJ1wiICsgZiArIFwiJ1wiIH0pLmpvaW4oJywgJyksXG4gICAgICAgIGVycm9yTWVzc2FnZSA9IFwidW5yZWNvZ25pc2VkIGZpZWxkICdcIiArIGxleGVtZS5zdHIgKyBcIicsIHBvc3NpYmxlIGZpZWxkczogXCIgKyBwb3NzaWJsZUZpZWxkc1xuXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLmZpZWxkcyA9IFtsZXhlbWUuc3RyXVxuXG4gIHZhciBuZXh0TGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChuZXh0TGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImV4cGVjdGluZyB0ZXJtLCBmb3VuZCBub3RoaW5nXCJcbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgc3dpdGNoIChuZXh0TGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImV4cGVjdGluZyB0ZXJtLCBmb3VuZCAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtID0gZnVuY3Rpb24gKHBhcnNlcikge1xuICB2YXIgbGV4ZW1lID0gcGFyc2VyLmNvbnN1bWVMZXhlbWUoKVxuXG4gIGlmIChsZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBwYXJzZXIuY3VycmVudENsYXVzZS50ZXJtID0gbGV4ZW1lLnN0ci50b0xvd2VyQ2FzZSgpXG5cbiAgaWYgKGxleGVtZS5zdHIuaW5kZXhPZihcIipcIikgIT0gLTEpIHtcbiAgICBwYXJzZXIuY3VycmVudENsYXVzZS51c2VQaXBlbGluZSA9IGZhbHNlXG4gIH1cblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5CT09TVDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3RcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBsZXhlbWUgdHlwZSAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2UgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBlZGl0RGlzdGFuY2UgPSBwYXJzZUludChsZXhlbWUuc3RyLCAxMClcblxuICBpZiAoaXNOYU4oZWRpdERpc3RhbmNlKSkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImVkaXQgZGlzdGFuY2UgbXVzdCBiZSBudW1lcmljXCJcbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgcGFyc2VyLmN1cnJlbnRDbGF1c2UuZWRpdERpc3RhbmNlID0gZWRpdERpc3RhbmNlXG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChuZXh0TGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRWRpdERpc3RhbmNlXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuQk9PU1Q6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUJvb3N0XG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcIlVuZXhwZWN0ZWQgbGV4ZW1lIHR5cGUgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3QgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBib29zdCA9IHBhcnNlSW50KGxleGVtZS5zdHIsIDEwKVxuXG4gIGlmIChpc05hTihib29zdCkpIHtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJib29zdCBtdXN0IGJlIG51bWVyaWNcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBwYXJzZXIuY3VycmVudENsYXVzZS5ib29zdCA9IGJvb3N0XG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChuZXh0TGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRWRpdERpc3RhbmNlXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuQk9PU1Q6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUJvb3N0XG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcIlVuZXhwZWN0ZWQgbGV4ZW1lIHR5cGUgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG4gIC8qKlxuICAgKiBleHBvcnQgdGhlIG1vZHVsZSB2aWEgQU1ELCBDb21tb25KUyBvciBhcyBhIGJyb3dzZXIgZ2xvYmFsXG4gICAqIEV4cG9ydCBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3VtZGpzL3VtZC9ibG9iL21hc3Rlci9yZXR1cm5FeHBvcnRzLmpzXG4gICAqL1xuICA7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgZGVmaW5lKGZhY3RvcnkpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8qKlxuICAgICAgICogTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgICAgKiBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICogbGlrZSBOb2RlLlxuICAgICAgICovXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgICAgcm9vdC5sdW5yID0gZmFjdG9yeSgpXG4gICAgfVxuICB9KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBKdXN0IHJldHVybiBhIHZhbHVlIHRvIGRlZmluZSB0aGUgbW9kdWxlIGV4cG9ydC5cbiAgICAgKiBUaGlzIGV4YW1wbGUgcmV0dXJucyBhbiBvYmplY3QsIGJ1dCB0aGUgbW9kdWxlXG4gICAgICogY2FuIHJldHVybiBhIGZ1bmN0aW9uIGFzIHRoZSBleHBvcnRlZCB2YWx1ZS5cbiAgICAgKi9cbiAgICByZXR1cm4gbHVuclxuICB9KSlcbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sdW5yL2x1bnIuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCIuL1NpZGViYXIvUG9zaXRpb25cIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBNb2R1bGVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBQb3NpdGlvblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NpZGViYXIuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uIHtcblxuICAvKipcbiAgICogU2V0IHNpZGViYXJzIHRvIGxvY2tlZCBzdGF0ZSBhbmQgbGltaXQgaGVpZ2h0IHRvIHBhcmVudCBub2RlXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBlbF8gLSBTaWRlYmFyXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IHBhcmVudF8gLSBTaWRlYmFyIGNvbnRhaW5lclxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBoZWFkZXJfIC0gSGVhZGVyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHRfIC0gQ3VycmVudCBzaWRlYmFyIGhlaWdodFxuICAgKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0XyAtIEN1cnJlbnQgcGFnZSB5LW9mZnNldFxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHBhZF8gLSBQYWQgd2hlbiBoZWFkZXIgaXMgZml4ZWRcbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gaGVhZGVyIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCwgaGVhZGVyKSB7XG4gICAgbGV0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXG4gICAgICA6IGVsXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XG4gICAgICAgICEocmVmLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmVsXyA9IHJlZlxuICAgIHRoaXMucGFyZW50XyA9IHJlZi5wYXJlbnROb2RlXG5cbiAgICAvKiBSZXRyaWV2ZSBoZWFkZXIgKi9cbiAgICByZWYgPSAodHlwZW9mIGhlYWRlciA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoZWFkZXIpXG4gICAgICA6IGhlYWRlclxuICAgIGlmICghKHJlZiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSlcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvclxuICAgIHRoaXMuaGVhZGVyXyA9IHJlZlxuXG4gICAgLyogSW5pdGlhbGl6ZSBjdXJyZW50IGhlaWdodCBhbmQgdGVzdCB3aGV0aGVyIGhlYWRlciBpcyBmaXhlZCAqL1xuICAgIHRoaXMuaGVpZ2h0XyA9IDBcbiAgICB0aGlzLnBhZF8gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmhlYWRlcl8pLnBvc2l0aW9uID09PSBcImZpeGVkXCJcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHNpZGViYXIgc3RhdGVcbiAgICovXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHRvcCA9IEFycmF5LnByb3RvdHlwZS5yZWR1Y2UuY2FsbChcbiAgICAgIHRoaXMucGFyZW50Xy5jaGlsZHJlbiwgKG9mZnNldCwgY2hpbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KG9mZnNldCwgY2hpbGQub2Zmc2V0VG9wKVxuICAgICAgfSwgMClcblxuICAgIC8qIFNldCBsb2NrIG9mZnNldCBmb3IgZWxlbWVudCB3aXRoIGxhcmdlc3QgdG9wIG9mZnNldCAqL1xuICAgIHRoaXMub2Zmc2V0XyA9IHRvcCAtICh0aGlzLnBhZF8gPyB0aGlzLmhlYWRlcl8ub2Zmc2V0SGVpZ2h0IDogMClcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGxvY2tlZCBzdGF0ZSBhbmQgaGVpZ2h0XG4gICAqXG4gICAqIFRoZSBpbm5lciBoZWlnaHQgb2YgdGhlIHdpbmRvdyAoPSB0aGUgdmlzaWJsZSBhcmVhKSBpcyB0aGUgbWF4aW11bVxuICAgKiBwb3NzaWJsZSBoZWlnaHQgZm9yIHRoZSBzdHJldGNoaW5nIHNpZGViYXIuIFRoaXMgaGVpZ2h0IG11c3QgYmUgZGVkdWN0ZWRcbiAgICogYnkgdGhlIGhlaWdodCBvZiB0aGUgZml4ZWQgaGVhZGVyICg1NnB4KS4gRGVwZW5kaW5nIG9uIHRoZSBwYWdlIHktb2Zmc2V0LFxuICAgKiB0aGUgdG9wIG9mZnNldCBvZiB0aGUgc2lkZWJhciBtdXN0IGJlIHRha2VuIGludG8gYWNjb3VudCwgYXMgd2VsbCBhcyB0aGVcbiAgICogY2FzZSB3aGVyZSB0aGUgd2luZG93IGlzIHNjcm9sbGVkIGJleW9uZCB0aGUgc2lkZWJhciBjb250YWluZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnQ/fSBldiAtIEV2ZW50XG4gICAqL1xuICB1cGRhdGUoZXYpIHtcbiAgICBjb25zdCBvZmZzZXQgID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgY29uc3QgdmlzaWJsZSA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgLyogVXBkYXRlIG9mZnNldCwgaW4gY2FzZSB3aW5kb3cgaXMgcmVzaXplZCAqL1xuICAgIGlmIChldiAmJiBldi50eXBlID09PSBcInJlc2l6ZVwiKVxuICAgICAgdGhpcy5zZXR1cCgpXG5cbiAgICAvKiBTZXQgYm91bmRzIG9mIHNpZGViYXIgY29udGFpbmVyIC0gbXVzdCBiZSBjYWxjdWxhdGVkIG9uIGV2ZXJ5IHJ1biwgYXNcbiAgICAgICB0aGUgaGVpZ2h0IG9mIHRoZSBjb250ZW50IG1pZ2h0IGNoYW5nZSBkdWUgdG8gbG9hZGluZyBpbWFnZXMgZXRjLiAqL1xuICAgIGNvbnN0IGJvdW5kcyA9IHtcbiAgICAgIHRvcDogdGhpcy5wYWRfID8gdGhpcy5oZWFkZXJfLm9mZnNldEhlaWdodCA6IDAsXG4gICAgICBib3R0b206IHRoaXMucGFyZW50Xy5vZmZzZXRUb3AgKyB0aGlzLnBhcmVudF8ub2Zmc2V0SGVpZ2h0XG4gICAgfVxuXG4gICAgLyogQ2FsY3VsYXRlIG5ldyBvZmZzZXQgYW5kIGhlaWdodCAqL1xuICAgIGNvbnN0IGhlaWdodCA9IHZpc2libGUgLSBib3VuZHMudG9wXG4gICAgICAgICAgICAgICAgIC0gTWF0aC5tYXgoMCwgdGhpcy5vZmZzZXRfIC0gb2Zmc2V0KVxuICAgICAgICAgICAgICAgICAtIE1hdGgubWF4KDAsIG9mZnNldCArIHZpc2libGUgLSBib3VuZHMuYm90dG9tKVxuXG4gICAgLyogSWYgaGVpZ2h0IGNoYW5nZWQsIHVwZGF0ZSBlbGVtZW50ICovXG4gICAgaWYgKGhlaWdodCAhPT0gdGhpcy5oZWlnaHRfKVxuICAgICAgdGhpcy5lbF8uc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5oZWlnaHRfID0gaGVpZ2h0fXB4YFxuXG4gICAgLyogU2lkZWJhciBzaG91bGQgYmUgbG9ja2VkLCBhcyB3ZSdyZSBiZWxvdyBwYXJlbnQgb2Zmc2V0ICovXG4gICAgaWYgKG9mZnNldCA+PSB0aGlzLm9mZnNldF8pIHtcbiAgICAgIGlmICh0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgIT09IFwibG9ja1wiKVxuICAgICAgICB0aGlzLmVsXy5kYXRhc2V0Lm1kU3RhdGUgPSBcImxvY2tcIlxuXG4gICAgLyogU2lkZWJhciBzaG91bGQgYmUgdW5sb2NrZWQsIGlmIGxvY2tlZCAqL1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID09PSBcImxvY2tcIikge1xuICAgICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBsb2NrZWQgc3RhdGUgYW5kIGhlaWdodFxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJcIlxuICAgIHRoaXMuZWxfLnN0eWxlLmhlaWdodCA9IFwiXCJcbiAgICB0aGlzLmhlaWdodF8gPSAwXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9TaWRlYmFyL1Bvc2l0aW9uLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgQWRhcHRlciBmcm9tIFwiLi9Tb3VyY2UvQWRhcHRlclwiXG5pbXBvcnQgUmVwb3NpdG9yeSBmcm9tIFwiLi9Tb3VyY2UvUmVwb3NpdG9yeVwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE1vZHVsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEFkYXB0ZXIsXG4gIFJlcG9zaXRvcnlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBHaXRIdWIgZnJvbSBcIi4vQWRhcHRlci9HaXRIdWJcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBNb2R1bGVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBHaXRIdWJcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9NYXRlcmlhbC9Tb3VyY2UvQWRhcHRlci5qcyIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IEFic3RyYWN0IGZyb20gXCIuL0Fic3RyYWN0XCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2l0SHViIGV4dGVuZHMgQWJzdHJhY3Qge1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSByZXBvc2l0b3J5IGluZm9ybWF0aW9uIGZyb20gR2l0SHViXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZV8gLSBOYW1lIG9mIHRoZSByZXBvc2l0b3J5XG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MQW5jaG9yRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHN1cGVyKGVsKVxuXG4gICAgLyogRXh0cmFjdCB1c2VyIChhbmQgcmVwb3NpdG9yeSBuYW1lKSBmcm9tIFVSTCwgYXMgd2UgaGF2ZSB0byBxdWVyeSBmb3IgYWxsXG4gICAgICAgcmVwb3NpdG9yaWVzLCB0byBvbWl0IDQwNCBlcnJvcnMgZm9yIHByaXZhdGUgcmVwb3NpdG9yaWVzICovXG4gICAgY29uc3QgbWF0Y2hlcyA9IC9eLitnaXRodWJcXC5jb21cXC8oW14vXSspXFwvPyhbXi9dKyk/LiokL1xuICAgICAgLmV4ZWModGhpcy5iYXNlXylcbiAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA9PT0gMykge1xuICAgICAgY29uc3QgWywgdXNlciwgbmFtZV0gPSBtYXRjaGVzXG5cbiAgICAgIC8qIEluaXRpYWxpemUgYmFzZSBVUkwgYW5kIHJlcG9zaXRvcnkgbmFtZSAqL1xuICAgICAgdGhpcy5iYXNlXyA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcn0vcmVwb3NgXG4gICAgICB0aGlzLm5hbWVfID0gbmFtZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaCByZWxldmFudCByZXBvc2l0b3J5IGluZm9ybWF0aW9uIGZyb20gR2l0SHViXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk8c3RyaW5nPj59IFByb21pc2UgcmV0dXJuaW5nIGFuIGFycmF5IG9mIGZhY3RzXG4gICAqL1xuICBmZXRjaF8oKSB7XG4gICAgY29uc3QgcGFnaW5hdGUgPSAocGFnZSA9IDApID0+IHtcbiAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLmJhc2VffT9wZXJfcGFnZT0zMCZwYWdlPSR7cGFnZX1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIGlmICghKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yXG5cbiAgICAgICAgICAvKiBEaXNwbGF5IG51bWJlciBvZiBzdGFycyBhbmQgZm9ya3MsIGlmIHJlcG9zaXRvcnkgaXMgZ2l2ZW4gKi9cbiAgICAgICAgICBpZiAodGhpcy5uYW1lXykge1xuICAgICAgICAgICAgY29uc3QgcmVwbyA9IGRhdGEuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gdGhpcy5uYW1lXylcbiAgICAgICAgICAgIGlmICghcmVwbyAmJiBkYXRhLmxlbmd0aCA9PT0gMzApXG4gICAgICAgICAgICAgIHJldHVybiBwYWdpbmF0ZShwYWdlICsgMSlcblxuICAgICAgICAgICAgLyogSWYgd2UgZm91bmQgYSByZXBvLCBleHRyYWN0IHRoZSBmYWN0cyAqL1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9cbiAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5mb3JtYXRfKHJlcG8uc3RhcmdhemVyc19jb3VudCl9IFN0YXJzYCxcbiAgICAgICAgICAgICAgICBgJHt0aGlzLmZvcm1hdF8ocmVwby5mb3Jrc19jb3VudCl9IEZvcmtzYFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIDogW11cblxuICAgICAgICAgIC8qIERpc3BsYXkgbnVtYmVyIG9mIHJlcG9zaXRvcmllcywgb3RoZXJ3aXNlICovXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIGAke2RhdGEubGVuZ3RofSBSZXBvc2l0b3JpZXNgXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qIFBhZ2luYXRlIHRocm91Z2ggcmVwb3MgKi9cbiAgICByZXR1cm4gcGFnaW5hdGUoKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvU291cmNlL0FkYXB0ZXIvR2l0SHViLmpzIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3Qge1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSByZXBvc2l0b3J5IGluZm9ybWF0aW9uXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcHJvcGVydHkge0hUTUxBbmNob3JFbGVtZW50fSBlbF8gLSBMaW5rIHRvIHJlcG9zaXRvcnlcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGJhc2VfIC0gQVBJIGJhc2UgVVJMXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzYWx0XyAtIFVuaXF1ZSBpZGVudGlmaWVyXG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MQW5jaG9yRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXG4gICAgICA6IGVsXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpKVxuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yXG4gICAgdGhpcy5lbF8gPSByZWZcblxuICAgIC8qIFJldHJpZXZlIGJhc2UgVVJMICovXG4gICAgdGhpcy5iYXNlXyA9IHRoaXMuZWxfLmhyZWZcbiAgICB0aGlzLnNhbHRfID0gdGhpcy5oYXNoXyh0aGlzLmJhc2VfKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGRhdGEgZnJvbSBDb29raWUgb3IgZmV0Y2ggZnJvbSByZXNwZWN0aXZlIEFQSVxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5PHN0cmluZz4+fSBQcm9taXNlIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBmYWN0c1xuICAgKi9cbiAgZmV0Y2goKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgY2FjaGVkID0gQ29va2llcy5nZXRKU09OKGAke3RoaXMuc2FsdF99LmNhY2hlLXNvdXJjZWApXG4gICAgICBpZiAodHlwZW9mIGNhY2hlZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXNvbHZlKGNhY2hlZClcblxuICAgICAgLyogSWYgdGhlIGRhdGEgaXMgbm90IGNhY2hlZCBpbiBhIGNvb2tpZSwgaW52b2tlIGZldGNoIGFuZCBzZXRcbiAgICAgICAgIGEgY29va2llIHRoYXQgYXV0b21hdGljYWxseSBleHBpcmVzIGluIDE1IG1pbnV0ZXMgKi9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmV0Y2hfKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBDb29raWVzLnNldChgJHt0aGlzLnNhbHRffS5jYWNoZS1zb3VyY2VgLCBkYXRhLCB7IGV4cGlyZXM6IDEgLyA5NiB9KVxuICAgICAgICAgIHJlc29sdmUoZGF0YSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IHByaXZhdGUgZnVuY3Rpb24gdGhhdCBmZXRjaGVzIHJlbGV2YW50IHJlcG9zaXRvcnkgaW5mb3JtYXRpb25cbiAgICpcbiAgICogQGFic3RyYWN0XG4gICAqL1xuICBmZXRjaF8oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZmV0Y2hfKCk6IE5vdCBpbXBsZW1lbnRlZFwiKVxuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdCBhIG51bWJlciB3aXRoIHN1ZmZpeFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gTnVtYmVyIHRvIGZvcm1hdFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IEZvcm1hdHRlZCBudW1iZXJcbiAgICovXG4gIGZvcm1hdF8obnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA+IDEwMDAwKVxuICAgICAgcmV0dXJuIGAkeyhudW1iZXIgLyAxMDAwKS50b0ZpeGVkKDApfWtgXG4gICAgZWxzZSBpZiAobnVtYmVyID4gMTAwMClcbiAgICAgIHJldHVybiBgJHsobnVtYmVyIC8gMTAwMCkudG9GaXhlZCgxKX1rYFxuICAgIHJldHVybiBgJHtudW1iZXJ9YFxuICB9XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBoYXNoIGZ1bmN0aW9uXG4gICAqXG4gICAqIFRha2VuIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzYxNjQ4NC8xMDY1NTg0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBJbnB1dCBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfSBIYXNoZWQgc3RyaW5nXG4gICAqL1xuICBoYXNoXyhzdHIpIHtcbiAgICBsZXQgaGFzaCA9IDBcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2hcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgc3RyLmNoYXJDb2RlQXQoaSlcbiAgICAgIGhhc2ggfD0gMCAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgICB9XG4gICAgcmV0dXJuIGhhc2hcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9BZGFwdGVyL0Fic3RyYWN0LmpzIiwiLyohXG4gKiBKYXZhU2NyaXB0IENvb2tpZSB2Mi4yLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gKlxuICogQ29weXJpZ2h0IDIwMDYsIDIwMTUgS2xhdXMgSGFydGwgJiBGYWduZXIgQnJhY2tcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdHZhciByZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSBmYWxzZTtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICghcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyKSB7XG5cdFx0dmFyIE9sZENvb2tpZXMgPSB3aW5kb3cuQ29va2llcztcblx0XHR2YXIgYXBpID0gd2luZG93LkNvb2tpZXMgPSBmYWN0b3J5KCk7XG5cdFx0YXBpLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuQ29va2llcyA9IE9sZENvb2tpZXM7XG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH07XG5cdH1cbn0oZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBleHRlbmQgKCkge1xuXHRcdHZhciBpID0gMDtcblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0Zm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhdHRyaWJ1dGVzID0gYXJndW1lbnRzWyBpIF07XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRyZXN1bHRba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQgKGNvbnZlcnRlcikge1xuXHRcdGZ1bmN0aW9uIGFwaSAoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV3JpdGVcblxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRcdHBhdGg6ICcvJ1xuXHRcdFx0XHR9LCBhcGkuZGVmYXVsdHMsIGF0dHJpYnV0ZXMpO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcblx0XHRcdFx0XHRleHBpcmVzLnNldE1pbGxpc2Vjb25kcyhleHBpcmVzLmdldE1pbGxpc2Vjb25kcygpICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZSs1KTtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBleHBpcmVzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV2UncmUgdXNpbmcgXCJleHBpcmVzXCIgYmVjYXVzZSBcIm1heC1hZ2VcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGF0dHJpYnV0ZXMuZXhwaXJlcyA/IGF0dHJpYnV0ZXMuZXhwaXJlcy50b1VUQ1N0cmluZygpIDogJyc7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXN1bHQgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdFx0dmFsdWUgPSByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHRcdGlmICghY29udmVydGVyLndyaXRlKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSlcblx0XHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbHVlID0gY29udmVydGVyLndyaXRlKHZhbHVlLCBrZXkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0a2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhrZXkpKTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHRcdHZhciBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgPSAnJztcblxuXHRcdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJzsgJyArIGF0dHJpYnV0ZU5hbWU7XG5cdFx0XHRcdFx0aWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gPT09IHRydWUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJz0nICsgYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9IGtleSArICc9JyArIHZhbHVlICsgc3RyaW5naWZpZWRBdHRyaWJ1dGVzKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVhZFxuXG5cdFx0XHRpZiAoIWtleSkge1xuXHRcdFx0XHRyZXN1bHQgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuXHRcdFx0Ly8gaW4gY2FzZSB0aGVyZSBhcmUgbm8gY29va2llcyBhdCBhbGwuIEFsc28gcHJldmVudHMgb2RkIHJlc3VsdCB3aGVuXG5cdFx0XHQvLyBjYWxsaW5nIFwiZ2V0KClcIlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciByZGVjb2RlID0gLyglWzAtOUEtWl17Mn0pKy9nO1xuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHRmb3IgKDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuXHRcdFx0XHR2YXIgY29va2llID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG5cdFx0XHRcdGlmICghdGhpcy5qc29uICYmIGNvb2tpZS5jaGFyQXQoMCkgPT09ICdcIicpIHtcblx0XHRcdFx0XHRjb29raWUgPSBjb29raWUuc2xpY2UoMSwgLTEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IHBhcnRzWzBdLnJlcGxhY2UocmRlY29kZSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0XHRcdFx0XHRjb29raWUgPSBjb252ZXJ0ZXIucmVhZCA/XG5cdFx0XHRcdFx0XHRjb252ZXJ0ZXIucmVhZChjb29raWUsIG5hbWUpIDogY29udmVydGVyKGNvb2tpZSwgbmFtZSkgfHxcblx0XHRcdFx0XHRcdGNvb2tpZS5yZXBsYWNlKHJkZWNvZGUsIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cblx0XHRcdFx0XHRpZiAodGhpcy5qc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IGNvb2tpZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICgha2V5KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbbmFtZV0gPSBjb29raWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBhcGk7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBhcGkuY2FsbChhcGksIGtleSk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBhcGkuYXBwbHkoe1xuXHRcdFx0XHRqc29uOiB0cnVlXG5cdFx0XHR9LCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuXHRcdH07XG5cdFx0YXBpLmRlZmF1bHRzID0ge307XG5cblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0YXBpKGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS53aXRoQ29udmVydGVyID0gaW5pdDtcblxuXHRcdHJldHVybiBhcGk7XG5cdH1cblxuXHRyZXR1cm4gaW5pdChmdW5jdGlvbiAoKSB7fSk7XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qcy1jb29raWUvc3JjL2pzLmNvb2tpZS5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvc2l0b3J5IHtcblxuICAvKipcbiAgICogUmVuZGVyIHJlcG9zaXRvcnkgaW5mb3JtYXRpb25cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIFJlcG9zaXRvcnkgaW5mb3JtYXRpb25cbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfEhUTUxFbGVtZW50KX0gZWwgLSBTZWxlY3RvciBvciBIVE1MIGVsZW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgY29uc3QgcmVmID0gKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICAgIDogZWxcbiAgICBpZiAoIShyZWYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmVsXyA9IHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIHJlcG9zaXRvcnlcbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBmYWN0cyAtIEZhY3RzIHRvIGJlIHJlbmRlcmVkXG4gICAqL1xuICBpbml0aWFsaXplKGZhY3RzKSB7XG4gICAgaWYgKGZhY3RzLmxlbmd0aCAmJiB0aGlzLmVsXy5jaGlsZHJlbi5sZW5ndGgpXG4gICAgICB0aGlzLmVsXy5jaGlsZHJlblt0aGlzLmVsXy5jaGlsZHJlbi5sZW5ndGggLSAxXS5hcHBlbmRDaGlsZChcbiAgICAgICAgPHVsIGNsYXNzPVwibWQtc291cmNlX19mYWN0c1wiPlxuICAgICAgICAgIHtmYWN0cy5tYXAoZmFjdCA9PiA8bGkgY2xhc3M9XCJtZC1zb3VyY2VfX2ZhY3RcIj57ZmFjdH08L2xpPil9XG4gICAgICAgIDwvdWw+XG4gICAgICApXG5cbiAgICAvKiBGaW5pc2ggcmVuZGVyaW5nIHdpdGggYW5pbWF0aW9uICovXG4gICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gXCJkb25lXCJcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1NvdXJjZS9SZXBvc2l0b3J5LmpzeCIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiLi9UYWJzL1RvZ2dsZVwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE1vZHVsZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRvZ2dsZVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL01hdGVyaWFsL1RhYnMuanMiLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZSB7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0YWJzIHZpc2liaWxpdHkgZGVwZW5kaW5nIG9uIHBhZ2UgeS1vZmZzZXRcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsXyAtIENvbnRlbnQgY29udGFpbmVyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXRfIC0gVG9nZ2xlIHBhZ2UteSBvZmZzZXRcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBhY3RpdmVfIC0gVGFicyB2aXNpYmlsaXR5XG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudCl9IGVsIC0gU2VsZWN0b3Igb3IgSFRNTCBlbGVtZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIGNvbnN0IHJlZiA9ICh0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXG4gICAgICA6IGVsXG4gICAgaWYgKCEocmVmIGluc3RhbmNlb2YgTm9kZSkpXG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3JcbiAgICB0aGlzLmVsXyA9IHJlZlxuXG4gICAgLyogSW5pdGlhbGl6ZSBvZmZzZXQgYW5kIHN0YXRlICovXG4gICAgdGhpcy5hY3RpdmVfID0gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdmlzaWJpbGl0eVxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHdpbmRvdy5wYWdlWU9mZnNldCA+PVxuICAgICAgdGhpcy5lbF8uY2hpbGRyZW5bMF0ub2Zmc2V0VG9wICsgKDUgLSA0OCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBxdWljayBoYWNrIHRvIGVuYWJsZSBzYW1lIGhhbmRsaW5nIGZvciBoZXJvXG4gICAgaWYgKGFjdGl2ZSAhPT0gdGhpcy5hY3RpdmVfKVxuICAgICAgdGhpcy5lbF8uZGF0YXNldC5tZFN0YXRlID0gKHRoaXMuYWN0aXZlXyA9IGFjdGl2ZSkgPyBcImhpZGRlblwiIDogXCJcIlxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHZpc2liaWxpdHlcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZWxfLmRhdGFzZXQubWRTdGF0ZSA9IFwiXCJcbiAgICB0aGlzLmFjdGl2ZV8gPSBmYWxzZVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvTWF0ZXJpYWwvVGFicy9Ub2dnbGUuanMiXSwic291cmNlUm9vdCI6IiJ9