exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const { createRedirect } = actions
  createRedirect({ fromPath: `/using-dsg`, toPath: `/taplink` })
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/pages/taplink.js"),
  //   context: {},
  //   defer: true,
  // })
}
