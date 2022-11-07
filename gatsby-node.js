exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const { createRedirect } = actions
  createRedirect({ fromPath: `/root`, toPath: `/taplink` })
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
}
