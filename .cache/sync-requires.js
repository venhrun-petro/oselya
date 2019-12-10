const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-item-js": hot(preferDefault(require("/home/pvenhryn/git/mag_cart-master_old/src/templates/item.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/pvenhryn/git/mag_cart-master_old/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/pvenhryn/git/mag_cart-master_old/src/pages/404.js"))),
  "component---src-pages-product-js": hot(preferDefault(require("/home/pvenhryn/git/mag_cart-master_old/src/pages/product.js")))
}
