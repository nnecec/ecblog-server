export default () => (ctx, next) => {
  ctx.flash = function (type, msg) {
    ctx.session.flash = { type: type, message: msg }
  }
  return next()
}
