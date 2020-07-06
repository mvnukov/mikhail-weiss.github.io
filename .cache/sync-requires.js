const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/hh/mikhail-weiss.github.io/src/pages/404.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/hh/mikhail-weiss.github.io/src/pages/index.tsx"))),
  "component---src-pages-init-tsx": hot(preferDefault(require("/home/hh/mikhail-weiss.github.io/src/pages/init.tsx"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/hh/mikhail-weiss.github.io/src/pages/using-typescript.tsx")))
}
