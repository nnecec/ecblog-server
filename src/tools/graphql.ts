export const getRootValue = async (req) => {
  const token = req.ctx.session.token
  let root = {}
  if (token) {
    root = {
      user: 'nnecec',
      isAuthenticated: req.ctx.isAuthenticated()
    }
  }

  return root

}
