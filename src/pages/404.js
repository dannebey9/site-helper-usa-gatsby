import * as React from "react"

import Seo from "../components/seo"

const NotFoundPage = () => {
  if (typeof window !== "undefined") {
    window.location = "/taplink"
  }

  return null
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
