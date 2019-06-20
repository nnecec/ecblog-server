export default () => async (ctx, next) => {
  ctx.flash = function (type, msg) {
    ctx.session.flash = { type: type, message: msg }
  }
  await next()
}
