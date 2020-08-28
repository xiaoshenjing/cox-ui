!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 0));
})([
  function (e, t, r) {
    (function (t) {
      const n = r(1);
      e.exports = {
        entry: "./src/test.js",
        output: { filename: "bundle.js", path: n.resolve(t, "lib") },
        module: {
          rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] },
            { test: /\.js$/, use: ["babel-loader"], exclude: /node_modules/ },
            { test: /\.vue$/, use: ["vue-loader"] },
          ],
        },
      };
    }.call(this, "/"));
  },
  function (e, t, r) {
    (function (e) {
      function r(e, t) {
        for (var r = 0, n = e.length - 1; n >= 0; n--) {
          var o = e[n];
          "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
        }
        if (t) for (; r--; r) e.unshift("..");
        return e;
      }
      function n(e, t) {
        if (e.filter) return e.filter(t);
        for (var r = [], n = 0; n < e.length; n++) t(e[n], n, e) && r.push(e[n]);
        return r;
      }
      (t.resolve = function () {
        for (var t = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
          var u = i >= 0 ? arguments[i] : e.cwd();
          if ("string" != typeof u) throw new TypeError("Arguments to path.resolve must be strings");
          u && ((t = u + "/" + t), (o = "/" === u.charAt(0)));
        }
        return (
          (o ? "/" : "") +
            (t = r(
              n(t.split("/"), function (e) {
                return !!e;
              }),
              !o
            ).join("/")) || "."
        );
      }),
        (t.normalize = function (e) {
          var i = t.isAbsolute(e),
            u = "/" === o(e, -1);
          return (
            (e = r(
              n(e.split("/"), function (e) {
                return !!e;
              }),
              !i
            ).join("/")) ||
              i ||
              (e = "."),
            e && u && (e += "/"),
            (i ? "/" : "") + e
          );
        }),
        (t.isAbsolute = function (e) {
          return "/" === e.charAt(0);
        }),
        (t.join = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return t.normalize(
            n(e, function (e, t) {
              if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
              return e;
            }).join("/")
          );
        }),
        (t.relative = function (e, r) {
          function n(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++);
            for (var r = e.length - 1; r >= 0 && "" === e[r]; r--);
            return t > r ? [] : e.slice(t, r - t + 1);
          }
          (e = t.resolve(e).substr(1)), (r = t.resolve(r).substr(1));
          for (var o = n(e.split("/")), i = n(r.split("/")), u = Math.min(o.length, i.length), s = u, l = 0; l < u; l++)
            if (o[l] !== i[l]) {
              s = l;
              break;
            }
          var c = [];
          for (l = s; l < o.length; l++) c.push("..");
          return (c = c.concat(i.slice(s))).join("/");
        }),
        (t.sep = "/"),
        (t.delimiter = ":"),
        (t.dirname = function (e) {
          if (("string" != typeof e && (e += ""), 0 === e.length)) return ".";
          for (var t = e.charCodeAt(0), r = 47 === t, n = -1, o = !0, i = e.length - 1; i >= 1; --i)
            if (47 === (t = e.charCodeAt(i))) {
              if (!o) {
                n = i;
                break;
              }
            } else o = !1;
          return -1 === n ? (r ? "/" : ".") : r && 1 === n ? "/" : e.slice(0, n);
        }),
        (t.basename = function (e, t) {
          var r = (function (e) {
            "string" != typeof e && (e += "");
            var t,
              r = 0,
              n = -1,
              o = !0;
            for (t = e.length - 1; t >= 0; --t)
              if (47 === e.charCodeAt(t)) {
                if (!o) {
                  r = t + 1;
                  break;
                }
              } else -1 === n && ((o = !1), (n = t + 1));
            return -1 === n ? "" : e.slice(r, n);
          })(e);
          return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r;
        }),
        (t.extname = function (e) {
          "string" != typeof e && (e += "");
          for (var t = -1, r = 0, n = -1, o = !0, i = 0, u = e.length - 1; u >= 0; --u) {
            var s = e.charCodeAt(u);
            if (47 !== s) -1 === n && ((o = !1), (n = u + 1)), 46 === s ? (-1 === t ? (t = u) : 1 !== i && (i = 1)) : -1 !== t && (i = -1);
            else if (!o) {
              r = u + 1;
              break;
            }
          }
          return -1 === t || -1 === n || 0 === i || (1 === i && t === n - 1 && t === r + 1) ? "" : e.slice(t, n);
        });
      var o =
        "b" === "ab".substr(-1)
          ? function (e, t, r) {
              return e.substr(t, r);
            }
          : function (e, t, r) {
              return t < 0 && (t = e.length + t), e.substr(t, r);
            };
    }.call(this, r(2)));
  },
  function (e, t) {
    var r,
      n,
      o = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function u() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === i || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        r = i;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : u;
      } catch (e) {
        n = u;
      }
    })();
    var l,
      c = [],
      f = !1,
      a = -1;
    function h() {
      f && l && ((f = !1), l.length ? (c = l.concat(c)) : (a = -1), c.length && p());
    }
    function p() {
      if (!f) {
        var e = s(h);
        f = !0;
        for (var t = c.length; t; ) {
          for (l = c, c = []; ++a < t; ) l && l[a].run();
          (a = -1), (t = c.length);
        }
        (l = null),
          (f = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === u || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function d(e, t) {
      (this.fun = e), (this.array = t);
    }
    function g() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      c.push(new d(e, t)), 1 !== c.length || f || s(p);
    }),
      (d.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = g),
      (o.addListener = g),
      (o.once = g),
      (o.off = g),
      (o.removeListener = g),
      (o.removeAllListeners = g),
      (o.emit = g),
      (o.prependListener = g),
      (o.prependOnceListener = g),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
]);
